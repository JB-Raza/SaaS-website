import React from 'react'
import Button from "../universalComponents/Button.jsx";

export default function Pricing() {

  return (
    <div className="py-10 custom-container mx-auto w-full px-2 sm:px-4">

      <p className="font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-2 sm:px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
        <span className="text-gradient-teal">Up to </span>
        <span className="text-yellow-500">70%</span>
        <span className="text-gradient-teal"> off managed cloud hosting</span>
      </p>

      <h2 className="heading-2 text-center font-semibold mt-4 leading-10 md:leading-15 capitalize">flexible pricing <span className="italic font-normal text-gradient-teal">plan</span>.  that include <br /> business</h2>

      <div className="grid gap-5 grid-cols-12 mt-15">
        {/* basic plan */}
        {(pricingData || []).map((data, i) => (
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10">
              <h5 className="heading-5 font-semibold">{data.title}</h5>
              <p className="text-neutral-600 mt-2">Customize anything anytime</p>
              <hr className="border-[1px] my-7 border-gray-200" />
              <p className="heading-2 font-bold">${data.annualPrice}<span className="text-xl">/Yearly</span> </p>

              <Button content={"start free trial"} className={"capitalize w-full mt-10 text-white !py-4"} />
              <p className="text-center font-medium my-3">Renews at $9.88/month</p>
              <div className="benefits flex flex-col gap-5 mt-10">
                {(data.benefits || []).map((benefit, index) => (
                  <p key={`${index}${i}`} className="font-semibold flex gap-3 items-center">
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
        ))}
        


      </div>

    </div>
  )
}


let pricingData = [
  {
    title: "Basic Plan",
    annualPrice: 1.99,
    monthlyRenewFee: 9.88,
    benefits: [
      "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
    ]
  },
  {
    title: "Premium Plan",
    annualPrice: 9.99,
    monthlyRenewFee: 9.88,
    benefits: [
      "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
    ]
  },
  {
    title: "Pro Plan",
    annualPrice: 19.99,
    monthlyRenewFee: 9.88,
    benefits: [
      "Real-time tracking and notifications", "Real-time analytics", "Drag and drop templates", "Project Management", "24/7 email and chat support",
    ]
  },
]