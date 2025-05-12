import React, { useEffect, useState } from 'react'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, CartProductCard, InputBox } from '../../universalComponents/index.js'

// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'



export default function CartPage() {
    const [cartData, setCartData] = useState(sampleCartData)
    const [showAlert, setShowAlert] = useState(false)

    const [deletedProduct, setDeletedProduct] = useState("")
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
            setDeletedProduct("")
        }, 3500)

    }, [showAlert])

    useTextAnimate(".animate-text")

    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Cart Page</h1>
                </div>
            </section>


            <section className="py-30 px-3">
                <div className="custom-container mx-auto grid grid-cols-12 gap-10">

                    {/* cart col */}
                    <div className="col-span-12 lg:col-span-8 lg:pe-5 overflow-auto">
                        {/* alert */}
                        <div className={`min-w-[300px] z-[400] duration-300 ${showAlert ? "-translate-x-[3%]" : "translate-x-[130%]"} flex items-center gap-4 px-5 py-3 shadow-lg bg-white rounded-md border-l-3 border-red-600 fixed right-2 top-5`}>
                            <i className="fa-solid fa-trash-can text-red-500 text-xl"></i>
                            <div className="flex flex-col justify-between w-full">
                                <div className="flex justify-between">
                                    <h6 className=" font-semibold">Deleted</h6>
                                    <i
                                        onClick={() => setShowAlert(false)}
                                        className="fa fa-xmark text-[20px]"></i>
                                </div>
                                <p className="text-neutral-600 text-[14px]">"{deletedProduct}" deleted successfully</p>
                            </div>
                        </div>

                        <table className='w-full border border-neutral-200'>
                            {/* heading rows */}
                            <thead>

                                <tr className='py-10 border-b border-neutral-200'>
                                    <th className='text-start px-10 py-5'>Product</th>
                                    <th className='text-start px-10 py-5'>Price</th>
                                    <th className='text-start px-10 py-5'>Quantity</th>
                                    <th className='text-start px-10 py-5'>Sub Total</th>
                                </tr>
                            </thead>

                            <tbody>

                                {/* data rows */}
                                {((cartData || []).map((product) => (
                                    <CartProductCard key={product.id} product={product}
                                        removeProduct={(product) => {

                                            setShowAlert(true)
                                            setCartData(cartData.filter((item) => {
                                                if (item.id == product.id) {
                                                    setDeletedProduct(product.name)
                                                }
                                                return item.id !== product.id
                                            }))
                                        }}
                                    />
                                )))}
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colSpan={4}>
                                        <div className='flex border-b border-neutral-200 justify-between items-center px-10 py-5'>
                                            <button className="rounded-full border border-neutral-200 px-5 py-3 hover:text-white hover:bg-blue-600 font-semibold text-sm">Return To Shop</button>
                                            <button className="rounded-full border border-neutral-200 px-5 py-3 hover:text-white hover:bg-blue-600 font-semibold text-sm">Update Cart</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>
                                        <div className='flex justify-between items-center px-10 py-5'>
                                            <p className="font-semibold text-nowrap me-10 text-[18px]">Coupon Code</p>
                                            <div className="input-box w-full relative">
                                                <i className="fa-solid fa-envelope absolute top-1/2 left-4 -translate-y-1/2 text-neutral-700"></i>
                                                <input type="text" placeholder='Email Address'
                                                    className='ps-10 py-4 rounded-lg w-full outline-neutral-200 outline-1 focus:outline-blue-600'
                                                />
                                            </div>
                                            <Button
                                                content={"Apply Coupon"}
                                                bgColor='bg-blue-700'
                                                hoverBg='bg-[var(--darkIndigo)]'
                                                className={"w-[250px] ms-3"}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>

                    {/* info col */}
                    <div className="col-span-12 flex flex-col md:flex-row lg:flex-col items-start gap-7 lg:col-span-4">
                        {/* cart items table  */}
                        <div className='border overflow-x-aut p-5 border-neutral-200 w-full'>

                            <h5 className="heading-5 font-semibold text-center mb-6">Calculate Shipping</h5>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span>Bangladesh</span>
                                <span className='text-neutral-600 font-medium'>Country</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span>Mirpur Dohs</span>
                                <span className='text-neutral-600 font-medium'>Dhaka-1200</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span>Postal Code</span>
                                <span className='text-neutral-600 font-medium'>3215</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span>Bangladesh</span>
                                <span className='text-neutral-600 font-medium'>Country</span>
                            </div>

                            <button className="bg-neutral-200 rounded-md font-semibold capitalize hover:bg-blue-700 hover:text-white w-full py-3 duration-200">Calculate shipping</button>
                        </div>

                        {/* total */}
                        <div className='border p-5 border-neutral-200 w-full'>
                            <h5 className="heading-5 font-semibold text-center mb-6">Calculate Shipping</h5>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span className='uppercase'>subtotal</span>
                                <span className='text-neutral-700 font-medium'>$345.00</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span className='uppercase'>total</span>
                                <span className='text-neutral-900'>$450.00</span>
                            </div>
                            <Button
                                content={"Proceed to Checkout"}
                                bgColor='bg-[var(--darkIndigo)]'
                                hoverBg='bg-blue-700'
                                className={"w-full !h-[14px]"}
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




const sampleCartData = [
    { id: 0, name: "Apple Watch", imgUrl: "/shop/cart/cart-img1.png", price: 12, quantity: 1, subtotal: 60 },
    { id: 1, name: "samsung handset", imgUrl: "/shop/cart/cart-img2.png", price: 22, quantity: 1, subtotal: 60 },
    { id: 2, name: "Tata brand car", imgUrl: "/shop/cart/cart-img3.png", price: 122, quantity: 1, subtotal: 60 },
    { id: 3, name: "new Iphone pro max", imgUrl: "/shop/cart/cart-img4.png", price: 30, quantity: 1, subtotal: 60 },
]
