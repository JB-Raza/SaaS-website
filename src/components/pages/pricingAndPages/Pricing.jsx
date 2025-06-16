import React from 'react'
import { PricingCard_2, PricingCard_3, Button } from '../../universalComponents/index.js'
import { RevolutionizeServices, PricingSection } from '../../sections/index.js'
import { useTextAnimate } from '../../../hooks/textAnimation.js'

export default function Pricing() {

    useTextAnimate(".animate-contact-heading")

    return (
        <div className='max-w-screen'>
            <div className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-contact-heading heading-1 capitalize font-bold text-center">Pricing Package</h1>
                </div>
            </div>


            {/* pricing section 2 */}
            <section className='py-20'>
                <PricingSection pricingCardData={pricingCardData}
                    btnBg={"bg-blue-600"} hoverBtnBg={"bg-[var(--darkIndigo)]"}
                    heading={
                        <h3 className="heading-3 text-center flex max-w-[640px] mx-auto flex-col font-semibold mt-4 leading-10 md:leading-12 capitalize">
                            Seamless Integration for enhancing experience
                        </h3>
                    }
                    descriptionPara={"Create tasks with various custom statuses to focus more on your keep track of the progress of each why in"}
                />
            </section>

            {/* pricing section 3 */}
            <section className='py-20 bg-[var(--iceBlue)]'>
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
                            <PricingCard_2 key={i} data={data} index={i} />
                        ))}



                    </div>

                </div>
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
                            <PricingCard_3 key={i} data={data} index={i} />
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