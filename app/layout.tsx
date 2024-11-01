import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import Head from 'next/head';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import FooterSection from "@/components/UI/Footer"
import NavBar from "@/components/UI/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Camco",
  description: "Camco website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
        <div className="max-w-full mx-auto pt-10">
          <Head>
            <title>Camco</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <header className="flex justify-between items-center pb-4 px-6">
            <div className="text-2xl font-bold text-green-700 md:ml-20">
              <img src="/logo.png" alt="Logo" className="w-full h-10 object-cover rounded-[8%]" />
            </div>
           <NavBar />
          </header>
          <main className="text-center py-10">{children}</main>
          <FooterSection/>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
