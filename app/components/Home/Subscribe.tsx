import Button from '@/app/common/shared/Button'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='robot w-full pt-[5rem] pb-[3rem]'>
        <section className='w-[80%] mx-auto flex flex-col items-center justify-center gap-3'>
            <h2 className='text-3xl font-semibold text-center'>Subscribe to get notified about update</h2>
            <p className='w-[350px] pb-3 text-center text-gray-400'>
                By subscribing with your mail, you will accept our privacy policy
            </p>
            <div className='flex justify-center items-center gap-4'>
                <input type="text" placeholder='Enter your email' className='w-[350px] px-4 py-4 text-[0.9rem] border bg-gray-50' />
                <Button 
                    label='Subscribe us'
                    className='!py-4 !px-8 !bg-app-primary-light '
                />
            </div>
        </section>
    </div>
  )
}

export default Subscribe