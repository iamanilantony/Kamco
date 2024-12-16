"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { href: "#", icon: FaFacebookF, label: "Facebook" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
    { href: "#", icon: FaYoutube, label: "YouTube" },
  ];

  const bottomLinks = [
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Sitemap" },
  ];

  return (
    <footer className="bg-[#c0eba6] px-8 md:px-[10vw] py-8 exo-font">
      {" "}
      {/* Reduced py-12 to py-8 */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-80">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/new_images/logo.webp"
                width={200}
                height={150}
                alt="logo"
                className=""
              />
            </Link>
            <p className="text-sm text-gray-700 max-w-sm">
              KAMCO was started way back in 1973 to aid farmers in their quest
              for higher productivity, more prosperity and greater happiness in
              their lives.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-700 hover:text-black"
                >
                  <Icon size={20} />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Links Section */}
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h3 className="font-semibold exo-font text-lg mb-2">
                Main Links
              </h3>
              <ul className="space-y-4">
                {[
                  "About us",
                  "Products",
                  "Strategic Initiatives",
                  "Tenders",
                  "Media",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-700 hover:text-black flex items-center gap-2"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="font-semibold exo-font text-lg mb-2">
                Join our newsletter
              </h3>
              <p className="text-sm text-gray-700 mb-4 exo-font">
                Get the latest KAMCO updates right in your inbox, join our
                newsletter today!
              </p>
              <div className="flex justify-start items-center">
                <div className="relative flex items-center bg-black text-gray-100 px-4 py-2 rounded-full w-96">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow bg-transparent outline-none text-white placeholder:text-gray-400 px-3"
                  />
                  <motion.button
                    whileHover={{
                      x: 5,
                      color: "black",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#A5F400] text-black rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <HiArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 border-t border-gray-500">
          {" "}
          {/* Reduced mt-12 to mt-8 and pt-6 to pt-4 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700">
              © Copyright 2024. All rights reserved
            </p>
            <div className="flex gap-6 text-sm text-gray-700">
              {bottomLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="hover:text-black">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
