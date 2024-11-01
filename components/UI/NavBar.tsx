// components/UI/NavBar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavBar: React.FC = () => {
    const pathname = usePathname();

    // Function to determine if the link is active
    const isActive = (path: string): boolean => pathname === path;

    return (
        <nav className="space-x-6 p-1 md:p-4 rounded-2xl md:mr-20 text-xs md:text-base font-sans">
            <Link href="/" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[80px] text-center">Home</span>
            </Link>
            <Link href="/aboutUs" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/aboutUs') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[80px] text-center">About Us</span>
            </Link>
            <Link href="/products" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/products') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[80px] text-center">Products</span>
            </Link>
            <Link href="/tenders" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/tenders') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[80px] text-center">Tenders</span>
            </Link>
            <Link href="/notifications" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/notifications') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[100px] text-center">Notifications</span>
            </Link>
            <Link href="/language" className={`text-gray-700 px-1 md:px-2 font-normal transition-all duration-200 ease-in-out ${isActive('/language') ? 'font-semibold text-[#166434]' : 'hover:font-semibold hover:scale-105'}`}>
                <span className="inline-block min-w-[40px] text-center">അ</span>
            </Link>
            <Link href="/login" className={`bg-[#166434] text-white font-semibold rounded-lg px-8 py-2 hover:bg-[#0f4222] transition duration-200 ease-in-out shadow-md`}>
                Login
            </Link>
        </nav>
    );
};

export default NavBar;
