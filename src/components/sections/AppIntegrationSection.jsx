import React from 'react'
import { Button } from '../universalComponents/index.js'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function AppIntegrationSection({children}) {


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

    return (
        <div className="custom-container my-15 sm:my-30 mx-auto">
            <h3 className="animate-app-integration-heading heading-3 text-center font-semibold mt-4 leading-10 capitalize">Avoid <span className="italic font-normal text-gradient-teal">distractions</span> with app integrations</h3>

            <div className="relative justify-between h-[700px]">

                <img src="./app-integration/app-integration-center.png" alt="error"
                    className="absolute top-1/2 left-1/2 w-20 h-20 md:w-23 md:h-23 -translate-x-1/2 -translate-y-1/2"
                />

                <div className="relative app-integration h-[550px] flex items-center">
                    <img src="./app-integration/1.png" alt="" className="w-15 floating-icons-left absolute top-1/4 left-3 md:left-1/9 md:w-20 " />
                    <img src="./app-integration/5.png" alt="" className="w-15 floating-icons-left absolute top-1/4 translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 md:w-20" />
                    <img src="./app-integration/6.png" alt="" className="w-15 floating-icons-left absolute top-1/4 translate-y-60 md:translate-y-80 left-1 md:left-1/9 md:w-20" />
                    <img src="./app-integration/2.png" alt="" className="w-15 floating-icons-right absolute top-1/5 right-3 md:right-1/15 md:w-23" />
                    <img src="./app-integration/3.png" alt="" className="w-15 floating-icons-right absolute top-1/2 right-1/8 md:right-1/5 md:w-20" />
                    <img src="./app-integration/4.png" alt="" className="w-15 floating-icons-right absolute bottom-1/12 right-1 md:right-1/4 md:w-20" />
                </div>
                <Button content={"start free trial"} className={"text-nowrap min-w-[200px] mx-auto text-white"} icon={"fa-solid fa-cloud-arrow-down"} />
                {children}
            </div>
        </div>
    )
}
