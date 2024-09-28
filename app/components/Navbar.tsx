'use client'

import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { ThemeSwitch } from './ThemeSwitch'

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">My App</Link>
                <div className="space-x-4">
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