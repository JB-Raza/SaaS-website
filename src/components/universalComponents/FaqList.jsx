import React, { useEffect, useRef, useState } from 'react'
import { useTextAnimate } from '../../hooks/textAnimation'



export default function FaqList() {
    const [openDropdown, setOpenDropdown] = useState(null)

    return (
        <div className="col-span-12 md:col-span-7 flex flex-col">
            {faqData.map(item => (
                <FaqDropdown
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openDropdown === item.id}
                    setIsOpen={setOpenDropdown}
                />
            ))}
        </div>
    )
}



function FaqDropdown({ id, isOpen, setIsOpen, question, answer }) {

    useTextAnimate(".animate-faq-element", {start: "top 90%"})
    

    const contentRef = useRef()

    function toggleDropdown(id) {
        setIsOpen(prevId => prevId == id ? null : id)
    }

    // animation for smooth dropdown opening and closing
    useEffect(() => {
        if (isOpen) contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
           else contentRef.current.style.height = `${0}px`
    }, [isOpen])


    return (
        <div
            className={`animate-faq-element mb-8 cursor-pointer outline-none px-10 ${isOpen ? "shadow-xl rounded-xl" : "border-b-1 border-neutral-200"}`}>

            <summary
                onClick={(e) => {
                    e.preventDefault()
                    toggleDropdown(id)
                }}
                className={`flex justify-between text-wrap items-center pb-8 font-semibold heading-5 text-neutral-800`}>
                <span>{question}</span>

                {isOpen ? (
                    <span className='h-[22px] min-w-[22px] rounded-full bg-amber-600 border-1 border-neutral-100 flex items-center justify-center'>
                        <i className="fa-solid fa-minus text-[12px] text-white"></i>
                    </span>
                ) : (
                    <span className='h-[22px] min-w-[22px] rounded-full leading-loose border-1 border-neutral-100 flex items-center justify-center'>
                        <i className="fa-solid fa-plus text-[12px] text-neutral-500"></i>
                    </span>
                )}
            </summary>

            <div
                ref={contentRef}
                className='overflow-hidden transition-[height] duration 300'>
                <p
                    className="animate-app-integration-text max-w-[640px] mb-8 pe-3 text-wrap text-neutral-500 leading-loose">
                    {answer}
                </p>
            </div>

        </div>
    );
}




const faqData = [
    { id: 1, question: "What is Sassly?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },

    { id: 2, question: "Why Choose Sassly?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },

    { id: 3, question: "Can I upgrade to a different plan at a later time?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },
    { id: 4, question: "What is the cost of Additional User?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },
    { id: 5, question: "What's the commitment?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },
    { id: 6, question: "What languages does Sassly AI support?", answer: "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional" },
]