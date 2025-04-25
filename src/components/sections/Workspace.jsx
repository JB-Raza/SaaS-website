import React, {useState} from 'react'

export default function Workspace() {
      let [activeDepart, setActiveDepart] = useState("all teams")
    
    return (
        <div className="workplaces-section bg-linear-gradient-primary py-28 w-full px-2">

            <p className="font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                <span className="text-gradient-teal">Up to </span>
                <span className="text-yellow-500">70%</span>
                <span className="text-gradient-teal"> off managed cloud hosting</span>
            </p>

            <h2 className="heading-2 text-center text-white font-bold mt-4 leading-10">Essential for <span className="italic font-normal">workplaces</span>. Great for <br /> any team.</h2>
            <p className="text-neutral-300 font-medium text-[18px] text-center mx-auto mt-10 px-3 leading-loose">Sassly-CRM in the past allowing you to focus more on your business <br /> simply enjoy your newfound legal time to reflect leaving</p>

            {/* department container */}
            <div className="mx-auto p-3 sm:p-7 mt-10 border-[1px] border-white/20 rounded-xl max-w-[1300px]">
                <div className="department-container rounded-2xl grid grid-cols-12">

                    <div className="col-span-12 lg:col-span-3 flex justify-center items-stretch px-2 sm:px-7 lg:px-0 ms-0 sm:ms-3 mb-7">
                        <div className="left-section bg-neutral-100 w-full rounded-2xl mt-20 lg:mt-15">
                            <div className="logo mx-7 mt-4 mb-8 md:mb-20">
                                <img src="./logo-two.png" alt="" />
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
                            <img src="./workplace-tab-thumb.png" alt="workspace img" className="mx-auto lg:ms-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
