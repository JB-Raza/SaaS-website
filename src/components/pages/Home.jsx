import React from 'react'

import Navbar from '../navbar/Navbar.jsx'
import { Hero, Clients, TaskManagement, Workspace, AutomateTasks, TrackProjects, Testimonial, PricingSection, RevolutionizeServices } from '../sections/index.js'
import { Button } from '../universalComponents/index.js'

export default function Home() {
    return (
        <>
            <div className="hero-section relative">
                <Hero />
            </div>
            {/* our clients saas companies */}
            <Clients />

            {/* task management features */}
            <TaskManagement />

            {/* workspace departments */}
            <Workspace />

            {/* built-in automation */}
            <AutomateTasks />

            {/* track projects */}
            <TrackProjects />

            {/* testimonial section */}
            <Testimonial />

            {/* app integration section */}
            <div className="custom-container my-15 sm:my-30 mx-auto">
                <h3 className="animate-app-integration-heading heading-3 text-center font-semibold mt-4 leading-10 capitalize">Avoid <span className="italic font-normal text-gradient-teal">distractions</span> with app integrations</h3>

                <div className="app-integration relative justify-between h-[500px] max-h-[700px]">

                    <img src="./app-integration/app-integration-center.png" alt="error"
                        className="absolute top-1/2 left-1/2 w-15 h-15 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2"
                    />

                    <div className="relative">
                        <img src="./app-integration/1.png" alt="" className="floating-icons-left absolute left-3 md:left-1/9 w-10 md:w-15 " />
                        <img src="./app-integration/2.png" alt="" className="floating-icons-left absolute translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 w-10 md:w-15" />
                        <img src="./app-integration/3.png" alt="" className="floating-icons-left absolute translate-y-60 md:translate-y-70 left-1 md:left-1/9 w-15 h-15 " />
                        <img src="./app-integration/4.png" alt="" className="floating-icons-right absolute right-3 md:right-1/9 w-10 md:w-15 " />
                        <img src="./app-integration/5.png" alt="" className="floating-icons-right absolute translate-y-30 sm:translate-y-35 md:translate-y-40 right-1/8 md:right-1/5 w-10 md:w-15" />
                        <img src="./app-integration/6.png" alt="" className="floating-icons-right absolute translate-y-60 md:translate-y-70 right-1 md:right-1/9 w-15 h-15" />
                    </div>
                    <Button content={"start free trial"} className={"text-nowrap min-w-[200px]  mx-auto relative top-[calc(100%-60px)] text-white"} icon={"fa-solid fa-cloud-arrow-down"} />
                </div>
            </div>


            {/* pricing section */}
            <div className="wrapper">

                <p className="font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-2 sm:px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                    <span className="text-gradient-teal">Up to </span>
                    <span className="text-yellow-500">70%</span>
                    <span className="text-gradient-teal"> off managed cloud hosting</span>
                </p>
                <PricingSection
                    heading={
                        <h3 className="heading-3 text-center flex flex-col font-semibold mt-4 leading-10 md:leading-15 capitalize">
                            <p className='pricing-elem-animate'>flexible pricing <span className="italic font-normal text-gradient-teal">plan</span>.  that include</p>
                            <p className='pricing-elem-animate'>business</p>
                        </h3>
                    }

                />
            </div>



            {/* revolutionize our services */}
            <RevolutionizeServices />


        </>
    )
}
