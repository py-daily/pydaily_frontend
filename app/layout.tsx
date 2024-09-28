import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Boiler Auth',
  description: 'A boilerplate Next.js app with authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-black dark:text-white">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}