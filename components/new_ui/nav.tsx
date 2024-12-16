"use client";
import { BellDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/newpage" },
    { name: "Products", href: "/newpage/products" },
    { name: "Strategic Initiatives", href: "/newpage/projects" },
    { name: "Tenders", href: "/newpage/tendors" },
    { name: "About Us", href: "/newpage/about" },
    { name: "Statutory", href: "#" },
    { name: "Connect", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=" py-3 px-8  flex items-center justify-between mx-auto max-w-3xl md:max-w-6xl xl:max-w-7xl"
    >
      <Image
        src="/new_images/logo.webp"
        width={150}
        height={150}
        alt="logo"
        className=""
      />
      <div className="flex items-center justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex flex-row space-x-10 items-center">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  className="text-[rgb(55,65,81)] font-sans hover:text-[#d1f349]"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isOpen ? 0 : "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed flex-col justify-center items-center md:hidden top-0 right-0 h-screen w-full bg-[#FAFFF7] z-40"
            >
              <Image
                src="/new_images/logo.webp"
                width={150}
                height={150}
                alt="logo"
                className="mx-auto mt-12"
              />
              <ul className="flex flex-col space-y-4 items-center justify-center w-full pt-20">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="my-2"
                  >
                    <Link
                      href={item.href}
                      className="text-[rgb(55,65,81)] font-sans hover:text-[#d1f349]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rest of the buttons */}
        <div className="flex md:gap-4 max-sm:gap-1 ml-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-slate-300 p-3 max-sm:scale-75"
          >
            <BellDot size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#d1f349] text-black px-6 py-3 font-semibold rounded-full max-sm:scale-75"
          >
            Login
          </motion.button>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden ml-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
