import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'


export default function Button({ className, content, icon }) {

 
    return (
        <button className={`flex cursor-pointer rounded-md font-bold active:scale-95 hover:-translate-y-1 duration-200 text-base text-white bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] px-6 py-5 ${className}`}>
            <div className="content flex gap-2 items-center justify-center">
                {content}
                <i className={`${icon} text-base`}></i>
            </div>
        </button>

    )
}
