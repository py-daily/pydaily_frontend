import React from 'react'
import codesImg from '../../assests/codes_img.png'
import Image from 'next/image'
import Button from '@/app/common/shared/Button'

const HeroPage = () => {
  return (
    <div className='w-full py-[3rem]'>
        <section className='maxContainer xl:w-[80%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between gap-10'>
            <div className='2xl:w-[45%] xl:flex-1 lg:w-[400px] w-[550px]'>
                <h2 className='arima 2xl:text-[3.5rem] xl:text-[3rem] lg:text-[2.5rem] text-[3.5rem] font-bold 2xl:leading-[4.5rem] lg:leading-[3.5rem] leading-[4.5rem]'>Master Python, DevOps, and Security <span className='font-extralight 2xl:text-[3rem]'>— One Day at a Time</span> </h2>
                <p className='lg:pt-0 pt-6 xl:text-[1.1rem] lg:text-[0.9rem] text-[1.1rem] text-gray-400'>
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