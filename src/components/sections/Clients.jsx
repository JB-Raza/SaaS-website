import React , {useRef} from 'react'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'


// swiper css
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import 'swiper/css/pagination';

// // gsap animations
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)


export default function Clients() {

    const slideRef = useRef()

    useGSAP(() => {
        gsap.from(".swiper-slide", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            scale: 0.5,
            stagger: {
                each: 0.1,
                from: "center",
              },
            scrollTrigger: {
                trigger: ".swiper-slide",
                scroller: "body",
                start: "top 90%",
            }
        })
    })


    return (
        <div className="clients-section overflow-clip flex gap-10 justify-center py-10 my-15">
            <div className="relative clients custom-container w-full mx-auto">
                <h5 className="text-center mb-16 font-semibold line-clamp-2 heading-4 text-wrap">Loved by next-gen B2B <span className='text-gradient-teal'>SaaS</span> companies.....</h5>

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

                    {(clientsData || []).map((client, index) => (

                        <SwiperSlide ref={slideRef} key={index} className="!flex swiper-slide !justify-center md:!justify-start" >
                        <img loading="lazy" src={client.img} alt={client.img} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

const clientsData = [
    {img: "./saas-companies/brand-three-img1.png"},
    {img: "./saas-companies/brand-three-img2.png"},
    {img: "./saas-companies/brand-three-img3.png"},
    {img: "./saas-companies/brand-three-img4.png"},
    {img: "./saas-companies/brand-three-img5.png"},
    {img: "./saas-companies/brand-three-img6.png"},
    {img: "./saas-companies/brand-three-img7.png"},
    {img: "./saas-companies/brand-three-img1.png"},
]
