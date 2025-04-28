// css
import "./App.css"
import React, { useEffect } from 'react'

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
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Clients from "./components/sections/Clients.jsx";
import { useTextAnimate } from "./components/hooks/textAnimation.js"


function App() {

  useTextAnimate(".animate-app-integration-heading", {start: "top 90%"})


  // custom cursor
  useGSAP(() => {
    const trackCursor = (e) => {
      gsap.to(".cursor-circle", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: "power1.out"
      })
      gsap.to(".cursor-dot", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power1.out',
      })
    }

    // floating icons animations in app integration section
    gsap.from(".floating-icons-left", {
      scale: 1.5,
      duration: 3,
      ease: "power2.out",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    })
    gsap.from(".floating-icons-right", {
      top: 15,
      duration: 2,
      srub: 1,
      ease: "power2.out",
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    })

    document.addEventListener("mousemove", trackCursor)
    return () => document.removeEventListener("mousemove", trackCursor)
  }, [])


  return (
    <>
      {/* custom cursor */}

        <div
          className="cursor-circle mix-blend-difference -translate-x-1/2 -translate-y-1/2 fixed top-0 left-0 h-8 w-8 border border-neutral-300 rounded-full pointer-events-none"
          style={{ zIndex: 300 }}
        ></div>

        <div
          className="cursor-dot fixed top-0 left-0 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 mix-blend-color-dodge pointer-events-none"
          style={{ zIndex: 301 }}
        ></div>




      <div className="hero-section bg-white relative">

        <Navbar />
        <Hero />
      </div>

      {/* our clients saas companies */}
      <Clients />

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
        <h2 className="animate-app-integration-heading heading-2 text-center font-semibold mt-4 leading-10 capitalize">Avoid <span className="italic font-normal text-gradient-teal">distractions</span> with app integrations</h2>

        <div className="app-integration relative justify-between h-[500px] max-h-[700px]">

          <img src="./app-integration/app-integration-center.png" alt="error"
            className="absolute top-1/2 left-1/2 w-15 h-15 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative">
            <img src="./app-integration/1.png" alt="" className="floating-icons-left absolute left-3 md:left-1/9 w-10 md:w-15 " />
            <img src="./app-integration/2.png" alt="" className="floating-icons-left absolute translate-y-30 sm:translate-y-35 md:translate-y-40 left-1/8 md:left-1/5 w-10 md:w-15" />
            <img src="./app-integration/3.png" alt="" className="floating-icons-left absolute translate-y-60 md:translate-y-70 left-1 md:left-1/9 w-15 h-15 " />
            <img src="./app-integration/4.png" alt="" className="floating-icons-right absolute right-3 md:right-1/9 w-10 md:w-15 " />
            <img src="./app-integration/5.png" alt="" className="floating-icons-right absolute translate-y-30 sm:translate-y-35 md:translate-y-40 right-1/8 md:right-1/5 w-10 md:w-15" />
            <img src="./app-integration/6.png" alt="" className="floating-icons-right absolute translate-y-60 md:translate-y-70 right-1 md:right-1/9 w-15 h-15 " />
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
