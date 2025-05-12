import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// fetching sample data
import { productsData } from '../../../sampleData.js'
import { useParams } from 'react-router-dom'
// swiper css
import "swiper/css"

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, ShopItemCard } from '../../universalComponents/index.js'

// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function ShopDetails() {

    const { productId } = useParams()

    useTextAnimate(".animate-text")
    const swiperRef = useRef(null)

    const [product, setProduct] = useState({
        id: 0,
        title: "Smart Wireless Headphone",
        rating: 4,
        price: 202,
        image: "/shop/product-img1.png",
        images: [
            "/shop/product-img1.png",
            "/shop/show-details/shop-details-thumb2.png",
            "/shop/show-details/shop-details-thumb3.png",
            "/shop/show-details/shop-details-thumb4.png"
        ],
        sales: 22,
        published: Date.now(),
        description: "High-quality wireless headphones with noise cancellation and long battery life.",
        category: "Electronics",
        brand: "AudioMax",
        stock: 50,
        reviews: [
            { author: "Alice", rating: 5, comment: "Amazing sound quality!" },
            { author: "Bob", rating: 4, comment: "Very comfortable to wear." }
        ],
        size: ['s', 'm', 'l', 'xl'],
        discountPercent: 5,
        tags: ["smart watch", "digital", 'modern'],
        colors: ["red", "green", "blue", "orange"],

    })
    const [activeBtn, setActiveBtn] = useState("product details")
    const [activeColor, setActiveColor] = useState("gray")
    const [activeSize, setActiveSize] = useState("s")
    const [quantity, setQuantity] = useState(1)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)


    useEffect(() => {

        if (productId) {
            setProduct(productsData.find(product => {
                return product.id == productId
            }))
        }
    }, [productId])


    return (
        <div>
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
                        <div className="border breakpoint-1000:me-[50px] border-neutral-200 rounded-3xl">
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
                                {product.images?.map((imageUrl) => (

                                    <SwiperSlide className='!flex !items-center my-auto !justify-center'>
                                        <img
                                            className='w-full max-w-[450px]'
                                            src={imageUrl} alt="img" />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>

                        {/* preview image slider */}
                        <div className="flex justify-center breakpoint-1000:me-[50px] gap-2 mt-5">
                            {product.images?.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveSlideIndex(index)
                                        swiperRef?.current.slideTo(index)
                                    }}
                                    className={`swiper-bullet p-2 border rounded-xl  flex items-center justify-center ${activeSlideIndex == index ? "border-blue-700" : "border-neutral-300"}`}>
                                    <img
                                        className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 object-contain"
                                        src={img} alt={index} />

                                </button>
                            ))}
                        </div>
                    </div>

                    {/* data col */}
                    <div className="col-span-12 breakpoint-1000:col-span-6">
                        {/* stats */}
                        <div className="wrapper flex gap-5 items-center">
                            <span className="discount bg-red-600 text-white font-semibold rounded-md py-[3px] px-[8px]">-{product.discountPercent}%</span>
                            <p className="rating flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((item, i) => (
                                    <i key={i} className={`fa fa-star text-sm ${item <= product.rating ? "text-blue-600" : "text-neutral-300"}`}></i>
                                ))}
                                <span className='text-neutral-600 ms-2 font-medium'>( {product.reviews?.length} reviews )</span>
                            </p>
                        </div>
                        <h3 className="heading-3 font-semibold">{product.title || "Smart Wireless Headphone"}</h3>
                        <p className='text-wrap max-w-[500px] font-medium text-neutral-600 leading-loose mt-3'>{product.description}</p>

                        {/* price */}
                        <div className="mt-5 flex gap-10 items-center flex-wrap">
                            <p className="heading-4 font-semibold">${product.price}.00</p>
                            <p className="heading-6 font-semibold text-blue-700">$900.00</p>
                        </div>

                        {/* color */}
                        <div className="mt-5 flex gap-6 items-center">
                            <span className="font-semibold">Color : </span>
                            <div className="flex gap-3 flex-wrap items-center">
                                {product.colors?.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setActiveColor(color)}
                                        className={`flex items-center justify-center rounded-full h-5 w-5 ${activeColor == color ? "scale-125" : "border border-neutral-300"}`}>
                                        <span
                                            className={`rounded-full transition-transform duration-200 w-3 h-3 ${activeColor == color ? "scale-125" : "scale-100"}`}
                                            style={{ backgroundColor: color }}
                                        ></span>
                                    </button>
                                ))}

                            </div>
                        </div>

                        {/* size */}
                        <div className="mt-5 flex gap-6 items-center">
                            <span className="font-semibold">Size : </span>
                            <div className="flex gap-3 flex-wrap items-center">
                                {product.size?.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setActiveSize(size)}
                                        className={`flex uppercase font-semibold px-3 py-1 items-center justify-center rounded-md border border-neutral-200 ${activeSize == size ? "bg-blue-700 text-white" : ""}`}>
                                        {size}
                                    </button>
                                ))}

                            </div>
                        </div>

                        {/* quantity */}
                        <div className="mt-8 flex gap-6 items-center">
                            <span className="font-semibold">Quantity : </span>
                            <div className="flex items-center gap-10 px-6 py-4 border border-neutral-400 rounded-md">
                                <button
                                    onClick={() => {
                                        if (quantity <= 1) return
                                        setQuantity(prev => --prev)
                                    }}
                                    className="decrement text-neutral-800 text-[18px]">
                                    <div className="fa-solid fa-minus"></div>
                                </button>
                                <span className='font-semibold text-[16px]'>{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => ++prev)}
                                    className="increment text-neutral-800 text-[18px]">
                                    <div className="fa-solid fa-plus"></div>
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="wrapper flex gap-6 items-center max-w-[500px] mt-7">

                            <Button
                                content={"Add To Cart"}
                                bgColor='bg-blue-700'
                                hoverBg='bg-[var(--darkIndigo)]'
                                icon={"fa-solid group-hover:text-blue-700 transition-[background] !duration:400 fa-basket-shopping"}
                                className={"group w-full !rounded-full"}
                            />
                            {/* wishlist */}
                            <button className='hover:bg-blue-600 hover:text-white duration-200 bg-white text-neutral-800 shadow-[1px_1px_20px_1px_#cfcfcf] min-w-14 h-14 flex items-center justify-center rounded-full'>
                                <i className="fa-regular fa-star text-xl"></i>
                            </button>
                        </div>

                        {/* delivery charges */}
                        <p className="text-medium my-10">Ground delivery charge <span className='font-semibold'>$180.00</span></p>

                        <div className="flex gap-5 flex-col">
                            <p className='font-medium'><span className="font-semibold">SKU:</span> N/A</p>
                            <p className='font-medium'><span className="font-semibold">Category:</span> Hardware</p>
                            <p className='font-medium capitalize'><span className="font-semibold">Tags:</span> smart watch, digital, modern</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* product details / reviews / FAQ  */}
            <section className="py-30 px-3 bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto">

                    <div className="buttons flex flex-wrap gap-5">
                        {btns.map((btn) => (

                            <button
                                key={btn.id}
                                onClick={() => setActiveBtn(btn.value)}
                                className={`${activeBtn == btn.value ? "border border-neutral-300" : "bg-white "} font-bold text-sm rounded-md py-3 px-7 uppercase`}>{btn.value}</button>
                        ))}
                    </div>

                    {/* data section */}
                    {/* load data dynamically here based on activeBtn filter */}
                    <div className="wrapper">

                        <div className="mt-8">
                            <h3 className="heading-3 font-semibold">Experience is over the world visit</h3>
                            <p className='leading-loose text-[18px] text-neutral-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro asperiores, nobis repellat ipsa quo consequuntur ratione voluptatibus exercitationem laudantium voluptatum delectus dolorem assumenda maiores eius sequi amet esse natus. Quas qui sit consequatur cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque aspernatur repellat accusamus impedit magni ratione vitae autem laudantium voluptates beatae nihil</p>
                        </div>

                        {/* more details */}
                        <div className="mt-10">
                            <h3 className="heading-3 font-semibold">More Details</h3>
                            {/* options */}
                            <div className="grid grid-cols-12 mt-7 gap-4">
                                {featureOptions.map((feature, i) => (

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
                </div>



            </section>


            {/* featured cards */}
            <section className='px-3 py-30'>
                <div className="custom-container mx-auto">

                    <span className="text-blue-700 text-[18px] font-semibold capitalize">featured products</span>
                    <h3 className="heading-3 font-semibold capitalize">Featured Products</h3>

                    <div className="grid grid-cols-12 gap-6 mt-6">
                        {productsData.slice(0, 4).map((product) => (
                            <div key={product.id} className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3`}>
                                <ShopItemCard product={product} />
                            </div>
                        ))}
                    </div>
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
        </div>
    )
}


const productSwiper = [
    { imgUrl: "/shop/show-details/shop-details-thumb1.png" },
    { imgUrl: "/shop/show-details/shop-details-thumb2.png" },
    { imgUrl: "/shop/show-details/shop-details-thumb3.png" },
    { imgUrl: "/shop/show-details/shop-details-thumb4.png" },
]

const availableColors = ["gray", "blue", "green", "orange", "purple"]
const availableSizes = ['s', 'm', 'l', 'xl', 'xxl']

const btns = [
    { id: 0, value: "product details", },
    { id: 1, value: "additional information", },
    { id: 2, value: "reviews (09)", },
    { id: 3, value: "faq", },
]

const featureOptions = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut similique illum voluptas.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima good to go?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut similique illum voluptas.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut similique illum voluptas.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut similique illum voluptas.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, minima?",

]

