import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IntegrationCard } from '../../universalComponents/index.js'
import { useTextAnimate } from '../../../hooks/textAnimation.js'
import { Button, FaqList } from '../../universalComponents/index.js'
import { RevolutionizeServices } from '../../sections/index.js'

import { Counter } from '../../universalComponents/Counter.jsx'


export default function AppIntegration() {

    useGSAP(() => {
        gsap.to(".floating-icons-left", {
            scale: .5,
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
        })
        gsap.to(".floating-icons-right", {
            transform: "translateY(-15%)",
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
        })
    })

    useTextAnimate(".animate-app-integration-elem")

    return (
        <div>
            {/* hero section */}
            <section className="bg-[var(--iceBlue)] pt-20 md:pt-[230px]">
                <div className="custom-container pb-0 mx-auto pt-[64px]">
                    <h1 className="animate-app-integration-elem heading-1 text-center font-semibold mt-10 leading-10 capitalize">app integration</h1>
                    <p className="animate-app-integration-elem px-3 text-center text-neutral-500 max-w-[500px] mx-auto mt-10 leading-loose">Create tasks with various custom statuses to focus more on your keep track of the progress of each why</p>
                    <div className="relative justify-between -translate-y-1/4">

                        <div className="relative app-integration h-[400px] md:h-[550px] flex items-center">

                            <img loading="lazy" src="./app-integration/app-integration-center.png" alt="error"
                                className="absolute top-1/2 left-1/2 w-20 h-20 md:w-23 md:h-23 -translate-x-1/2 lg:translate-y-1/2"
                            />
                            <img loading="lazy" src="./app-integration/1.png" alt="" className="w-15 floating-icons-left absolute top-1/4 left-3 md:left-1/9 md:w-20 " />
                            <img loading="lazy" src="./app-integration/5.png" alt="" className="w-15 floating-icons-left absolute top-1/4 translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 md:w-20" />
                            <img loading="lazy" src="./app-integration/6.png" alt="" className="w-15 floating-icons-left absolute top-1/4 translate-y-60 md:translate-y-80 left-1 md:left-1/9 md:w-20" />
                            <img loading="lazy" src="./app-integration/2.png" alt="" className="w-15 floating-icons-right absolute top-1/5 right-3 md:right-1/15 md:w-23" />
                            <img loading="lazy" src="./app-integration/3.png" alt="" className="w-15 floating-icons-right absolute top-1/2 right-1/8 md:right-1/5 md:w-20" />
                            <img loading="lazy" src="./app-integration/4.png" alt="" className="w-15 floating-icons-right absolute bottom-1/12 right-1 md:right-1/4 md:w-20" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="custom-container mx-auto py-20">
                <h3 className="animate-app-integration-elem heading-3 text-center capitalize font-bold max-w-[600px] mx-auto">Seamless Integration for enhancing experience</h3>
                <p className="animate-app-integration-elem text-center text-neutral-500 max-w-[500px] mx-auto mt-4 leading-loose">Create tasks with various custom statuses to focus more on your keeptrack of the progress of each why</p>

                <div className="grid grid-cols-12 mt-10 shadow-lg">
                    {/* card column */}
                    {(integrationData || []).map((item, i) => (
                        <IntegrationCard key={i} data={item} />
                    ))}
                </div>
            </section>


            {/* no of clients world wide */}
            <section className="bg-[var(--iceBlue)] py-[115px] my-10">
                <div className="custom-container mx-auto">
                    <p className='animate-app-integration-elem text-center max-w-[160px] py-1 mx-auto font-medium bg-white border border-green-400 rounded-full text-gradient-teal'>What we offering</p>
                    <h3 className="animate-app-integration-elem heading-3 text-center capitalize leading-15 font-bold max-w-[640px] mt-7 mx-auto">Trusted by <span className='text-gradient-teal'>3+ million</span> website owners worldwide</h3>

                    <div className="flex justify-between gap-10 flex-col sm:flex-row border py-10 my-10 border-neutral-300">
                        <Counter target={282} symbol='+' label="worldwide clients" />
                        <Counter target={95} symbol='%' label="Satisfied Clients" />
                        <Counter target={282} symbol='+' label="worldwide clients" />

                    </div>
                </div>

            </section>

            <div className="custom-container py-30 mx-auto">
                <img loading="lazy" src="/app-integration/integration-page/integration-bg.png" alt="bg image" />
                <h3 className="animate-app-integration-elem max-w-[690px] px-2 mx-auto heading-3 text-center font-semibold mt-10 leading-10 capitalize">Driven your business today next level by sasstech</h3>

                <div className="flex gap-4 justify-center my-10">
                    <Button content={"Get Started Trial"}
                        bgColor='bg-blue-600'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white min-w-[170px] rounded-xl !h-14"}
                    />
                    <Button content={"Get Started Trial"}
                        bgColor='bg-[var(--darkIndigo)]'
                        hoverBg='bg-blue-600'
                        className={"text-white min-w-[170px] rounded-xl !h-14"}
                    />
                </div>

            </div>

            {/* Faq section */}
            <div className="custom-container overflow-hidden mx-auto py-30">
                <div className="grid grid-cols-12 gap-20 px-3">
                    {/* col 1 */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4 items-start">
                        <p className="animate-app-integration-elem bg-neutral-100 py-2 px-4 font-medium rounded-full">Up to <span className='text-yellow-500'>70%</span> off managed cloud hosting</p>
                        <h3 className="animate-app-integration-elem heading-3 font-bold capitalize">Frequently ask <span className='font-normal italic'>Questions</span></h3>
                        <p className="animate-app-integration-elem text-neutral-500 max-w-[330px] mt-3 leading-loose">Create tasks with various custom statuses to focus more on your keep track of the progress of each why in</p>

                        <Button
                            content={"Get Started Trial"}
                            bgColor='bg-[var(--darkIndigo)]'
                            hoverBg='bg-blue-600'
                            className={"animate-app-integration-elem text-nowrap min-w-[175px] mt-5 rounded-xl font-medium"}
                        />
                    </div>

                    {/* col 2 */}
                    <div className="col-span-12 max-w-screen md:col-span-7 flex flex-col">
                        <FaqList />
                    </div>
                </div>
            </div>


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




const integrationData = [
    { img: "/app-integration/integration-page/1.png", heading: "Hubspot Contacts Sync", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/2.png", heading: "Spotify Online Platform", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/3.png", heading: "Dropbox Streaming", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/4.png", heading: "Google Photos Social Medea", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/5.png", heading: "Zapier Social Media", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/6.png", heading: "Slack Contacts Sync", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/7.png", heading: "Shopify Contacts Sync", description: "Build online communities with effective audience communication with various track" },
    { img: "/app-integration/integration-page/8.png", heading: "Github integration", description: "Build online communities with effective audience communication with various track" },
]


