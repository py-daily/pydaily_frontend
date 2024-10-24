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
    <div className={`xl:w-[300px] lg:w-[270px] w-[300px] xl:px-8 lg:px-4 px-8 xl:py-9 lg:py-7 py-10 text-white rounded-md shadow-md ${className}`}>
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