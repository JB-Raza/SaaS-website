import React, { useEffect, useRef } from 'react'
import Button from '../universalComponents/Button.jsx'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTextAnimate } from '../../hooks/textAnimation.js'

gsap.registerPlugin(ScrollTrigger)


export default function Hero() {

  useTextAnimate(".hero-animated-data", { start: "top 80%", y: 50 })

  // all hero animations
  useGSAP(() => {
    gsap.from(".hero-title-span", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.2,
    })
    gsap.from(".hero-img", {
      x: "30%",
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      stagger: 0.2,
    })
  })

  return (
    <div className="grid custom-container mx-auto grid-cols-12 gap-y-10 sm:y-16 pt-70 pb-36 overflow-clip">
      {/* content section */}
      <div className="col-span-12 sm:col-span-8 md:col-span-6 flex justify-center flex-col gap-7 !px-3">

        <h1 className="text-white capitalize leading-none heading-1 font-[700] text-wrap flex flex-col">

          <span className='hero-title-span'>Simplify task</span>
          <span className="hero-title-span"><span className='italic !font-[400] text-gradient-teal'>management</span> and</span>
          <span className='hero-title-span'>prioritize work</span>
        </h1>

        <p className="text-white text-[18px] font-normal px-3 leading-loose">
          <span className="hero-animated-data">Sassly-<span className='text-amber-400'>CRM</span> in the past allowing you to focus more on your business or simply</span>
          <span className="hero-animated-data"> enjoy your newfound legal time to reflect leaving</span>
        </p>

        <Button content={"Start Free Trial"} icon={"fa-solid fa-cloud-arrow-down"} className={" w-[240px] py-5 text-white bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)]"} />

        {/* free trial */}
        <div className="flex hero-animated-data flex-col xs:flex-row gap-6 items-center">

          <span className='text-normal flex gap-2 items-center text-[17px] text-white'>
            <i className="fa-solid fa-check text-[13px] font-normal text-white bg-white/10 p-2 rounded-full leading-1"></i>
            3-Day Free Trial
          </span>
          <span className='text-normal flex gap-2 items-center text-[17px] text-white'>
            <i className="fa-solid fa-check text-[13px] font-normal text-white bg-white/10 p-2 rounded-full leading-1"></i>
            No Credit Card
          </span>
        </div>

      </div>
      {/* hero image section */}
      <div className="col-span-12 lg:col-span-6 flex justify-end p-0">
        <img src="./hero-main-laptop.png" alt="./hero-main-laptop.png"
          className="hero-img lg:max-w-[55%] w-auto lg:w-[900px] lg:absolute bottom-0 right-0" />
      </div>


    </div>

  )
}
