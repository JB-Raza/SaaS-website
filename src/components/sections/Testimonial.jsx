import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


// swiper css
import 'swiper/css';
import { useTextAnimate } from '../../hooks/textAnimation.js'



export default function Testimonial() {

useTextAnimate(".animate-img-scaleUp", {fromScale: 0, y: 0, start: "top 90%"})
useTextAnimate(".animate-slide-testinomial", {y: 100, start: "top 90%"})

    return (
        <div className="grid max-w-[1200px] bg-[#06766E] grid-cols-12 py-15 px-3 sm:px-6 mx-auto w-[calc(100%-10px)] sm:w-[calc(100%-30px)] rounded-xl">
            {/* col 1 */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <img
                    className="mx-auto animate-img-scaleUp"
                    src="./testimonial/testimonials-three-thumbs.png" alt="" />
            </div>
            {/* col 2 swiper */}
            <Swiper className="col-span-12 md:col-span-7 lg:col-span-8 mt-10 md:mt-0 overflow-clip w-full"
                slidesPerView={1}
                grabCursor={true}
            >
                {(testimonialData || []).map((slide, index) => (

                <SwiperSlide key={index} className="animate-slide-testinomial !flex flex-col gap-7 items-start px-2 sm:px-4 md:pe-15">
                    {/* rating */}
                    <img src={slide.rating} alt="" />

                    <p className="heading-4 line-clamp-3 font-normal text-neutral-100 text-wrap">{slide.comment}</p>
                    <hr className="border-t-[1px] border-white/20 mt-5 w-full" />
                    <div className="card flex gap-7 items-center bg-white/10 px-7 py-2">
                        <img src={slide.avatar} alt="client" />
                        <div>
                            <h5 className="text-[20px] font-semibold text-white">{slide.author}</h5>
                            <p className="font-semibold text-white"> <span className="text-green-400">CEO</span> and Founder</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}

              
            </Swiper>
        </div>
    )
}


const testimonialData = [
    {avatar: "./testimonial/client-img.png", rating: "./testimonial/ratings.svg", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur illo animi laboriosam dolorum veritatis officia quis dolorem quos distinctio.", author: "Tom Hiddleson"},
    {avatar: "./testimonial/client-img.png", rating: "./testimonial/ratings.svg", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur illo animi laboriosam dolorum veritatis officia quis dolorem quos distinctio.", author: "Tom Hiddleson"},
]