import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, CartProductCard, Alert } from '../../universalComponents/index.js'

// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/cartSlice.js'



export default function CartPage() {
    const dispatch = useDispatch()
    let cartItems = useSelector(state => state.cart.cart)

    let subTotalPrice = 0
    cartItems.forEach((item) => {
        if (item != null || item != undefined) {
            subTotalPrice += (item.price * item.quantity) - (item?.price * item.quantity * item.discount) / 100
        }
    })
    cartItems = cartItems.filter((item) => item !== null)
    useTextAnimate(".animate-text")

    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Cart Page</h1>
                </div>
            </section>


            <section className="py-30 px-3">
                <div className="custom-container mx-auto grid grid-cols-12 gap-10">

                    {/* cart col */}
                    <div className="col-span-12 lg:pe-5 overflow-auto">

                        <table className='w-full border border-neutral-200'>
                            {/* heading rows */}
                            <thead>

                                <tr className='py-10 border-b border-neutral-200'>
                                    <th className='text-start px-5 py-5'></th>
                                    <th className='text-start px-5 py-5'>Title</th>
                                    <th className='text-start px-5 py-5'>Price</th>
                                    <th className='text-start px-5 py-5'>Color </th>
                                    <th className='text-start px-5 py-5'>Size</th>
                                    <th className='text-start px-5 py-5'>Quantity</th>
                                    <th className='text-start px-5 py-5'>Discount</th>
                                    <th className='text-start px-5 py-5'>Sub Total</th>
                                </tr>
                            </thead>

                            {cartItems.length == 0 ?
                                <tbody>
                                    <tr className='py-4'>
                                        <td colSpan={8} className='py-7 text-center border-b border-neutral-200 text-neutral-700'> No Items in cart</td>
                                    </tr>
                                </tbody> :
                                <tbody>

                                    {/* data rows */}
                                    {(cartItems?.length > 0 && cartItems.map((product, index) => (
                                        <CartProductCard key={product._id + index} product={product}
                                        />
                                    )))}
                                </tbody>
                            }

                            <tfoot>
                                <tr>
                                    <td colSpan={8}>
                                        <div className='flex border-b border-neutral-200 justify-between items-center px-10 py-5'>
                                            <Link to={"/shop"}
                                                className="rounded-full border border-neutral-200 px-5 py-3 hover:text-white hover:bg-blue-600 font-semibold text-sm">Return To Shop</Link>
                                            <button
                                                onClick={() => dispatch(clearCart())}
                                                className="rounded-full border border-neutral-200 px-5 py-3 hover:text-white hover:bg-blue-600 font-semibold text-sm">Clear Cart</button>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>

                    {/* info col */}
                    <div className="col-span-12 flex flex-col md:flex-row items-start gap-7">
                        {/* cart items table  */}
                        <div className='border overflow-x-auto p-5 border-neutral-200 w-full'>

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
                            <h5 className="heading-5 font-semibold text-center mb-6">Checkout</h5>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span className='uppercase'>subtotal</span>
                                <span className='text-neutral-700 font-medium'>${subTotalPrice}</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span className='uppercase'>Shipping Fee</span>
                                <span className='text-neutral-700 font-medium'>$34</span>
                            </div>
                            <div className="border flex font-semibold mb-4 justify-between border-neutral-200 rounded-sm py-3 px-4">
                                <span className='uppercase'>total</span>
                                <span className='text-neutral-900'>${subTotalPrice + 34}</span>
                            </div>
                            <Link to={'/checkout'}>
                                <Button
                                    content={"Proceed to Checkout"}
                                    bgColor='bg-[var(--darkIndigo)]'
                                    hoverBg='bg-blue-700'
                                    className={"w-full !h-[14px]"}
                                />
                            </Link>
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
