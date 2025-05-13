import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem.jsx'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { Button } from '../universalComponents/index.js'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar() {

  const token = localStorage.getItem("accessToken")

  const location = useLocation()

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
            duration: 0.2,
            delay: 0.5,
            ease: "power3.out"
          }
        )
        .fromTo(".sidebar-logo", {
          opacity: 0,
          y: -50,
        }, { opacity: 1, y: 0, duration: 0.1 })
        .fromTo(".animate-navitem",
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.out",
            duration: 0.1,
            stagger: 0.1,
          }
          , "-=0.3"
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
        sidebarTimeline.current = gsap.set(".animate-navitem", {
          y: 0,
          opacity: 1,
          ease: "power1.out",
          stagger: 0.1,
        })
      }
      return;
    }

    if (isSidebarOpen) sidebarTimeline.current?.play()
    else sidebarTimeline.current?.reverse()

  }, [isSidebarOpen, windowWidth])

  // toggling isFixed state
  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 70) setIsFixed(true)
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

  // track cursor on sidebarOpen
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

  // changing button styling based on route location
  let navBtnProps = {
    content: "Start Free Trial",
    bgColor: "bg-[var(--greenBg)]",
    hoverBg: 'bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)]',
    icon: "fa-solid fa-cloud-arrow-down"

  }
  if (location.pathname == "/") {
    navBtnProps = {
      content: "Start Free Trial",
      bgColor: "bg-[var(--greenBg)]",
      hoverBg: 'bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)]',
      icon: "fa-solid fa-cloud-arrow-down"
    }
  }
  else {
    navBtnProps = {
      content: "Get Started",
      bgColor: "bg-[var(--darkIndigo)]",
      hoverBg: "bg-blue-600",
      icon: "",
    }
  }


  return (
    <header className={`relative z-50 mx-aut`}>

      {/* custom cursor if sidebar is open */}
      {!isSidebarOpen ? "" :
        <div
          className="cursor-dot fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ zIndex: 302 }}
        >
          <div className="line w-7 h-[3px] bg-white translate-y-[2px] rotate-[45deg]"></div>
          <div className="line w-7 h-[3px] bg-white -rotate-[45deg]"></div>
        </div>
      }

      {/* dark overlay when sidebar is open */}
      {isSidebarOpen &&
        <div
          className="fixed inset-0 bg-[rgba(0,0,40,0.5)] bg-opacity-50 z-40"
        >
        </div>
      }


      <nav ref={navbarRef} className={`rounded-md ps-6 pe-8 ${isFixed ? "fixed shadow-lg top-0 left-0 z-50 right-0 rounded-none" : "fixed left-3 top-9 right-3 max-w-[1350px] mx-auto"} ${!isFixed && location.pathname == "/" ? "bg-white/5" : ""} ${location.pathname == "/" && isFixed ? "bg-[#0f6555]" : "bg-white"}`}>
        <div className="custom-container mx-auto flex justify-between items-center">

          {/* logo */}
          <div className="navbar-brand py-6">
            <NavLink to={"/"}>
              {location.pathname == "/" ?
                <img className='hover:-translate-y-1 duration-300' src="/logo-white-two.png" alt="logo" />
                : <img className='' src="/logo-four.png" alt="logo" />}

            </NavLink>
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
                <img src="./logo-blue.png" alt="logo" /></a>
            </div>
            {(navbarData || []).map((item, i) => (
              <NavItem key={i} navItem={item} isOpen={openDropdown == i} index={i} setIsOpen={setOpenDropdown}
                className={`animate-navitem ${location.pathname == "/" ? "" : "text-black"}`}
              />
            ))}

          </ul>

            {token? <div>
              <Link to={'/dashboard'}>
              <Button content={"dashboard"}
                bgColor={navBtnProps.bgColor}
                hoverBg={navBtnProps.hoverBg}
                className={`hidden lg:flex font-medium ${location.pathname == "/" ? "min-w-[150px] !text-black px-22 hover:!text-white" : "!text-white min-w-[130px] !h-13 !rounded-xl"}`}
              />
            </Link>
            </div>
              :
          <div className="m-0 flex gap-6 items-center">
            <Link to="/login">
              <button className={`cursor-pointer font-semibold text-sm hidden xl:flex items-center gap-2 ${location.pathname == "/" ? "text-white" : "text-black"}`}>
                <i className={`fa-regular fa-user ${location.pathname == "/" ? "text-[rgb(50,244,133)]" : "text-sky-700"} text-xs`}></i>
                Sign in
              </button>
            </Link>

            <Link to={'/signup'}>
              <Button content={navBtnProps.content}
                bgColor={navBtnProps.bgColor}
                hoverBg={navBtnProps.hoverBg}
                className={`hidden lg:flex font-medium ${location.pathname == "/" ? "min-w-[150px] !text-black px-22 hover:!text-white" : "!text-white min-w-[130px] !h-13 !rounded-xl"}`}
                icon={navBtnProps.icon}
              />
            </Link>

          </div>
          }

          {/* sidebar toggle btn */}
          <button ref={sideBarToggleBtn}
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className='flex lg:hidden flex-col gap-[7px]'>
            <p className={`w-9 rounded-full h-[3px] ${location.pathname == "/" ? "bg-white" : "bg-neutral-800"}`}></p>
            <p className={`w-9 rounded-full h-[3px] ${location.pathname == "/" ? "bg-white" : "bg-neutral-800"}`}></p>
            <p className={`w-9 rounded-full h-[3px] ${location.pathname == "/" ? "bg-white" : "bg-neutral-800"}`}></p>
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
        {(navbarData).map((item, i) => (

          <NavItem key={i} navItem={item} isOpen={openDropdown == i} index={i} setIsOpen={setOpenDropdown}
            className={"animate-navitem"}
          />
        ))}

      </ul>

    </header>
  )
}



const navbarData = [
  {
    navTitle: "Home", dropdownItems: [
      { label: "IT Solution", path: "/it-solution" },
      { label: "Web Hosting", path: "/web-hosting" },
      { label: "Task Mangement", path: "/" },
      { label: "CRM Software", path: "/crm-software" },
      { label: "App Landing", path: "/app-landing" },
    ]
  },
  {
    navTitle: "Pages", dropdownItems: [
      { label: "Pricing", path: "/pricing" },
      { label: "About Us", path: "/about-us" },
      { label: "App Integration", path: "/app-integration" },
      { label: "Integration Details", path: "/integration-details" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "FAQ", path: "/faq" },
    ]
  },

  { navTitle: "Portfolio", dropdownItems: [{ label: "Portfolio", path: "/portfolio" }] },
  {
    navTitle: "Shop", dropdownItems: [
      { label: "Shop", path: "/shop" },
      { label: "Shop Details", path: "/shop-details" },
      { label: "Cart", path: "/cart" },
      { label: "Checkout", path: "/checkout" },
    ]
  },

  {
    navTitle: "Blog", dropdownItems: [
      { label: "Blog", path: "/blog" },
      { label: "Blog Details", path: "/blog-details" },
    ]
  },

  { navTitle: "Contact", path: "/contact" },
]