"use client";
import { BellDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileView from "./MobileView";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Strategic Initiatives", href: "/projects" },
    { name: "Tenders", href: "https://www.kamcoindia.com/tenders" },
    { name: "About Us", href: "/about" },
    { name: "Statutory", href: "#" },
    { name: "Connect", href: "#" },
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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`py-3 px-8 flex items-center justify-between mx-auto max-w-3xl md:max-w-6xl xl:max-w-full xl:px-32 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <Image
          src="/new_images/logo.webp"
          width={150}
          height={150}
          alt="logo"
          className="cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end ">
          <ul className="flex flex-row space-x-6 items-center">
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
                    className="cursor-pointer text-[rgb(55,65,81)] font-sans hover:text-[#d1f349] flex items-center"
                  >
                    {item.name}{" "}
                    {["About Us", "Statutory", "Connect"].includes(
                      item.name
                    ) && (
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                        />
                      )}
                  </div>

                  {/* Dropdown Menus */}
                  {item.name === "About Us" &&
                    activeDropdown === "About Us" && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                        <li>
                          <Link
                            href="/companyinfo"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Company info
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.kamcoindia.com/userfiles/Organizational%20Chart_20-12-2021(1).jpg"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Organizational Structure
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/financial-report"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Financial Report
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/awards"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Awards & Recognitions
                          </Link>
                        </li>
                      </ul>
                    )}

                  {item.name === "Statutory" &&
                    activeDropdown === "Statutory" && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                        <li>
                          <Link
                            href="/cm-redressal-cell"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            CM Redressal Cell
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                            target="_blank"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Corporate Social Responsibility (CSR)
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/right-to-information"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Right to Information (RTI)
                          </Link>
                        </li>
                      </ul>
                    )}

                  {item.name === "Connect" && activeDropdown === "Connect" && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-50">
                      <li>
                        <Link
                          href="/#footer"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Contact Us
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href="/support"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Support
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="/newsletter"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Newsletter
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Media
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Downloads
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/notifications"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Notification
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex md:gap-4 max-sm:gap-1 ml-8">
            <Link href='/notifications'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full bg-slate-300 p-3 max-sm:scale-75"
              >
                <BellDot size={24} />
              </motion.button>
            </Link>
            <Link href='https://www.kamcoindia.com/dealers/user_login'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#d1f349] text-black px-6 py-3 font-semibold rounded-full max-sm:scale-75"
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
      <MobileView isOpen={isOpen} navItems={navItems} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
