import React from 'react';

export default function Alert({ type = "success", heading, message }) {
    return (
        <div className={`min-w-[300px] flex items-center gap-4 px-5 py-3 rounded-md`}>
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                    <h6 className={`font-semibold ${type === "success" ? "text-green-600" : "text-red-600"}`}>{heading}</h6>
                </div>
                <p className="text-neutral-600 text-[14px]">
                    {message}
                </p>
            </div>
        </div>
    );
}
