import Button from './Button.jsx'
import { useTextAnimate } from '../../hooks/textAnimation.js'

export const PricingCard = ({data, className}) => {


    useTextAnimate(".card-text-animate", {start: "top 100%", y: 30})

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className={`card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10 ${className}`}>
                <h5 className="card-text-animate heading-5 font-semibold">{data.title}</h5>
                <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                <hr className="border-t-[1px] my-7 border-gray-200" />
                <p className="card-text-animate heading-2 font-bold">${data.annualPrice}<span className="text-xl">/Yearly</span> </p>

                <Button content={"start free trial"} className={"capitalize card-text-animate w-full mt-10 text-white !py-4"} />
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