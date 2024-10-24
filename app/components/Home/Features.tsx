import React from 'react'
import featureImg from '../../assests/features_img.png'
import devIcon from '../../assests/icons/develop_icon.png';
import Image from 'next/image'
import Button from '@/app/common/shared/Button';

const Features = () => {
  return (
    <div className='w-full pt-[6rem] pb-[3rem]'>
        <section className='maxContainer xl:w-[80%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center xl:gap-20 gap-10'>
            <div className='relative md:w-[45%] sm:w-[85%] xs:w-[400px] xm:w-[300px] w-full xl:h-[550px] md:h-[400px] sm:h-[600px] xs:h-[450px] h-[320px] border'>
                <div className='xs:w-[95%] w-[90%] absolute left-0'>
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
            <div className='xl:w-[45%] flex-1'>
                <p className='lg:text-[1.2rem] text-[1rem] font-medium text-app-primary-light'>Know our features</p>
                <h2 className='arima lg:py-3 md:py-1 py-2 lg:text-[2.3rem] text-[2rem] font- '>Our Features</h2>
                <p className='pb-6 md:text-[0.9rem] xs:text-[1rem] text-[0.9rem] text-gray-500 lg:leading-7 md:leading-5 xs:leading-8 leading-6'>
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