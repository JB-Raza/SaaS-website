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

