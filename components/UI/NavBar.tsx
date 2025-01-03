'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const categories = [
  { name: "All Products", image: "/products/PR-011.jpg", slug: "all" },
  { name: "Land Preparation", image: "/products/PR-011.jpg", slug: "land-preparation" },
  { name: "Plant protection", image: "/products/PR-012.jpg", slug: "plant-protection" },
  { name: "De weeding", image: "/products/PR-033.jpg", slug: "de-weeding" },
  { name: "Harvesting", image: "/products/PR-032.jpg", slug: "harvesting" },
  { name: "Garden Tools", image: "/products/PR-041.jpg", slug: "garden-tools" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // For mobile menu
  const [isStatutoryMenuOpen, setIsStatutoryMenuOpen] = useState(false);  // For Statutory submenu
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);  // For About Us submenu
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);  // For Products submenu

  const statutoryMenuRef = useRef<HTMLDivElement>(null); // Ref for the Statutory dropdown
  const aboutUsRef = useRef<HTMLDivElement>(null); // Ref for the About Us dropdown
  const hamburgerRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button
  const productMenuRef = useRef<HTMLDivElement>(null); // Ref for the Product dropdown

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsProductMenuOpen(false);
      setIsStatutoryMenuOpen(false);
      setIsAboutUsOpen(false);
    }
  };

  // Function to toggle Statutory menu visibility
  const handleStatutoryMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsStatutoryMenuOpen(!isStatutoryMenuOpen);
    if (!isStatutoryMenuOpen) {
      setIsProductMenuOpen(false);
      setIsAboutUsOpen(false);
    }
  };

  const handleAboutUsRefToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAboutUsOpen(!isAboutUsOpen);
    if (!isAboutUsOpen) {
      setIsProductMenuOpen(false);
      setIsStatutoryMenuOpen(false);
    }
  };

  // Function to toggle Products menu visibility
  const handleProductMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductMenuOpen(!isProductMenuOpen);
    if (!isProductMenuOpen) {
      setIsStatutoryMenuOpen(false);
      setIsAboutUsOpen(false);
    }
  };

  // Function to close the Statutory and Product menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (
      statutoryMenuRef.current && !statutoryMenuRef.current.contains(e.target as Node) &&
      aboutUsRef.current && !aboutUsRef.current.contains(e.target as Node) &&
      productMenuRef.current && !productMenuRef.current.contains(e.target as Node) &&
      !hamburgerRef.current?.contains(e.target as Node)
    ) {
      setIsStatutoryMenuOpen(false); // Close the Statutory menu if click is outside
      setIsAboutUsOpen(false); // Close the About Us menu if click is outside
      setIsProductMenuOpen(false); // Close the product menu if click is outside
    }
  };

  // Event listener for detecting clicks outside of the menus
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
    setIsStatutoryMenuOpen(false);
    setIsProductMenuOpen(false);
    setIsAboutUsOpen(false);
  };

  return (
    <header className="sticky md:flex md:justify-between top-0 w-full z-50 bg-white p-4 md:px-6 font-sans">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href='/'>
          <img src="/logo.png" alt="Logo" className="h-10 object-cover rounded-[8%]" />
        </Link>
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
        className={`w-full md:flex md:w-auto space-y-4 md:space-y-0 md:gap-6 p-2 md:p-4 items-center mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex-row text-center`}
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Home</span>
        </Link>

        {/* Products Dropdown */}
        <div className="relative flex justify-center" ref={productMenuRef}>
          <span
            onClick={handleProductMenuToggle}
            className=" text-gray-700 px-1 font-normal transition-all cursor-pointer duration-200 ease-in-out flex items-center"
          >
            <span className="inline-block min-w-[80px] text-center">Products</span>
            <FaChevronDown className="ml-1 text-sm" />
          </span>
          {/* Dropdown */}
          {isProductMenuOpen && (
            <div className="absolute left-0 bg-white z-60 text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={{ pathname: '/products', query: { category: category.slug === 'all' ? '' : category.name } }}
                    onClick={handleLinkClick} // Close the menu after selecting a category
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-md p-2"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 object-cover rounded-md hidden md:block"
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
          className="block md:inline-block text-gray-700 px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">New Initiatives</span>
        </Link>

        <Link
          href="/tendors"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Tenders</span>
        </Link>

        {/* About Us Dropdown */}
        <div className="md:relative flex justify-center" ref={aboutUsRef}>
          <span
            onClick={handleAboutUsRefToggle}
            className="cursor-pointer text-gray-700 px-1 font-normal transition-all duration-200 ease-in-out flex items-center"
          >
            <span className="inline-block min-w-[80px] z-40 text-center">About Us</span>
            <FaChevronDown className="ml-1 text-sm" />
          </span>
          {isAboutUsOpen && (
            <div className="absolute left-0 z-40 right-0 md:left-auto md:right-auto md:mx-0 mx-auto bg-white text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/aboutUs"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  About Us
                </Link>
                <Link
                  href="https://web.kamcoindia.com/userfiles/Organizational%20Chart_20-12-2021(1).jpg"
                  onClick={handleLinkClick}
                  // target="_blank"
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  Organizational Structure
                </Link>

                <Link
                  href="/financial-report"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  Financial Report
                </Link>

                <Link
                  href="/awards"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  Awards and Recognition
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Statutory Dropdown */}
        <div className="md:relative flex justify-center" ref={statutoryMenuRef}>
          <span
            onClick={handleStatutoryMenuToggle}
            className="cursor-pointer text-gray-700 z-10 px-1 font-normal transition-all duration-200 ease-in-out flex items-center"
          >
            <span className="md:inline-block min-w-[80px] z-40 text-center">Statutory</span>
            <FaChevronDown className="ml-1 text-sm" />
          </span>
          {isStatutoryMenuOpen && (
            <div className="absolute z-50 left-0 right-0 md:left-auto md:right-auto md:mx-0 mx-auto bg-white text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/cm-redressal-cell"
                  onClick={handleLinkClick}
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
                >
                  CM Redressal Cell
                </Link>
                <Link
                  href="https://web.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
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
          href="#"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[100px] text-center">Notifications</span>
        </Link>

        <Link
          href="https://web.kamcoindia.com/dealers/user_login"
          onClick={handleLinkClick}
          className="block md:inline-block bg-[#D2F348] text-white font-semibold rounded-lg px-4 py-2 md:px-8 md:py-2 hover:bg-[#0f4222] transition duration-200 ease-in-out shadow-md"
        >
              Login
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
