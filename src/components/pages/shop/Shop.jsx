import { useRef, useState, useEffect } from 'react'
import { Range } from "react-range";


// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, ShopItemCard, LoadingCards } from '../../universalComponents/index.js'

// utils and hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'
import { axiosInstance } from '../../../utils.js'

// redux


export default function Shop() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [currSortStyle, setCurrSortStyle] = useState("sales")
    const [activeAlignment, setActiveAlignment] = useState("list")

    // loading state
    const [loading, setLoading] = useState(true)

    const [allProducts, setAllProducts] = useState([])
    const [sortedProducts, setSortedProducts] = useState([])

    // filters
    const [availableCategories, setAvailableCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")

    const [priceRange, setPriceRange] = useState([0, 7000])
    const [activeTagList, setActiveTagList] = useState([])

    const [searchQuery, setSearchQuery] = useState("")


    const dropdrownBtnRef = useRef()
    const dropdrownRef = useRef()

    useTextAnimate(".animate-text")

    const fetchProductsAndCategories = async () => {
        const { data } = await axiosInstance.get("/products/")
        setAllProducts(data.allProducts)
        setSortedProducts(data.allProducts)

        const categories = await axiosInstance.get("/products/categories")
        setAvailableCategories(categories.data.categories)

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }
    useEffect(() => {
        fetchProductsAndCategories()
    }, [])

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

    // sort listings
    useEffect(() => {
        if (currSortStyle === "price") {
            const priceSort = allProducts.sort((a, b) => a.price - b.price)
            setSortedProducts(priceSort)
        }
        else if (currSortStyle == "published") {
            setSortedProducts(prevListings => {
                return [...prevListings].sort((a, b) => {
                    return a.published - b.published
                })
            })

        }
        setDropdownOpen(false)


    }, [currSortStyle]);


    // search query filter

    const fetchSearchQueryData = async (query) => {
        const { data } = await axiosInstance.get(`/products/search?searchQuery=${query}`)
        if (data.success) {
            setSortedProducts(data?.searchQueryData)
        }

    }
    useEffect(() => {
        if (searchQuery !== "") {
            fetchSearchQueryData(searchQuery)
            return
        }
        else {
            fetchProductsAndCategories()

        }
    }, [searchQuery])

    // category filter
    const handleCategorySelect = (category) => {
        if (category == activeCategory) {
            setSortedProducts(allProducts)
            setActiveCategory("")
            return
        }
        setActiveCategory(category)
        const categorySort = allProducts.filter((product) => product.category == category)
        setSortedProducts(categorySort)
    }

    // priceRange filter
    useEffect(() => {
        const priceRangeFilter = allProducts.filter((product) => product.price > priceRange[0] && product.price < priceRange[1])
        setSortedProducts(priceRangeFilter)
    }, [priceRange])


    // tag filter
    useEffect(() => {

        if (activeTagList.length == 0) {
            setSortedProducts(allProducts)
            return
        }
        const tagListSort = allProducts.filter((product) =>
            product.tags?.some(tag => activeTagList.includes(tag))
        )
        setSortedProducts(tagListSort)

    }, [activeTagList])




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
                                <input type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Search here...'
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
                                {(availableCategories || []).map((category, index) => (
                                    <p key={category + index}
                                        onClick={() => handleCategorySelect(category)}
                                        className={`flex gap-5 cursor-pointer hover:text-blue-600 duration-200 items-center ${activeCategory == category ? "text-blue-600" : "text-neutral-900 "}`}>
                                        <i className="fa fa-angle-left"></i>
                                        <span className='font-medium'>{category}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* range */}
                        <div className='rounded-xl p-8 shadow-lg'>
                            {/* <PriceRangeSlider /> */}
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-2 border-blue-600 py-0 px-2">Filter By Price</h5>
                            <PriceRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
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
                                    <p
                                        onClick={() => {
                                            if (!activeTagList.includes(tag)) {
                                                setActiveTagList([...activeTagList, tag])
                                            }
                                            else {
                                                setActiveTagList(() =>
                                                    activeTagList.filter((tagItem) => tagItem !== tag)
                                                )
                                            }
                                        }}
                                        key={i} className={`border-1 cursor-pointer hover:bg-blue-600 hover:text-white duration-200 border-neutral-300 text-sm text-neutral-600 font-medium rounded-full px-4 py-[6px] ${activeTagList.includes(tag) ? "!bg-blue-600 text-white" : ""}`}>{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* cards and headers */}
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
                                        <button ref={dropdrownBtnRef} onClick={() => setDropdownOpen((prev) => !prev)} className="font-bold cursor-pointer">
                                            <span>{currSortStyle}</span>
                                            <i className={`fa fa-angle-down text-sm ms-[6px] ${dropdownOpen ? "rotate-180 duration-200" : "rotate-0 duration-200"}`}></i>
                                        </button>
                                        <div ref={dropdrownRef} className='absolute z-45 -left-1/2 top-10 overflow-hidden transition-all duration-300 bg-white font-semibold shadow-lg rounded-md min-w-[160px]'>
                                            <ul className={`p-3`}>
                                                {(sortStyleData || []).map((sortMethod) => (
                                                    <li
                                                        onClick={() => setCurrSortStyle(sortMethod)}
                                                        key={sortMethod} className='hover:bg-neutral-200 text-black rounded-sm px-2 py-1 capitalize'>{sortMethod}</li>
                                                ))}
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
                        {loading ?
                            <LoadingCards />
                            :
                            <div className="grid grid-cols-12 gap-6 mt-6">
                                {(sortedProducts || []).map((product) => (
                                    <div key={product._id} className={`col-span-12 ${activeAlignment == "list" ? " breakpoint-500:col-span-6 md:col-span-4" : "sm:col-span-12 md:col-span-6"} `}>
                                        <ShopItemCard activeAlignment={activeAlignment} product={product} />
                                    </div>
                                ))}
                            </div>
                        }


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


// price range component

function PriceRangeSlider({ priceRange, setPriceRange }) {
    const MIN = 0;
    const MAX = 10000;

    // const [values, setValues] = useState([2500, 7500]);


    return (
        <div className="px-4 py-10">
            <Range
                step={10}
                min={MIN}
                max={MAX}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-[6px] bg-neutral-300 rounded-full relative"
                        style={{
                            ...props.style,
                            background: `linear-gradient(to right, #e5e7eb ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%,
                            
                            #17a2b8 ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%,
                            #17a2b8 ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%,
                            #e5e7eb ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%)`,
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-4 w-4 rounded-full bg-[#17a2b8] top-[8px] -translate-y-1/2"
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />

            <div className="flex justify-between mt-8 items-center">

                <p className="mt-4 text-neutral-600">
                    {priceRange[0]} - {priceRange[1]}
                </p>
            </div>
        </div>
    );
}




// sort by: (product's cards sorting)
const sortStyleData = ["price", "sales", "published"]


const sizeData = [`36"x80"(8)`, `36"x96"(60)`, `72"x80"(7)`, `72"x96"(21)`]

const filterByRatingData = [5, 4, 3, 2, 1]
const popularTagsData = ["laptop", "mouse", "modern", "economical", "camera", "logitec", "headset", "headphone"]



