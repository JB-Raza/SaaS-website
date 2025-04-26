// css
import "./App.css"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'


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
import RevolutionalizeServices from "./components/sections/RevolutionalizeServices.jsx";

// // gsap animations
// import gsap from 'gsap'
// import {useGSAP} from '@gsap/react'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

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
        <RevolutionalizeServices />


      {/* footer */}
      <Footer />
    </>
  )
}

export default App
