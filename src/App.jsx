// css
import "./App.css"
import React, { useState } from 'react'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


// swiper css
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/free-mode";

// components
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import TaskManagement from './components/sections/TaskManagement.jsx'


function App() {

  let [activeDepart, setActiveDepart] = useState("all teams")
  return (
    <>
      {/* <div className="hero-section relative">
        <Navbar />
        <Hero />
      </div> */}

      {/* our clients saas companies */}
      {/* <div className="clients-section flex gap-10 justify-center py-10 my-15">
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
      </div> */}

      {/* task management features */}
      {/* <TaskManagement /> */}

      <div className="workplaces-section py-28 bg-[linear-gradient(270deg,#20BA8B_0%,#06766E_100%)] w-full">

        <p className="font-medium capitalize !bg-white mx-auto w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
          <span className="text-gradient-teal">Up to </span>
          <span className="text-yellow-500">70%</span>
          <span className="text-gradient-teal"> off managed cloud hosting</span>
        </p>

        <h2 className="heading-2 text-center text-white font-bold mt-4 leading-10">Essential for <span className="italic font-normal">workplaces</span>. Great for <br /> any team.</h2>
        <p className="text-neutral-300 font-medium text-[18px] text-center mx-auto mt-10 px-3 leading-loose">Sassly-CRM in the past allowing you to focus more on your business <br /> simply enjoy your newfound legal time to reflect leaving</p>

        {/* department container */}
        <div className="w-[1300px] mx-auto p-7 mt-10 border-[1px] border-white/20 rounded-xl">
          <div className="department-container rounded-2xl grid grid-cols-12">

            <div className="col-span-3 flex justify-center items-stretch max-w-[330px] ms-3 mb-7">
              <div className="left-section bg-neutral-100 w-full rounded-2xl mt-15">
                <div className="logo mx-7 mt-4 mb-20">
                  <img src="./logo-two.png" alt="" />
                </div>
                {/* all department btns */}
                <div className="flex flex-col">
                  {/* teams btn */}
                  <button
                    onClick={() => setActiveDepart("all teams")}
                    className={`${activeDepart == "all teams" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                    <i class="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                    <span>All Teams</span>
                  </button>

                  {/* security btn */}
                  <button
                    onClick={() => setActiveDepart("security")}
                    className={`${activeDepart == "security" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                    <i class="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                    <span>Security</span>
                  </button>

                  {/* technology btn */}
                  <button
                    onClick={() => setActiveDepart("technology")}
                    className={`${activeDepart == "technology" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                    <i class="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                    <span>Technology</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-9 my-7 px-7 pt-7">
              <div className="">
                <img src="./workplace-tab-thumb.png" alt="workspace img" className="ms-auto" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
