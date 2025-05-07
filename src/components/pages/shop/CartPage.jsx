import React from 'react'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import {Button} from '../../universalComponents/index.js'

// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function CartPage() {
    useTextAnimate(".animate-text")

    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Cart Page</h1>
                </div>
            </section>




            <RevolutionizeServices>
                <div className="flex gap-5 justify-center items-center">
                    <Button

                        content={"Get Started Trial"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white my-10 min-w-[175px] rounded-xl"} />
                    <Button
                        content={"Get Started Trial"}
                        bgColor='bg-transparent'
                        hoverBg='bg-blue-700'
                        className={"text-white border-2 border-white hover:border-0 hover:text-black my-10 min-w-[175px] rounded-xl"} />
                </div>

            </RevolutionizeServices>
        </div>
    )
}
