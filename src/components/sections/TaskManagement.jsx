import React, { useEffect, useRef, useState } from 'react'

import { useTextAnimate } from '../hooks/textAnimation'


export default function TaskManagement() {

  useTextAnimate(".animated-data-elem", { duration: 0.5, y: 200, start: "top 90%" })


  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdrownRef = useRef()
  const dropdrownBtnRef = useRef()

  useEffect(() => {
    function closeDropdownOnClick(e) {
      if (dropdrownRef.current && !dropdrownRef.current.contains(e.target) && dropdrownBtnRef.current && !dropdrownBtnRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    function closeDropdownOnScroll() {
      setDropdownOpen(false)
    }
    window.addEventListener("scroll", closeDropdownOnScroll)
    window.addEventListener("click", closeDropdownOnClick)

    return () =>{
      window.removeEventListener("scroll", closeDropdownOnScroll)
      window.removeEventListener("click", closeDropdownOnClick)
    }
  }, [])

  useEffect(() => {
    if (dropdownOpen) {
      dropdrownRef.current.style.maxHeight = `${dropdrownRef.current.scrollHeight}px`
    }
    else dropdrownRef.current.style.maxHeight = `${0}px`
  }, [dropdownOpen])

  const fileRef = useRef(null)
  const handleFileSelect = () => {
    if (fileRef.current) {
      fileRef.current.click();

    }
  };
  return (
    <div className='bg-[url(./gradient-blue-yellow.png)] bg-no-repeat bg-right bg-contain'>
      <div className="task-management-section custom-container mx-auto px-2 sm:px-5 my-20">
        {/* header data */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="capitalize font-semibold max-w-[550px] heading-2">
            <p className='animated-data-elem'>Task management <span className="text-gradient-teal capitalize font-normal italic">Features</span> &</p>
            <p className='animated-data-elem'>capabilities</p>
          </h2>
          <p className="text-gray-600 max-w-[550px]">
            <span className='animated-data-elem'><span>Sassly-CRM in the past allowing you to focus more on your businesssimply</span></span>
            <span className='animated-data-elem'>enjoy your newfound legal time to reflect leaving pen</span>
          </p>
        </div>

        {/* main content */}
        <div className="grid grid-cols-12 gap-5 mx-0 my-10">
          {/* col 1 */}
          <div className="col-span-12 row-span-2 sm:col-span-6 lg:col-span-4 flex flex-col items-center pt-15 pb-8 rounded-lg bg-[#D19D3D17]">
            {/* badges */}
            <div className="w-[calc(100%-10px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-50px)] flex flex-col mb-15">
              {/* badge 1 */}
              <span className="rounded-full px-10 py-3 text-white font-bold
              relative z-3 -rotate-[12deg] bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] inline-block min-w-[250px]
              ">
                Project management
              </span>
              {/* badge 2 */}
              <span className="rounded-full px-10 py-3 font-bold
              relative bg-yellow-500 z-2 inline-block min-w-[250px]
              ">
                Performance Tracking
              </span>
              {/* badge 3 */}
              <span className="rounded-full px-10 py-3 text-white font-bold
              relative z-1 rotate-[10deg] bg-[linear-gradient(69.92deg,#003D3D_28.63%,#00664E_87.07%,#008C63_112.98%)] inline-block min-w-[250px]
              ">
                Seemless integration tools
              </span>

            </div>

            {/* label card */}
            <div className="card relative min-w-[230px] w-[calc(100%-20px)] sm:w-[calc(100%-60px)] rounded-md p-5 bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Labels</span>
                <button ref={dropdrownBtnRef} onClick={() => setDropdownOpen((prev) => !prev)} className="font-bold text-slate-400 text-xl -mt-3 cursor-pointer">...</button>
                <div ref={dropdrownRef} className=' absolute z-45 right-0 sm:right-auto sm:left-[calc(100%-30px)] top-10 overflow-hidden transition-all duration-300 bg-white font-semibold shadow-lg min-w-[160px]'>
                  <ul className={`p-3`}>
                    <li className='hover:bg-neutral-200 rounded-sm px-2 py-1'>action</li>
                    <li className='hover:bg-neutral-200 rounded-sm px-2 py-1'>action</li>
                  </ul>
                </div>
              </div>

              {/* filters */}
              <div className="flex mt-6 flex-col gap-4 justify-between items-center py-4">
                {/* custom checbox */}
                {(checkboxes || []).map((checkbox, i) => (
                  <div key={i} className='flex justify-between w-full items-center'>
                    <label htmlFor={checkbox.name} className="flex gap-3 items-center font-semibold text-sm">
                      <i className="fa-solid fa-tag text-gray-400"></i>
                      {checkbox.label}
                    </label>

                    <label className="flex ms-auto items-center cursor-pointer gap-2">

                      <input
                        type="checkbox"
                        id={checkbox.name}
                        className="sr-only peer"
                      />
                      <div className="w-6 h-6 relative rounded border-[1px] border-green-300 bg-blue-50 peer-checked:bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] peer-checked:border-transparent transition-all duration-300 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 relative z-10  text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                          fill="#06766E"
                          stroke=""
                          strokeWidth="2"
                          viewBox="0 0 34 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13 l4 4L19 7" />
                        </svg>
                        <i className="fa-solid fa-check text-blue-50 absolute"></i>
                      </div>
                    </label>
                  </div>
                ))}




              </div>

            </div>
            {/* people */}
            <div className="people  mt-5 px-3 min-w-[230px] w-[calc(100%-20px)] sm:w-[calc(100%-60px)]">
              <div className="imgs flex relative ms-">
                <img src="./people/1.png" alt="client-1" className="rounded-full border-2 border-white absolute z-3 hover:scale-125 duration-200" />
                <img src="./people/2.png" alt="client-2" className="rounded-full border-2 border-white absolute left-7 z-2 hover:scale-125 duration-200" />
                <img src="./people/3.png" alt="client-3" className="rounded-full border-2 border-white absolute left-13 z-1 hover:scale-125 duration-200" />
              </div>
              <button
                onClick={handleFileSelect}
                className="ms-auto rounded-full bg-white border-dashed border-[2px] h-7 w-7 
             text-[19px] font-bold flex items-center justify-center text-gray-300 
             text-center leading-[12px] pb-[6px]"
              >
                +
              </button>
              <input ref={fileRef} className='hidden'
                type='file'
              />
            </div>
          </div>

          {/* cards */}
          {(cards || []).map((card, i) =>
            <div key={i} className="mx-3 sm:mx-0 col-span-12 sm:col-span-6 lg:col-span-4 gap-5">
              <div className="flex flex-col justify-between h-full card group bg-neutral-50 hover:bg-[linear-gradient(270deg,#20BA8B_0%,#06766E_100%)] border-[1px] border-slate-200 rounded-lg p-7 md:p-12">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="animated-data-elem font-semibold group-hover:text-white heading-5">{card.title} <br /></h4>
                  <i className={`${card.icon} text-green-500 text-2xl group-hover:animate-[var(--icon-bubble-animation)] group-hover:text-white duration-300`}></i>
                </div>
                <p className="text-neutral-500 group-hover:text-white mt-8">{card.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}



let cards = [
  { title: "Asynchronous Meetings", description: "We are committed to your success. Our platform is built to drive", icon: "fa-solid fa-video" },
  { title: "built-in Automation", description: "We are committed to your success. Our platform is built to drive", icon: "fa-brands fa-researchgate" },
  { title: "Monitoring your Time", description: "We are committed to your success. Our platform is built to drive", icon: "fa-solid fa-gear" },
  { title: "Remote-Friendly Collection", description: "We are committed to your success. Our platform is built to drive", icon: "fa-solid fa-users-rectangle" },
]



let checkboxes = [
  { label: "Copywriting", name: "copywriting" },
  { label: "UI Design", name: "uiDesign" },
  { label: "Illustration", name: "illustration" },
]