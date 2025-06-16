import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/cartSlice.js'
import { useNavigate } from 'react-router'

// paypal
import Paypal from './Paypal.jsx'


// stripe
import { loadStripe } from '@stripe/stripe-js'

// components
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, InputBox, Alert } from '../../universalComponents/index.js'
// hooks
import { useTextAnimate } from '../../../hooks/textAnimation.js'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../../utils.js'


export default function CheckoutPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.cart)
    const token = localStorage.getItem("userAccessToken")
    const [shippingFee, setShippingFee] = useState(34)
    const [loading, setLoading] = useState(false)
    const formRef = useRef()
    // formData
    const [checkoutFormData, setCheckoutFormData] = useState({
        firstName: "", lastName: "",
        address: "", city: "lahore", apartment: "", zipCode: "",
        phone: "", comment: "", paymentMethod: "", voucherCode: ""
    })
    const [voucherCodeText, setVoucherCodeText] = useState("")


    useTextAnimate(".animate-text")

    // on input change
    const onInputChange = (e) => {
        setCheckoutFormData({
            ...checkoutFormData,
            [e.target.name]: e.target.value
        })
    }


    let subTotalPrice = 0
    cartItems.forEach((item) => {
        if (item != null && item != undefined) {
            subTotalPrice += (item.price * item.quantity) - (item?.price * item.quantity * item.discount) / 100

        }
    })

    // submit order function
    const handleOrdersSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            // payment method validation
            if (checkoutFormData.paymentMethod == "") {
                toast(
                    <Alert
                        type='Error'
                        icon="fa-solid fa-xmark text-red-600"
                        heading={"Error"}
                        message={"payment method is required"}
                    />,
                    { autoClose: 2000 }
                )
                setLoading(false)
                return
            }
            // formData validation
            if (checkoutFormData.firstName == "" || checkoutFormData.lastName == "" || checkoutFormData.address == "" || checkoutFormData.phone == "" || checkoutFormData.zipCode == "") {
                toast(
                    <Alert
                        type='Error'
                        icon="fa-solid fa-xmark text-red-600"
                        heading={"Error"}
                        message={"all fields are required"}
                    />,
                    { autoClose: 2000 }
                )
                setLoading(false)
                return
            }

            // cart length validation
            if (cartItems.length == 0) {
                toast(
                    <Alert
                        type='Error'
                        icon="fa-solid fa-xmark text-red-600"
                        heading={"Error"}
                        message={"no items in cart"}
                    />,
                    { autoClose: 2000 }
                )
                setLoading(false)

                return
            }

            // stripe
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
            const { data } = await axiosInstance.post(`/orders/new`, { ...checkoutFormData, cart: JSON.stringify(cartItems) }, {
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "Application/json" },
            })

            if (data.success) {
                // stripe
                setLoading(false)

                if (checkoutFormData.paymentMethod == "stripe") {
                    const result = stripe.redirectToCheckout({
                        sessionId: data.sessionId
                    })
                    if (result.error) {
                        console.log(result.error)
                        return
                    }
                }
                toast(
                    <Alert
                        type='Success'
                        message={data.message}
                    />,
                    { autoClose: 2000 }
                )
                dispatch(clearCart())
                return
            }
            toast(
                <Alert
                    type='Error'
                    message={data.message}
                />,
                { autoClose: 2000 }
            )
            setLoading(false)

        } catch (error) {
            toast(
                <Alert
                    type='Error'
                    message={error.message}
                />,
                { autoClose: 2000 }
            )
            setLoading(false)
            console.log(error)
        }
    }



    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Checkout Page</h1>
                </div>
            </section>

            <section className="py-30 ">
                <div className="custom-container px-3 mx-auto grid grid-cols-12 gap-7">
                    {/* form data col */}
                    <div className="col-span-12 overflow-clip breakpoint-1000:col-span-7">
                        <h5 className="heading-5 font-semibold">Delivery Information</h5>

                        <form
                            ref={formRef}
                            onSubmit={handleOrdersSubmit}
                            className='mt-7 px-2'>
                            {/* name (first and last) */}
                            <div className="input-group flex flex-col breakpoint-500:flex-row breakpoint-500:gap-5">
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        name={"firstName"}
                                        id={"firstName"}
                                        placeholder='First Name*'
                                        required={true}
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
                                        required={true}
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
                                        required={true}
                                        icon={"fa-solid fa-location-dot"}
                                    />
                                </div>
                                <div className="breakpoint-500:w-1/2">

                                    <select name="city" id="city"
                                        className='w-full bg-neutral-100 py-4 rounded-md px-5 font-semibold text-neutral-600'
                                        required={true}
                                        value={checkoutFormData.city}
                                        onChange={onInputChange}
                                        defaultChecked={"lahore"}>
                                        <option value="lahore">Lahore</option>
                                        <option value="islamabad">Islamabad</option>
                                        <option value="karachi">Karachi</option>
                                        <option value="faisalabad">Faisalabad</option>
                                        <option value="gujrat">Gujrat</option>
                                        <option value="kasoor">Kasoor</option>
                                    </select>
                                </div>
                            </div>

                            {/* house and street */}
                            <InputBox
                                name={"apartment"}
                                id={"apartment"}
                                placeholder='Appartment, Suit, Unit etc'
                                value={checkoutFormData.apartment}
                                required={true}
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
                                        required={true}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-map-pin"}
                                    />
                                </div>
                                <div className="breakpoint-500:w-1/2">
                                    <InputBox
                                        type='number'
                                        name={"phone"}
                                        id={"phone"}
                                        required={true}
                                        placeholder='Your Phone'
                                        value={checkoutFormData.phone}
                                        onChange={onInputChange}
                                        icon={"fa-solid fa-phone"}
                                    />
                                </div>
                            </div>

                            {/* comments */}
                            <div className="flex relative flex-col gap-3 items-start mb-7">

                                <textarea name="comment" rows={8} id="comment"
                                    value={checkoutFormData.comment}
                                    onChange={onInputChange}
                                    placeholder='Any Comments related to your order...'
                                    className='bg-neutral-100 focus:outline-blue-600 focus:outline-1 py-4 px-7 rounded-md w-full font-semibold'
                                ></textarea>
                                <i className="fa fa-user text-blue-600 absolute top-4 right-5"></i>
                            </div>

                            <Button
                                type="button"
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
                                <span>${subTotalPrice}</span>
                            </div>
                            {/* shipping fee */}
                            <div className="bg-white text-neutral-600 font-semibold flex mb-7 justify-between rounded-md py-3 px-4">
                                <span>Shipping Fee</span>
                                <span>${subTotalPrice > 0 ? shippingFee : subTotalPrice}</span>
                            </div>

                            {/* voucher code */}
                            <div className="input-group flex relative mb-7">
                                <input type="text"
                                    value={voucherCodeText}
                                    onChange={(e) => setVoucherCodeText(e.target.value)}
                                    placeholder='Enter Voucher Code'
                                    className='bg-white focus:outline-blue-600 text-neutral-700 focus:outline-1 py-[14px] px-7 rounded-md w-full font-semibold'
                                />
                                <Button
                                    type='button'
                                    onClickFn={() => {
                                        if (voucherCodeText == "") return
                                        setCheckoutFormData({
                                            ...checkoutFormData,
                                            voucherCode: voucherCodeText
                                        })
                                        toast(
                                            <Alert
                                                type="success"
                                                message={"Voucher code applied"}
                                            />,
                                            { autoClose: 2000 }
                                        )
                                        setVoucherCodeText("")
                                    }}
                                    content={"Apply Code"}
                                    bgColor='bg-blue-700'
                                    hoverBg='bg-[var(--darkIndigo)]'
                                    className={"w-[120px] sm:w-[140px] text-sm sm:text-[16px] h-[53px] !absolute right-0"}
                                />
                            </div>

                            {/* total */}
                            <div className="flex justify-between items-center mb-7">
                                <span className='font-bold text-xl'>Total</span>
                                <span className="font-semibold">${subTotalPrice > 0 ? subTotalPrice + shippingFee : subTotalPrice}</span>
                            </div>

                            {/* payment method */}
                            <div className="wrapper p-7 mb-7 bg-white rounded-lg flex flex-col items-start gap-4">

                                {/* Paypal */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="paypal-option" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            value={"paypal"}
                                            onChange={onInputChange}
                                            name="paymentMethod"
                                            id="paypal-option"
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center peer-checked:border-1 peer-checked:bg-white peer-checked:border-blue-600">
                                        </span>
                                        <span className="absolute translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full transition-transform scale-0 peer-checked:scale-100"></span>
                                        <span className='font-medium'>Paypal</span>
                                    </label>

                                </div>

                                {/* Stripe */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="stripe" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            value={"stripe"}
                                            onChange={onInputChange}
                                            name="paymentMethod"
                                            id="stripe"
                                            className="hidden peer"
                                        />
                                        <span className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center peer-checked:border-1 peer-checked:bg-white peer-checked:border-blue-600">
                                        </span>
                                        <span className="absolute translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full transition-transform scale-0 peer-checked:scale-100"></span>
                                        <span className='font-medium'>Stripe</span>
                                    </label>

                                </div>

                                {/* cash on delivery */}
                                <div className="input-group flex items-center gap-3">
                                    <label htmlFor="cashOnDelivery" className="relative flex items-center cursor-pointer gap-3">
                                        <input
                                            type="radio"
                                            value={"cashOnDelivery"}
                                            onChange={onInputChange}
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

                            {checkoutFormData.paymentMethod == "paypal" ?
                            <Paypal formData={checkoutFormData} /> :
                                <Button
                                    onClickFn={() => formRef.current.requestSubmit()}
                                    content={loading ? "Proceeding" : "Proceed to Pay"}
                                    bgColor='bg-[#072032]'
                                    hoverBg='bg-blue-700'
                                    disabled={loading}
                                    className={"w-full !h-[20px] disabled:opacity-70"}
                                />
                            }

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
