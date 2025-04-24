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

function App() {

  return (
    <>
      <div className="hero-section relative">
        <Navbar />
        <Hero />
      </div>

      {/* our clients saas companies */}
      <div className="clients-section flex gap-10 justify-center py-10 my-15">
        <div className="container relative">
          <h5 className="text-center mb-16 font-semibold line-clamp-1 heading-4">Loved by next-gen B2B <span className='text-gradient-teal'>SaaS</span> companies.....</h5>

          <Swiper
            className="swiper"
            modules={[FreeMode, Autoplay]}
            spaceBetween={0}
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

    </>
  )
}

export default App
