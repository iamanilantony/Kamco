'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
    const pathname = usePathname();

    const isActive = (path: string): boolean => pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="flex flex-wrap items-center justify-between p-4 md:px-6 font-sans">
            <div className="flex justify-between items-center w-full md:w-auto">
                <img src="/logo.png" alt="Logo" className="h-10 object-cover rounded-[8%]" />
                <button className="text-green-700 text-2xl md:hidden" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <nav className={`w-full md:flex md:w-auto space-y-4 md:space-y-0 md:space-x-6 p-2 md:p-4 items-center mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex-row text-center bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none`}>
                <Link href="/" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[80px] text-center">Home</span>
                </Link>
                <Link href="/aboutUs" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/aboutUs') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[80px] text-center">About Us</span>
                </Link>
                <Link href="/products" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/products') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[80px] text-center">Products</span>
                </Link>
                <Link href="/projects" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/projects') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[80px] text-center">Projects</span>
                </Link>
                <Link href="/tenders" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/tenders') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[80px] text-center">Tenders</span>
                </Link>
                <Link href="/notifications" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/notifications') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[100px] text-center">Notifications</span>
                </Link>
                {/* <Link href="#" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/language') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[40px] text-center">അ</span>
                </Link> */}
                {/* <Link href="#" onClick={handleLinkClick} className={`block md:inline-block text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/language') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                    <span className="inline-block min-w-[40px] text-center">അ</span>
                </Link> */}
                <Link href="https://www.kamcoindia.com/dealers/user_login" onClick={handleLinkClick} className="block md:inline-block bg-[#166434] text-white font-semibold rounded-lg px-4 py-2 md:px-8 md:py-2 hover:bg-[#0f4222] transition duration-200 ease-in-out shadow-md">
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default NavBar;