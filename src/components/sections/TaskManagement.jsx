import React from 'react'

export default function TaskManagement() {
  return (
    <div className="task-management-section sm:px-5 my-10">
        {/* header data */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <h2 className="capitalize font-semibold max-w-[550px]" style={{ fontSize: "var(--heading-two)" }}>Task management <span className="text-gradient-teal capitalize font-normal italic">Features</span> & capabilities</h2>
          <p className="text-gray-600 max-w-[550px]">Sassly-CRM in the past allowing you to focus more on your businesssimply enjoy your newfound legal time to reflect leaving pen</p>
        </div>

        {/* main content */}
        <div className="grid grid-cols-12 gap-5 mx-0 my-10">
          {/* col 1 */}
          <div className="col-span-12 row-span-2 sm:col-span-6 lg:col-span-4 flex flex-col items-center py-20 rounded-lg bg-[#D19D3D17]">
            {/* badges */}
            <div className=" w-[calc(100%-10px)] sm:w-[calc(100%-30px)] md:w-[calc(100%-50px)] flex flex-col mb-15">
              {/* badge 1 */}
              <span className="rounded-full px-10 py-3 text-white font-bold
              relative z-3 -rotate-[14deg] bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] inline-block min-w-[250px]
              ">
                Project management
              </span>
              {/* badge 2 */}
              <span className="rounded-full px-10 py-3 font-bold
              relative bg-yellow-500 z-2 inline-block min-w-[250px]
              ">
                UI Design
              </span>
              {/* badge 3 */}
              <span className="rounded-full px-10 py-3 text-white font-bold
              relative z-1 rotate-[14deg] bg-[linear-gradient(69.92deg,#003D3D_28.63%,#00664E_87.07%,#008C63_112.98%)] inline-block min-w-[250px]
              ">
                Seemless integration tools
              </span>

            </div>

            {/* label card */}
            <div className="card min-w-[230px] w-[calc(100%-20px)] sm:w-[calc(100%-60px)] rounded-md p-5 bg-white shadow-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">Labels</span>
                <span className="font-bold text-slate-400 text-xl -mt-3 cursor-pointer">...</span>
              </div>

              {/* filters */}
              <div className="flex flex-col mt-6">
                {/* filter 1 */}
                <div className="flex justify-between items-center py-4">
                  <label htmlFor="copywrite" className="flex gap-3 items-center font-semibold text-sm">
                    <i className="fa-solid fa-tag text-gray-400"></i>
                    Copywriting
                  </label>
                  <input type="checkbox" id="copywrite"
                    className="text-xl p-2 !checked:bg-red-700"
                  />
                </div>
                {/* filter 2 */}
                <div className="flex justify-between items-center border-t-[1px] border-slate-100 py-4">
                  <label htmlFor="uiDesign" className="flex gap-3 items-center font-semibold text-sm">
                    <i className="fa-solid fa-tag text-gray-400"></i>
                    Copywriting
                  </label>
                  <input type="checkbox" id="uiDesign" />
                </div>
                {/* filter 3 */}
                <div className="flex justify-between items-center border-t-[1px] border-slate-100 py-4">
                  <label htmlFor="illustration" className="flex gap-3 items-center font-semibold text-sm">
                    <i className="fa-solid fa-tag text-gray-400"></i>
                    Copywriting
                  </label>
                  <input type="checkbox" id="illustration" />
                </div>
              </div>
            </div>
          </div>

          {/* cards */}
          {/* card 1 */}
          <div className="mx-3 sm:mx-0 col-span-12 sm:col-span-6 lg:col-span-4 gap-5">
            <div className="flex flex-col justify-between h-full card group bg-neutral-50 hover:bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] border-[1px] border-slate-200 rounded-lg p-7 md:p-12">
              <div className="flex justify-between mb-6">
                <h4 className="font-semibold group-hover:text-white heading-5">Asynchronous <br /> Meetings</h4>
                <img className="group-hover:animate-[var(--icon-bubble-animation)] duration-300" src="./icons/whatsapp-video.svg" alt="video" />
              </div>
              <p className="text-neutral-500 group-hover:text-white mt-8">We are committed to your success. Our platform is built to drive</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="mx-3 sm:mx-0 col-span-12 sm:col-span-6 lg:col-span-4 gap-5">
            <div className="flex flex-col justify-between h-full card group bg-neutral-50 hover:bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] border-[1px] border-slate-200 rounded-lg p-7 md:p-12">
              <div className="flex justify-between mb-6">
                <h4 className="font-semibold group-hover:text-white heading-5">Asynchronous <br /> Meetings</h4>
                <img className="group-hover:animate-[var(--icon-bubble-animation)] duration-300" src="./icons/whatsapp-video.svg" alt="video" />
              </div>
              <p className="text-neutral-500 group-hover:text-white mt-8">We are committed to your success. Our platform is built to drive</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="mx-3 sm:mx-0 col-span-12 sm:col-span-6 lg:col-span-4 gap-5">
            <div className="flex flex-col justify-between h-full card group bg-neutral-50 hover:bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] border-[1px] border-slate-200 rounded-lg p-7 md:p-12">
              <div className="flex justify-between mb-6">
                <h4 className="font-semibold group-hover:text-white heading-5">Asynchronous <br /> Meetings</h4>
                <img className="group-hover:animate-[var(--icon-bubble-animation)] duration-300" src="./icons/whatsapp-video.svg" alt="video" />
              </div>
              <p className="text-neutral-500 group-hover:text-white mt-8">We are committed to your success. Our platform is built to drive</p>
            </div>
          </div>
          {/* card 4 */}
          <div className="mx-3 sm:mx-0 col-span-12 sm:col-span-6 lg:col-span-4 gap-5">
            <div className="flex flex-col justify-between h-full card group bg-neutral-50 hover:bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] border-[1px] border-slate-200 rounded-lg p-7 md:p-12">
              <div className="flex justify-between mb-6">
                <h4 className="font-semibold group-hover:text-white heading-5">Asynchronous <br /> Meetings</h4>
                <img className="group-hover:animate-[var(--icon-bubble-animation)] duration-300" src="./icons/whatsapp-video.svg" alt="video" />
              </div>
              <p className="text-neutral-500 group-hover:text-white mt-8">We are committed to your success. Our platform is built to drive</p>
            </div>
          </div>
        </div>
      </div>
  )
}
