import React, { useEffect, useRef } from 'react'

export default function Modal({ isModalOpen, setIsModalOpen, orderData }) {
    const modalRef = useRef()

    useEffect(() => {

        if (isModalOpen) document.body.classList.add("modal-open")
        else document.body.classList.remove("modal-open")

    }, [isModalOpen])

    useEffect(() => {
        const handleCloseModal = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target) && !e.target.closest("[data-modal-trigger]")) {
                setIsModalOpen(false)
            }
        }
        document.addEventListener("click", handleCloseModal)

        return () => {
            document.removeEventListener("click", handleCloseModal)
        }
    }, [isModalOpen])

    return (
        <div ref={modalRef} className={`absolute left-1/2 overflow-hidden -translate-x-1/2 w-[calc(100%-50px)] max-w-[1100px] max-h-[500px] z-50 bg-white shadow-lg rounded-lg transform-[translate] duration-300 ${isModalOpen ? "opacity-100 visible translate-y-[-30px]" : "opacity-0 invisible translate-y-0"}`}>
            {/* wrapper */}
            <div className={`w-full max-h-[470px] my-auto py-10 px-4 md:px-10 overflow-auto `}>
                <h3 className="heading-3 font-bold text-center">Order Details</h3>
                <div className="flex justify-between gap-2 flex-wrap">
                    <h6 className="heading-6 font-semibold">Items:</h6>
                    <span className="px-4 py-1 border-1 border-neutral-200 text-white font-medium rounded-full"
                        style={{
                            backgroundColor: orderData.orderStatus == "delivered" ? "green" : orderData.orderStatus == "processing" ? "orange" : orderData.orderStatus == "on-the-way" ? "blue" : orderData.orderStatus == "cancelled" ? "red" : "",
                        }}
                    >{orderData?.orderStatus}</span>
                </div>

                {/* all items */}
                <div className="wrapper overflow-auto">
                    <table className='w-full min-w-[760px] my-5'>
                        {/* heading rows */}
                        <thead>

                            <tr className='py-10 border-b border-neutral-200'>
                                <th className='text-start px-5 py-5'></th>

                                <th className='text-start py-5'>Title</th>
                                <th className='text-start py-5'>size/color</th>
                                <th className='text-start py-5'>Discount</th>
                                <th className='text-start py-5'>SubTotal</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {(orderData.items || []).map((item) => (
                                <tr key={item._id} className="border-b border-neutral-200">
                                    <td className="w-[80px] flex items-center justify-center py-4 text-neutral-800 font-medium"> <img
                                        className='w-[50px]'
                                        src={item.variant.image} alt="" /> </td>

                                    <td className="text-start text-neutral-800 py-4">
                                        <p className='font-medium  max-w-[220px] truncate'>{item.title}</p>
                                    </td>
                                    <td className={`text-start py-4`}>
                                        {item.variant.size || "Nill"} /
                                        <span className={`border border-neutral-200 shadow-sm mx-1 px-[10px] rounded-full`} style={{ height: "10px", width: "10px", backgroundColor: item.variant.color }}></span>
                                    </td>
                                    <td className="font-medium text-start text-neutral-800 py-4">{item.discount}%</td>
                                    <td className="font-medium text-start text-neutral-800 py-4">${item.totalPriceAfterDiscount} / {item.quantity} item(s)</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* other details */}
                <div className="wrapper my-10">

                    <div className="flex flex-col gap-5 mt-5">
                        <h6 className="heading-6 font-semibold">Delivery Information</h6>
                        <div className='wrapper'>
                            <div className="grid grid-cols-12 my-2">
                                <p className="col-span-12 sm:col-span-3 font-semibold text-[18px]">Order Placed On: </p>
                                <p className='col-span-12 sm:col-span-9'>{new Date(orderData.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="grid grid-cols-12 my-2">
                                <p className="col-span-12 sm:col-span-3 font-semibold text-[18px]">Phone: </p>
                                <p className='col-span-12 sm:col-span-9'>{orderData.deliveryInfo?.phone}</p>
                            </div>
                            <div className="grid grid-cols-12 my-2">
                                <p className="col-span-12 sm:col-span-3 font-semibold text-[18px]">Apartment: </p>
                                <p className='col-span-12 sm:col-span-9'>{orderData.deliveryInfo?.apartment || "....."}</p>
                            </div>
                            <div className="grid grid-cols-12 my-2">
                                <p className="col-span-12 sm:col-span-3 font-semibold text-[18px]">Address: </p>
                                <p className='col-span-12 sm:col-span-9 capitalize'>{orderData.deliveryInfo?.address}</p>
                            </div>
                            <div className="grid grid-cols-12 my-2">
                                <p className="col-span-12 sm:col-span-3 font-semibold text-[18px]">City: </p>
                                <p className='col-span-12 sm:col-span-9 capitalize'>{orderData?.deliveryInfo?.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
