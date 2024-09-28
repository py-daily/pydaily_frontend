'use client'

import { useEffect, useState } from 'react'
import { Switch } from 'antd'

export function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark'
        setIsDarkMode(isDark)
        document.documentElement.classList.toggle('dark', isDark)
    }, [])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
    }

    return (
        <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
        />
    )
}