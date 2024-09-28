'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { axiosPrivate } from '@/utils/axios'

export default function Dashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/login')
        }
    }, [status, router])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPrivate.get('/your-protected-endpoint')
                setData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        if (session) {
            fetchData()
        }
    }, [session])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (!session) {
        return null
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-4">Welcome to your dashboard, {session.user?.name}. This page is protected and only accessible after login.</p>
            {data && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">API Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}