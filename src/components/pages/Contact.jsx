import React from 'react'
import { Button } from '../universalComponents/index.js'
import { RevolutionizeServices } from '../sections/index.js'
import { useTextAnimate } from '../../hooks/textAnimation.js'

export default function Contact() {

    useTextAnimate(".animate-contact-heading")

    return (
        <div className='max-w-screen bg-[#F3F8F8]'>
            <div className="contact-hero custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                <h1 className="animate-contact-heading heading-1 capitalize font-bold text-center">Get in Touch</h1>
            </div>

            {/* contact cards */}
            <div className="px-3 relative after:absolute z-10 after:left-0 after:right-0 after:bottom-0 after:mx-auto after:h-[200px] after:w-full after:bg-white">
                <div className="custom-container relative z-20 mx-auto grid grid-cols-12 py-10 px-10 bg-white gap-6">
                    {(addressDetails || []).map((item, index) => (
                        <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 group shadow-lg rounded-lg hover:bg-[#1c3ff5] py-[60px] px-5 flex flex-col items-center gap-6">
                            <img loading="lazy" src={item.image} alt="address"
                                className="group-hover:brightness-[100000%] 
                            group-hover:animate-[var(--icon-bubble-animation)]"
                            />
                            <h5 className="heading-5 font-semibold text-center group-hover:text-white">{item.label}</h5>
                            <p className=" text-center max-w-[250px] leading-8 text-neutral-600 group-hover:text-white font-medium text-[18px]">{item.description}</p>
                        </div>
                    ))}

                </div>

            </div>

            {/* contact and form section */}
            <section className="py-[120px] bg-white m-0">
                <div className="custom-container px-3 mx-auto grid grid-cols-12 gap-5">

                    <div className="col-span-12 lg:col-span-6">
                        <span className="text-blue-700 underline font-semibold text-[20px] italic capitalize">Get in Touch</span>
                        <h3 className="heading-3 my-3 font-bold text-black">Contact Us</h3>
                        <p className='text-neutral-900 text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque inventore</p>

                        <div className="grid grid-cols-12 gap-5 justify-between mt-16">
                            {/* location */}
                            <div className="col-span-12 sm:col-span-6 flex gap-7">
                                <i className="fa fa-location-dot text-blue-600 text-3xl"></i>
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h6 className="heading-6 font-semibold">Location</h6>
                                    <p className='text-neutral-600 leading-8 text-wrap sm:max-w-[200px]'>55 Main street, 2nd block, Melbourne, Australia</p>

                                </div>
                            </div>
                            {/* Phone */}
                            <div className="col-span-12 sm:col-span-6 flex gap-7">
                                <i className="fa-solid fa-phone text-blue-600 text-3xl"></i>
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h6 className="heading-6 font-semibold">Phone</h6>
                                    <p className='text-neutral-600 leading-8 text-wrap sm:max-w-[200px]'>+1 (368) 567 89 54 +236 (456) 896 22</p>

                                </div>
                            </div>
                            {/* email */}
                            <div className="col-span-12 sm:col-span-6 flex gap-7">
                                <i className="fa-regular fa-envelope text-blue-600 text-3xl"></i>
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h6 className="heading-6 font-semibold">Mail Address</h6>
                                    <p className='text-neutral-600 leading-8 text-wrap sm:max-w-[200px]'>wiatechinfo@gmail.com www.wiatech.com</p>

                                </div>
                            </div>
                            {/* social */}
                            <div className="col-span-12 sm:col-span-6 flex gap-7">
                                <i className="fa-solid fa-square-share-nodes text-blue-600 text-4xl"></i>
                                <div className="flex flex-col gap-3 sm:gap-5">
                                    <h6 className="heading-6 font-semibold">Social</h6>
                                    {/* icons */}
                                    <div className="icons flex gap-3">
                                        {/* fb */}
                                        <div className="icon group hover:bg-blue-600 transition-bg duration-300 h-10 w-10 flex items-center justify-center border border-neutral-300 rounded-full ">
                                            <i className="fa-brands fa-facebook-f group-hover:text-white"></i>
                                        </div>
                                        {/* twitter */}
                                        <div className="icon group hover:bg-blue-600 transition-bg duration-300 h-10 w-10 flex items-center justify-center border border-neutral-300 rounded-full ">
                                            <i className="fa-brands fa-x-twitter group-hover:text-white"></i>
                                        </div>
                                        {/* insta */}
                                        <div className="icon group hover:bg-blue-600 transition-bg duration-300 h-10 w-10 flex items-center justify-center border border-neutral-300 rounded-full ">
                                            <i className="fa-brands fa-instagram group-hover:text-white"></i>
                                        </div>
                                        {/* yt */}
                                        <div className="icon group hover:bg-blue-600 transition-bg duration-300 h-10 w-10 flex items-center justify-center border border-neutral-300 rounded-full ">
                                            <i className="fa-brands fa-youtube group-hover:text-white"></i>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="map mt-20">
                            <iframe
                                className='w-full lg:w-[calc(100%-50px)] h-[250px]'
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5591642.125572935!2d-118.45027922609367!3d46.81821123121407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5343f19fafa367dd%3A0xe0a08a08122c4da1!2sHelena-Lewis%20and%20Clark%20National%20Forest!5e0!3m2!1sen!2sbd!4v1731480188813!5m2!1sen!2sbd"></iframe>
                        </div>
                    </div>
                    {/* form */}
                    <div className="col-span-12 lg:col-span-6 ps-10">
                        <form className='bg-neutral-50 h-full w-full px-7 py-17 flex flex-col gap-4'>
                            <h4 className="heading-4 font-semibold">Fill Up The Form</h4>
                            <p className="text-neutral-600 max-w-[444px] leading-8">Your email address will not be published. Required fields are marked *</p>

                            {/* Name */}
                            <div className="input-group border-b-[1px] border-neutral-200 focus-within:border-blue-600 px-5 flex gap-4 pt-6">
                                <i className="fa-solid fa-user text-[18px] text-neutral-500"></i>
                                <input type="text" name='name' id='name'
                                    placeholder='Your Name*' className='w-full placeholder:text-neutral-500 pb-6 outline-none text-neutral-800' />
                            </div>
                            {/* email */}
                            <div className="input-group border-b-[1px] border-neutral-200 focus-within:border-blue-600 px-5 flex gap-4 pt-6">
                                <i className="fa-regular fa-envelope text-[18px] text-neutral-500"></i>
                                <input type="email" name='name' id='name'
                                    placeholder='Your Email*' className='w-full placeholder:text-neutral-500 pb-6 outline-none text-neutral-800' />
                            </div>
                            {/* Message */}
                            <div className="input-group border-b-[1px] border-neutral-200 focus-within:border-blue-600 px-5 flex gap-4 pt-6">
                                <i className="fa-solid fa-pen-to-square text-[18px] text-neutral-500"></i>
                                <textarea name='name' id='name'
                                    placeholder='Enter your Message Here' className='w-full placeholder:text-neutral-500 resize-none h-[150px] pb-6 outline-none text-neutral-800' />
                            </div>

                            <Button content={"Get in Touch"} className={"max-w-[190px] mt-10 rounded-none"} icon={"fa-solid fa-paper-plane"} />
                        </form>
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


const addressDetails = [
    { image: "/icons/address.svg", label: "Address Line", description: "Bowery St, New York, 37 USA NY 10013,USA" },
    { image: "/icons/phone.svg", label: "Phone Number", description: "+1255 - 568 - 6523 4374-221 +1255 - 568 - 6523" },
    { image: "/icons/email.svg", label: "Mail Address", description: "email@example.com info@yourdomain.com" },
]