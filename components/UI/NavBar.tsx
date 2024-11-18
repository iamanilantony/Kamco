'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavigationMenu } from './navigation-menu';

const categories = [
  { name: "Land Preparation", image: "/products/PR-011.jpg", slug: "land-preparation" },
  { name: "Plant protection", image: "/products/PR-012.jpg", slug: "plant-protection" },
  { name: "De weeding", image: "/products/PR-033.jpg", slug: "de-weeding" },
  { name: "Harvesting", image: "/products/PR-032.jpg", slug: "harvesting" },
  { name: "Garden Tools", image: "/products/PR-041.jpg", slug: "garden-tools" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // For mobile menu
  const [isStatutoryMenuOpen, setIsStatutoryMenuOpen] = useState(false);  // For Statutory submenu

  const statutoryMenuRef = useRef<HTMLDivElement>(null); // Ref for the Statutory dropdown
  const hamburgerRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle Statutory menu visibility
  const handleStatutoryMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsStatutoryMenuOpen(!isStatutoryMenuOpen); // Toggle Statutory submenu visibility
  };

  // Function to close the Statutory menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (statutoryMenuRef.current && !statutoryMenuRef.current.contains(e.target as Node) && !hamburgerRef.current?.contains(e.target as Node)) {
      setIsStatutoryMenuOpen(false); // Close the Statutory menu if click is outside
    }
  };

  // Event listener for detecting clicks outside of the Statutory menu
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup listener on component unmount
    };
  }, []);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if menu is open
    }
    if (isStatutoryMenuOpen) {
      setIsStatutoryMenuOpen(false); // Close the statutory menu if menu is open
    }
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 md:px-6 font-sans">
      <div className="flex justify-between items-center w-full md:w-auto z-50">
        <img src="/logo.png" alt="Logo" className="h-10 object-cover rounded-[8%]" />
        {/* Mobile Menu Toggle */}
        <button
          ref={hamburgerRef}
          className="text-green-700 text-2xl md:hidden"
          onClick={handleMenuToggle}
        >
          ☰
        </button>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full md:flex md:w-auto space-y-4 md:space-y-0 md:gap-6 p-2 md:p-4 items-center mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex-row text-center bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none z-50`}
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Home</span>
        </Link>

        {/* Products Dropdown */}
        <div className="relative">
          <span
            // href="/products"
            onClick={handleMenuToggle}
            className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all cursor-pointer duration-200 ease-in-out"
          >
            <span className="inline-block min-w-[80px] text-center">Products</span>
          </span>
          {/* Dropdown */}
          {isMenuOpen && (
            <div className="absolute left-0 bg-white text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={{ pathname: '/products', query: { category: category.name } }}
                    onClick={() => handleLinkClick()} // Close the menu after selecting a category
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-md p-2"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="/projects"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Strategic Initiatives</span>
        </Link>

        <Link
          href="/tendors"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Tenders</span>
        </Link>

        <Link
          href="/aboutUs"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">About Us</span>
        </Link>

        {/* Statutory Dropdown */}
        <div className="relative" ref={statutoryMenuRef}>
          <a
            href="/statuatory"
            onClick={handleStatutoryMenuToggle}
            className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
          >
            <span className="inline-block min-w-[80px] text-center">Statutory</span>
          </a>
          {/* Statutory Dropdown */}
          {isStatutoryMenuOpen && (
            <div className="absolute left-0 bg-white text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/cm-redressal-cell"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  CM Redressal Cell
                </Link>
                <Link
                  href="https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                  onClick={handleLinkClick}
                  target="_blank"
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  Corporate Social Responsibility (CSR)
                </Link>

                <Link
                  href="/right-to-information"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  Right to Information (RTI)
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/notifications"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[100px] text-center">Notifications</span>
        </Link>

        <Link
          href="https://www.kamcoindia.com/dealers/user_login"
          onClick={handleLinkClick}
          className="block md:inline-block bg-[#166434] text-white font-semibold rounded-lg px-4 py-2 md:px-8 md:py-2 hover:bg-[#0f4222] transition duration-200 ease-in-out shadow-md"
        >
          Login
        </Link>
      </nav>
      {/* <NavigationMenu /> */}
    </header>
  );
};

export default NavBar;
