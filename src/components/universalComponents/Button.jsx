import React from 'react'

export default function Button({className, content, icon}) {
    return (
        <button className={`cursor-pointer rounded-md font-bold flex gap-2 items-center justify-center active:scale-95 hover:-translate-y-1 duration-200 text-base bg-[rgb(50_244_133)] px-6 py-[14px] ${className}`}>{content}
         <i className={`${icon} text-xs`}></i></button>
    )
}
