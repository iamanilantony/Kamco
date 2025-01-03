"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import useClickOutside from "@/lib/hooks/useclickedoutside";

const MobileView = ({
  isOpen,
  navItems,
  setIsOpen,
  activeDropdown,
  setActiveDropdown,
}: {
  isOpen: boolean;
  navItems: {
    name: string;
    href: string;
    subItems?: { name: string; href: string }[];
  }[];
  setIsOpen: (arg0: boolean) => void;
  activeDropdown: string | null;
  setActiveDropdown: (arg0: string | null) => void;
}) => {
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleDropdown = (name: string) => {
    //@ts-ignore
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleNavigation = (href: string) => {
    console.log("navigating to", href);
    router.push(href);
    setIsOpen(false);
  };

  useClickOutside(dropdownContainerRef, () => setActiveDropdown(null));

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed flex-col justify-center items-center md:hidden top-0 right-0 h-screen w-full bg-[#FAFFF7] z-40"
        >
          <div className="flex justify-between items-center w-full px-6 py-4">
            <Image
              src="/new_images/logo.webp"
              width={150}
              height={150}
              alt="logo"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>
          <div ref={dropdownContainerRef} className="w-full">
            <ul className="flex flex-col space-y-4 items-center justify-center w-full pt-20">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="my-2 w-full text-left px-4"
                >
                  <div
                    onClick={() => {
                      if (!item.subItems) {
                        handleNavigation(item.href);
                      } else {
                        toggleDropdown(item.name);
                      }
                    }}
                    className="cursor-pointer font-semibold text-[rgb(55,65,81)] font-sans hover:font-bold flex items-center justify-between"
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                  {item.subItems && activeDropdown === item.name && (
                    <ul className="flex flex-col space-y-2 mt-2 px-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <div
                            onClick={() => handleNavigation(subItem.href)}
                            className="text-[rgb(55,65,81)] font-sans hover:text-[#d1f349] cursor-pointer"
                          >
                            {subItem.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileView;
