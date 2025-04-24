import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

// swiper css
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import 'swiper/css/pagination';


export default function TrackProjects() {
    return (
        <div className="py-10 w-full px-2">

            <p className="font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                <span className="text-gradient-teal">Up to </span>
                <span className="text-yellow-500">70%</span>
                <span className="text-gradient-teal"> off managed cloud hosting</span>
            </p>

            <h2 className="heading-2 text-center font-semibold mt-4 leading-10  capitalize">Plan, execute and <span className="italic font-normal text-gradient-teal">track projects</span>. of <br /> any size</h2>



            <div className="py-10 my-15">

                <Swiper
                    className="mySwiper"
                    modules={[FreeMode, Autoplay, Pagination]}
                    spaceBetween={20}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination',
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                    breakpoints={{
                        200: { slidesPerView: 1 },
                        500: { slidesPerView: 2 },
                        700: { slidesPerView: 3 },
                        900: { slidesPerView: 4 },
                    }}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                >
                    <SwiperSlide >
                        <div className="card col-span-3 flex flex-col">
                            <img src="./plan-and-tracking/1.png" alt="project 1" className="w-full max-w-300px" />
                            <h3 className="capitalize heading-6 font-bold text-center my-4">project management</h3>
                            <p className="text-neutral-600 text-center leading-loose px-3 sm:px-5">Web hosting provides everything you idea online. From where you</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card col-span-3 flex flex-col">
                            <img src="./plan-and-tracking/1.png" alt="project 1" className="w-full max-w-300px" />
                            <h3 className="capitalize heading-6 font-bold text-center my-4">project management</h3>
                            <p className="text-neutral-600 text-center leading-loose px-3 sm:px-5">Web hosting provides everything you idea online. From where you</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card col-span-3 flex flex-col">
                            <img src="./plan-and-tracking/1.png" alt="project 1" className="w-full max-w-300px" />
                            <h3 className="capitalize heading-6 font-bold text-center my-4">project management</h3>
                            <p className="text-neutral-600 text-center leading-loose px-3 sm:px-5">Web hosting provides everything you idea online. From where you</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card col-span-3 flex flex-col">
                            <img src="./plan-and-tracking/1.png" alt="project 1" className="w-full max-w-300px" />
                            <h3 className="capitalize heading-6 font-bold text-center my-4">project management</h3>
                            <p className="text-neutral-600 text-center leading-loose px-3 sm:px-5">Web hosting provides everything you idea online. From where you</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card col-span-3 flex flex-col">
                            <img src="./plan-and-tracking/1.png" alt="project 1" className="w-full max-w-300px" />
                            <h3 className="capitalize heading-6 font-bold text-center my-4">project management</h3>
                            <p className="text-neutral-600 text-center leading-loose px-3 sm:px-5">Web hosting provides everything you idea online. From where you</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="custom-swiper-pagination mt-20 flex justify-center gap-3"></div>
            </div>

        </div>
    )
}
