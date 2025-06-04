import { useState, useEffect } from 'react'
import { Alert, Button } from '../../universalComponents/index.js'
import { axiosInstance } from '../../../utils.js'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, removeItemFromWishlist } from '../../../redux/userSlice.js'
import { addItemToCart } from '../../../redux/cartSlice.js'
import { Link } from 'react-router'

export default function Wishlist() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)

  const [wishlist, setWishlist] = useState()
  const token = localStorage.getItem("userAccessToken")

  const fetchWishlistData = async () => {
    try {
      dispatch(setLoading(true))
      const { data } = await axiosInstance.get(`/wishlist/`, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      if (data.success) {
        setWishlist(data.wishlist)
        dispatch(setLoading(false))
        return
      }
      toast(
        <Alert
          type='Error'
          icon="fa-solid fa-xmark text-red-600"
          heading={"Error"}
          message={data.message}
        />,
        { autoClose: 2000 }
      )
      dispatch(setLoading(false))

    } catch (error) {
      toast(
        <Alert
          type='Error'
          icon="fa-solid fa-xmark text-red-600"
          heading={"Error"}
          message={error.message}
        />,
        { autoClose: 2000 }
      )
      dispatch(setLoading(false))
    }

  }
  useEffect(() => {
    fetchWishlistData()
  }, [user.wishlist])

  // add item to cart
  const handleAddToCartBtn = (product) => {
    const item = {
      _id: product._id,
      title: product.title,
      quantity: 1,
      price: product.price,
      discount: product.discount,
      variant: { image: product.variants[0].images[0], color: product.variants[0].color, availableQuantity: product.variants[0].quantity, size: product.variants[0].sizes[0] || "" }
    }
    dispatch(addItemToCart(item))
    // alert
    toast(
      <Alert
        type='success'
        icon="fa-solid fa-check text-green-600"
        heading={"Success"}
        message={"Item added to cart"}
      />,
      { autoClose: 2000 }
    )
  }

  // handle remove from wishlist

  const handleRemoveWishlistItem = async (productId) => {

    const { data } = await axiosInstance.post(`wishlist/${productId}/addRemoveWishlistItem`, {}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    console.log(data)

    if (data.success && data.itemExists) {

      dispatch(removeItemFromWishlist(productId))
      toast(
        <Alert
          type="success"
          message={"Item removed"}
        />,
        { autoClose: 2000 }
      )
      return
    }
    toast(
      <Alert
        type="error"
        message={data.message}
      />,
      { autoClose: 2000 }
    )
  }



  return (
    <div className="col-span-12 breakpoint-900:col-span-8 lg:pe-5 mt-10 breakpoint-900:mt-0 overflow-auto">
      {user.isLoading ? "loading..." :
        <table className='w-full border border-neutral-200 !rounded-full'>
          {/* heading rows */}
          <thead>

            <tr className='py-10 border-b border-neutral-200'>
              <th className='text-start px-5 py-5'></th>
              <th className='text-start py-5'>Product</th>
              <th className='text-center py-5'>Unit Price</th>

              <th className='text-center px-10 py-5'>Stock Status</th>
              <th className='text-center px-10 py-5'></th>
            </tr>
          </thead>

          {(wishlist || []).length == 0 ?
            <tbody>
              <tr className='py-4'>
                <td colSpan={6} className='py-7 text-center border-b border-neutral-200 text-neutral-700'> No items added to Wishlist</td>
              </tr>
            </tbody>
            :
            <tbody>

              {/* data rows */}
              {((wishlist || []).map((product) => (
                <tr key={product.id} className=" border-b border-neutral-200">
                  <td className=" px-2 py-6">
                    <div className='relative w-[50px] justify-center'>

                      {/* button to remove cart item */}
                      <button
                        onClick={() => handleRemoveWishlistItem(product._id)}
                        className="absolute z-10 hover:scale-125 cursor-pointer duration-200 h-4 w-4 rounded-full flex items-center justify-center top-0 right-0 bg-red-600 text-white">
                        <i className="fa fa-xmark text-[10px]"></i>
                      </button>
                      <img
                        className='hover:scale-110 h-auto aspect-3/2 min-w-[45px] max-w-[45px] duration-200'
                        src={product.variants[0].images[0]} alt={"img"} />
                    </div>
                  </td>
                  <td>
                    <Link
                      className='line-clamp-1 font-medium hover:text-blue-700 duration-300 cursor-pointer text-neutral-800'
                      to={`/shop/${product._id}`}
                    >{product.title}</Link>
                  </td>
                  <td className="font-medium text-center text-neutral-800"> ${product.price}</td>
                  <td className={`text-center capitalize ${product.variants[0].quantity > 0 ? "text-green-600" : "text-red-600"}`}> {product.variants[0].quantity > 0 ? "In-stock" : "out of stock"}</td>
                  <td className="font-medium text-center text-neutral-800">
                    <Button
                      content={"Add to Cart"}
                      onClickFn={() => handleAddToCartBtn(product)}
                      bgColor='bg-[var(--darkIndigo)]'
                      hoverBg='bg-blue-600'
                      className={"w-[100px] font-normal text-sm !h-[10px] !py-5"}
                    />
                  </td>
                </tr>
              )))}
            </tbody>
          }

        </table>
      }
    </div>
  )
}