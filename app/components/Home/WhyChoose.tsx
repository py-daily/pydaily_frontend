import React from 'react'

const whyChoose = ["Daily contents", "Hands on Tutorials", "Flexible Learning Paths", "World Class Experts", "Community Engagement", "Real-World Projects", "Expert Guidance"]

const WhyChoose = () => {
  return (
    <div className='w-full lg:py-[3rem] pt-[1rem] pb-[2rem]'>
        <section className='maxContainer w-[80%] mx-auto'>
            <h2 className='arima lg:text-4xl text-3xl text-center'>Why choose us</h2>
            <div className='mont w-full py-[2rem] flex justify-center items-center gap-4 flex-wrap'>
                {whyChoose.map((item, index) => (
                    <div key={index} className='w-fit xl:text-[1rem] text-[0.9rem] px-6 lg:py-2 py-1 rounded-full border-2 text-gray-500 cursor-pointer hover:bg-gray-100'>{item}</div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WhyChoose