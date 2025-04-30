import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useTextAnimate = (target, { start = "top 80%", end = "top 40%", fromScale = 1, stagger = 0.3, opacity = 0, y = 100, duration = 0.5 }) => {

    useEffect(() => {
        const elements = target?.current ? [target.current] : gsap.utils.toArray(target);

        elements.forEach((elem) => {
            gsap.fromTo(elem,
                { y, opacity, scale: fromScale },

                { y: 0, opacity: 1, duration: duration, stagger, scale: 1,
                    scrollTrigger: {
                        trigger: elem,
                        scroller: "body",
                        start: start,
                        toggleActions: "play none none none",
                    },
                    onComplete: () => gsap.set(elem, { clearProps: "transform" })

                }

            );
        });
    }, [target, start, end, stagger, y, duration, opacity]);
};
