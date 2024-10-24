import Image from 'next/image'
import logo from '../assests/pydaily-logo.png'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
    return (
        <footer className="w-full py-[3rem] bg-white p-4 mt-8">
            <section className="maxContainer xl:w-[80%] w-[90%] mx-auto text-center">
                <div className="w-full pb-12 flex justify-between items-center sm:gap-6 gap-3 flex-wrap">
                    <div className='md:w-[90px] w-[80px] h-fit'>
                        <Image
                            src={logo}
                            alt='Pydaily logo'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='flex justify-center items-center lg:gap-6 Md:gap-4 gap-2 text-gray-600'>
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className='flex justify-end items-center gap-4 text-gray-400'>
                        <div>
                            <Facebook size={22} />
                        </div>
                        <div>
                            <Twitter size={22} />
                        </div>
                        <div>
                            <Instagram size={22} />
                        </div>
                        <div>
                            <Linkedin size={22} />
                        </div>
                    </div>
                    
                </div>
                <div className='w-[80%] pb-3 mx-auto border-b-2 border-gray-300'></div>
                <div className='arima py-8 lg:text-2xl text-xl'>Made with ❤️ by UISensei for developers</div>
                {/* <p>&copy; 2024 My App. All rights reserved.</p> */}
            </section>
        </footer>
    )
}