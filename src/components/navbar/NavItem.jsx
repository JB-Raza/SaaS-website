import React, { useRef, useState } from 'react'

export default function NavItem({ navTitle, dropdownItems, className, active }) {

    let [isOpen, setIsOpen] = useState(false)
    let dropdownRef = useRef(null)


    return (
        <li
        onClick={() => setIsOpen(prev => !prev)}
        className={`relative h-auto lg:py-6 lg:h-[100%] flex items-center font-semibold cursor-pointer group text-base ${className}`}>
            <a className='group-hover:-translate-y-1 !py-3 w-full flex gap-2 items-center justify-between lg:justify-start duration-300 m-0 border-b-[1px] lg:border-0 border-slate-200' href="#">
                <span>{navTitle}</span>  
                {dropdownItems?.length > 0 && 
                <i className="fa fa-angle-down text-[10px] lg:group-hover:rotate-180 duration-200 lg:group-hover:text-blue-600 text-slate-300"></i>
                }
            </a>

            {/* dropdown */}
            <ul 
            ref={dropdownRef}
            className={`hidden h-0 ${isOpen? "h-auto w-full !block !translate-y-[100%] ":""}
            lg:block lg:absolute min-w-[190px] top-[100%] left-0 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible bg-white text-black shadow-lg rounded-md p-2 mt-1 w-40 z-50 transition-transform duration-300 ease-out 
               translate-y-5 lg:group-hover:-translate-y-1 ${dropdownItems && dropdownItems.length > 0? "":"!hidden"}`}>
                {(dropdownItems || []).map((item, index) => (
                    <li key={index} className="px-4 py-2 rounded-sm hover:bg-gray-200">{item}</li>
                ))}
            </ul>
        </li>
    )
}
