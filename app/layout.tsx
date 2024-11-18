import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import Head from 'next/head';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import FooterSection from "@/components/UI/Footer"
import NavBar from "@/components/UI/NavBar"
import { NavigationMenu } from "@/components/UI/navigation-menu";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kamco",
  description: "Kamco website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
        <div className="max-w-full mx-auto">
          <Head>
            <title>Kamco</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
           <NavBar />
          <main className="text-center">{children}</main>
          <FooterSection/>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
