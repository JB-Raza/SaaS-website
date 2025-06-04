import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'


export default function Button({
    className,
    content,
    type = "submit",
    icon,
    disabled = false,
    bgColor = 'bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)]',
    hoverBg = "bg-[var(--greenBg)]",
    onClickFn
}) {

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
                    x: x - 100,
                    y: y,
                    height: 100,
                    width: 100,
                    scale: 20,
                    duration: 0.5,
                    ease: "none",

                });

            }
        }
        function leaveBtn(e) {
            if (button && overlayRef.current) {
                let rect = button.getBoundingClientRect()
                let x = e.clientX - rect.left
                let y = e.clientY - rect.top
                gsap.to(overlayRef.current, {
                    x: x,
                    y: y,
                    height: 0,
                    width: 0,
                    scale: 0,
                    duration: 0.5,
                    ease: "none",
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
        <button
            type={type}
            disabled={disabled}
            onClick={onClickFn}
            ref={btnRef} className={`group disabled:opacity-80 disabled:active:scale-100 disabled:cursor-default disabled:hover:translate-y-0 flex relative cursor-pointer rounded-md h-15 py-6 px-10 overflow-clip font-bold active:scale-95 hover:-translate-y-1 duration-200 text-base text-white ${bgColor} ${className}`
            }>
            <div ref={overlayRef}
                disabled={true}
                className={`group-disabled:hidden btn-overlay rounded-full absolute ${hoverBg}`}></div>
            <div className="absolute top-0 left-0 bottom-0 h-full w-full  flex gap-2 items-center justify-center">
                {content}
                {/* px-6 py-5 */}
                {icon ? <i className={`${icon} group-disabled:group-hover:text-white text-base`}></i> : null}

            </div>
        </button >

    )
}
