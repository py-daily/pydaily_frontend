import React from 'react'
import profilImg from '../../assests/features_img.png'
import Image from 'next/image'

const WhatsayCard = () => {
  return (
    <div className='robot w-[500px] p-6 bg-gray-200 hover:bg-app-primary-light hover:text-white'>
        <p className='text-[1.1rem]'>
            the project you guys are working on is amazing and finally i can easily manage my company
        </p>
        <div className='pt-6 flex justify-between items-center gap-4'>
            <div className='flex items-center gap-3'>
                <Image 
                    src={profilImg}
                    alt='Profile'
                    className='w-[50px] h-[50px] rounded-full object-cover'
                />
                <div className='flex flex-col gap-1'>
                    <p className='p-0 font-semibold text-[0.8rem]'>Ramon D Owen</p>
                    <p className='p-0 text-gray-500 text-[0.8rem]'>CEO of Djawel</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatsayCard