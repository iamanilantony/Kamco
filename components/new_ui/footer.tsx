"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import NewsletterForm from "@/app/about/sections/newsletter";

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
    <footer
      id="footer"
      className="bg-[#c0eba6] px-8 md:px-[10vw] py-8 exo-font"
    >
      {" "}
      {/* Reduced py-12 to py-8 */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-40">
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
          <div className="flex flex-col">
            <h3 className="font-semibold exo-font text-lg mb-2">
              Main Links
            </h3>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex">
                <div className="mr-6">
                  <ul className="space-y-4">
                    {[
                      { id: '1', title: "About us", href: '/about' },
                      { id: '2', title: "Products", href: '/products' },
                      { id: '3', title: "Strategic Initiatives", href: '/projects' },
                      { id: '4', title: "Tenders", href: '/tendors' },
                      { id: '5', title: "Media", href: '/gallery' },
                    ].map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-black flex items-center gap-2"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    {[
                      { id: 1, title: "Resources", href: '#' },
                      { id: 2, title: "Downloads", href: '#' },
                      { id: 3, title: "Media", href: '#' },
                      { id: 4, title: "Notifications", href: '/notifications' },
                      { id: 5, title: "Dealers", href: '/dealers' }
                    ].map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-black flex items-center gap-2"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Newsletter Section */}
            </div>
          </div>
          {/* <div>
            <h3 className="font-semibold exo-font text-lg mb-2">
              Join our newsletter
            </h3>
            <p className="text-sm text-gray-700 mb-4 exo-font">
              Get the latest KAMCO updates right in your inbox, join our newsletter today!
            </p>
            <div className="flex justify-start items-center">
              <form
                action="https://docs.google.com/forms/d/1GF2tUn4kwLlBMDKIWMMtO-DJrKnh-0mwEuDoAH2f1bs/formResponse"
                method="POST"
                target="_blank"
                className="relative flex items-center bg-black text-gray-100 px-4 py-2 rounded-full w-96"
              >
                <input
                  type="email"
                  name="entry.1302336877"
                  placeholder="Your email"
                  required
                  className="flex-grow bg-transparent outline-none text-white placeholder:text-gray-400 px-3"
                />
                <motion.button
                  whileHover={{
                    x: 5,
                    color: "black",
                  }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="bg-[#A5F400] text-black rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <HiArrowRight />
                </motion.button>
              </form>
            </div>
          </div> */}
          <NewsletterForm />


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
