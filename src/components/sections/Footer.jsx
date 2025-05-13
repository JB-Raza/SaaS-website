import React from 'react'
import Button from "../universalComponents/Button.jsx";
import { useTextAnimate } from '../../hooks/textAnimation.js'
import { useLocation } from 'react-router-dom'

export default function Footer() {

    const location = useLocation()

    useTextAnimate(".animate-elem-footer",
         { start: "top 90%", y: 50, currLocation: location.pathname })


    return (
        <footer className={`${location.pathname == "/" ? "bg-[var(--lightAmber)]" : "bg-[var(--iceBlue)]"} px-3 overflow-hidden`}>


            <div className="custom-container mx-auto grid grid-cols-12 py-30 gap-7">

                {/* col 1 */}
                <div className="col-span-12 xs:col-span-6 sm:col-span-4 lg:col-span-3">
                    <h5 className="animate-elem-footer heading-5 font-medium">Collaborate</h5>
                    <div className="flex flex-col items-start gap-[18px] mt-8">
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Partners</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Partners Program</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Affiliate Program</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Community</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">HR Partner Program</span>
                    </div>
                </div>

                {/* col 2 */}
                <div className="col-span-12 xs:col-span-6 sm:col-span-4 lg:col-span-2">
                    <h5 className="animate-elem-footer heading-5 font-medium">My account</h5>

                    <div className="flex flex-col items-start gap-[18px] mt-8">
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Company</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Customer Success</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Resources</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Talk an Expert</span>
                    </div>
                </div>

                {/* col 3 */}
                <div className="col-span-12 xs:col-span-6 sm:col-span-4 lg:col-span-2">
                    <h5 className="animate-elem-footer heading-5 font-medium">Service</h5>

                    <div className="flex flex-col items-start gap-[18px] mt-8">
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Software Development</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Cloud Services</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">AI Machine Learning</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Data Security</span>
                        <span className="animate-elem-footer font-semibold text-[16px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Software Development</span>

                    </div>
                </div>

                {/* col 4 form */}
                <div className="col-span-11 xs:col-span-12 sm:col-span-10 md:col-span-8 mt-8 lg:mt-0 lg:col-span-5">
                    <div className="animate-elem-footer logo">
                        <img src="/logo-three.png" alt="logo" />
                    </div>
                    {/* input box */}
                    <div className="flex flex-col xs:flex-row gap-5 w-auto my-10">
                        <input type="text" placeholder="Email Address"
                            className="px-7 py-4 bg-white rounded-lg w-full"
                        />
                        <Button content={"Sign Up"}
                            icon={"fa fa-angle-right text-sm"}
                            bgColor={`${location.pathname == "/" ? "bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)]" : "bg-blue-600"}`}
                            hoverBg={`${location.pathname == "/" ? "bg-[var(--greenBg)]" : "bg-[var(--darkIndigo)]"}`}
                            className={"text-white text-nowrap min-w-[130px]"} />
                    </div>
                    <p className="animate-elem-footer font-semibold">By subscribing, you're accept <span className="underline cursor-pointer duration-200 inline-block hover:-translate-y-1">Privacy Policy</span></p>
                </div>

            </div>

            {/* last footer */}
            <div className="custom-container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between border-t-[1px] border-neutral-200 py-9 px-4">
                <p className="font-semibold text-center">© 2025 <span className="text-gradient-teal">WowTheme7</span> - IT Services. All rights reserved.</p>
                <div className="links flex gap-5">
                    <span className="font-semibold text-[15px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">FAQs</span>
                    <span className="font-semibold text-[15px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Setting</span>
                    <span className="font-semibold text-[15px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Privacy</span>
                    <span className="font-semibold text-[15px] text-neutral-600 hover:underline hover:-translate-y-1 hover:text-neutral-900 duration-200 cursor-pointer">Contact</span>

                </div>
            </div>






        </footer>
    )
}
