import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import NavBar from "@/components/UI/NavBar";
import { NavigationMenu } from "@/components/UI/navigation-menu";
import Navbar from "@/components/new_ui/nav";
import Footer from "@/components/new_ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamco",
  description: "Kamco website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#fafff7] text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <div className="max-w-full mx-auto">
          <Head>
            <title>Kamco</title>
            <link rel="icon" href="/LogoMain.png" />
          </Head>
          <Navbar />
          <main className="text-center mt-20">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
