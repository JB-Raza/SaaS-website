import React, { useEffect, useRef, useState } from 'react'

export default function ScrollHeightTracker() {

    // track scroll progress
    const scrollBtnRef = useRef()
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrolled = (currentScroll / totalHeight) * 100;
            setScrollPercent(scrolled)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div>
            {/* scroll progress icon */}

            <button
                ref={scrollBtnRef} aria-label='go to top'
                className={`scrollProgressBtn cursor-pointer z-[200] ${window.scrollY <= 80 ? "hidden" : ""} h-13 w-13 rounded-full fixed overflow-hidden bottom-10 right-5`}
                style={{
                    background: `conic-gradient(from 0deg, gold ${scrollPercent}%, transparent ${scrollPercent}%)`
                }}
            >
            </button>
            <span
                onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 0 })
                }}
                className={`fixed z-[200] bottom-10 shadow-big right-5 h-13 w-13 bg-white/5 rounded-full ${window.scrollY <= 80 ? "hidden" : "flex items-center justify-center"}`}
            >
                <i className="fa-solid fa-arrow-up text-amber-400"></i>
            </span>
        </div>
    )
}
