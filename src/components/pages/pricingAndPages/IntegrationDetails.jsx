import React from 'react'
import { Button, FaqList } from '../../universalComponents/index.js'
import { RevolutionizeServices } from '../../sections/index.js'
import { Link } from 'react-router-dom'

// gsap
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTextAnimate } from '../../../hooks/textAnimation.js'


export default function IntegrationDetails() {


  useTextAnimate(".animate-app-integration-elem")

  // hero iamge rotating animation
  useGSAP(() => {
    gsap.to(".img-rotate-clock", {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "none"
    })
    gsap.to(".img-rotate-anti-clock", {
      rotate: -360,
      duration: 30,
      repeat: -1,
      ease: "none"
    })
  })

  return (
    <div>

      {/* hero */}
      <section className="bg-[var(--iceBlue)] py-[130px]">
        <div className="custom-container grid grid-cols-12 mx-auto py-[64px]">
          {/* col 1 */}
          <div className="col-span-12 order-1 lg:order-0 lg:col-span-6 h-[600px] flex items-center justify-center relative">

            <div className='relative z-4 flex flex-col items-center justify-center'>
              <h3 className="heading-3 font-semibold">2k+</h3>
              <p>Integrations</p>
            </div>
            {/* animation rotating images */}
            <img loading="lazy"
              className='absolute z-3 img-rotate-anti-clock'
              src="/app-integration/integration-details/round-icons-small.png" alt="small icons image" />
            {/* top-[20px] left-[50px]  */}
            <img loading="lazy"
              className='absolute z-2 img-rotate-clock'
              src="/app-integration/integration-details/round-icons-big.png" alt="big icons image" />

            <img loading="lazy"
              className='absolute z-1'
              src="/app-integration/integration-details/rounded-circle.png" alt="rounded circle" />

          </div>

          {/* col 2 */}
          <div className="col-span-12 order-0 lg:order-1 lg:col-span-6 flex flex-col px-5 items-start justify-center gap-5">
            <h3 className="animate-app-integration-elem heading-3 font-semibold leading-11 capitalize max-w-[533px]">Integrated apps can create seamless workflows</h3>

            <p className="animate-app-integration-elem text-[18px] text-neutral-500 max-w-[570px] leading-loose">Create tasks with various custom statuses to focus more on your keep track of the progress of each why in the simply enjoy process for your business.</p>

            <Button content={"Get Started Trial"}
              bgColor='bg-blue-700'
              hoverBg='bg-[var(--darkIndigo)]'
              className={"text-white font-medium min-w-[175px] rounded-xl mt-3 !h-14"}
            />

          </div>
        </div>
      </section>

      <section className="custom-container mx-auto py-30 px-4 flex flex-col gap-10">
        <div className="flex flex-col gap-5 mb-20">
          <h3 className="animate-app-integration-elem heading-3 font-semibold leading-11 capitalize">work with applications more seamlessly</h3>
          <p className="animate-app-integration-elem text-[18px] text-neutral-500 leading-loose">Charity and Donation is a categories that involves giving financial category that involves giving financial or Below is a suggested outlines for a privacy policy for a Software as a Service (SaaS) company. keep in mind that privacy policies should be customized to reflect the specific practices and policies of your company, as well as any applicable laws and regulations. It's also recommended to have legal counsel review your privacy policy to ensure compliance. material support various causes organizations. It allows individuals towards the a addressing social category that involves giving financial or material support various causes of organizations. It allows individuals towards addressing social</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="animate-app-integration-elem heading-3 font-semibold leading-11 capitalize">Integration features</h3>
          <p className="animate-app-integration-elem text-[18px] text-neutral-500 leading-loose">Charity and Donation is a categories that involves giving financial category that involves giving financial or Below is a suggested outlines for a privacy policy for a Software as a Service (SaaS) company. keep in mind that privacy policies should be customized to reflect the specific practices and policies of your company, as well as any applicable laws and regulations. It's also recommended to have legal counsel review your privacy policy to ensure compliance. material support various causes organizations. It allows individuals towards the a addressing social category that involves giving financial or material support various causes of organizations. It allows individuals towards addressing social</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* col 1 */}
          <div className="flex flex-col gap-4">
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>Empower Through Security</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>User experience</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>User behavior tracking</span>
            </p>
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-4">
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>Data sync integration</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>Cloud storage integration</span>
            </p>
            <p className="flex gap-3 items-center">
              <span className='h-7 w-7 bg-slate-100 rounded-full flex items-center justify-center'><i className="fa-solid fa-check text-sm"></i></span>
              <span className='font-semibold text-[18px]'>Every Act Counts</span>
            </p>
          </div>
        </div>

      </section>

      {/* cloud system based app */}
      <section className="py-30 px-4 flex flex-col bg-[var(--iceBlue)] gap-7">
        <div className="custom-container mx-auto">
          <div className="flex justify-between gap-5 mb-10">
            <h3 className="animate-app-integration-elem max-w-[500px] heading-3 font-semibold leading-11 capitalize">It actually work for cloud system based your app</h3>
            <p className="animate-app-integration-elem max-w-[570px] border-s-1 ps-5 text-[18px] text-neutral-500 leading-loose">Create tasks with various custom statuses to focus more on your keep track of the progress of each why in the simply enjoy process for yourbusiness.</p>
          </div>

          <div className="grid grid-cols-12 gap-6">

            {/* card 1 */}
            {(integrationData || []).map((data, i) => (

              <div key={i} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3
            card flex bg-white h-full flex-col gap-7 py-12 px-8 rounded-2xl transition-[background] duration-200
            hover:bg-[hsl(184,84%,30%)] hover:text-white group">

                <img loading="lazy" src={data.img} alt={data.heading}
                  className='me-auto'
                />
                <h6 className="heading-6 font-semibold">{data.heading}</h6>
                <p className="text-neutral-500 group-hover:text-white leading-loose">{data.description} </p>

                <Link to={"/"} className='group/integration hover:underline font-bold text-blue-600 group-hover:text-white'>See Integration <i className='fa fa-arrow-right ms-1 group-hover/integration:ps-1 transition-all duration-200'></i></Link>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* FAQ section */}
      <div className="custom-container overflow-clip mx-auto py-30">
        <div className="grid grid-cols-12 gap-20 px-3">
          {/* col 1 */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 items-start">
            <p className="animate-app-integration-elem bg-neutral-100 py-2 px-4 font-medium rounded-full">Up to <span className='text-yellow-500'>70%</span> off managed cloud hosting</p>
            <h3 className="animate-app-integration-elem heading-3 font-bold capitalize">Frequently ask <span className='font-normal italic'>Questions</span></h3>
            <p className="animate-app-integration-elem text-neutral-500 max-w-[330px] mt-3 leading-loose">Create tasks with various custom statuses to focus more on your keep track of the progress of each why in</p>

            <Button
              content={"Get Started Trial"}
              bgColor='bg-[var(--darkIndigo)]'
              hoverBg='bg-blue-600'
              className={"text-nowrap min-w-[175px] mt-5 rounded-xl font-medium"}
            />
          </div>

          {/* col 2 */}
          <div className="col-span-12 max-w-screen md:col-span-7 flex flex-col">
            <FaqList />
          </div>
        </div>
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




const integrationData = [
  { img: "/app-integration/integration-page/1.png", heading: "Hubspot Contacts Sync", description: "Web hosting provides everything idea online. From where your of more on" },
  { img: "/app-integration/integration-page/6.png", heading: "Slack Contacts Sync", description: "Web hosting provides everything idea online. From where your of more on" },
  { img: "/app-integration/integration-page/2.png", heading: "Spotify Online Platform", description: "Web hosting provides everything idea online. From where your of more on" },
  { img: "/app-integration/integration-page/3.png", heading: "Dropbox Streaming", description: "Web hosting provides everything idea online. From where your of more on" },


]