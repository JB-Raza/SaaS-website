import React from 'react'

export default function Button({className, content, icon}) {
    return (
        // bg-[rgb(50_244_133)]
        <button className={`cursor-pointer rounded-md font-bold flex gap-2 items-center justify-center active:scale-95 hover:-translate-y-1 duration-200 text-base text-white bg-[linear-gradient(270deg,_#06766E_0%,_#20BA8B_100%)] px-6 py-5 ${className}`}>{content}
         <i className={`${icon} text-xs`}></i></button>
    )
}
