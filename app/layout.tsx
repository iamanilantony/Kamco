import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ekotal",
  description: "Ekotal Hotels",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <div className="max-w-full mx-auto py-10">
          <Head>
            <title>Eco-Friendly Resorts</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <header className="flex justify-between items-center pb-4 px-6">
            <div className="text-2xl font-bold text-green-700 md:ml-20">
              <img src="eco-luxury2.svg" alt="Next-Gen Green Innovation" className="w-full h-full object-cover rounded-[8%]" />
            </div>
            <nav className="space-x-6 font-bold bg-gray-100 p-1 md:p-4 rounded-2xl md:mr-20 text-xs md:text-lg">
              <a href="/" className="text-gray-700 px-1 md:px-6 hover:text-green-700">Home</a>
              <a href="/aboutUs" className="text-gray-700 px-1 md:px-6 hover:text-green-700">About Us</a>
              <a href="/resorts" className="text-gray-700 px-1 md:px-6 hover:text-green-700">Resorts</a>
            </nav>
          </header>
          <main className="text-center py-10">{children}</main>
          <footer className="bg-white py-8 z-10">
            {/* Top Part of the Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16">
                <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-[#033D2C]">EKOTEL</h2>
                </div>
                <div className="flex space-x-8 text-gray-600 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900">Home</a>
                    <a href="#" className="hover:text-gray-900">About Us</a>
                    <a href="#" className="hover:text-gray-900">Resorts</a>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Bottom Part of the Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 text-gray-600">
                <div className="flex space-x-8 mb-4 md:mb-0">
                    <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900">Terms of Service</a>
                    <a href="#" className="hover:text-gray-900">Cookie Settings</a>
                </div>
                <p className="text-sm">&copy; 2024 Ekotel. All rights reserved.</p>
            </div>
        </footer>
        </div>
        <Analytics />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
