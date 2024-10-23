import React from 'react'
import featureImg from '../../assests/features_img.png'
import devIcon from '../../assests/icons/develop_icon.png';
import Image from 'next/image'
import Button from '@/app/common/shared/Button';

const Features = () => {
  return (
    <div className='w-full pt-[6rem] pb-[3rem]'>
        <section className='w-[80%] mx-auto flex justify-between items-center gap-20'>
            <div className='relative w-[45%] h-[550px] border'>
                <div className='w-[90%] absolute left-0'>
                    <Image 
                        src={featureImg}
                        alt='Feature Image'
                        className='w-full h-fit'
                    />
                </div>
                <div className='w-[60px] h-fit absolute right-0 top-12'>
                    <Image 
                        src={devIcon}
                        alt='Developers Icon'
                        className='w-full h-full'
                    />
                </div>
            </div>
            <div className='w-[45%]'>
                <p className='text-[1.2rem] font-medium text-app-primary-light'>Know our features</p>
                <h2 className='arima py-3 text-[2.3rem] font- '>Our Features</h2>
                <p className='pb-6 text-[0.9rem] text-gray-500 leading-7'>
                    We offer daily tutorials in Python, DevOps, and Security, featuring hands-on coding challenges and real-world 
                    use cases. Whether you're a beginner or an experienced professional, we provide both free and premium content 
                    tailored to all skill levels, ensuring everyone can enhance their knowledge and skills in these critical areas.
                </p>
                <Button
                    label='Get Started'
                    className='robot !px-6 !py-3 !text-[0.9rem] !text-extralight'
                />
            </div>
        </section>
    </div>
  )
}

export default Features