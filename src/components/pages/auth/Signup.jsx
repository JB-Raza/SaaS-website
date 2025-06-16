import { useState } from 'react'
import { RevolutionizeServices } from '../../sections/index.js'
import { Alert, Button, InputBox } from '../../universalComponents/index.js'
import { Link } from 'react-router-dom'
import { useTextAnimate } from '../../../hooks/textAnimation.js'

import { useNavigate } from 'react-router'

import { toast } from 'react-toastify'



export default function Signup() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" })
    const navigate = useNavigate()

    useTextAnimate(".animate-text")

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    async function signup() {
        try {
            const res = await fetch("http://localhost:3000/api/user/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json()
            if (result.success == true) {
                toast(
                    <Alert
                        type='success'
                        icon="fa-solid fa-check text-green-600"
                        heading={"Success"}
                        message={result.message}
                    />,
                    { autoClose: 3500 }
                )
                navigate("/login")
            }
            else {
                toast(
                    <Alert
                        type='failure'
                        icon="fa-solid fa-check text-red-600"
                        heading={"Failure"}
                        message={result.message}
                    />,
                    { autoClose: 3500 }
                )
            }
        } catch (err) {
            toast(
                <Alert
                    type='failure'
                    icon="fa-solid fa-xmark text-red-600"
                    heading={"Failure"}
                    message={err?.message}
                />,
                { autoClose: 3500 }
            )
                console.log("err = ",err)

        }
    }




    return (
        <div>
            {/* hero */}
            <section className="bg-[var(--iceBlue)]">
                <div className="custom-container mx-auto pt-[270px] pb-[170px] flex flex-col items-center gap-1.5">
                    <img loading="lazy" src="./simple-logo.png" alt="logo..." />
                    <h1 className="animate-text heading-1 capitalize font-bold text-center">Sign Up</h1>
                </div>
            </section>

            {/* login form */}
            <div className="custom-container mx-auto py-35 px-3">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        signup()
                    }}
                    className="rounded-xl shadow-2xl py-6 px-2 sm:px-6 max-w-[514px] mx-auto bg-white">
                    <h3 className="heading-4 text-center font-[700] max-w-[250px] mx-auto capitalize italic">Start Your Journey with us</h3>

                    {/* username */}
                    <InputBox type='text' name={"username"} id={"username"}
                        onChange={handleInputChange}
                        label={"Enter Username"}
                        required={true}
                    />
                    {/* email */}
                    <InputBox type='email' name={"email"} id={"email"}
                        onChange={handleInputChange}
                        label={"Enter your Email"}
                        required={true}
                    />

                    {/* password */}
                    <InputBox type='password' name={"password"} id={"password"}
                        onChange={handleInputChange}
                        label={"Create Password"}
                        required={true}
                    />

                    {/* confirm password */}
                    <InputBox type='password' name={"confirmPassword"} id={"confirmPassword"}
                        onChange={handleInputChange}
                        label={"Confirm Password"}
                        required={true}
                    />

                    <div className="input-group flex gap-2 items-center">
                        <input type="checkbox" required className='h-4 w-4 cursor-pointer' name='termsAndConditions' id='termsAndConditions' />
                        <label htmlFor="termsAndConditions" className='font-semibold cursor-pointer text-neutral-600'>
                            <span>I agree to Sassly</span>
                            <span className='inline-block ms-1 underline hover:text-blue-600 duration-200'>Terms of Service</span>
                        </label>
                    </div>

                    <Button
                        content={"Create Account"}
                        bgColor='bg-blue-700'
                        hoverBg='bg-[var(--darkIndigo)]'
                        className={"!rounded-full font-medium w-full mt-7"}
                    />

                    <p className="text-center font-semibold mt-4 mb-2 text-neutral-600">
                        <span>Already have an Account? </span>
                        <Link to={"/login"} className='inline-block font-semibold hover:text-blue-700 underline cursor-pointer hover:-translate-y-1 transition-transform duration-200'>Login</Link>
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
