import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/cartSlice.js'


import { toast } from 'react-toastify'
import { Alert } from '../../universalComponents/index.js'
import { axiosInstance } from '../../../utils.js'


function PaypalButtonsWrapper({ formData }) {
    const [{ isPending }] = usePayPalScriptReducer();
    const [dbOrderID, setDbOrderID] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [loading, setLoading] = useState(false)

    const cartItems = useSelector(state => state.cart.cart)
    const token = localStorage.getItem("userAccessToken")

    // const {data} = await axiosInstance.post("")


    if (isPending) {
        return <div>Loading PayPal...</div>
    }

    if (!window.paypal?.Buttons) {
        return <div>PayPal Buttons failed to load.</div>
    }

    // on order create
    const createOrder = async (data, actions) => {
        try {
            setLoading(true)
            // validate payment method
            if (formData.paymentMethod == "") {
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
            if (formData.firstName == "" || formData.lastName == "" || formData.address == "" || formData.phone == "" || formData.zipCode == "") {
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

            const { data } = await axiosInstance.post(`/orders/new`, { ...formData, cart: JSON.stringify(cartItems) }, {
                headers: { "Authorization": `Bearer ${token}`, "Content-Type": "Application/json" },
            })

            if (data.success && data.paypalOrderID) {
                setDbOrderID(data.dbOrderID)
                return data.paypalOrderID
            }
            toast(
                <Alert
                    type='Error'
                    message={data.message}
                />,
                { autoClose: 2000 }
            )

        } catch (error) {
            console.log("create order error", error)
            alert(error.message)
        }
    }

    // on order approve
    const onApprove = async (data, actions) => {
        try {
            const confirmation = await axiosInstance.post("/orders/capture-paypal-order", {
                paypalOrderID: JSON.stringify(data.orderID),
                dbOrderID
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            dispatch(clearCart());
            toast(<Alert type='Success' message={"Order placed successfully!"} />, 2000);
            navigate("/shop")
        } catch (error) {
            toast(<Alert type='error' message={error.message} />, 2000);

        }
    }

    return (
        <>
            <PayPalButtons fundingSource='paypal'
                createOrder={createOrder}
                onApprove={onApprove}
                onCancel={() => {
                    toast(
                        <Alert
                            type='Error'
                            message={"payment cancelled"}
                        />,
                        { autoClose: 2000 }
                    )
                }}
                onError={(err) => {
                    toast(
                        <Alert
                            type='Error'
                            message={err?.message}
                        />,
                        { autoClose: 2000 }
                    )
                    console.log(err)
                }}
            />
        </>
    );
}

export default function Paypal({ formData }) {

    return (
        <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
            <PaypalButtonsWrapper formData={formData} />
        </PayPalScriptProvider>
    );
}
