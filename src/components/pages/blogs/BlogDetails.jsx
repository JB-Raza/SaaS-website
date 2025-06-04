import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

// components
import { Button } from '../../universalComponents/index.js'
import { RevolutionizeServices } from '../../sections/index.js'

// utils
import { axiosInstance, truncateText } from '../../../utils.js'
import { useTextAnimate } from '../../../hooks/textAnimation.js'
import parse from 'html-react-parser'


export default function BlogDetails() {
    const { blogId } = useParams()
    const [blogData, setBlogData] = useState({})
    const [blogContent, setBlogContent] = useState([])

    async function getBlog(id) {
        const { data } = await axiosInstance.get(`/blogs/${id}`)
        const content = parse(data.blog.content)
        setBlogContent(content)

        delete data.blog?.content
        setBlogData(data.blog)
    }
    useEffect(() => {
        getBlog(blogId)
    }, [blogId])


    return (
        <div className='custom-container mx-auto'>

            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="/simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Blog Details</h1>
                </div>
            </section>

            <section className="py-20">
                <div className="grid grid-cols-12">
                    {/* blogs column */}

                    <div className="col-span-12 blog-details-section px-4 blog-details-section flex flex-col gap-5 lg:col-span-8">
                        {/* blog banner image */}
                        <div className="blog-image mx-auto relative rounded-2xl overflow-clip">
                            <img src={blogData.bannerImage}
                                alt="blog header image" className='mx-auto hover:scale-105 duration-400' />
                            {/* date badge */}
                            <div className="badge text-center text-white px-3 py-2 rounded-lg md:px-6 md:py-4 md:rounded-xl md:text-xl absolute top-3 left-3 bg-blue-700 font-semibold">
                                {String(new Date(blogData.datePosted).getDate())}
                                <br />
                                {String(new Date(blogData.datePosted).toLocaleString("default", { month: "short" }))}
                            </div>
                        </div>

                        {/* blog auther, comments, length details */}
                        <div className="flex flex-wrap gap-3 mt-10">
                            <p className='flex gap-2 items-center'>
                                <i className="fa-regular fa-user text-blue-700"></i>
                                {blogData.author && <span className="text-neutral-600 text-sm">{blogData?.author.name}</span>}

                            </p> -
                            <p className='flex gap-2 items-center'>
                                <i className="fa-regular fa-comments text-blue-700"></i>
                                {blogData.comments && <span className="text-neutral-600 text-sm">Comments ({blogData.comments.length})</span>}
                            </p> -
                            <p className='flex gap-2 items-center'>
                                <i className="fa-regular fa-clock text-blue-700"></i>
                                <span className="text-neutral-600 text-sm"> {blogData.readTime} Min Read</span>
                            </p>
                        </div>

                        <h4 className="animate-item heading-4 font-semibold w-max duration-300 mt-3">{blogData.title}</h4>

                        <p className="animate-item text-neutral-600 md:max-w-[800px] leading-loose text-[18px] mt-3">{blogData.summary}</p>

                        <div>
                            {blogContent.map((element, i) => (
                                <div key={i}>
                                    {element}
                                </div>
                            ))}
                        </div>





                    </div>

                    {/* sidebar options column */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-7 px-3 breakpoint-900:px-8 breakpoint-900:pe-3">
                        {/* profile */}
                        <div className=' bg-neutral-50 px-5 py-15'>
                            <img src="/blogs/blogger.png" alt="" className="rounded-circle mx-auto mb-4" />
                            <h5 className="heading-6 text-[var(--darkIndigo)] font-semibold text-center py-0 px-2">Rosalina D. Willaim</h5>
                            <p className="text-center text-neutral-600 text-sm">Blogger/Photographer</p>
                            <p className="description text-center text-neutral-600 leading-loose mt-4 max-w-[270px] mx-auto">he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam</p>

                            {/* social icons */}
                            <div className="flex gap-3 items-center justify-center flex-wrap mt-5">

                                <div className="icon group hover:bg-blue-600 flex items-center justify-center duration-200 border border-neutral-200 h-[45px] w-[45px] bg-white">
                                    <i className="fa-brands group-hover:text-white duration-200 fa-facebook"></i>
                                </div>
                                <div className="icon group hover:bg-blue-600 flex items-center justify-center duration-200 border border-neutral-200 h-[45px] w-[45px] bg-white">
                                    <i className="fa-brands group-hover:text-white duration-200 fa-x-twitter"></i>
                                </div>
                                <div className="icon group hover:bg-blue-600 flex items-center justify-center duration-200 border border-neutral-200 h-[45px] w-[45px] bg-white">
                                    <i className="fa-brands group-hover:text-white duration-200 fa-instagram"></i>
                                </div>
                                <div className="icon group hover:bg-blue-600 flex items-center justify-center duration-200 border border-neutral-200 h-[45px] w-[45px] bg-white">
                                    <i className="fa-brands group-hover:text-white duration-200 fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        {/* search blogs */}
                        <div className=' bg-neutral-50 p-8'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-4 border-blue-600 py-0 px-2">Search Here</h5>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className='my-5 relative'>
                                <input type="text" placeholder='Search here...'
                                    className='p-4 focus:outline-1 bg-white outline-blue-600 w-full'
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <i className="fa fa-search text-neutral-600"></i>
                                </button>
                            </form>
                        </div>

                        {/* recent blogs */}
                        <div className=' bg-neutral-50 p-8'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-4 border-blue-600 py-0 px-2">Recent News</h5>
                            {/* recent blog cards */}
                            <div className="cards py-5 flex flex-col gap-5">

                                {recentBlogsData.map((recentBlog) => (

                                    <div key={recentBlog._id} className="card flex items-center gap-5">
                                        {/* image */}
                                        <img src={recentBlog.image} alt="recent post"
                                            className='cursor-pointer' />
                                        {/* data */}
                                        <div className="flex flex-col gap-3">
                                            <p className="flex items-center font-medium gap-3 text-neutral-800">
                                                <i className="fa-solid fa-calendar-days text-blue-700"></i>
                                                <span className='text-sm'>{recentBlog.published}</span>
                                            </p>
                                            <h6 className="text-[16px] text-wrap font-semibold leading-tight hover:text-blue-700 duration-200 cursor-pointer text-slate-900 capitalize truncate">{recentBlog.title}</h6>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>

                        {/* categories */}
                        <div className=' bg-neutral-50 p-8'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-4 border-blue-600 py-0 px-2">Categories</h5>

                            {/* category buttons */}
                            <div className="buttons flex flex-col gap-5 mt-5">
                                {categories.map((category) => (

                                    <button key={category._id} className="flex justify-between text-[18px] duration-200 hover:bg-blue-600 hover:text-white w-full bg-white py-4 px-6 font-medium">
                                        <span>{category.categoryName}</span>
                                        <span>{category.categoryStrength < 10 ? 0 : null}{category.categoryStrength}</span>
                                    </button>
                                ))}
                            </div>


                        </div>

                        {/* popular tags */}
                        <div className=' bg-neutral-50 p-8'>
                            <h5 className="heading-5 text-[var(--darkIndigo)] font-semibold border-l-4 border-blue-600 py-0 px-2">Popular Tags</h5>

                            {/* category buttons */}
                            <div className="buttons flex flex-wrap gap-3 mt-5">
                                {popularTags.map((tag) => (

                                    <button key={tag} className="flex text-sm cursor-pointer capitalize duration-200 hover:bg-blue-600 hover:text-white bg-white py-4 px-6 font-medium">
                                        {tag}
                                    </button>
                                ))}
                            </div>


                        </div>

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



const recentBlogsData = [
    {
        _id: 0,
        title: "Budget Issues force the company to become",
        published: "22 Jun 2022",
        image: "/blogs/recent-post-img1.png"
    },
    {
        _id: 1,
        title: "Sassly web into a new Era",
        published: "21 Jun 2022",
        image: "/blogs/recent-post-img2.png"
    },
    {
        _id: 2,
        title: "nginx taking a big step",
        published: "20 Jun 2022",
        image: "/blogs/recent-post-img3.png"
    },
]

const categories = [
    { _id: 0, categoryName: "Mobile", categoryStrength: 3 },
    { _id: 1, categoryName: "Laptop", categoryStrength: 3 },
    { _id: 2, categoryName: "Saasly Products", categoryStrength: 3 },
    { _id: 3, categoryName: "Server Side Logic", categoryStrength: 10 },
]

const popularTags = ["Tourist", "Traveling", "cave", "sky diving", 'hill climbs', 'oppos', 'landing']


