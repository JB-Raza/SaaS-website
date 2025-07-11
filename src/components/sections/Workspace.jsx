import React, { useState } from 'react'
import { useTextAnimate } from '../../hooks/textAnimation.js'

export default function Workspace() {
    let [activeDepart, setActiveDepart] = useState("all teams")

    useTextAnimate(".animated-data-workspace", { start: "top 80%", duration: 1, y: 100 })

    return (
        <div className="workplaces-section relative overflow-clip bg-linear-gradient-primary py-28 w-full px-2 sm:px-0">

            <p className="relative z-2 font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-2 sm:px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                <span className="text-gradient-teal">Up to </span>
                <span className="text-yellow-500">70%</span>
                <span className="text-gradient-teal"> off managed cloud hosting</span>
            </p>

            <h3 className="relative z-2 heading-3 flex flex-col text-center text-white font-bold mt-4 leading-10 md:leading-15">
                <p className='animated-data-workspace'>Essential for <span className="italic font-normal">workplaces</span>. </p>
                <p className='animated-data-workspace'>Great forany team.</p>
            </h3>
            <p className="relative z-2 text-neutral-300 flex flex-col font-medium text-[18px] text-center mx-auto mt-8 px-3 leading-loose">
                <span className='animated-data-workspace'>Sassly-CRM in the past allowing you to focus more on your business</span>
                <span className='animated-data-workspace'> simply enjoy your newfound legal time to reflect leaving</span>
            </p>

            {/* department container */}
            <div className="relative z-2 mx-auto p-3 sm:p-7 mt-10 border-[1px] border-white/20 rounded-xl max-w-[1300px]">
                <div className="department-container rounded-2xl grid grid-cols-12">

                    <div className="col-span-12 lg:col-span-3 flex justify-center items-stretch px-2 sm:px-7 lg:px-0 ms-0 sm:ms-3 mb-7">
                        <div className="left-section bg-neutral-100 w-full rounded-2xl mt-20 lg:mt-15">
                            <div className="logo mx-7 mt-4 mb-8 md:mb-20">
                                <img loading="lazy" src="./logo-two.png" alt="" />
                            </div>
                            {/* all department btns */}
                            <div className="flex flex-col pb-5">
                                {/* teams btn */}
                                <button
                                    onClick={() => setActiveDepart("all teams")}
                                    className={`${activeDepart == "all teams" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                                    <i className="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                                    <span>All Teams</span>
                                </button>

                                {/* security btn */}
                                <button
                                    onClick={() => setActiveDepart("security")}
                                    className={`${activeDepart == "security" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                                    <i className="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                                    <span>Security</span>
                                </button>

                                {/* technology btn */}
                                <button
                                    onClick={() => setActiveDepart("technology")}
                                    className={`${activeDepart == "technology" ? "bg-[linear-gradient(270deg,#06766E_0%,#20BA8B_100%)] text-white" : ""} group px-10 py-5 rounded-lg w-[calc(100%-20px)] mx-auto text-[18px] flex items-center justify-start font-semibold gap-4`}>
                                    <i className="fa-solid fa-shield-halved group-hover:animate-[var(--icon-bubble-animation)]"></i>
                                    <span>Technology</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9 my-7 px-7 pt-7">
                        <div className="">
                            <img loading="lazy" src="./workplace-tab-thumb.png" alt="workspace img" className="mx-auto lg:ms-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
