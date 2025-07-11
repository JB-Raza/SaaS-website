import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { Button, Alert } from '../../universalComponents/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { clearUser } from '../../../redux/userSlice.js'
import { axiosInstance } from '../../../utils.js'


export default function SummeryPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user?.user)



    // countdown
    let [seconds, setSeconds] = useState(60)
    let [minutes, setMinutes] = useState(60)
    let [hours, setHours] = useState(24)
    let [days, setDays] = useState(1)

    function logout() {
        dispatch(clearUser())
        localStorage.removeItem("userAccessToken")
        navigate("/login")
    }


    // timer
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) setSeconds(prev => prev - 1)
            else if (minutes > 0) {
                setSeconds(60)
                setMinutes(prev => prev - 1)
            }
            else if (hours > 0) {
                setMinutes(60)
                setHours(prev => prev - 1)
            }
            else if (days > 0) {
                setHours(24)
                setDays(prev => prev - 1)
            }


        }, [1000])

        return () => clearInterval(interval)

    }, [seconds, minutes])

    return (
        <div className="col-span-12 breakpoint-900:col-span-9 px-5">

            <div className="flex flex-wrap items-end gap-3">
                <h3 className="heading-3 font-medium">Hello {user?.username}!</h3> <p className='pb-2'>( not {user?.username}? <button onClick={logout} className="underline cursor-pointer hover:text-blue-600 font-medium">Logout</button> )</p>
            </div>
            <p className='mt-4 text-neutral-700'>Today is a great day to check your account page. You can check your last orders or have a look to your wishlist . Or maybe you can start to shop our latest offers ?</p>

            {/* my orders and wishlist */}
            <div className="grid grid-cols-12 gap-5 mt-15">
                {/* orders */}
                <div className="col-span-12 breakpoint-500:col-span-6">
                    {/* card */}
                    <div className="group flex flex-col gap-2 items-center px-5 py-10 sm:px-10 border border-neutral-200 rounded-lg">
                        {/* icon */}
                        <div className="relative mb-3">
                            <i className="fa-solid fa-bag-shopping group-hover:text-blue-700 group-hover:animate-[var(--animate-left-right)] text-[60px] text-neutral-700"></i>
                            {/* label */}
                            <span className="absolute -top-[10px] -right-[25px] h-7 w-7 flex items-center justify-center rounded-full bg-[var(--darkIndigo)] text-white">5</span>
                        </div>
                        <h4 className="heading-5 text-center group-hover:text-blue-600 transition-colors duration-200 font-semibold">Active Orders</h4>
                        <p className="text-center font-medium">Check the history of all orders</p>
                    </div>
                </div>

                {/* wishlist */}
                <div className="col-span-12 breakpoint-500:col-span-6">
                    {/* card */}
                    <div className="group flex flex-col gap-2 items-center py-10 px-5 sm:p-10 border border-neutral-200 rounded-lg">
                        {/* icon */}
                        <div className="relative mb-3">
                            <i className="fa-solid fa-heart group-hover:text-red-800 group-hover:animate-[var(--icon-bubble-animation)] text-[60px] text-neutral-700"></i>
                            {/* label */}
                            <span className="absolute -top-[10px] -right-[25px] h-7 w-7 flex items-center justify-center rounded-full bg-[var(--darkIndigo)] text-white">{user.wishlist?.length}</span>
                        </div>
                        <h4 className="heading-5 group-hover:text-red-800 transition-colors duration-200 font-semibold">My Wishlist</h4>
                        <p className="text-center font-medium">Sale!! The Best time to fullfil your wishes</p>
                    </div>
                </div>
            </div>

            {/* any sale */}
            <div className="px-20 py-15 grid grid-cols-12 rounded-2xl bg-indigo-100 w-full mt-10">
                {/* sale offer */}
                <div className="col-span-12 md:col-span-5">
                    <span className="font-medium uppercase">Summer Sale</span>
                    <h2 className="heading-2 font-medium uppercase">50% off</h2>
                    <p className="text-[17px] mt-2 font-medium uppercase">with promocode: <span className=''>12d3r4</span></p>
                    <Link to={"/shop"} >
                        <Button
                            content={"Shop Now"}
                            bgColor='bg-white'
                            hoverBg='bg-indigo-700'
                            className={"!rounded-full w-[130px] !h-[16px] mt-5 !text-black transition-all duration-200 hover:!text-white"}
                        />
                    </Link>

                </div>

                {/* timer */}
                <div className="col-span-12 md:col-span-7 flex items-center">
                    <div className="rounded-lg px-7 min-w-[320px] py-5 bg-white flex items-center justify-center mx-auto gap-3">
                        {/* days */}
                        <div className='flex items-center flex-col gap-2'>
                            <p className="text-4xl font-semibold text-blue-600 w-[60px] text-center">{days}</p>
                            <span>Days</span>
                        </div>
                        <span className="text-3xl mb-9">:</span>
                        <div className='flex items-center flex-col gap-2'>
                            <p className="text-4xl font-semibold text-blue-600 w-[60px] text-center">{hours}</p>
                            <span>Hours</span>
                        </div>
                        <span className="text-3xl mb-9">:</span>
                        <div className='flex items-center flex-col gap-2'>
                            <p className="text-4xl font-semibold text-blue-600 w-[60px] text-center">{minutes}</p>
                            <span>Mins</span>
                        </div>
                        <span className="text-3xl mb-9">:</span>
                        <div className='flex items-center flex-col gap-2'>
                            <p className="text-4xl font-semibold text-blue-600 w-[60px] text-center">{seconds}</p>
                            <span>Secs</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
