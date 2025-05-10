import React, { useState } from 'react'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, InputBox } from '../../universalComponents/index.js'
// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function CheckoutPage() {
    const [checkoutFormData, setCheckoutFormData] = useState({
        firstName: "", lastName: "",
        address: "", city: "", houseNoAndStreet: "", appartment: "", zipCode: "",
        phone: "", comments: ""
    })
    const onInputChange = (e) => {
        setCheckoutFormData({
            [e.target.id]: e.target.value
        })
    }
    useTextAnimate(".animate-text")

    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Checkout Page</h1>
                </div>
            </section>

            <section className="py-30 ">
                <div className="custom-container px-3 mx-auto grid grid-cols-12 gap-7">
                    {/* customer data form */}
                    <div className="col-span-12 overflow-clip breakpoint-1000:col-span-7">
                        <h5 className="heading-5 font-semibold">Delivery Information</h5>

                        <form className='mt-7 px-2'>
                            {/* name (first and last) */}
                            <div className="input-group flex flex-col breakpoint-500:flex-row breakpoint-500:gap-5">
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"firstName"}
                                        id={"firstName"}
                                        placeholder='First Name'
                                        value={checkoutFormData.firstName}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-user"}
                                    />
                                </div>
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"lastName"}
                                        id={"lastName"}
                                        placeholder='Last Name'
                                        value={checkoutFormData.lastName}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-user"}
                                    />
                                </div>
                            </div>
                            {/* address and city */}
                            <div className="input-group flex flex-col breakpoint-500:flex-row  breakpoint-500:gap-5">
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"address"}
                                        id={"address"}
                                        placeholder='Address Here'
                                        value={checkoutFormData.address}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-location-dot"}
                                    />
                                </div>
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"city"}
                                        id={"city"}
                                        placeholder='City'
                                        value={checkoutFormData.city}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-angle-down"}
                                    />
                                </div>
                            </div>

                            {/* house and street */}
                            <InputBox
                                name={"appartment"}
                                id={"appartment"}
                                placeholder='Appartment, Suit, Unit etc'
                                value={checkoutFormData.appartment}
                                onChange={onInputChange}
                                icon={"fa-solid fa-location-dot"}
                            />

                            {/* zip code and phone */}
                            <div className="input-group flex flex-col breakpoint-500:flex-row  breakpoint-500:gap-5">
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"zipCode"}
                                        id={"zipCode"}
                                        placeholder='Zip Code'
                                        value={checkoutFormData.zipCode}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-map-pin"}
                                    />
                                </div>
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        type='number'
                                        name={"phone"}
                                        id={"phone"}
                                        placeholder='Your Phone'
                                        value={checkoutFormData.phone}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-phone"}
                                    />
                                </div>
                            </div>

                            {/* comments */}
                            <div className="flex relative flex-col gap-3 items-start mb-7">

                                <textarea name="comment" rows={8} id="comment" placeholder='Write something...'
                                    className='bg-neutral-100 focus:outline-blue-600 focus:outline-1 py-4 px-7 rounded-md w-full font-semibold'
                                ></textarea>
                                <i className="fa fa-user text-blue-600 absolute top-4 right-5"></i>
                            </div>

                            <Button
                                content={"Save All Informantion"}
                                bgColor='bg-blue-700'
                                hoverBg='bg-[var(--darkIndigo)]'
                                className={"w-full"}
                            />

                        </form>
                    </div>

                    {/* data col */}
                    <div className="col-span-12 breakpoint-1000:col-span-5">
                        <h5 className="heading-5 font-semibold text-center">Order Summery</h5>

                        <div className="bg-neutral-100 rounded-md mt-9 px-3 sm:px-6 lg:px-12 py-12">
                            {/* sub total */}
                            <div className="bg-white text-neutral-600 font-semibold flex mb-7 justify-between rounded-md py-3 px-4">
                                <span>Subtotal</span>
                                <span>$345.00</span>
                            </div>
                            {/* shipping fee */}
                            <div className="bg-white text-neutral-600 font-semibold flex mb-7 justify-between rounded-md py-3 px-4">
                                <span>Shipping Fee</span>
                                <span>$34.00</span>
                            </div>

                            {/* voucher code */}
                            <div className="input-group flex relative mb-7">
                                <input type="text"
                                    placeholder='Enter Voucher Code'
                                    className='bg-white focus:outline-blue-600 text-neutral-700 focus:outline-1 py-[14px] px-7 rounded-md w-full font-semibold'
                                />
                                <Button
                                    content={"Apply Code"}
                                    bgColor='bg-blue-700'
                                    hoverBg='bg-[var(--darkIndigo)]'
                                    className={"w-[120px] sm:w-[140px] text-sm sm:text-[16px] h-[53px] !absolute right-0"}
                                />
                            </div>

                            {/* total */}
                            <div className="flex justify-between items-center mb-7">
                                <span className='font-bold text-xl'>Total</span>
                                <span className="font-semibold">$765.00</span>
                            </div>

                            {/* payment method */}
                            <div className="wrapper p-7 mb-7 bg-white rounded-lg flex flex-col items-start gap-4">

                                {/* bank transfer */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="bankTransfer" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            id="bankTransfer"
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center peer-checked:border-1 peer-checked:bg-white peer-checked:border-blue-600">
                                        </span>
                                        <span className="absolute translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full transition-transform scale-0 peer-checked:scale-100"></span>
                                        <span className='font-medium'>Direct Bank Transfer</span>
                                    </label>

                                </div>

                                {/* check payment */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="checkPayment" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            id="checkPayment"
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center peer-checked:border-1 peer-checked:bg-white peer-checked:border-blue-600">
                                        </span>
                                        <span className="absolute translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full transition-transform scale-0 peer-checked:scale-100"></span>
                                        <span className='font-medium'>Check Payment</span>
                                    </label>

                                </div>
                                {/* cash on delivery */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="cashOnDelivery" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            id="cashOnDelivery"
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center peer-checked:border-1 peer-checked:bg-white peer-checked:border-blue-600">
                                        </span>
                                        <span className="absolute translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full transition-transform scale-0 peer-checked:scale-100"></span>
                                        <span className='font-medium'>Cash On Delivery</span>
                                    </label>

                                </div>

                            </div>

                            <Button
                                content={"Proceed to Pay"}
                                bgColor='bg-[#072032]'
                                hoverBg='bg-blue-700'
                                className={"w-full !h-[20px]"}
                            />

                        </div>
                    </div>

                </div>
            </section>




            <RevolutionizeServices>
                <div className="flex gap-5 flex-wrap my-10 justify-center items-center">
                    <Button

                        content={"Get Started Trial"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"text-white min-w-[175px] rounded-xl"} />
                    <Button
                        content={"Get Started Trial"}
                        bgColor='bg-transparent'
                        hoverBg='bg-blue-700'
                        className={"text-white border-2 border-white hover:border-0 hover:text-black min-w-[175px] rounded-xl"} />
                </div>

            </RevolutionizeServices>
        </div>
    )
}
