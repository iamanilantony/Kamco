"use client";
import { BellDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/Products" },
    { name: "Strategic Initiatives", href: "/strategicinitiatives" },
    { name: "Tenders", href: "/Tenders" },
    { name: "About Us", href: "/about" },
    { name: "Statutory", href: "/statutory" },
  ];
  return (
    <nav className="bg-[#FAFFF7] py-3 px-4 md:px-64 flex items-center justify-between">
      {/* Logo */}
      <Image
        src="/new_images/logo.webp"
        width={150}
        height={150}
        alt="logo"
        className="ml-4 md:ml-32"
      />
      {/* Menu Items */}
      <div className="flex items-center justify-center">
        <ul
          className={`flex-col md:flex-row md:flex space-x-0 md:space-x-10 items-center justify-center ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="my-2 md:my-0">
              <Link
                href={item.href}
                className="text-[rgb(55,65,81)] font-sans hover:text-[#d1f349]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ml-8">
          <button className="rounded-full bg-slate-300 p-3">
            <BellDot size={24} />
          </button>
          <button className="bg-[#d1f349] text-black px-6 py-3 font-semibold rounded-full">
            Login
          </button>
        </div>
      </div>
      <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
