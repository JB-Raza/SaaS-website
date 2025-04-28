import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem.jsx'

// gsap
import gsap from 'gsap'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFixed, setIsFixed] = useState(false)

  const navbarRef = useRef()
  const sideBarRef = useRef()
  const sideBarToggleBtn = useRef()


  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 20) setIsFixed(true)
      else setIsFixed(false)
    }
    function closeSideBar(e) {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target) && sideBarToggleBtn.current && !sideBarToggleBtn.current.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    }
    window.addEventListener("click", closeSideBar)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('click', closeSideBar)
    }
  }, [])

  // navbar animation from top
  useEffect(() => {
    if (isFixed) {
      gsap.from(navbarRef.current, {
        y: -100,
        duration: 0.4,
        ease: "power1.out",
      })
    }
    else{
      gsap.from(navbarRef.current, {
        y: 0,
      })
    }
  }, [isFixed])

  // disabling scroll on sidebar open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])


  return (
    <header className={`py-5 relative z-50 mx-auto ${isFixed ? "" : "px-3"}`}>
      <nav ref={navbarRef} className={`rounded-md px-6 ${isFixed ? "fixed top-0 left-0 z-50 bg-[#0f6555] right-0 rounded-none" : "absolute left-3 right-3 bg-white/5 max-w-[1350px] mx-auto"}`}>
        <div className="custom-container mx-auto flex justify-between items-center">

          {/* logo */}
          <div className="navbar-brand py-6">
            <a href='#'>
              <img className='hover:-translate-y-1 duration-300' src="./logo-white-two.png" alt="logo" /></a>
          </div>
          {/* nav links */}

          {/* nav items row */}
          <ul ref={sideBarRef} className={`fixed z-50 top-0 left-0 h-screen sm:w-[300px] w-[250px] flex flex-col justify-start bg-white px-6
         transform-[translateX(-100%)] duration-300 ${isSidebarOpen ? "transform-[translateX(0)]" : ""} 
         lg:static lg:flex-row lg:h-auto lg:w-auto lg:transform-[translateX(0)] lg:px-0 lg:bg-transparent lg:gap-[30px] lg:text-white
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

          <button ref={sideBarToggleBtn}
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