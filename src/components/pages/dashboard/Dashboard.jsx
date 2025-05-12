
import { useState } from 'react'
import { RevolutionizeServices } from '../../sections/index.js'
import { Button } from '../../universalComponents/index.js'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router'


export default function Dashboard() {

    const [activeDashLink, setActiveDashLink] = useState("dashboard")

    return (
        <div>

            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="/simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Dashboard</h1>
                </div>
            </section>


            {/* dashboard section */}
            <div className="grid grid-cols-12 gap-5 md:gap-2 custom-container py-20 mx-auto">

                {/* dash links */}
                <div className="col-span-12 md:col-span-3 md:sticky top-[110px] z-40 bg-white h-max px-2 sm:px-5 flex md:justify-end items-start">
                    <div className="overflow-clip border border-neutral-200 rounded-lg w-full md:min-w-3/4 font-semibold text-[18px] flex flex-col">
                        {dashLinks?.map((link) => (
                            <NavLink to={link == "dashboard"? "/dashboard":String(link.split(" ").slice(0,1))}
                                onClick={() => setActiveDashLink(link)}
                                key={link} className={`p-3 capitalize border-b-1 border-neutral-200 transition-[background] duration-200 hover:bg-[var(--darkIndigo)] ${activeDashLink == link ? "bg-[var(--darkIndigo)] text-white" : ""} hover:text-indigo-100 cursor-pointer`}>{link}</NavLink>
                        ))}

                    </div>
                </div>


                <Outlet />



            </div>


            <RevolutionizeServices>
                <div className="flex gap-5 flex-wrap my-10 justify-center items-center">
                    <Button

                        content={"Get Started Trial"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white min-w-[175px] rounded-xl"} />
                    <Button
                        content={"Get Started Trial"}
                        bgColor='bg-transparent'
                        hoverBg='bg-blue-700'
                        className={"text-white border-2 border-white hover:border-0 hover:text-black min-w-[175px] rounded-xl"} />
                </div>

            </RevolutionizeServices>

        </div>
    )
}

const dashLinks = ["dashboard", "orders", "wishlist", "account details", "log out"]