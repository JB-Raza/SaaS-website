import React, { useEffect, useState, useRef } from 'react'

import { NavLink, useLocation } from 'react-router-dom'


export default function NavItem({ navItem, className, isOpen, index, setIsOpen }) {

    const dropdownRef = useRef()
    const location = useLocation()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const isChildActive = navItem?.dropdownItems?.some(item => location.pathname == item.path)

    const toggleDropdown = (e) => {
        e.preventDefault()
        setIsOpen(prev => (prev === index ? null : index));
    };


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (windowWidth < 1024) {
            console.log('ran again')
            if (isOpen) {
                dropdownRef.current.style.maxHeight = `${window.innerHeight}px`
            }
            else dropdownRef.current.style.maxHeight = `${0}px`
        }


        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);


    return (
        <li
            onClick={windowWidth < 1024 ? toggleDropdown : undefined}
            className={`relative transition-all duration-300 h-[60px] ${isOpen ? "h-auto" : ""} lg:py-6 lg:h-[100%] flex flex-col lg:flex-row items-center font-semibold cursor-pointer group text-base ${className}`}>
            {navItem.path ?
                // if direct path is given in navitem like the simple one
                <NavLink
                    to={`${navItem.path}`}
                    className={({ isActive }) =>
                        `group-hover:-translate-y-1 !py-3 w-full flex gap-2 items-center justify-between lg:justify-start duration-300 m-0 border-b-[1px] lg:border-0 border-slate-200 ${isActive ? "text-blue-600" : ""
                        }`
                    }
                >
                    <span>{navItem?.navTitle}</span>
                    {navItem?.dropdownItems?.length > 0 &&
                        <i className={`fa fa-angle-down text-[10px] lg:group-hover:rotate-180 duration-200 lg:group-hover:text-blue-600 text-slate-300 ${isOpen ? "rotate-180 duration-300" : ""}`}></i>
                    }
                </NavLink>
                :
                // if no direct path in navitem like the one with dropdown
                <span className={`group-hover:-translate-y-1 !py-3 w-full flex gap-2 items-center justify-between lg:justify-start duration-300 m-0 border-b-[1px] lg:border-0 border-slate-200 ${isChildActive ? "text-blue-600" : ""}`}>
                    <span>{navItem?.navTitle}</span>
                    {navItem?.dropdownItems?.length > 0 &&
                        <i className={`fa fa-angle-down text-[10px] lg:group-hover:rotate-180 duration-200 ${isChildActive ? "text-blue-600" : "text-slate-400"} lg:group-hover:text-blue-600  ${isOpen ? "rotate-180 duration-300" : ""}`}></i>
                    }
                </span>
            }

            {/* dropdown */}
            <ul
                ref={dropdownRef}
                className={`
                    overflow-hidde lg:overflow-auto
                    lg:block lg:absolute min-w-[190px] top-[100%] left-0
                    bg-transparent lg:bg-white text-black lg:shadow-lg rounded-md p-2 z-50
                    transition-all duration-300 ease
                    lg:translate-y-5 lg:group-hover:-translate-y-0
                    ${navItem?.dropdownItems && navItem?.dropdownItems.length > 0 ? "" : "!hidden"}
                    ${windowWidth < 1024
                        ? (isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')
                        : 'lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible'
                    }
                `}
            >
                {(navItem?.dropdownItems || []).map((item, index) => (
                    <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                        <li onClick={() => {
                            setIsOpen(false)
                        }} className="px-4 py-2 rounded-sm border-b-[1px] border-slate-200 lg:border-0 hover:bg-gray-200">{item.label}</li>
                    </NavLink>

                ))}
            </ul>

        </li>
    )



}

