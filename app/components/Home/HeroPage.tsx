import React from 'react'
import codesImg from '../../assests/codes_img.png'
import Image from 'next/image'
import Button from '@/app/common/shared/Button'

const HeroPage = () => {
  return (
    <div className='w-full py-[3rem]'>
        <section className='w-[80%] mx-auto flex justify-between gap-10'>
            <div className='w-[45%]'>
                <h2 className='arima text-[3.4rem] font-bold leading-[4.5rem]'>Master Python, DevOps, and Security <span className='font-extralight text-[3rem]'>— One Day at a Time</span> </h2>
                <p className='text-[1.1rem]'>
                    Get your daily dose of Python tutorials, DevOps automation tips, and security insights, all in one place.
                </p>
                <div className='mont w-full pt-6 flex justify-start gap-8 '>
                    <Button 
                        label='Start Learning Today'
                        className='!px-8 !py-3 text-[0.9rem]'
                    />
                    <button className='px-5 py-2 text-[0.8rem] bg-white border-2 rounded-md'>Learn More</button>
                    
                </div>
            </div>
            <div className='flex-1'>
                <Image 
                    src={codesImg}
                    alt='Codes Image'
                    className='w-full h-fit'
                />
            </div>
        </section>
    </div>
  )
}

export default HeroPage