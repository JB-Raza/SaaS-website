import { useState, useEffect } from 'react'
import Button from './Button.jsx'
import { useTextAnimate } from '../../hooks/textAnimation.js'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../utils.js'

// alert
import Alert from './Alert.jsx'
import { toast } from 'react-toastify'


// redux
import { addItemToCart, removeItemFromCart, updateItemQuanity } from '../../redux/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToWishlist, removeItemFromWishlist } from '../../redux/userSlice.js'

export const PricingCard_1 = ({
    data,
    className,
}) => {


    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10 ${className}`}>
                <h5 className="card-text-animate heading-5 font-semibold">{data.title}</h5>
                <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                <hr className="border-t-[1px] my-7 border-gray-200" />
                <p className="card-text-animate heading-2 font-bold">${data.annualPrice}<span className="text-xl">/Yearly</span> </p>

                <Button
                    content={"start free trial"}
                    bgColor={"bg-blue-600"}
                    hoverBg={"bg-[var(--darkIndigo)]"}
                    icon={"fa fa-arrow-up rotate-[45deg]"}
                    className={"capitalize card-text-animate !rounded-lg w-full mt-10 text-white !py-4"} />
                <p className="text-center card-text-animate font-medium my-3">Renews at $9.88/month</p>
                <div className="benefits flex flex-col gap-5 mt-10">
                    {(data.benefits || []).map((benefit, index) => (
                        <p key={`${index}`} className="card-text-animate font-semibold flex gap-3 items-center">
                            <span className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                                <i className="fa-solid fa-check text-sm text-gradient-teal"></i>
                            </span>
                            <span>
                                {benefit}
                            </span>
                        </p>
                    ))}

                </div>
            </div>
        </div>
    )
}

export const PricingCard_2 = ({ data, className }) => {

    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto bg-white hover:!bg-[url(/half-moon-shape.png)] !bg-[url(/half-moon-shape.png)] bg-no-repeat bg-[center_40px] hover:bg-[#072032] hover:text-white transition-background duration-300 rounded-3xl px-10 py-13 ${className}`}>
                <p className="card-text-animate heading-4 mb-4 font-bold">${data.annualPrice}<span className="text-xl">/month</span> </p>
                <p className="font-medium">Smart Pricing for Good Services</p>

                <Button
                    content={"start free trial"}
                    bgColor={"bg-blue-700"}
                    hoverBg={"bg-white text-red-600"}
                    icon={"fa fa-arrow-up rotate-[45deg]"}
                    className={"capitalize card-text-animate !rounded-[22px] w-full mt-10 text-white hover:text-indigo-900 !py-4"} />

                <h4 className="heading-5 mt-10 font-bold">Regular Plan</h4>
                <ul className="benefits flex flex-col gap-5 mt-10 list-disc marker:text-blue-600 marker:text-lg list-inside">
                    {(data.benefits || []).map((benefit, index) => (
                        <li key={`${index}`} className="card-text-animate font-semibold ">
                            {benefit}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export const PricingCard_3 = ({ data, index }) => {

    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto hover:bg-white hover:shadow-2xl transition-background duration-200 bg-neutral-100 px-8 py-14 rounded-md border border-neutral-300`}>
                <div className="flex justify-between">
                    <span className={`${index == 0 ? "bg-blue-600" : index == 1 ? "bg-orange-600" : "bg-emerald-600"} text-white py-2 px-4 rounded-md`}>Regular</span>
                    <p className="card-text-animate heading-4 font-bold">${data.annualPrice}<span className="text-xl">/m</span> </p>
                </div>
                <hr className="border-t-[1px] my-7 border-gray-200" />

                <p className="card-text-animate text-neutral-600 font-medium my-3">Data curation involve the careful election organization, and maintenance</p>
                <div className="benefits flex flex-col gap-5 mt-10">
                    {(data.benefits || []).map((benefit, index) => (
                        <p key={`${index}`} className="card-text-animate font-semibold flex gap-3 items-center">
                            <i className="fa-solid fa-check text-gradient-teal"></i>
                            <span>
                                {benefit}
                            </span>
                        </p>
                    ))}
                    <Button content={"Choose Plan"} bgColor={"bg-[var(--darkIndigo)]"} hoverBg={"bg-blue-600"}
                        icon={"fa fa-arrow-up rotate-[45deg]"}
                        className={"capitalize card-text-animate w-full mt-10 text-white !rounded-3xl !py-4"} />
                    <p className="text-neutral-600 font-medium text-center">No credit card required</p>
                </div>
            </div>
        </div>
    )
}

export const IntegrationCard = ({ data }) => {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border border-neutral-200 px-3">
            {/* card */}
            <div className="card flex h-full flex-col gap-7 items-center py-12 px-6 rounded-lg transition-shadow duration-200 hover:shadow-lg">
                <img src={data.img} alt="icon 1"
                    className='mx-auto'
                />
                <h6 className="heading-6 font-semibold max-w-[172px] text-center">{data.heading}</h6>
                <p className="text-center text-sm text-neutral-500 max-w-[500px] px-5 mx-auto mt-4 leading-loose">{data.description}</p>

                <Link to={"/"} className='group hover:underline font-bold text-blue-600'>See Integration <i className='fa fa-arrow-right ms-1 group-hover:ps-1 transition-all duration-200'></i></Link>

            </div>
        </div>
    )
}


export const ShopItemCard = ({ activeAlignment = "list", product }) => {

    const token = localStorage.getItem("userAccessToken")
    const wishlist = useSelector(state => state.user.user.wishlist)

    const dispatch = useDispatch()

    const [allReviews, setAllReviews] = useState([])
    const [avgRating, setAvgRating] = useState(0)

    // get all reviews
    const getAllReviews = async (productId) => {
        const { data } = await axiosInstance.get(`/${productId}/reviews/`)
        if (data.success) {
            setAllReviews(data.allReviews)
        }
    }
    useEffect(() => {
        getAllReviews(product._id)
    }, [product._id])
    // calculating average of reviews
    useEffect(() => {
        if (allReviews && allReviews.length > 0) {
            let sum = 0
            allReviews.forEach((review) => {
                sum += review.rating
            })
            setAvgRating(sum / allReviews.length)
        }


    }, [allReviews])


    // add item to cart
    const handleAddToCartBtn = () => {
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

    // add/remove item to wishlist
    const addRemoveItemToWishlist = async (productId) => {
        try {
            const { data } = await axiosInstance.post(`/wishlist/${productId}/addRemoveWishlistItem`, {}, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            if (data.success && data.itemExists == false) {
                toast(
                    <Alert
                        type='success'
                        icon="fa-solid fa-check text-green-600"
                        heading={"Success"}
                        message={data.message}
                    />,
                    { autoClose: 2000 }
                )
                dispatch(addItemToWishlist(productId))
            }
            else {
                dispatch(removeItemFromWishlist(productId))
                toast(
                    <Alert
                        type="success"
                        icon="fa-solid fa-check text-green-600"
                        heading={"Success"}
                        message={data.message}
                    />,
                    { autoClose: 2000 }
                )
            }
        } catch (error) {
            toast(
                <Alert
                    type="false"
                    icon="fa-solid fa-xmark text-green-600"
                    heading={"Error"}
                    message={error.message}
                />
            )
        }
    }


    return (
        <div className={`group card pb-3 hover:shadow-lg rounded-2xl flex gap-4 ${activeAlignment == "list" ? "flex-col" : "flex-row"}`}>
            {/* image section */}
            <div className={`relative flex flex-col justify-between border border-neutral-200 rounded-2xl p-6 overflow-clip ${activeAlignment == "list" ? "h-[290px]" : "h-[230px] min-w-[170px] !w-[170px]"}`}>
                <Link to={`/shop/${product._id}`} className='m-auto'><img
                    className='group-hover:scale-115 duration-200 m-auto'
                    src={product.variants[0].images[0]} alt={`img_${product._id}`} /></Link>
                {product.isFeatured && <span className='absolute top-[10px] left-[10px] bg-red-700 text-white font-medium px-3 rounded-full'>featured</span>}
                <Button
                    content={"Add to Cart"}
                    bgColor='bg-blue-700'
                    hoverBg='bg-[var(--darkIndigo)]'
                    onClickFn={handleAddToCartBtn}
                    className={"text-nowrap w-[calc(100%-40px)] text-[14px] lg:text[16px] scale-0 group-hover:scale-100 !absolute bottom-2 duration-500 !h-10 !py-4 !rounded-full"}
                />
                {/* options */}
                <div className="flex flex-col gap-2 absolute top-3 right-3 group-hover:translate-x-[0%] duration-500 translate-x-[200%]">
                    {/* icon 1 view */}
                    <Link to={`/shop/${product._id}`} className="icon bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 hover:text-white rounded-md">
                        <i className="fa-regular fa-eye"></i>
                    </Link>
                    {/* icon 2 wishlist */}
                    <button
                        onClick={() => addRemoveItemToWishlist(product._id)}
                        className={`bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 ${wishlist.includes(product._id) ? "text-blue-600 hover:text-white" : "hover:text-white"} rounded-md`}>
                        <i className={`${wishlist.includes(product._id) ? "fa-solid" : "fa-regular"} fa-star`}></i>
                    </button>
                    {/* icon 3 */}
                    <span className="icon bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 hover:text-white rounded-md">
                        <i className="fa-solid fa-arrows-up-down"></i>
                    </span>
                </div>
            </div>
            {/* data */}
            <div className={`flex px-1 flex-col gap-3 justify-center ${activeAlignment == "list" ? " items-center" : "justify-start"}`}>
                <div className="rating flex gap-1">

                    {[1, 2, 3, 4, 5].map((item, i) =>
                        <i key={i} className={`fa fa-star text-sm ${item <= avgRating ? "text-blue-600" : "text-neutral-300"}`}></i>
                    )}
                    {/* } */}
                </div>
                <Link to={`/shop/${product._id}`} ><h4 className={`heading-6 px-[5px] cursor-pointer font-semibold text-wrap truncate hover:text-blue-600 duration-200 line-clamp-2 ${activeAlignment == "list" ? "text-center" : ""}`}>{product.title}</h4></Link>
                <p className="price font-medium">${product.price}.00</p>

            </div>
        </div>
    )
}


export const CartProductCard = ({ product }) => {

    if (product === null || product === undefined) return
    const dispatch = useDispatch()
    const [subTotal, setSubTotal] = useState(product.price)

    // handle subtotal
    useEffect(() => {
        const productSubTotal = [product.price - (product.price * product.discount / 100)] * product.quantity
        setSubTotal(productSubTotal)
    }, [product.quantity])




    // remove item from cart
    const handleRemoveCartItem = () => {
        dispatch(removeItemFromCart({ _id: product._id, variant: product.variant }))
        toast(
            <Alert
                type='success'
                icon="fa-solid fa-check text-green-600"
                heading={"Success"}
                message={"item removed from cart"}
            />,
            { autoClose: 2000 }
        )
    }

    return (

        <tr className='py-10 border-b border-neutral-200'>
            <td className='text-start px-5 text-[16px]  max-w-[250px] flex gap-4 py-[28px] font-semibold'>
                <div className="relative w-[50px] justify-center">

                    {/* button to remove cart item */}
                    <button
                        onClick={handleRemoveCartItem}
                        className="absolute z-10 hover:scale-125 cursor-pointer duration-200 h-4 w-4 rounded-full flex items-center justify-center top-0 right-0 bg-red-600 text-white">
                        <i className="fa fa-xmark text-[10px]"></i>
                    </button>
                    <img
                        className='hover:scale-110 h-auto aspect-3/2 min-w-[45px] max-w-[45px] duration-200'
                        src={product.variant.image} alt={"img"} />
                </div>
            </td>

            <td className='text-start px-5 py-5 text-[16px] font-semibold truncate max-w-[250px]'>${product.title}</td>
            <td className='text-start px-5 py-5 text-[16px] font-semibold'>${product.price}</td>
            <td className={`text-start px-5 py-5 text-[16px] font-semibold`}>
                <p className={`rounded-full shadow-lg w-[20px] h-[20px]`}
                style={{ backgroundColor: product.variant.color}}
                ></p>
            </td>
            <td className='text-start px-5 py-5 text-[16px] font-normal'>{product.variant.size || "Nill"}</td>

            {/* quantity */}
            <td className='text-start px-5 py-5 text-[16px] font-semibold'>
                <div className="flex items-center">
                    <div className="flex !items-stretch justify-between border border-neutral-200">
                        <button
                            onClick={() => {
                                if (product.quantity <= 1) return
                                dispatch(updateItemQuanity({ _id: product._id, variant: product.variant, actionType: "minus" }))
                            }}
                            className="cursor-pointer px-3 py-2 text-neutral-800 text-[16px]">

                            <div className="fa-solid fa-minus"></div>
                        </button>

                        <p className='font-semibold py-2 text-center text-[16px] w-[50px] bg-neutral-200'>{product.quantity}</p>
                        <button
                            onClick={() => {
                                if (product.quantity == product.variant.availableQuantity) return
                                dispatch(updateItemQuanity({ _id: product._id, variant: product.variant, actionType: "add" }))
                            }}
                            className="cursor-pointer px-3 py-2 text-neutral-800 text-[16px]">
                            <div className="fa-solid fa-plus"></div>
                        </button>

                    </div>
                </div>
            </td>
            <td className='text-start px-5 py-5 text-[16px] font-semibold'>{product.discount > 0 ? product.discount : "0"}%</td>

            <td className='px-5 text-start py-5 text-[16px] font-semibold'>
                {subTotal && <p className='w-[100px]'>${subTotal}</p>}
            </td>
        </tr>
    )
}



