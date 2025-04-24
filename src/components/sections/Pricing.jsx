import React from 'react'
import Button from "../universalComponents/Button.jsx";

export default function Pricing() {
  return (
    <div className="py-10 w-full px-2 sm:px-4">
    
            <p className="font-medium text-wrap text-center capitalize !bg-white mx-auto w-fit px-10 py-2 rounded-full border-1 border-[hsl(144,80%,55%)]">
              <span className="text-gradient-teal">Up to </span>
              <span className="text-yellow-500">70%</span>
              <span className="text-gradient-teal"> off managed cloud hosting</span>
            </p>
    
            <h2 className="heading-2 text-center font-semibold mt-4 leading-10  capitalize">flexible pricing <span className="italic font-normal text-gradient-teal">plan</span>.  that include <br /> business</h2>
    
            <div className="grid gap-5 grid-cols-12 mt-15">
              {/* basic plan */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10">
                  <h5 className="heading-5 font-semibold">Basic Plan</h5>
                  <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                  <hr className="border-[1px] my-7 border-gray-200" />
                  <p className="heading-2 font-bold">$1.99<span className="text-xl">/Yearly</span> </p>
    
                  <Button content={"start free trial"} className={"capitalize w-full mt-10 text-white !py-4"} />
                  <p className="text-center font-medium my-3">Renews at $9.88/month</p>
                  {/* benefits */}
                  <div className="benefits flex flex-col gap-5 mt-10">
                    {/* benefit 1 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time tracking and notifications
                      </span>
                    </p>
                    {/* benefit 2 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time analytics
                      </span>
                    </p>
                    {/* benefit 3 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Drag and drop templates
                      </span>
                    </p>
                    {/* benefit 4 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Project Management
                      </span>
                    </p>
                    {/* benefit 5 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        24/7 email and chat support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* premium plan */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10">
                  <h5 className="heading-5 font-semibold">Premium Plan</h5>
                  <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                  <hr className="border-[1px] my-7 border-gray-200" />
                  <p className="heading-2 font-bold">$9.99<span className="text-xl">/Yearly</span> </p>
    
                  <Button content={"start free trial"} className={"capitalize w-full mt-10 text-white !py-4"} />
                  <p className="text-center font-medium my-3">Renews at $9.88/month</p>
                  {/* benefits */}
                  <div className="benefits flex flex-col gap-5 mt-10">
                    {/* benefit 1 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time tracking and notifications
                      </span>
                    </p>
                    {/* benefit 2 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time analytics
                      </span>
                    </p>
                    {/* benefit 3 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Drag and drop templates
                      </span>
                    </p>
                    {/* benefit 4 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Project Management
                      </span>
                    </p>
                    {/* benefit 5 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        24/7 email and chat support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Pro plan */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card max-w-[450px] mx-auto bg-neutral-100 px-8 py-10">
                  <h5 className="heading-5 font-semibold">Pro Plan</h5>
                  <p className="text-neutral-600 mt-2">Customize anything anytime</p>
                  <hr className="border-[1px] my-7 border-gray-200" />
                  <p className="heading-2 font-bold">$99.99<span className="text-xl">/Yearly</span> </p>
    
                  <Button content={"start free trial"} className={"capitalize w-full mt-10 text-white !py-4"} />
                  <p className="text-center font-medium my-3">Renews at $9.88/month</p>
                  {/* benefits */}
                  <div className="benefits flex flex-col gap-5 mt-10">
                    {/* benefit 1 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time tracking and notifications
                      </span>
                    </p>
                    {/* benefit 2 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Real-time analytics
                      </span>
                    </p>
                    {/* benefit 3 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Drag and drop templates
                      </span>
                    </p>
                    {/* benefit 4 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        Project Management
                      </span>
                    </p>
                    {/* benefit 5 */}
                    <p className="font-semibold flex gap-3 items-center">
                      <div className=" w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                        <i class="fa-solid fa-check text-sm text-gradient-teal"></i>
                      </div>
                      <span>
                        24/7 email and chat support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
    
              
            </div>
    
          </div>
  )
}
