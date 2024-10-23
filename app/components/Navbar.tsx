'use client'

import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { ThemeSwitch } from './ThemeSwitch'
import logo from '../assests/pydaily-logo.png';
import Image from 'next/image';

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="w-full bg-white text-black p-4">
            <div className="w-[80%] mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <Image 
                        src={logo}
                        alt='Pydaily Logo'
                        className='w-fit h-[40px] object-cover'
                    />
                </Link>
                <div className="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About</Link>
                    <Link href="/contact">Contact</Link>
                    {session ? (
                        <>
                            <Link href="/dashboard">Dashboard</Link>
                            <button onClick={() => signOut()}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">Login</Link>
                            <Link href="/auth/register">Register</Link>
                        </>
                    )}
                    <ThemeSwitch />
                </div>
            </div>
        </nav>
    )
}