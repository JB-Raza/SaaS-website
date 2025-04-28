import React from 'react'
import Button from "../universalComponents/Button.jsx";
import { useTextAnimate } from '../hooks/textAnimation.js';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export default function RevolutionalizeServices() {


    useGSAP(() => [
        gsap.fromTo(".floating-btn ", {
            rotate: 5,
        },
        {
            rotate: -5,
            duration: 3,
            stagger: 0.5,
            yoyo: true,
            repeat: -1,
        }
    )
    ])

    useTextAnimate(".animate-elem-revolution", { start: "top 90%", y: 50 })
    return (
        <div className="custom-container overflow-clip bg-[url(./revolutionize/hill-shape.png)] bg-no-repeat bg-cover mx-auto pt-20 mt-30 relative w-[calc(100%-10px)] md:w-[calc(100%-20px)] rounded-xl px-2 ">

            {/* imgs */}
            <div className="absolute right-[20px] top-[20px]">
                <img src="./revolutionize/person.png" alt="" className="absolute -top-[65%]" />
                <img src="./revolutionize/card.png" alt="" className="opacity-0 lg:opacity-100" />
            </div>

            <p className="font-medium text-white text-wrap text-center capitalize !bg-white/15 mx-auto w-fit px-10 py-2 rounded-full">
                Up to <span className="text-yellow-500">70%</span> off managed cloud hosting
            </p>

            <h2 className="heading-3 text-center font-semibold mt-4 text-white leading-10 md:leading-15">
                <p className='animate-elem-revolution'>Ready to revolutionize</p>
                <p className='animate-elem-revolution'>our service?</p>
            </h2>

            <Button content={"Download for free"} className={"text-white mx-auto my-10"} />

            {/* all floating buttons */}
            <div className="flex items-center mt-20 flex-wrap gap-5 justify-center">
                <span className="floating-btn px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium text-white">Project management</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-green-400 font-medium">Technology</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Technology</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-yellow-500 font-medium">Technology</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-orange-500 font-medium">Technology</span>
                <span className="floating-btn px-10 py-2 rounded-full  bg-green-400 font-medium">Project management</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
                <span className="floating-btn px-10 py-2 rounded-full bg-pink-600 font-medium">Technology</span>
            </div>
        </div>
    )
}
