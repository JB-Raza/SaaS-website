import React, { useEffect, useState } from 'react'
import NavItem from './NavItem.jsx'
import Button from '../universalComponents/Button.jsx'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFixed, setIsFixed] = useState(false)

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
    <header className={`py-8 relative z-50 mx-auto ${isFixed ? "" : "px-3"}`}>
      <nav className={`rounded-md flex justify-between items-center px-6 ${isFixed ? "fixed top-0 left-0 z-50 right-0 bg-[#0f6555] rounded-none" : "absolute left-3 right-3 bg-white/5"}`}>
        {/* logo */}
        <div className="navbar-brand py-6">
          <a href='#'>
            <img className='hover:-translate-y-1 duration-300' src="./logo-white-two.png" alt="logo" /></a>
        </div>
        {/* nav links */}

        {/* nav items row */}
        <ul className={`fixed z-50 top-0 left-0 h-screen sm:w-[300px] w-[250px] flex flex-col justify-start bg-white px-6
         transform -translate-x-[100%] duration-300 ${isSidebarOpen ? "translate-x-0" : ""} 
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
          <button className='cursor-pointer font-semibold text-sm hidden lg:flex items-center gap-2 text-white'>
            <i className="fa-regular fa-user text-[rgb(50,244,133)] text-xs"></i>
            Sign in
          </button>
          <Button content={"Start Free Trial"} className={"hidden lg:flex"} icon={"fa-solid fa-cloud-arrow-down"} />
        </div>

        <button
          onClick={() => setIsSidebarOpen(prev => !prev)}
          className='flex lg:hidden flex-col gap-[7px]'>
          <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
          <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
          <p className="w-8 rounded-2xl h-[3px] bg-white"></p>
        </button>

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
  { navTitle: "Contact", dropdownItems: ["item 1", "item 2", "item 3"] },
]