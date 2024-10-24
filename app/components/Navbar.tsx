'use client'

import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { ThemeSwitch } from './ThemeSwitch'
import logo from '../assests/pydaily-logo.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type RefProps = HTMLDivElement | null;

export function Navbar() {
    const { data: session } = useSession()
    const navRef = useRef<RefProps>(null);
    const pathname = usePathname();
    const [isActive, setIsActive] = useState("");


    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav")
        }
    }

    useEffect(() => {
        if (pathname === "/") {
            setIsActive("home");
        } else if (pathname === "/about") {
            setIsActive("about");
        } else if (pathname === "/contact-us") {
            setIsActive("contact");
        } else if (pathname === "/services") {
            setIsActive("services");
        } 
    }, [pathname]);

    return (
        <div className="w-full bg-white text-black p-4">
            <div className="maxContainer w-[80%] mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <Image 
                        src={logo}
                        alt='Pydaily Logo'
                        className='w-fit h-[40px] object-cover'
                    />
                </Link>
                <div className='flex items-center gap-6'>
                    <div className="space-x-4 hidden md:flex">
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div onClick={showNavbar} className='nav-btn md:hidden block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
            <nav ref={navRef} className='w-full md:hidden flex justify-between gap-0'>
                <div onClick={showNavbar} className='xs:w-[50%] w-[30%] bg-black opacity-[0.7]'></div>
                <div className='flex-1 bg-white'>
                    <div className='w-full px-10 py-6 flex justify-between items-center'>
                        <div className='w-[130px] h-full'>
                            <Link onClick={showNavbar} href="/" ><Image src={logo} alt='Rent Stream logo' className='w-full h-full' /></Link>
                        </div>
                        <div onClick={showNavbar}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-[80%] mx-auto py-4 flex flex-col gap-4'>
                        <Link onClick={showNavbar} href="/" className={`px-4 text-lg font-medium hover:bg-gray-100 ${isActive === 'home' ? 'text-app-primary' : 'text-black'}`} >Home</Link>
                        
                        <Link onClick={showNavbar} href="/about" className={`px-4 py-1 text-lg font-medium hover:bg-gray-100  cusor-pointer ${isActive === 'about' ? 'text-app-primary' : 'text-black'}`}>About us</Link>
                        <Link onClick={showNavbar} href="/services" className={`px-4 py-1 text-lg font-medium hover:bg-gray-100 cusor-pointer ${isActive === 'services' ? 'text-app-primary' : 'text-black'}`}>Services</Link>
                        <Link onClick={showNavbar} href="/contact-us" className={`px-4 py-1 text-lg font-medium hover:bg-gray-100 cusor-pointer ${isActive === 'contact' ? 'text-app-primary' : 'text-black'}`}>Contact us</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}