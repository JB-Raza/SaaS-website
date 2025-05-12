import React, { useEffect } from 'react'

export default function Alert({ showAlert, setShowAlert, message }) {
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
            setDeletedProduct("")
        }, 3500)

    }, [showAlert])


    return (
        <div className={`min-w-[300px] z-[400] duration-300 ${showAlert ? "-translate-x-[3%]" : "translate-x-[130%]"} flex items-center gap-4 px-5 py-3 shadow-lg bg-white rounded-md border-l-3 border-red-600 fixed right-2 top-5`}>
            <i className="fa-solid fa-trash-can text-red-500 text-xl"></i>
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                    <h6 className=" font-semibold">Deleted</h6>
                    <i
                        onClick={() => setShowAlert(false)}
                        className="fa fa-xmark text-[20px]"></i>
                </div>
                <p className="text-neutral-600 text-[14px]">
                    {message}
                </p>
            </div>
        </div>
    )
}
