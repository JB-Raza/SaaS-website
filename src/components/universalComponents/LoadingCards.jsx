
export default function LoadingCards() {
    return (
        <div className="grid grid-cols-12 gap-5 mt-5 mx-auto">
            {/* shimmer card 1 */}
            <div className={`col-span-12 sm:col-span-6 md:col-span-4 rounded-2xl flex flex-col overflow-hidden animate-pulse gap-4`}>
                {/* img */}
                <div className="rounded-2xl flex border-2 bg-gray-200 w-full h-[300px] border-gray-200 gap-4">
                </div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>

            </div>
            {/* shimmer card 2 */}
            <div className={`col-span-12 sm:col-span-6 md:col-span-4 rounded-2xl flex flex-col overflow-hidden animate-pulse gap-4`}>

                {/* img */}
                <div className="rounded-2xl flex border-2 bg-gray-200 w-full h-[300px] border-gray-200 gap-4">
                </div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>

            </div>
            {/* shimmer card 3 */}
            <div className={`col-span-12 sm:col-span-6 md:col-span-4 rounded-2xl flex flex-col animate-pulse gap-4`}>
                {/* img */}
                <div className="rounded-2xl flex border-2 bg-gray-200 w-full h-[300px] border-gray-200 gap-4">
                </div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>
                <div className='h-[30px] w-[calc(100%-20px)] rounded-lg mx-auto bg-gray-200'></div>

            </div>
        </div>
    )
}
