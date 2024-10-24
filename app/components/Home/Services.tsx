'use client'
import ServiceCard from '@/app/common/shared/service-card'
import pythonIcon from '../../assests/icons/python_Icon.png'
import devopsIcon from '../../assests/icons/devops_icon.png'
import securityIcon from '../../assests/icons/security_icon.png';
import pythonClr from '../../assests/icons/python_colored.png'
import React, { useState } from 'react'

const serviceContent = [
    {
        id: "1",
        img: pythonIcon,
        clrImg: pythonClr,
        title: "Python",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        id: "2",
        img: devopsIcon,
        clrImg: devopsIcon,
        title: "Python",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        id: "3",
        img: securityIcon,
        clrImg: securityIcon,
        title: "Python",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
]

const Services = () => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleCardClick = (id: string) => {
        setActiveCard(id); 
    };
  return (
    <div className='w-full lg:py-[3rem] py-[2rem]'>
        <section className='maxContainer xl:w-[80%] w-[90%] mx-auto'>
            <h2 className='arima lg:py-3 lg:text-[2.3rem] text-[2rem] font-semibold lg:leading-[2rem]'>Our Services</h2>
            <p className='mont font-medium text-gray-500'>Save your time by entrusting your improvement and skillset  to us</p>
            <div className='inter w-full py-[3rem] grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                {serviceContent.map((item, index) => (
                    <div key={index} onClick={() => handleCardClick(item.id)}>
                        <ServiceCard
                            icon={activeCard === item.id ? item.img : item.clrImg}
                            title={item.title}
                            content={item.content}
                            className={`${activeCard === item.id ? 'bg-app-primary text-white' : 'bg-white'}`}
                            titleClass={`${activeCard === item.id ? 'text-white' : 'text-black'}`}
                            contentClass={`${activeCard === item.id ? 'text-white' : 'text-gray-500'}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Services