import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import { useDispatch } from 'react-redux'
import {setUser} from '../../../redux/userSlice.js'

// react toast
import { toast } from 'react-toastify'
import { RevolutionizeServices } from '../../sections/index.js'
import { Button, Alert, InputBox } from '../../universalComponents/index.js'
import { Link } from 'react-router-dom'
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ email: "", password: "" })

    useTextAnimate(".animate-text")

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    // login logic
    async function login(e) {
        e.preventDefault()
        let res = await fetch("http://localhost:3000/api/user/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(formData)
        })
        const result = await res.json()

        if (result.success) {
            localStorage.setItem("userAccessToken", result.token)
            localStorage.setItem("user", JSON.stringify(result.profile))
            dispatch(setUser(result.profile))
            navigate("/")
            toast(
                <Alert
                    type='success'
                    icon="fa-solid fa-check text-green-600"
                    heading={"Success"}
                    message={result.message}
                />,
                { autoClose: 3500 }
            )
        }
        else {
            toast.error(
                <Alert
                    type='error'
                    icon="fa-solid fa-xmark text-green-600"
                    heading={"Failure"}
                    message={result.message}
                />,
                { autoClose: 3500 }
            )
        }
    }


    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Sign In</h1>
                </div>
            </section>

            {/* login form */}
            <div className="custom-container mx-auto py-35 px-3">
                <form
                    onSubmit={login}
                    className="rounded-xl shadow-2xl py-6 px-2 sm:px-6 max-w-[514px] mx-auto bg-white">
                    <h3 className="heading-4 text-center font-[700] max-w-[250px] mx-auto capitalize italic">Start Your Journey with us</h3>

                    {/* name */}
                    <InputBox type='text' name={"email"} id={"email"}
                        label={"Enter your Email"}
                        required={true}
                        onChange={handleInputChange}
                    />
                    <InputBox type='password' name={"password"} id={"password"}
                        label={"Password"}
                        required={true}
                        onChange={handleInputChange}
                    />

                    <div className="flex justify-between flex-col sm:flex-row gap-3 mx-3">
                        <div className="input-group flex gap-2 items-center">
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' name='rememberMe' id='rememberMe' />
                            <label htmlFor="rememberMe" className='font-semibold cursor-pointer text-neutral-600'>Remember me</label>
                        </div>
                        {/* forgot password */}
                        <p className="text-red-700 font-semibold hover:underline cursor-pointer hover:-translate-y-1 transition-transform duration-200">Forgot Password?</p>
                    </div>

                    <Button
                        content={"Login"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"!rounded-full w-full mt-7"}
                    />
                    {/* <ToastContainer /> */}


                    <p className="text-center font-semibold mt-4 mb-2 text-neutral-600">
                        <span>Are you new here? </span>
                        <Link to={"/signup"} className='inline-block font-semibold hover:text-blue-700 underline cursor-pointer hover:-translate-y-1 transition-transform duration-200'>Create an Account</Link>
                    </p>


                </form>

            </div>

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
