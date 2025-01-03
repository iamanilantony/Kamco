"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import NewsletterForm from "@/app/about/sections/newsletter";
import FooterSections from "./footersections";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/kamcoindia",
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      href: "https://x.com/kamcoindia_ofcl?t=oIyNl3yGZ7QIVcCTeALjAA&s=09",
      icon: FaXTwitter,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/kamcoindiaofficial/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCh7eaVTY8Z85h7ml_TO9wbA",
      icon: FaYoutube,
      label: "YouTube",
    },
  ];

  const bottomLinks = [
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Sitemap" },
  ];

  return (
    <footer
      id="footer"
      // className="bg-[#c0eba6] px-8 md:px-[6.5vw] py-8 exo-font"
      className="bg-[#d7ffbf] px-8 md:px-[6.5vw] py-8 exo-font"
    >
      {" "}
      {/* Reduced py-12 to py-8 */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-40 w-full">
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
            <p className="text-lg text-gray-700 max-w-sm">
            A Boon for the Farmer; <br/>
            A Gain for the Nation
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <Icon size={20} />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {/* Main Links Section */}
            <FooterSections
              head="Company"
              links={[
                { id: "0", title: "Home", href: "/" },
                { id: "1", title: "About us", href: "/about" },
                { id: "2", title: "Products", href: "/products" },
                {
                  id: "3",
                  title: "New Initiatives",
                  href: "/projects",
                },
                { id: "4", title: "Tenders", href: "/tendors" },
              ]}
            />
            <FooterSections
              head="Resources"
              links={[
                { id: 2, title: "Downloads", href: "/downloads" },
                { id: 3, title: "Media", href: "/media" },
                { id: 4, title: "Notifications", href: "/notifications" },
                { id: 5, title: "Dealers", href: "/dealers" },
              ]}
            />
            <NewsletterForm />
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
