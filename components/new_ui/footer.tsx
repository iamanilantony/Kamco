import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

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
    <footer className="bg-[#c5eaaf] px-8 md:px-64 py-12 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-80">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/new_images/logo.webp"
                width={250}
                height={250}
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
              <h3 className="font-semibold text-lg mb-6">Main Links</h3>
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
              <h3 className="font-semibold text-lg mb-6">
                Join our newsletter
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Get the latest KAMCO updates right in your inbox, join our
                newsletter today!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white border-0 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-800"
                >
                  <HiArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-500">
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
