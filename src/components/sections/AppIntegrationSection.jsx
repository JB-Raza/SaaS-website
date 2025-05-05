import React from 'react'
import { Button } from '../universalComponents/index.js'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function AppIntegrationSection() {


    useGSAP(() => {
        gsap.to(".floating-icons-left", {
            scale: .5,
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
        })
        gsap.to(".floating-icons-right", {
            top: 20,
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
        })
    })

    return (
        <div className="custom-container my-15 sm:my-30 mx-auto">
            <h3 className="animate-app-integration-heading heading-3 text-center font-semibold mt-4 leading-10 capitalize">Avoid <span className="italic font-normal text-gradient-teal">distractions</span> with app integrations</h3>

            <div className="app-integration relative justify-between h-[500px] max-h-[700px]">

                <img src="./app-integration/app-integration-center.png" alt="error"
                    className="absolute top-1/2 left-1/2 w-15 h-15 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2"
                />

                <div className="relative">
                    <img src="./app-integration/1.png" alt="" className="w-15 floating-icons-left absolute left-3 md:left-1/9 md:w-23 " />
                    <img src="./app-integration/5.png" alt="" className="w-15 floating-icons-left absolute translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 md:w-23" />
                    <img src="./app-integration/6.png" alt="" className="w-15 floating-icons-left absolute translate-y-60 md:translate-y-80 left-1 md:left-1/9 md:w-23" />
                    <img src="./app-integration/2.png" alt="" className="w-15 floating-icons-right absolute right-3 md:right-1/9 md:w-23" />
                    <img src="./app-integration/3.png" alt="" className="w-15 floating-icons-right absolute translate-y-30 sm:translate-y-35 md:translate-y-40 right-1/8 md:right-1/5 md:w-23" />
                    <img src="./app-integration/4.png" alt="" className="w-15 floating-icons-right absolute translate-y-60 md:translate-y-80 right-1 md:right-1/4 md:w-23" />
                </div>
                <Button content={"start free trial"} className={"text-nowrap min-w-[200px]  mx-auto relative top-[calc(100%-60px)] text-white"} icon={"fa-solid fa-cloud-arrow-down"} />
            </div>
        </div>
    )
}
