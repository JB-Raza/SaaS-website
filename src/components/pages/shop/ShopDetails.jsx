import { useEffect, useRef, useState } from 'react'
import HtmlReactParse from 'html-react-parser'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// swiper css
import "swiper/css"
// react star-rating
import StarRatings from 'react-star-ratings'

import { useParams } from 'react-router-dom'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, ShopItemCard, Alert, LoadingCards } from '../../universalComponents/index.js'
import { toast } from 'react-toastify'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../../redux/cartSlice.js'
import { addItemToWishlist, removeItemFromWishlist } from '../../../redux/userSlice.js'


// utils and hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'
import { axiosInstance } from '../../../utils.js'


export default function ShopDetails() {

    const dispatch = useDispatch()
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [featuredProducts, setFeaturedProducts] = useState([])

    // token access
    const token = localStorage.getItem("userAccessToken")

    useTextAnimate(".animate-text")
    const swiperRef = useRef(null)

    const wishlist = useSelector(state => state.user.user?.wishlist)

    const [activeBtn, setActiveBtn] = useState("product details")
    const [loading, setLoading] = useState(true)
    const [activeSize, setActiveSize] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [allReviews, setAllReviews] = useState([])
    const [avgRating, setAvgRating] = useState(0)

    const [currFilter, setCurrFilter] = useState({})

    // get product
    const getProduct = async (id) => {
        const { data } = await axiosInstance.get(`/products/${id}`)
        setProduct(data.product)
        setActiveSize(data.product.variants[0].sizes[0])
        setCurrFilter({
            color: data.product.variants[0].color,
            sizes: data.product.variants[0].sizes,
            images: data.product.variants[0].images,
            quantity: data.product.variants[0].quantity,
            size: activeSize,

        })
    }
    // onchange of currFilter
    useEffect(() => {
        setQuantity(1)
        setActiveSlideIndex(0)
        setActiveSize("")
    }, [currFilter])

    // get all reviews
    const getAllReviews = async (productId) => {
        const { data } = await axiosInstance.get(`/${productId}/reviews/`)
        if (data.success) {
            setAllReviews(data.allReviews)
        }
    }
    useEffect(() => {
        getAllReviews(productId)
    }, [productId])

    const getFeaturedProducts = async () => {
        const { data } = await axiosInstance.get("/products?query=featured")
        setFeaturedProducts(data.allProducts)
    }

    // initialize data
    useEffect(() => {
        getProduct(productId)
        getFeaturedProducts()
        setLoading(false)
    }, [productId])


    // add to cart
    const handleAddToCartBtn = () => {
        dispatch(addItemToCart({
            _id: product._id,
            title: product.title,
            quantity,
            discount: product.discount || 0,
            price: product.price,
            variant: { image: currFilter.images[0], color: currFilter.color, availableQuantity: currFilter.quantity, size: activeSize !==""? activeSize:currFilter?.sizes[0] }
        }))
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

    // calculating average reviews
    useEffect(() => {
        let sum = 0
        allReviews.forEach(review => sum += review.rating)
        let avg = allReviews.length > 0 ? sum / allReviews.length : 0
        setAvgRating(avg)
    }, [allReviews])

    // add / remove item from wishlist
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
        <>
            {/* hero */}
            <section className="bg-[var(--iceBlue)] px-3">
                <div className="custom-container overflow-cip mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="/simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Shop Details</h1>
                </div>
            </section>

            {/* product info and images */}
            <section className="py-30 px-3">
                <div className="custom-container mx-auto grid grid-cols-12 gap-5">
                    {/* swiper col */}
                    <div className="col-span-12 breakpoint-1000:col-span-6">
                        {/* image swiper */}
                        <div className="border overflow-hidden flex breakpoint-1000:me-[50px] h-[500px] max-h-[540px]  border-neutral-200 rounded-3xl">
                            <Swiper
                                onSwiper={(swiper) => swiperRef.current = swiper}
                                modules={[Pagination]}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    bulletClass: "swiper-bullet",
                                    bulletActiveClass: "active-swiper-bullet"
                                }}
                                onSlideChange={(swiper) => {
                                    setActiveSlideIndex(swiper.activeIndex)
                                }}
                            >
                                {currFilter.images && currFilter.images?.map((imageUrl) => (
                                    <SwiperSlide className='!flex max-h-[500px] !items-center my-auto !justify-center'>
                                        <img
                                            className='aspect-auto h-full max-h-[450px] my-auto max-w-[450px]'
                                            src={imageUrl} alt="img" />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>

                        {/* preview image slider */}
                        <div className="flex flex-wrap breakpoint-1000:me-[50px] gap-2 mt-5">
                            {currFilter.images?.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveSlideIndex(index)
                                        swiperRef?.current.slideTo(index)
                                    }}
                                    className={`swiper-bullet p-2 border rounded-xl flex items-center justify-center ${activeSlideIndex == index ? "border-blue-700" : "border-neutral-300"}`}>
                                    <img
                                        className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain"
                                        src={img} alt={index} />

                                </button>
                            ))}
                        </div>
                    </div>

                    {/* data col */}
                    <div className="col-span-12 breakpoint-1000:col-span-6">
                        {/* stats */}
                        <div className="wrapper flex gap-5 items-center">
                            {/* discount */}
                            {product.discount == 0 ? "" : <span className="discount bg-red-600 text-white font-semibold rounded-md py-[3px] px-[8px]">-{product.discount}%</span>}

                            <p className="rating flex items-center gap-1">

                                {[1, 2, 3, 4, 5].map((item, i) => (
                                    <i key={i} className={`fa fa-star text-sm ${item <= avgRating ? "text-red-700" : "text-neutral-300"}`}></i>
                                ))}
                                <span className='text-neutral-600 ms-2 font-medium'>( {allReviews.length} reviews )</span>
                            </p>
                        </div>
                        {/* title */}
                        <h3 className="heading-3 font-semibold">{product.title || "Smart Wireless Headphone"}</h3>
                        {/* description */}
                        <p className='text-wrap max-w-[500px] line-clamp-3 font-medium text-neutral-600 leading-loose mt-3'>{product.description}</p>

                        {/* price & discount */}
                        <div className="mt-5 flex gap-10 items-center flex-wrap">
                            <p className="heading-4 font-semibold">${product.price}.00</p>
                            {product.discount == 0 ? "" : <p className="heading-6 font-semibold text-red-700">${(product.price * product.discount) / 100} <span>Off</span></p>}
                        </div>
                        {/* available quantity */}
                        <div className="mt-5 flex gap-10 items-center flex-wrap">
                            <p className="text-neutral-700 capitalize">{currFilter?.quantity} items available</p>
                        </div>

                        {/* color */}
                        <div className="mt-5 flex gap-6 items-center">
                            <span className="font-semibold">Color : </span>
                            <div className="flex gap-3 flex-wrap items-center">

                                {product.variants && product.variants.map((variant, index) => (
                                    <div key={variant.color + index}>
                                        <button
                                            onClick={() => {
                                                setCurrFilter({ color: variant.color, sizes: variant.sizes, images: variant.images, quantity: variant.quantity })
                                            }}

                                            className={`flex items-center justify-center rounded-full h-5 w-5 ${currFilter.color == variant.color ? "scale-125" : "border border-neutral-300"}`}>
                                            <span
                                                className={`rounded-full transition-transform duration-200 w-3 h-3 ${currFilter.color == variant.color ? "scale-125" : "scale-100"}`}
                                                style={{ backgroundColor: variant.color }}
                                            ></span>
                                        </button>
                                        {/* ))} */}
                                    </div>
                                ))}


                            </div>
                        </div>

                        {/* size */}
                        {currFilter.sizes?.length == 0 ? "" :
                            <div className="mt-5 flex gap-6 items-center">
                                <span className="font-semibold">Size : </span>
                                <div className="flex gap-3 flex-wrap items-center">
                                    {currFilter.sizes && currFilter.sizes?.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`flex uppercase font-semibold px-3 py-1 items-center justify-center rounded-md border border-neutral-200 ${activeSize == size ? "bg-blue-700 text-white" : ""}`}>
                                            {size}
                                        </button>
                                    ))}

                                </div>
                            </div>
                        }

                        {/* select quantity */}
                        <div className="mt-8 flex gap-6 items-center">
                            <span className="font-semibold">Quantity : </span>
                            <div className="flex items-center px-6 py-4 border border-neutral-400 rounded-md">
                                {/* decrease quantity */}
                                <button
                                    onClick={() => {
                                        if (quantity <= 1) return
                                        setQuantity(prev => --prev)
                                    }}
                                    className="decrement text-neutral-800 text-[18px]">
                                    <div className="fa-solid fa-minus"></div>
                                </button>
                                <span className='font-semibold w-14 flex items-center justify-center text-[16px]'>{quantity}</span>
                                <button
                                    onClick={() => {
                                        if (quantity >= currFilter.quantity) return
                                        setQuantity(prev => ++prev)
                                    }}
                                    className="increment text-neutral-800 text-[18px]">
                                    <div className="fa-solid fa-plus"></div>
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart/wishlist */}
                        <div className="wrapper flex gap-6 items-center max-w-[500px] mt-7">


                            <Button
                                content={"Add To Cart"}
                                bgColor='bg-blue-700'
                                disabled={token ? false : true}
                                onClickFn={handleAddToCartBtn}
                                hoverBg='bg-[var(--darkIndigo)]'
                                icon={"fa-solid group-hover:text-blue-700 transition-[background] !duration:400 fa-basket-shopping"}
                                className={"group w-full !rounded-full"}
                            />
                            {/* wishlist */}
                            <button
                                onClick={() => {
                                    addRemoveItemToWishlist(productId)
                                }}
                                type='button'
                                disabled={token ? false : true}
                                className={`cursor-pointer disabled:opacity-90 disabled:hover:bg-white disabled:hover:text-neutral-800 disabled:cursor-default hover:bg-blue-600 hover:text-white duration-200 bg-white text-neutral-800 shadow-[1px_1px_20px_1px_#cfcfcf] min-w-14 h-14 flex items-center justify-center rounded-full ${wishlist?.includes(product._id) ? "!bg-blue-600 text-white" : ""}`}>
                                <i className="fa-regular fa-star text-xl"></i>
                            </button>
                        </div>

                        {/* delivery charges */}
                        <p className="text-medium my-10">Ground delivery charge <span className='font-semibold'>$180.00</span></p>
                        <div className="flex gap-5 flex-col">
                            <p className='font-medium'><span className="font-semibold">SKU:</span> N/A</p>
                            <p className='font-medium'><span className="font-semibold">Category:</span> {product.category}</p>
                            <div className='font-medium capitalize flex gap-3'>
                                <span className="font-semibold">Tags:</span>
                                <div className='flex gap-2 flex-wrap'>
                                    {product.tags?.map((tag, i) => (
                                        <span key={tag + i}>{tag}, </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* product details / reviews / FAQ  */}
            <section className="py-30 px-3 bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto">

                    {/* product details buttons */}
                    <div className="buttons flex flex-wrap gap-5">
                        <button
                            onClick={() => setActiveBtn("product details")}
                            className={`${activeBtn == "product details" ? "border border-neutral-300" : "bg-white "} font-bold text-sm rounded-md py-3 px-7 uppercase`}>Product Details</button>
                        <button
                            onClick={() => setActiveBtn("additional information")}
                            className={`${activeBtn == "additional information" ? "border border-neutral-300" : "bg-white "} font-bold text-sm rounded-md py-3 px-7 uppercase`}>additional information</button>
                        <button
                            onClick={() => setActiveBtn("reviews")}
                            className={`${activeBtn == "reviews" ? "border border-neutral-300" : "bg-white "} font-bold text-sm rounded-md py-3 px-7 uppercase`}>reviews ({allReviews?.length})</button>
                    </div>

                    {/* data section */}
                    {activeBtn == "product details" ? <ProductDetails /> : activeBtn == "additional information" ? <OtherProductDetails /> : activeBtn == "reviews" ? <ProductReviews allReviews={allReviews} setAllReviews={setAllReviews} /> : ""}

                </div>



            </section>


            {/* featured cards */}
            <section className='px-3 py-30'>

                <div className="custom-container mx-auto">

                    <span className="text-blue-700 text-[18px] font-semibold capitalize">featured products</span>
                    <h3 className="heading-3 font-semibold capitalize">Featured Products</h3>

                    {loading ? <LoadingCards /> :
                        <div className="grid grid-cols-12 gap-6 mt-6">
                            {featuredProducts.slice(0, 4).map((product) => (
                                <div key={product._id} className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}>
                                    <ShopItemCard product={product} />
                                </div>
                            ))}
                        </div>
                    }
                </div>

            </section>

            <RevolutionizeServices>
                <div className="flex gap-5 flex-wrap my-10 justify-center items-center">
                    <Button

                        content={"Get Started Trial"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white min-w-[175px] rounded-xl"} />
                    <Button
                        content={"Get Started Trial"}
                        bgColor='bg-transparent'
                        hoverBg='bg-blue-700'
                        className={"text-white border-2 border-white hover:border-0 hover:text-black min-w-[175px] rounded-xl"} />
                </div>

            </RevolutionizeServices>
        </>
    )
}




export const ProductDetails = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async (id) => {
        const { data } = await axiosInstance.get(`/products/${id}`)
        setProduct(data.product)
    }


    useEffect(() => {
        getProduct(productId)
    }, [productId])
    return (
        <div className="wrapper">

            <div className="mt-8">
                <h3 className="heading-3 font-semibold">Product Description</h3>
                <p className='leading-loose text-[18px] text-neutral-600'>{product.description || ""}</p>
            </div>

            {/* more details */}
            <div className="mt-10">
                {product.features?.length > 0 && <h3 className="heading-3 font-semibold">More Details</h3>}
                {/* options */}

                <div className="grid grid-cols-12 mt-7 gap-4">
                    {product.features?.map((feature, i) => (

                        <div key={i} className="flex gap-4 col-span-12 md:col-span-6">
                            <span className='h-7 w-7 rounded-full bg-white flex items-center justify-center'>
                                <i className="fa fa-check text-blue-700"></i>
                            </span>
                            <p className="font-medium">{feature}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export const OtherProductDetails = () => {

    const { productId } = useParams()
    const [moreInformation, setMoreInformation] = useState()

    const getProductInformation = async (id) => {
        const { data } = await axiosInstance.get(`/products/${id}`)
        const information = HtmlReactParse(data.product.otherDetails)
        setMoreInformation(information)

    }


    useEffect(() => {
        getProductInformation(productId)
    }, [productId])
    return (
        <div className="wrapper">

            <div className="mt-8">
                <h3 className="heading-3 font-semibold">Other Details</h3>
            </div>

            {/* more details */}
            <div className="wrapper">
                {moreInformation || "no information added"}
            </div>
        </div>
    )
}

export const ProductReviews = ({ allReviews, setAllReviews }) => {
    const { productId } = useParams()

    const [review, setReview] = useState({ _id: null, comment: "", rating: 0 })
    const token = localStorage.getItem("userAccessToken")

    const [isUpdatingReview, setIsUpdatingReview] = useState(false)

    const user = useSelector(state => state.user.user)



    // delete review
    const handleDeleteReview = async (productId, reviewId) => {
        const { data } = await axiosInstance.delete(`/${productId}/reviews/${reviewId}/delete`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        if (!data.success) {
            toast(
                <Alert
                    type='error'
                    icon="fa-solid fa-xmark text-red-600"
                    heading={"Error"}
                    message={data.message}
                />,
                { autoClose: 2000 }
            )
            return
        }

        // setAllReviews(allReviews.filter(rev => rev._id !== reviewId))
        getReviews(productId)
        toast(
            <Alert
                type='success'
                icon="fa-solid fa-xmark text-red-600"
                heading={"success"}
                message={data.message}
            />,
            { autoClose: 2000 }
        )


    }

    // add/update review
    const handleReviewSubmit = async (e) => {
        try {
            e.preventDefault()
            let res
            if (isUpdatingReview) {
                res = await fetch(`http://localhost:3000/api/${productId}/reviews/${review._id}/update`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({ comment: review.comment, rating: review.rating })
                })
            }
            else {
                res = await fetch(`http://localhost:3000/api/${productId}/reviews/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify({ comment: review.comment, rating: review.rating })
                })
            }


            const data = await res.json()
            if (!data.success) {
                toast(
                    <Alert
                        type='error'
                        icon="fa-solid fa-xmark text-red-600"
                        heading={"Error"}
                        message={data.message}
                    />,
                    { autoClose: 2000 }
                )
                setIsUpdatingReview(false)
                return
            }
            if (isUpdatingReview) {
                setAllReviews(() => allReviews.map((oldReview) => oldReview._id == review._id ? review : oldReview))
            }
            else {
                setAllReviews([...allReviews, data.newReview])
            }
            toast(
                <Alert
                    type='success'
                    icon="fa-solid fa-check text-green-600"
                    heading={"Success"}
                    message={data.message || "added sire"}
                />,
                { autoClose: 2000 }
            )
            setReview({ comment: '', rating: 0 })
            setIsUpdatingReview(false)

            return
        } catch (error) {
            toast(
                <Alert
                    type='error'
                    icon="fa-solid fa-xmark text-red-600"
                    heading={"Error"}
                    message={error.message || "Error sire"}
                />,
                { autoClose: 2000 }
            )
            setIsUpdatingReview(false)
        }
    }



    return (
        <div className="wrapper">

            {!token ? null :
                <>
                    <div className="mt-8">
                        <h3 className="heading-3 font-semibold">Add a Review</h3>
                        <p className='leading-loose text-[18px] text-neutral-600 line-clamp-2'>Your Reviews help others to make a better decision in the purchase of this product.</p>
                    </div>
                    {/* create/update a review */}
                    <div className="mt-10">
                        <div className="grid grid-cols-12 mt-7 gap-4">
                            <form
                                onSubmit={handleReviewSubmit}
                                className="col-span-12 w-full flex flex-col items-start gap-5">

                                <div className="flex items-center justify-center">

                                    <StarRatings
                                        rating={review.rating}
                                        numberOfStars={5}
                                        starDimension='25px'
                                        starSpacing='2px'
                                        starHoverColor='rgb(255,10,100)'
                                        starRatedColor='rgb(255,10,100)'
                                        name='rating'
                                        isSelectable={false}
                                        changeRating={(rating) => {
                                            setReview({ ...review, rating })
                                        }}
                                    />
                                </div>

                                <textarea name="comment" id="comment"
                                    value={review.comment}
                                    onChange={(e) => setReview({ ...review, comment: e.target.value })}
                                    placeholder='Your Comments'
                                    className='bg-white focus:outline-blue-600 focus:outline-1 py-4 px-7 rounded-md w-full font-semibold'
                                ></textarea>

                                <div className="flex gap-4">

                                    <Button content={isUpdatingReview ? "Update" : "Submit"}
                                        className={"!h-14 w-[180px]"}
                                        bgColor={"bg-[var(--darkIndigo)]"}
                                        hoverBg={"bg-blue-600"}
                                    />
                                    {!isUpdatingReview ? null :
                                        <button
                                            type='button'
                                            className='bg-neutral-500 hover:bg-neutral-700 cursor-pointer text-white px-5 w-[180px] py-4 font-semibold rounded-md'
                                            onClick={() => {
                                                setIsUpdatingReview(false)
                                                setReview({ comment: "", rating: 0 })
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    }
                                </div>

                            </form>
                        </div>
                    </div>
                </>
            }

            {/* reviews */}
            <div className="mt-10">
                <h3 className="heading-3 font-semibold">Latest Reviews</h3>
                <div className="grid grid-cols-12 mt-7 gap-5">
                    {(allReviews || []).sort((review) => review.author?._id === user?._id ? -1 : 1).map((review, index) => (

                        // review card
                        <div key={review?._id + index} className="card col-span-12 md:col-span-6 border-neutral-200 bg-white px-6 py-6 rounded-md">
                            {/* author username */}
                            <div className='flex justify-between items-center'>
                                <h6 className="heading-6 mb-3 font-semibold">{review?.author?.username}</h6>
                                {/* action btns */}
                                {!user || review?.author?.email !== user.email ? null :
                                    <div className="flex gap-4">
                                        {/* delete review */}
                                        <button onClick={() => handleDeleteReview(productId, review._id)}
                                            className='text-neutral-700 hover:text-red-500 cursor-pointer'><i className="fa fa-trash-alt"></i></button>
                                        {/* udpate review */}
                                        <button
                                            onClick={() => {
                                                setReview({ _id: review._id, comment: review.comment, rating: review.rating })
                                                setIsUpdatingReview(true)
                                            }}
                                            className='text-neutral-700 hover:text-green-500 cursor-pointer'><i className="fa fa-pen"></i></button>
                                    </div>
                                }
                            </div>
                            {/* rating */}
                            <StarRatings rating={review?.rating}
                                numberOfStars={5}
                                starDimension='20px'
                                starSpacing='2px'
                                starHoverColor='rgb(255,10,100)'
                                starRatedColor='rgb(255,10,100)'
                                name='rating'
                                isSelectable={false}
                            />
                            <p className="comment mt-3 text-neutral-700 font-medium">
                                {review?.comment}
                            </p>
                            <p className="comment mt-3 text-neutral-700 text-end font-medium">
                                {new Date(review?.createdAt).toDateString()}
                            </p>


                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}