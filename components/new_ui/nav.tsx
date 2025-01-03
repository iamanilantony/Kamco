"use client";
import { BellDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import MobileView from "./MobileView";
import useClickOutside from "@/lib/hooks/useclickedoutside";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "#",
      subItems: [
        { name: "About Kamco", href: "/about" },
        { name: "Company info", href: "/companyinfo" },
        { name: "Organizational Structure", href: "/orgstructure" },
        { name: "Financial Report", href: "/financial-report" },
      ],
    },
    { name: "Products", href: "/products" },
    { name: "New Initiatives", href: "/projects" },
    { name: "Tenders", href: "https://web.kamcoindia.com/tenders" },
    {
      name: "Statutory",
      href: "#",
      subItems: [
        { name: "CM Redressal Cell", href: "/cm-redressal-cell" },
        {
          name: "Corporate Social Responsibility (CSR)",
          href: "https://web.kamcoindia.com/userfiles/CSR_KAMCO.pdf",
        },
        { name: "Right to Information (RTI)", href: "/right-to-information" },
      ],
    },
    {
      name: "Connect",
      href: "#",
      subItems: [
        { name: "Contact Us", href: "/#connect" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Media", href: "/media" },
        { name: "Downloads", href: "/downloads" },
        {
          name: "Dealer Registration",
          href: "/dealerregistration",
        },
        { name: "Authorised Dealers", href: "/dealers" },
        { name: "Supplier Registration", href: "/suppilerregistration" },
      ],
    },
  ];

  // Check if the page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Background becomes white after scroll
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string, href: string) => {
    if (!["About Us", "Statutory", "Connect"].includes(name)) {
      window.location.href = href; // Redirect to the page
    }
    setActiveDropdown((prev) => (prev === name ? null : name)); // Toggle dropdown
  };

  const openDropDown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name)); // Toggle dropdown
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNav(false);
      } else {
        // Scroll up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className={`py-3 flex items-center justify-between mx-auto z-30 w-full px-12 fixed top-0 left-0 right-0 backdrop-blur-lg ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logowithiso.png"
            width={200}
            height={200}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end">
          <ul
            onMouseLeave={closeDropdown}
            className="flex flex-row space-x-10 items-center"
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative"
              >
                <div ref={dropdownRef} className="relative">
                  <div
                    onClick={() => toggleDropdown(item.name, item.href)}
                    onMouseEnter={() => openDropDown(item.name)}
                    className="cursor-pointer text-[rgb(55,65,81)] font-sans hover:font-semibold transition-all flex items-center text-base lg:text-sm"
                  >
                    {item.name}{" "}
                    {["About Us", "Statutory", "Connect"].includes(
                      item.name
                    ) && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Menus */}
                  {item.subItems && activeDropdown === item.name && (
                    <ul
                      //@ts-ignore //div element and list element type cannot be assigned to the ref
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50 text-base lg:text-sm"
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                            {...(subItem.href ===
                            "https://web.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex md:gap-4 max-sm:gap-1 ml-8">
            <Link href="#">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full bg-slate-300 p-3 max-sm:scale-75"
              >
                <BellDot size={18} />
              </motion.button>
            </Link>
            <Link href="https://web.kamcoindia.com/dealers/user_login">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#d2f348] text-black rounded-3xl font-semibold px-6 py-3 max-sm:scale-75 text-base lg:text-sm relative top-1"
              >
                Login
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden ml-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>
      <MobileView
        isOpen={isOpen}
        navItems={[...navItems]}
        setIsOpen={setIsOpen}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
      />
    </>
  );
};

export default Navbar;
