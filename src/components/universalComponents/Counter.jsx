import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Counter = ({target=1000, symbol="+", duration = 2, label="worldwide clients"}) => {

    const counterRef = useRef()

    useEffect(() => {
        let elem = counterRef?.current
        gsap.fromTo(elem, {
            innerText: 0,
        },
         {
            innerText: target,
            duration: duration,
            ease: "none",
            scrollTrigger: {
                trigger: elem,
                scroller: "body",
                start: "top 90%",
            },
            snap: { innerText: 1 },
         }
    )
    }, [target, duration])


    return (
        <div className="col-span-12 px-3 sm:col-span-4 mx-auto sm:mx-0">
            <h1 className="heading-1 px-4 text-center sm:text-start font-bold">
                <span  ref={counterRef}>0</span>
                <span>{symbol}</span>
                </h1>
            <p className="heading-6 font-semibold uppercase text-center sm:text-start">{label}</p>
        </div>
    )
}
