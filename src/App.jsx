// css
import "./App.css"
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'


// swiper css
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import 'swiper/css/pagination';

// components
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import TaskManagement from './components/sections/TaskManagement.jsx'
import Workspace from './components/sections/Workspace.jsx'
import AutomateTasks from './components/sections/AutomateTasks.jsx'
import TrackProjects from "./components/sections/TrackProjects.jsx";
import Testimonial from "./components/sections/Testimonial.jsx";
import Button from "./components/universalComponents/Button.jsx";
import Pricing from "./components/sections/Pricing.jsx";
import Footer from './components/sections/Footer.jsx'

function App() {

  return (
    <>
      <div className="hero-section relative">
        <Navbar />
        <Hero />
      </div>

      {/* our clients saas companies */}
      <div className="clients-section overflow-clip flex gap-10 justify-center py-10 my-15">
        <div className="relative clients custom-container mx-auto">
          <h5 className="text-center mb-16 font-semibold line-clamp-2 heading-4">Loved by next-gen B2B <span className='text-gradient-teal'>SaaS</span> companies.....</h5>

          <Swiper
            className="swiper"
            modules={[FreeMode, Autoplay]}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              200: { slidesPerView: 1 },
              350: { slidesPerView: 2 },
              500: { slidesPerView: 3 },
              700: { slidesPerView: 4 },
              900: { slidesPerView: 5 },
              1050: { slidesPerView: 6 },
            }}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            freeMode={true}
          >
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img1.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img2.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img3.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img4.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img5.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img6.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img7.png" alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="!flex !justify-center" >
              <img src="./saas-companies/brand-three-img1.png" alt="img1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

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
      <h2 className="heading-2 text-center font-semibold mt-4 leading-10 capitalize">Avoid <span className="italic font-normal text-gradient-teal">distractions</span> with app integrations</h2>

      <div className="app-integration relative justify-between h-[500px] max-h-[700px]">

          <img src="./app-integration/app-integration-center.png" alt="error"
            className="absolute top-1/2 left-1/2 w-15 h-15 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative">
            <img src="./app-integration/1.png" alt="" className="absolute left-3 md:left-1/9 w-10 md:w-15 " />
            <img src="./app-integration/2.png" alt="" className="absolute translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 w-10 md:w-15" />
            <img src="./app-integration/3.png" alt="" className="absolute translate-y-60 md:translate-y-70 left-1 md:left-1/9 w-15 h-15 " />
            <img src="./app-integration/4.png" alt="" className="absolute right-3 md:right-1/9 w-10 md:w-15 " />
            <img src="./app-integration/5.png" alt="" className="absolute translate-y-30 sm:translate-y-35 md:translate-y-40 right-1/8 md:right-1/5 w-10 md:w-15" />
            <img src="./app-integration/6.png" alt="" className="absolute translate-y-60 md:translate-y-70 right-1 md:right-1/9 w-15 h-15 " />
          </div>
          <Button content={"start free trial"} className={"text-nowrap absolute bottom-0 left-1/2 -translate-x-1/2 text-white px-12 !py-5"} icon={"fa-solid fa-cloud-arrow-down"} />
        </div>
        </div>


      {/* pricing section */}
      <Pricing />


      {/* revolutionize our services */}
        <div className="custom-container bg-[url(./revolutionize/hill-shape.png)] bg-no-repeat bg-cover mx-auto pt-20 mt-30 relative w-[calc(100%-10px)] md:w-[calc(100%-20px)] rounded-xl px-2 ">

          {/* imgs */}
          <div className="absolute right-[20px] top-[20px]">
            <img src="./revolutionize/person.png" alt="" className="absolute -top-[65%]" />
            <img src="./revolutionize/card.png" alt="" className="opacity-0 lg:opacity-100" />
          </div>

          <p className="font-medium text-white text-wrap text-center capitalize !bg-white/15 mx-auto w-fit px-10 py-2 rounded-full">
            Up to <span className="text-yellow-500">70%</span> off managed cloud hosting
          </p>

          <h2 className="heading-3 text-center font-semibold mt-4 text-white leading-10 md:leading-10 md:leading-15">Ready to revolutionize <br /> our service?</h2>

          <Button content={"Download for free"} className={"text-white mx-auto my-10"} />

          {/* all floating buttons */}
          <div className="flex items-center mt-20 flex-wrap gap-5 justify-center">
            <span className="px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium text-white">Project management</span>
            <span className="px-10 py-2 rounded-full bg-green-400 font-medium">Technology</span>
            <span className="px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Technology</span>
            <span className="px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
            <span className="px-10 py-2 rounded-full bg-yellow-500 font-medium">Technology</span>
            <span className="px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
            <span className="px-10 py-2 rounded-full bg-orange-500 font-medium">Technology</span>
            <span className="px-10 py-2 rounded-full  bg-green-400 font-medium">Project management</span>
            <span className="px-10 py-2 rounded-full bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] font-medium">Project management</span>
            <span className="px-10 py-2 rounded-full bg-pink-600 font-medium">Technology</span>
          </div>
        </div>


      {/* footer */}
      <Footer />
    </>
  )
}

export default App
