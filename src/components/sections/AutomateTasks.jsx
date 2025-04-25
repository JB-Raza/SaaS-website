import React from 'react'
import Button from "../universalComponents/Button.jsx";


export default function AutomateTasks() {
    return (
        <div>
            {/* task section 1/2 */}
            <div className="py-30 md:py-15 w-full px-3">
                <p className="font-medium text-wrap text-center capitalize !bg-white w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                    <span className="text-gradient-teal">Up to </span>
                    <span className="text-yellow-500">70%</span>
                    <span className="text-gradient-teal"> off managed cloud hosting</span>
                </p>
                <h2 className="heading-2 font-semibold mt-4 leading-10 capitalize lg:w-[50%] xxl:w-auto">Supercharge  <span className="italic text-gradient-teal font-normal">daily work</span>. with built-in automation</h2>

                <div className="grid grid-cols-12">
                    {/* col 1 */}
                    <div className="col-span-12 lg:col-span-6">
                        <p className="text-neutral-500 font-medium text-[18px] mt-8 leading-loose">Sassly-CRM in the past allowing you to focus more on your business <br /> simply enjoy your newfound legal time to reflect leaving</p>
                        {/* features */}
                        <div className="features my-10 flex flex-col gap-4">
                            <p className="bg-neutral-100 font-semibold flex gap-3 items-center text-[17px] rounded-full ps-6 pe-15 py-3 w-fit">
                                <i className="fa-solid fa-square-check text-[20px] text-[#008C63]"></i>
                                <span>Workflow streamlining</span>
                            </p>
                            <p className="bg-neutral-100 font-semibold flex gap-3 items-center text-[17px] rounded-full ps-6 pe-15 py-3 w-fit">
                                <i className="fa-solid fa-square-check text-[20px] text-[#008C63]"></i>
                                <span>Expedite onboarding with clear prioritization</span>
                            </p>
                            <p className="bg-neutral-100 font-semibold flex gap-3 items-center text-[17px] rounded-full ps-6 pe-15 py-3 w-fit">
                                <i className="fa-solid fa-square-check text-[20px] text-[#008C63]"></i>
                                <span>Collaborate on ideas 7x faster</span>
                            </p>
                        </div>
                        <Button content={"Start Free Trial"} icon={"fa-solid fa-cloud-arrow-down"}
                            className={"!rounded-0 px-13 !py-5 text-white"} />

                    </div>
                    <div className="col-span-12 mt-10 lg:mt-0 lg:col-span-6">
                        <img src="./automation-thumb.png" alt="" className="mx-auto" />
                    </div>
                </div>
            </div>

            {/* task section 2/2 */}
            <div className="py-10 sm:py-20 md:py-15 mb-10 w-full px-3">
                <div className="grid grid-cols-12">
                    {/* col 1 */}
                    <div className="col-span-12 mt-10 lg:mt-0 md:col-span-6 pe-7">
                        <img src="./task-manager-thumb.png" alt="" className="mx-" />
                    </div>
                    {/* col 2 */}
                    <div className="col-span-12 md:col-span-6">
                        <p className="font-medium text-wrap text-center capitalize !bg-white w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
                            <span className="text-gradient-teal">Up to </span>
                            <span className="text-yellow-500">70%</span>
                            <span className="text-gradient-teal"> off managed cloud hosting</span>
                        </p>
                        <h2 className="heading-2 font-semibold mt-4 leading-10 capitalize">Powerful & life-saving <span className="italic text-gradient-teal font-normal"> task manager</span></h2>

                        <p className="text-neutral-500 font-medium text-[18px] mt-8 leading-loose">Sassly-CRM in the past allowing you to focus more on your business <br /> simply enjoy your newfound legal time to reflect leaving</p>

                        {/* card 1 */}
                        <div className="card flex items-start gap-4 sm:gap-10 mt-13">
                            <i className="fa-solid fa-bars-progress text-green-500 text-3xl mt-2"></i>
                            <div>
                                <h5 className="heading-5 font-semibold">Automate Task Creation</h5>
                                <p className="text-neutral-600 mt-4 leading-loose wrap-break-word sm:me-10 text-wrap">In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card flex items-start gap-4 sm:gap-10 mt-13">
                            <i className="fa-solid fa-bars-progress text-green-500 text-3xl mt-2"></i>
                            <div>
                                <h5 className="heading-5 font-semibold">Automate Task Creation</h5>
                                <p className="text-neutral-600 mt-4 leading-loose wrap-break-word sm:me-10 text-wrap">In today's competitive business, the demand for efficient cost-effective IT solutions has never been more critic.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
