import React from 'react'
import { useTextAnimate } from '../../hooks/textAnimation.js'
import { PricingCard_1 } from '../universalComponents/Cards.jsx';

export default function PricingSection({ heading, descriptionPara, pricingCardData, cardClassNames }) {

  useTextAnimate(".pricing-elem-animate")

  return (
    <div className="py-10 custom-container mx-auto w-full px-2 sm:px-4">

      {heading}
      {descriptionPara &&
        <p className="pricing-elem-animate text-neutral-500 max-w-[570px] text-center mx-auto">{descriptionPara}</p>
      }

      <div className="grid gap-5 grid-cols-12 mt-15">
        {/* plans */}
        {(pricingCardData || []).map((data, i) => (
          <PricingCard_1 key={i} data={data} className={cardClassNames} />
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