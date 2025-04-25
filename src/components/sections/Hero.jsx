import React from 'react'
import Button from '../universalComponents/Button.jsx'


export default function Hero() {
  return (
    <div className="grid grid-cols-12 gap-y-10 sm:y-16 pt-56 pb-36 overflow-clip">
              {/* content section */}
              <div className="col-span-12 sm:col-span-8 md:col-span-6 flex justify-center flex-col gap-7 !px-3">
    
                <h1 className="text-white capitalize hero-heading font-bold perspective-dramatic text-wrap">
                <span>Simplify task</span> <span className='italic !font-normal text-gradient-teal'>management</span> and <span>prioritize work</span>
                </h1>
                <p className="text-white text-[18px] font-normal px-3 leading-loose">Sassly-<span className='text-amber-400'>CRM</span> in the past allowing you to focus more on your business or simply enjoy your newfound legal time to reflect leaving</p>
    
                <Button content={"Start Free Trial"} icon={"fa-solid fa-cloud-arrow-down"} className={" w-[240px] py-5 text-white bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)]"} />
    
                {/* free trial */}
                <div className="flex flex-col xs:flex-row gap-6 items-center">
    
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
                 className="hero-img lg:max-w-[55%] lg:absolute bottom-0 right-0" />
              </div>
    
    
            </div>
    
  )
}
