import React from 'react'
import Button from '../../universalComponents/Button.jsx'
import { RevolutionizeServices, PricingSection } from '../../sections/index.js'
import { useTextAnimate } from '../../../hooks/textAnimation.js'

export default function Pricing() {

    useTextAnimate(".animate-contact-heading")

    return (
        <div className='max-w-screen'>
            <div className="contact-hero bg-[#F3F8F8] custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                <img src="./simple-logo.png" alt="logo..." />
                <h1 className="animate-contact-heading heading-1 capitalize font-bold text-center">Pricing Package</h1>
            </div>

            {/* pricing section 2 */}
            <section className='py-20'>
                <PricingSection pricingCardData={pricingCardData}
                    heading={
                        <h3 className="heading-3 text-center flex max-w-[640px] mx-auto flex-col font-semibold mt-4 leading-10 md:leading-12 capitalize">
                            Seamless Integration for enhancing experience
                        </h3>
                    }
                    descriptionPara={"Create tasks with various custom statuses to focus more on your keep track of the progress of each why in"}
                />
            </section>

            {/* pricing section 3 */}
            <section className='bg-[#F3F8F8] py-20'>
                <PricingSection pricingCardData={pricingCardData} cardClassNames={"bg-[url(/half-moon-shape.png)] hover:bg-[url(/half-moon-shape.png)] bg-no-repeat bg-[center_40px] rounded-3xl bg-white hover:bg-[#072032] transition-all duration-200 hover:text-white"}

                    heading={
                        <h3 className="heading-3 text-center flex flex-col font-semibold mt-4 leading-10 md:leading-12 capitalize">
                            <p className='pricing-elem-animate'>Trusted By <span className="text-gradient-teal">3+ million</span>. website owners</p>
                            <p className='pricing-elem-animate'>worldwide</p>
                        </h3>
                    }
                    descriptionPara={"In today's competitive business, the demand for efficient In today's competitivecost-effective IT solutions has never been more critic. business"}
                />
            </section>


            {/* pricing section 4 */}
            <section className='py-20'>
                <p className="text-center max-w-[200px] text-gradient-teal mx-auto font-medium capitalize">what we offering</p>
                <div className="py-10 custom-container mx-auto w-full px-2 sm:px-4">

                    <h3 className="heading-3 text-center flex flex-col font-semibold mt-4 leading-10 md:leading-12 capitalize">
                        <p className='pricing-elem-animate'>Trusted By <span className="text-gradient-teal">3+ million</span>. website owners</p>
                        <p className='pricing-elem-animate'>worldwide</p>
                    </h3>

                    <p className="pricing-elem-animate text-neutral-500 mt-5 leading-loose font-medium max-w-[570px] text-center mx-auto">In today's competitive business, the demand for efficient In today's competitive cost-effective IT solutions has never been more critic. business</p>


                    <div className="grid gap-5 grid-cols-12 mt-15">
                        {/* plans */}
                        {(pricingCardData || []).map((data, i) => (
                               <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className={`card max-w-[450px] mx-auto hover:bg-white hover:shadow-2xl transition-background duration-200 bg-neutral-100 px-8 py-14 rounded-md border border-neutral-300`}>
                                    <div className="flex justify-between">
                                        <span className={`bg-blue-600 ${i == 0 ? "bg-blue-600" : i == 1 ? "bg-orange-600" : "bg-emerald-600"} text-white py-2 px-4 rounded-md`}>Regular</span>
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
                                        <Button content={"Choose Plan"}
                                            icon={"fa fa-arrow-up rotate-[45deg]"}
                                            className={"capitalize card-text-animate w-full mt-10 text-white !rounded-3xl !py-4"} />
                                        <p className="text-neutral-600 font-medium text-center">No credit card required</p>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>

                </div>
            </section>



            <RevolutionizeServices />
        </div>
    )
}


const addressDetails = [
    { image: "/icons/address.svg", label: "Address Line", description: "Bowery St, New York, 37 USA NY 10013,USA" },
    { image: "/icons/phone.svg", label: "Phone Number", description: "+1255 - 568 - 6523 4374-221 +1255 - 568 - 6523" },
    { image: "/icons/email.svg", label: "Mail Address", description: "email@example.com info@yourdomain.com" },
]


let pricingCardData = [
    {
        title: "Basic Plan",
        annualPrice: 1.99,
        monthlyRenewFee: 9.88,
        benefits: [
            "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
        ]
    },
    {
        title: "Premium Plan",
        annualPrice: 9.99,
        monthlyRenewFee: 9.88,
        benefits: [
            "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
        ]
    },
    {
        title: "Pro Plan",
        annualPrice: 19.99,
        monthlyRenewFee: 9.88,
        benefits: [
            "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
        ]
    },
]