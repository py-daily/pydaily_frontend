import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ServiceProps = {
    icon: StaticImageData | string;
    title: string;
    content: string;
    className?: string;
    iconClass?: string;
    contentClass?: string;
    titleClass?: string;
}

const ServiceCard = ({icon, title, content, className, iconClass, contentClass, titleClass}: ServiceProps) => {
  return (
    <div className={`w-[300px] px-8 py-9 text-white rounded-md shadow-md ${className}`}>
        <Image 
            src={icon}
            alt={title}
            className={`w-[50px] h-fit `}
        />
        <h3 className={`py-4 text-[1.2rem] font-semibold ${titleClass}`}>{title}</h3>
        <p className={`${contentClass}`}>
            {content}
        </p>
    </div>
  )
}

export default ServiceCard