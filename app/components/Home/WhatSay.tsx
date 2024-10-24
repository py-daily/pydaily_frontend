import WhatsayCard from '@/app/common/shared/whatsay-card'
import React from 'react'

const WhatSay = () => {
  return (
    <div className='w-full py-[4rem] bg-app-primary'>
        <section className='maxContainer w-[80%] mx-auto'>
            <div className='w-full flex justify-between items-center gap-8'>
                <h2 className='text-3xl text-white font-semibold'>What do <span className='text-app-primary-light'>they say</span> about you?</h2>
                <div className='flex justify-end items-center gap-4'>
                    <div className='p-2 rounded-full bg-gray-100 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className='p-2 rounded-full bg-gray-100 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>

                </div>
            </div>
            <div className='w-full overflow-auto'>
                <div className='min-w-[1200px] w-full pt-12 flex items-center gap-8 flex-nowrap'>
                    <WhatsayCard />
                    <WhatsayCard />
                    <WhatsayCard />
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhatSay