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
        setActiveCard(id); // Set the clicked card as active
    };
  return (
    <div className='w-full py-[3rem]'>
        <section className='w-[80%] mx-auto'>
            <h2 className='arima py-3 text-[2.3rem] font-semibold leading-[2rem]'>Our Services</h2>
            <p className='mont font-medium text-gray-500'>Save your time by entrusting your improvement and skillset  to us</p>
            <div className='inter w-full py-[3rem] grid grid-cols-3 gap-8'>
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