import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function CustomCursor() {


    // custom cursor
    useGSAP(() => {
        const trackCursor = (e) => {
            gsap.to(".cursor-circle", {
                x: e.clientX,
                y: e.clientY,
                duration: 0.7,
                ease: "power1.out"
            })
            gsap.to(".cursor-dot", {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power1.out',
            })
        }

        document.addEventListener("mousemove", trackCursor)
        return () => document.removeEventListener("mousemove", trackCursor)
    }, [])

    
    return (
        <div>
            {/* custom cursor */}

            <div
                className="cursor-circle mix-blend-difference -translate-x-1/2 -translate-y-1/2 fixed top-0 left-0 h-8 w-8 border border-neutral-300 rounded-full pointer-events-none"
                style={{ zIndex: 300 }}
            ></div>

            <div
                className="cursor-dot fixed top-0 left-0 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 mix-blend-color-dodge pointer-events-none"
                style={{ zIndex: 301 }}
            ></div>


        </div>
    )
}
