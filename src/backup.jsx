


// navbar and nav item

import React, { useEffect, useState, useRef } from 'react'
import NavItem from './NavItem.jsx'


// gsap animations
import gsap from 'gsap'

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFixed, setIsFixed] = useState(false)

  const navbarRef = useRef(null)

  // trigger navbar animation
    useEffect(() => {
    if(isFixed){
      gsap.from(navbarRef.current, {
        y: -200,
        duration: 0.35,
        ease: "power3.out",
      })
    }
  }, [isFixed])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) setIsFixed(true)
      else setIsFixed(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])


  return (
    <header className={`py-7 relative z-50 mx-auto ${isFixed ? "" : "px-3"}`}>
      <nav ref={navbarRef} className={`rounded-md px-6 ${isFixed ? "fixed top-0 left-0 z-50 bg-[#0f6555] right-0 rounded-none" : "absolute left-3 right-3 bg-white/5 max-w-[1350px] mx-auto"}`}>
        <div className="custom-container mx-auto flex justify-between items-center">

          {/* logo */}
          <div className="navbar-brand py-6">
            <a href='#'>
              <img className='hover:-translate-y-1 duration-300' src="./logo-white-two.png" alt="logo" /></a>
          </div>
          {/* nav links */}

          {/* nav items row */}
          <ul className={`fixed z-50 top-0 left-0 h-screen w-[250px] sm:w-[300px] flex flex-col justify-start bg-white px-6
         transform -translate-x-[100%] duration-300 ${isSidebarOpen ? "translate-x-[0%]" : ""} 
         lg:static lg:flex-row lg:h-auto lg:w-auto lg:translate-x-0 lg:px-0 lg:bg-transparent lg:gap-[30px] lg:text-white
        `}>
            {/* btn to close */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="ms-auto absolute right-2 top-2 inline-block lg:hidden w-6 h-6 rounded-full bg-neutral-200 hover:bg-neutral-900 hover:text-white">
              <i className="fa fa-xmark rounded-full"></i>
            </button>
            {/* brand logo */}
            <div className="navbar-brand py-6 mb-[9px] lg:hidden">
              <a href='#'>
                <img className='' src="./logo-blue.png" alt="logo" /></a>
            </div>
            {(navbarData || []).map((item, i) => (
              <NavItem key={i} navTitle={item.navTitle} dropdownItems={item.dropdownItems} isOpen={openDropdown == i} index={i} setIsOpen={setOpenDropdown} />
            ))}

          </ul>


          <div className="actions m-0 flex gap-6 items-center">
            <button className='cursor-pointer font-semibold text-sm hidden xl:flex items-center gap-2 text-white'>
              <i className="fa-regular fa-user text-[rgb(50,244,133)] text-xs"></i>
              Sign in
            </button>
            <button className="hidden rounded-md font-semibold bg-green-400 px-6 py-[14px] lg:flex gap-2 items-center text-nowrap text-[16px]">
              Start Free Trial
              <i className='fa-solid fa-cloud-arrow-down'></i>
            </button>
          </div>

          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className='flex lg:hidden flex-col gap-[7px]'>
            <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
            <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
            <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
          </button>
        </div>

      </nav>
    </header>
  )
}


const navbarData = [
  { navTitle: "Home", dropdownItems: ["item 1", "item 2", "item 3"] },
  { navTitle: "Pages", dropdownItems: ["item 1", "item 2", "item 3"] },
  { navTitle: "Portfolio", dropdownItems: ["item 1", "item 2", "item 3"] },
  { navTitle: "Shop", dropdownItems: ["item 1", "item 2", "item 3"] },
  { navTitle: "Blog", dropdownItems: ["item 1", "item 2", "item 3"] },
  { navTitle: "Contact" },
]



import React from 'react'

export default function NavItem({ navTitle, dropdownItems, className, isOpen, index, setIsOpen }) {

    const toggleDropdown = () => {
        setIsOpen(prev => (prev === index ? null : index));
    };


    return (
        <li
            onClick={toggleDropdown}
            className={`relative transition-all duration-300 h-[60px] ${isOpen ? "h-auto" : ""} lg:py-6 lg:h-[100%] flex flex-col lg:flex-row items-center font-semibold cursor-pointer group text-base ${className}`}>
            <a className='group-hover:-translate-y-1 !py-3 w-full flex gap-2 items-center justify-between lg:justify-start duration-300 m-0 border-b-[1px] lg:border-0 border-slate-200' href="#">
                <span>{navTitle}</span>
                {dropdownItems?.length > 0 &&
                    <i className={`fa fa-angle-down text-[10px] lg:group-hover:rotate-180 duration-200 lg:group-hover:text-blue-600 text-slate-300 ${isOpen ? "rotate-180 duration-300" : ""}`}></i>
                }
            </a>

            {/* dropdown */}
            <ul
                className={`h-[0px] overflow-clip transition-all duration-400 p-2 ${isOpen ? "w-full !block h-full" : "w-full"}
            lg:block lg:absolute  min-w-[190px] top-[100%] left-0 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:h-auto lg:group-hover:visible bg-transparent lg:bg-white text-black lg:shadow-lg rounded-md p-2 z-50 transition duration-300 ease-out 
             lg:translate-y-5 lg:group-hover:-translate-y-1 ${dropdownItems && dropdownItems.length > 0 ? "" : "!hidden"}`}>
                {(dropdownItems || []).map((item, index) => (
                    <li key={index} className="px-4 py-2 rounded-sm border-b-[1px] border-slate-200 lg:border-0 hover:bg-gray-200">{item}</li>
                ))}
            </ul>
        </li>
    )
}

