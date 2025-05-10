import React, { useState } from 'react'

export default function InputBox({
    type = "text", name, id, value, onChange, label, placeholder = "Enter text", className = '', icon,
    required = false
}) {

    const [showPassword, setShowPassword] = useState(null)


    return (
        <div className="flex relative flex-col gap-3 items-start mb-7">
            {label &&
                <label htmlFor="name" className="font-semibold">{label}</label>}
            <input
                type={showPassword == true ? "text" : type}
                required={required}
                name={name} id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`bg-neutral-100 focus:outline-blue-600 focus:outline-1 py-4 px-7 rounded-md w-full font-semibold ${className}`}
            />
            {type != "password" ?
                icon && <i className={`absolute top-1/2 -translate-y-1/2 right-5 text-blue-600 ${icon}`}></i> :
                <button
                    type='button'
                    onClick={() => setShowPassword(prev => !prev)}
                    className='absolute right-7 bottom-4'>
                    {showPassword ?
                        <i className="fa-regular fa-eye-slash text-neutral-600"></i>
                        :
                        <i className="fa-regular text-neutral-600 fa-eye"></i>
                    }
                </button>
            }
        </div>
    )
}
