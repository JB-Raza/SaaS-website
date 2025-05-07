import React, { useRef, useState, useEffect } from 'react'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button } from '../../universalComponents/index.js'

// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function Shop() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [activeAlignment, setActiveAlignment] = useState("list")
    const dropdrownBtnRef = useRef()
    const dropdrownRef = useRef()

    useTextAnimate(".animate-text")

    // for sort dropdown
    // open and close dropdown
    useEffect(() => {
        if (dropdownOpen) {
            dropdrownRef.current.style.maxHeight = `${dropdrownRef.current.scrollHeight}px`
        }
        else dropdrownRef.current.style.maxHeight = `${0}px`
    }, [dropdownOpen])

    // close dropdown methods
    useEffect(() => {
        function closeDropdownOnClick(e) {
            if (dropdrownRef.current && !dropdrownRef.current.contains(e.target) && dropdrownBtnRef.current && !dropdrownBtnRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        function closeDropdownOnScroll() {
            setDropdownOpen(false)
        }
        window.addEventListener("scroll", closeDropdownOnScroll)
        window.addEventListener("click", closeDropdownOnClick)

        return () => {
            window.removeEventListener("scroll", closeDropdownOnScroll)
            window.removeEventListener("click", closeDropdownOnClick)
        }
    }, [])





    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Shop Page</h1>
                </div>
            </section>

            <section className='py-30 custom-container mx-auto'>
                <div className="grid grid-cols-12 px-3 gap-4">
                    {/* filters */}
                    <div className="col-span-12 flex flex-col gap-5 breakpoint-1000:col-span-4">
                        {/* search */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Search Here</h5>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className='my-5 relative'>
                                <input type="text" placeholder='Search here...'
                                    className='p-4 focus:outline-1 outline-blue-600 border-1 border-neutral-200 rounded-md w-full'
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <i className="fa fa-search text-neutral-600"></i>
                                </button>
                            </form>
                        </div>
                        {/* categories */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Categories</h5>
                            <div className="flex flex-col gap-6 mt-5">
                                {(categoriesData || []).map((category, index) => (
                                    <p key={index} className="flex gap-5 cursor-pointer text-neutral-900 hover:text-blue-600 duration-200 items-center">
                                        <i className="fa fa-angle-left"></i>
                                        <span className='font-medium'>{category}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* range */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Filter By Price</h5>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className='my-5 relative'>
                                <input type="range" step={1}
                                    className='w-full'
                                />
                                <div className="flex justify-between mt-5 items center">
                                    <p className='text-neutral-600'>
                                        <span>700</span> -
                                        <span> 1200</span>
                                    </p>
                                    <Button content={"Filter"}
                                        bgColor='bg-blue-700'
                                        hoverBg='bg-[var(--darkIndigo)]'
                                        className={"!max-h-10 !px-11 "}
                                    />
                                </div>

                            </form>
                        </div>

                        {/* select by size */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Select By Size</h5>
                            <div className="flex flex-col gap-6 mt-5">
                                {(sizeData || []).map((size, index) => (
                                    <div key={index} className="input-group flex gap-3">
                                        <input type="checkbox" id={size} className='w-4' />
                                        <label htmlFor={size}>{size}</label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        {/* Filter by rating */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Filter By Rating</h5>
                            <div className="flex flex-col gap-6 mt-5">
                                {(filterByRatingData || []).map((filter, index) => (
                                    <div key={index} className="input-group flex items-center gap-3">

                                        <input type="checkbox" id={`${filter}_star`} className='w-4 h-4 opacity-50 checked:opacity-100'
                                        />
                                        <label htmlFor={`${filter}_star`}
                                            className='flex gap-2'>

                                            <span className='flex gap-1 items-center'>
                                                {[1, 2, 3, 4, 5].map((elem, i) => (

                                                    <i key={i} className={`fa-solid fa-star ${elem <= filter ? "text-blue-600" : "text-neutral-300"} text-sm`}></i>
                                                ))}
                                            </span>
                                            <span className='text-neutral-500 font-medium'>( {filter} star )</span>
                                        </label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        {/* popular tags */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Popular Tags</h5>
                            {/* tags */}
                            <div className="tags flex flex-wrap gap-2 mt-6">
                                {(popularTagsData || []).map((tag, i) => (
                                    <p key={i} className='border-1 cursor-pointer hover:bg-blue-600 hover:text-white duration-200 border-neutral-300 text-sm text-neutral-600 font-medium rounded-full px-4 py-[6px]'>{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* cards */}
                    <div className="col-span-12 breakpoint-1000:col-span-8 px-3">
                        {/* header */}
                        <div className='flex flex-col sm:flex-row gap-3 justify-between sm:items-center border-1 border-neutral-300 rounded-md p-5'>
                            <p className="font-semibold">Showing <span className='text-blue-600'>12</span> of 21 Results</p>

                            {/* sorting and alignment btns */}
                            <div className='flex justify-between w-full sm:w-auto gap-13 items-center'>
                                <div className="flex flex-wrap gap-3 items-center">
                                    <span className="font-semibold">Sort by:</span>
                                    <i className="fa-solid fa-arrows-up-down text-neutral-500"></i>
                                    {/* dropdown */}
                                    <div className="relative flex gap-2 items-center text-neutral-600">
                                        <button ref={dropdrownBtnRef} onClick={() => setDropdownOpen((prev) => !prev)} className="font-bold cursor-pointer">Price</button>
                                        <i className={`fa fa-angle-down text-sm ${dropdownOpen ? "rotate-180 duration-200" : "rotate-0 duration-200"}`}></i>
                                        <div ref={dropdrownRef} className=' absolute z-45 -left-1/2 top-10 overflow-hidden transition-all duration-300 bg-white font-semibold shadow-lg min-w-[160px]'>
                                            <ul className={`p-3`}>
                                                <li className='hover:bg-neutral-200 text-black rounded-sm px-2 py-1'>action</li>
                                                <li className='hover:bg-neutral-200 text-black rounded-sm px-2 py-1'>action</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* alignment btns */}
                                <div className="flex gap-5">
                                    <button
                                        onClick={() => setActiveAlignment('list')}
                                    ><i className={`fa-solid fa-list-ul text-xl ${activeAlignment == "list" ? "text-blue-600" : ""}`}></i></button>
                                    <button
                                        onClick={() => setActiveAlignment('grid')}
                                    ><i className={`fa-solid fa-border-all text-xl ${activeAlignment == "grid" ? "text-blue-600" : ""}`}></i></button>
                                </div>
                            </div>

                        </div>
                        {/* all cards */}
                        <div className="grid grid-cols-12 gap-6 mt-6">
                            {productsData.map((product) => (
                                <div key={product.id} className="col-span-12 breakpoint-500:col-span-6 md:col-span-4">


                                    <div className="group card pb-3 hover:shadow-lg rounded-2xl flex flex-col gap-4">
                                        {/* image section */}
                                        <div className="relative flex flex-col justify-between border border-neutral-200 min-h-[290px] rounded-2xl p-6 overflow-hidden">
                                            <img
                                                className='group-hover:scale-115 duration-200 m-auto'
                                                src={product.image} alt={`img_${product.id}`} />
                                            <Button
                                                content={"Add to Cart"}
                                                bgColor='bg-blue-700'
                                                hoverBg='bg-[var(--darkIndigo)]'
                                                className={"w-full scale-0 group-hover:scale-100 duration-500 !h-10 !py-2 !rounded-full"}
                                            />
                                            {/* options */}
                                            <div className="flex flex-col gap-2 absolute top-3 right-3 group-hover:translate-x-[0%] duration-500 translate-x-[200%]">
                                                {/* icon 1 view */}
                                                <span className="icon bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 hover:text-white rounded-md">
                                                    <i className="fa-regular fa-eye"></i>
                                                </span>
                                                {/* icon 2 star */}
                                                <span className="icon bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 hover:text-white rounded-md">
                                                    <i className="fa-regular fa-star"></i>
                                                </span>
                                                {/* icon 3 */}
                                                <span className="icon bg-neutral-200 h-10 w-10 flex items-center justify-center hover:bg-blue-700 duration-200 hover:text-white rounded-md">
                                                    <i className="fa-solid fa-arrows-up-down"></i>
                                                </span>
                                            </div>
                                        </div>
                                        {/* data */}
                                        <div className="flex px-1 flex-col gap-3 items-center justify-center">
                                            <div className="rating flex gap-1">

                                                {[1, 2, 3, 4, 5].map((item, i) => (
                                                    <i key={i} className={`fa fa-star text-sm ${item <= 4 ? "text-blue-600" : "text-neutral-300"}`}></i>
                                                ))}
                                            </div>
                                            <h4 className="heading-6 font-semibold text-center text-wrap">Smart Wireless Headphone</h4>
                                            <p className="price font-medium">$112.00</p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>




            <RevolutionizeServices>
                <div className="flex gap-5 justify-center items-center">
                    <Button

                        content={"Get Started Trial"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white my-10 min-w-[175px] rounded-xl"} />
                    <Button
                        content={"Get Started Trial"}
                        bgColor='bg-transparent'
                        hoverBg='bg-blue-700'
                        className={"text-white border-2 border-white hover:border-0 hover:text-black my-10 min-w-[175px] rounded-xl"} />
                </div>

            </RevolutionizeServices>
        </div>
    )
}


const categoriesData = ["Brochures & Catalogues", "Business Cards", "Calendars printing", "Design Online", "Flyers Design", "Folded Leaflets", "t-shirt printing", "Gift item printing"]

const sizeData = [`36"x80" (8)`, `36"x96" (60)`, `72"x80" (7)`, `72"x96" (21)`]

const filterByRatingData = [5, 4, 3, 2, 1]
const popularTagsData = ["Sweat Shirt", "Landing", "Banner Design", "Brochure", "Bussiness Card", "cap", "Bussiness Card", "Landing"]


// product card data
const productsData = [
    { id: 0, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img1.png" },
    { id: 1, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img2.png" },
    { id: 2, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img3.png" },
    { id: 3, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img4.png" },
    { id: 4, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img5.png" },
    { id: 5, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img6.png" },
    { id: 6, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img7.png" },
    { id: 7, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img8.png" },
    { id: 8, title: "Smart Wireless Headphone", rating: 4, price: 112, image: "/shop/product-img9.png" },
]