import React from 'react'

const whyChoose = ["Daily contents", "Hands on Tutorials", "Flexible Learning Paths", "World Class Experts", "Community Engagement", "Real-World Projects", "Expert Guidance"]

const WhyChoose = () => {
  return (
    <div className='w-full py-[3rem]'>
        <section className='w-[80%] mx-auto'>
            <h2 className='arima text-4xl text-center'>Why choose us</h2>
            <div className='mont w-full py-[2rem] flex justify-center items-center gap-4 flex-wrap'>
                {whyChoose.map((item, index) => (
                    <div key={index} className='w-fit px-6 py-2 rounded-full border-2 text-gray-500 cursor-pointer hover:bg-gray-100'>{item}</div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WhyChoose