import Button from '@/app/common/shared/Button'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='robot w-full pt-[5rem] md:pb-[3rem]'>
        <section className='maxContainer md:w-[80%] w-[90%] mx-auto flex flex-col items-center justify-center gap-3'>
            <h2 className='md:text-3xl text-2xl font-semibold text-center'>Subscribe to get notified about update</h2>
            <p className='md:w-[350px] w-[300px] md:text-[1rem] text-[0.9rem] pb-3 text-center text-gray-400'>
                By subscribing with your mail, you will accept our privacy policy
            </p>
            <div className='w-full flex xm:flex-row flex-col justify-center items-center gap-4'>
                <input type="text" placeholder='Enter your email' className='md:w-[350px] sm:w-[300px] xm:w-[60%] w-full px-4 sm:py-4 py-3 text-[0.9rem] border bg-gray-50 outline-none focus:outline-none focus:ring-0' />
                <Button 
                    label='Subscribe us'
                    className='xm:w-fit w-full sm:!py-4 !py-3 sm:!px-8 !px-3 !bg-app-primary-light '
                />
            </div>
        </section>
    </div>
  )
}

export default Subscribe