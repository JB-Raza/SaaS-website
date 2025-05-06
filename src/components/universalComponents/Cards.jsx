import Button from './Button.jsx'
import { useTextAnimate } from '../../hooks/textAnimation.js'
import {Link} from 'react-router-dom'

export const PricingCard_1 = ({
    data,
    className,
}) => {


    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10 ${className}`}>
                <h5 className="card-text-animate heading-5 font-semibold">{data.title}</h5>
                <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                <hr className="border-t-[1px] my-7 border-gray-200" />
                <p className="card-text-animate heading-2 font-bold">${data.annualPrice}<span className="text-xl">/Yearly</span> </p>

                <Button
                    content={"start free trial"}
                    bgColor={"bg-blue-600"}
                    hoverBg={"bg-[var(--darkIndigo)]"}
                    icon={"fa fa-arrow-up rotate-[45deg]"}
                    className={"capitalize card-text-animate !rounded-lg w-full mt-10 text-white !py-4"} />
                <p className="text-center card-text-animate font-medium my-3">Renews at $9.88/month</p>
                <div className="benefits flex flex-col gap-5 mt-10">
                    {(data.benefits || []).map((benefit, index) => (
                        <p key={`${index}`} className="card-text-animate font-semibold flex gap-3 items-center">
                            <span className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                                <i className="fa-solid fa-check text-sm text-gradient-teal"></i>
                            </span>
                            <span>
                                {benefit}
                            </span>
                        </p>
                    ))}

                </div>
            </div>
        </div>
    )
}

export const PricingCard_2 = ({ data, className }) => {

    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto bg-white hover:!bg-[url(/half-moon-shape.png)] !bg-[url(/half-moon-shape.png)] bg-no-repeat bg-[center_40px] hover:bg-[#072032] hover:text-white transition-background duration-300 rounded-3xl px-10 py-13 ${className}`}>
                <p className="card-text-animate heading-4 mb-4 font-bold">${data.annualPrice}<span className="text-xl">/month</span> </p>
                <p className="font-medium">Smart Pricing for Good Services</p>

                <Button
                    content={"start free trial"}
                    bgColor={"bg-blue-700"}
                    hoverBg={"bg-white text-red-600"}
                    icon={"fa fa-arrow-up rotate-[45deg]"}
                    className={"capitalize card-text-animate !rounded-[22px] w-full mt-10 text-white hover:text-indigo-900 !py-4"} />

                <h4 className="heading-5 mt-10 font-bold">Regular Plan</h4>
                <ul className="benefits flex flex-col gap-5 mt-10 list-disc marker:text-blue-600 marker:text-lg list-inside">
                    {(data.benefits || []).map((benefit, index) => (
                        <li key={`${index}`} className="card-text-animate font-semibold ">
                            {benefit}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export const PricingCard_3 = ({ data, index }) => {

    useTextAnimate(".card-text-animate", { start: "top 100%", y: 30 })

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto hover:bg-white hover:shadow-2xl transition-background duration-200 bg-neutral-100 px-8 py-14 rounded-md border border-neutral-300`}>
                <div className="flex justify-between">
                    <span className={`${index == 0 ? "bg-blue-600" : index == 1 ? "bg-orange-600" : "bg-emerald-600"} text-white py-2 px-4 rounded-md`}>Regular</span>
                    <p className="card-text-animate heading-4 font-bold">${data.annualPrice}<span className="text-xl">/m</span> </p>
                </div>
                <hr className="border-t-[1px] my-7 border-gray-200" />

                <p className="card-text-animate text-neutral-600 font-medium my-3">Data curation involve the careful election organization, and maintenance</p>
                <div className="benefits flex flex-col gap-5 mt-10">
                    {(data.benefits || []).map((benefit, index) => (
                        <p key={`${index}`} className="card-text-animate font-semibold flex gap-3 items-center">
                            <i className="fa-solid fa-check text-gradient-teal"></i>
                            <span>
                                {benefit}
                            </span>
                        </p>
                    ))}
                    <Button content={"Choose Plan"} bgColor={"bg-[var(--darkIndigo)]"} hoverBg={"bg-blue-600"}
                        icon={"fa fa-arrow-up rotate-[45deg]"}
                        className={"capitalize card-text-animate w-full mt-10 text-white !rounded-3xl !py-4"} />
                    <p className="text-neutral-600 font-medium text-center">No credit card required</p>
                </div>
            </div>
        </div>
    )
}

export const IntegrationCard = ({ data }) => {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border border-neutral-200 px-3">
            {/* card */}
            <div className="card flex h-full flex-col gap-7 items-center py-12 px-6 rounded-lg transition-shadow duration-200 hover:shadow-lg">
                <img src={data.img} alt="icon 1"
                    className='mx-auto'
                />
                <h6 className="heading-6 font-semibold max-w-[172px] text-center">{data.heading}</h6>
                <p className="text-center text-sm text-neutral-500 max-w-[500px] px-5 mx-auto mt-4 leading-loose">{data.description}</p>

                <Link to={"/"} className='group hover:underline font-bold text-blue-600'>See Integration <i className='fa fa-arrow-right ms-1 group-hover:ps-1 transition-all duration-200'></i></Link>

            </div>
        </div>
    )
}



