import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'


export default function Button({ className, content, icon }) {

    let btnRef = useRef()
    let overlayRef = useRef()

    useEffect(() => {
        const button = btnRef.current;
    
        function moveOverlay(e) {
            if (button && overlayRef.current) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
    
                gsap.to(overlayRef.current, {
                    x: x,
                    y: y,
                    height: 100,
                    width: 100,
                    scale:10,
                    duration: 2,
                    ease: "power3.out"
                });
            }
        }
        function leaveBtn (e){
            if(button && overlayRef.current){
                let rect = button.getBoundingClientRect()
                let x = e.clientX - rect.left
                let y = e.clientY - rect.top
                gsap.to(overlayRef.current, {
                    x: x,
                    y: y,
                    height: 0,
                    width: 0,
                    scale:0,
                    duration: 2,
                    ease: "power3.out"
                });
            }
        }
    
        if (button) {
            button.addEventListener("mousemove", moveOverlay);
            button.addEventListener("mouseleave", leaveBtn)
        }
    
        return () => {
            if (button) {
                button.removeEventListener("mousemove", moveOverlay);
            button.removeEventListener("mouseleave", leaveBtn)
            }
        }
    }, []);
    
 
    return (
        <button ref={btnRef} className={`flex relative cursor-pointer rounded-md h-15 py-6 px-10 overflow-clip font-bold active:scale-95 hover:-translate-y-1 duration-200 text-base text-white bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] ${className}`}>
            <div ref={overlayRef} className="btn-overlay rounded-full absolute bg-[var(--greenBg)]"></div>
            <div className="absolute top-0 left-0 bottom-0 h-full w-full  flex gap-2 items-center justify-center">
                {content}
                {/* px-6 py-5 */}
                <i className={`${icon} text-base`}></i>
            </div>
        </button>

    )
}
