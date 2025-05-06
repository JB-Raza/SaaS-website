import React from 'react'

import { Hero, Clients, TaskManagement, Workspace, AutomateTasks, TrackProjects, Testimonial, PricingSection, AppIntegrationSection, RevolutionizeServices } from '../sections/index.js'
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
            <AppIntegrationSection />



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
            <RevolutionizeServices>
                <Button content={"Download for free"} className={"text-white mx-auto my-10 min-w-[200px]"} />
            </RevolutionizeServices>


        </>
    )
}
