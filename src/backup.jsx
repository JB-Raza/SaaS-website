import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem.jsx'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isFixed, setIsFixed] = useState(false)
  const [windowWidth, setWindowWdith] = useState(0)

  const navbarRef = useRef()
  const sideBarRef = useRef()
  const sideBarToggleBtn = useRef()



  // navbar animation from top
  useEffect(() => {
    if (isFixed) {
      gsap.fromTo(navbarRef.current, { y: -200 }, 
        {
        y: 0,
        duration: 0.4,
        delay: -0.1,
        ease: "power1.out",
      })
    }
    // else {
    //   gsap.to(navbarRef.current, {
    //     y: 0,
    //   })
    // }
  }, [isFixed])

  // navitems animation when sidebar is open

  const sidebarTimeline = useRef();

  useGSAP(() => {
    if (isSidebarOpen) {
      sidebarTimeline.current = gsap.timeline()
        .fromTo(".close-btn", { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            delay: 0.3,
            ease: "power3.out"
          }
        )
        .fromTo(".sidebar-logo", {
          opacity: 0,
          y: -50,
        }, { opacity: 1, y: 0, duration: 0.3 })
        .fromTo(".animate-navitem",
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            duration: 0.1,
            stagger: 0.1,
          }
        );
    }

  }, [isSidebarOpen]);



  // handle window width
  useEffect(() => {
    function handleResize() {
      setWindowWdith(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)


  }, [])


  useEffect(() => {
    if (windowWidth >= 1024) {

      if (sidebarTimeline.current) {
        sidebarTimeline.current?.kill();
        sidebarTimeline.current = null;
      }
      return;
    }

    if (isSidebarOpen) sidebarTimeline.current?.play()
    else sidebarTimeline.current?.reverse()

  }, [isSidebarOpen, windowWidth])

// toggling isFixed state
  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 20) setIsFixed(true)
      else setIsFixed(false)
    }
    function closeSideBar(e) {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target) && sideBarToggleBtn.current && !sideBarToggleBtn.current.contains(e.target)) {
        setTimeout(() => {
          setIsSidebarOpen(false)
        }, 1300)
        sidebarTimeline.current?.reverse()
      }
    }
    window.addEventListener("click", closeSideBar)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('click', closeSideBar)
    }
  }, [])


  // disabling scroll on sidebar open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  useGSAP(() => {
    const trackCursor = (e) => {
      gsap.to(".cursor-dot", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power1.out',
      })
    }

    document.addEventListener("mousemove", trackCursor)
    return () => document.removeEventListener("mousemove", trackCursor)
  }, [])

  return (
    <header className={`py-5 relative z-50 mx-auto ${isFixed ? "" : "px-3"}`}>

      {/* custom cursor if sidebar is open */}
      {!isSidebarOpen ? "" :
        <div
          className="cursor-dot fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ zIndex: 301 }}
        >
          <div className="line w-7 h-[3px] bg-white translate-y-[2px] rotate-[45deg]"></div>
          <div className="line w-7 h-[3px] bg-white -rotate-[45deg]"></div>
        </div>
      }

      {/* dark overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,40,0.5)] bg-opacity-50 z-40"
        />
      )}


      <nav ref={navbarRef} className={`rounded-md px-6 ${isFixed ? "fixed top-0 left-0 z-50 bg-[#0f6555] right-0 rounded-none" : "absolute left-3 right-3 bg-white/5 max-w-[1350px] mx-auto"}`}>
        <div className="custom-container mx-auto flex justify-between items-center">

          {/* logo */}
          <div className="navbar-brand py-6">
            <a href='#'>
              <img className='hover:-translate-y-1 duration-300' src="./logo-white-two.png" alt="logo" /></a>
          </div>
          {/* nav links */}

          {/* nav items row over lg breakpoint */}
          <ul className={`hidden lg:flex flex-row h-auto w-auto px-0 bg-transparent gap-[30px] text-white
          `}>
            {/* btn to close */}
            <button
              onClick={() => {
                setTimeout(() => {
                  setIsSidebarOpen(false)
                }, 1300)
                sidebarTimeline.current?.reverse()
              }}
              className="close-btn ms-auto absolute right-2 top-2 inline-block lg:hidden w-6 h-6 rounded-full bg-neutral-200 hover:bg-neutral-900 hover:text-white">
              <i className="fa fa-xmark rounded-full"></i>
            </button>
            {/* brand logo */}
            <div className="navbar-brand sidebar-logo py-6 mb-[9px] lg:hidden">
              <a href='#'>
                <img className='' src="./logo-blue.png" alt="logo" /></a>
            </div>
            {(navbarData || []).map((item, i) => (
              <NavItem key={i} navTitle={item.navTitle} dropdownItems={item.dropdownItems} isOpen={openDropdown == i} index={i} setIsOpen={setOpenDropdown}
                className={"animate-navitem"}
              />
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

      {/* navitems row under lg breakpoint */}
      <ul ref={sideBarRef} className={`fixed z-50 top-0 left-0 h-screen w-[250px] sm:w-[300px] flex flex-col lg:hidden justify-start bg-white px-6 transform-[translateX(-100%)] duration-300 ${isSidebarOpen ? "transform-[translateX(0)]" : ""}`}>
            {/* btn to close */}
            <button
              onClick={() => {
                setTimeout(() => {
                  setIsSidebarOpen(false)
                }, 1300)
                sidebarTimeline.current?.reverse()
              }}
              className="close-btn ms-auto absolute right-2 top-2 inline-block lg:hidden w-6 h-6 rounded-full bg-neutral-200 hover:bg-neutral-900 hover:text-white">
              <i className="fa fa-xmark rounded-full"></i>
            </button>
            {/* brand logo */}
            <div className="navbar-brand sidebar-logo py-6 mb-[9px] lg:hidden">
              <a href='#'>
                <img className='' src="./logo-blue.png" alt="logo" /></a>
            </div>
            {(navbarData || []).map((item, i) => (
              <NavItem key={i} navTitle={item.navTitle} dropdownItems={item.dropdownItems} isOpen={openDropdown == i} index={i} setIsOpen={setOpenDropdown}
                className={"animate-navitem"}
              />
            ))}

          </ul>

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

// navitem
import React, { useEffect, useState, useRef } from 'react'

export default function NavItem({ navTitle, dropdownItems, className, isOpen, index, setIsOpen }) {

    const dropdownRef = useRef()

    const toggleDropdown = (e) => {
        e.preventDefault()
        setIsOpen(prev => (prev === index ? null : index));
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (isOpen) {
            dropdownRef.current.style.maxHeight = `${window.innerHeight}px`
        }
        else dropdownRef.current.style.maxHeight = `${0}px`

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);



    return (
        <li
        // onMouseEnter={() => setIsOpen(true)}
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
                ref={dropdownRef}
                className={`
                    overflow-hidde lg:overflow-auto
                    lg:block lg:absolute min-w-[190px] top-[100%] left-0
                    bg-transparent lg:bg-white text-black lg:shadow-lg rounded-md p-2 z-50
                    transition-all duration-300 ease
                    lg:translate-y-5 lg:group-hover:-translate-y-0
                    ${dropdownItems && dropdownItems.length > 0 ? "" : "!hidden"}
                    ${windowWidth < 1024
                        ? (isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')
                        : 'lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible'
                    }
                `}
            >
                {(dropdownItems || []).map((item, index) => (
                    <li key={index} className="px-4 py-2 rounded-sm border-b-[1px] border-slate-200 lg:border-0 hover:bg-gray-200">{item}</li>
                ))}
            </ul>

        </li>
    )
}



