'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: "Land Preparation", image: "/products/PR-011.jpg", slug: "land-preparation" },
  { name: "Plant protection", image: "/products/PR-012.jpg", slug: "plant-protection" },
  { name: "De weeding", image: "/products/PR-033.jpg", slug: "de-weeding" },
  { name: "Harvesting", image: "/products/PR-032.jpg", slug: "harvesting" },
  { name: "Garden Tools", image: "/products/PR-041.jpg", slug: "garden-tools" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default navigation action
    setIsMenuOpen(!isMenuOpen); // Toggle the submenu visibility
  };

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug); // Set the active category
    setIsMenuOpen(false); // Close the submenu after selecting a category
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the submenu if menu is open
    }
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 md:px-6 font-sans">
      <div className="flex justify-between items-center w-full md:w-auto z-50">
        <img src="/logo.png" alt="Logo" className="h-10 object-cover rounded-[8%]" />
        <button className="text-green-700 text-2xl md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      <nav
        className={`w-full md:flex md:w-auto space-y-4 md:space-y-0 md:space-x-6 p-2 md:p-4 items-center mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex-row text-center bg-white md:bg-transparent rounded-lg md:rounded-none shadow-md md:shadow-none z-50`}
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
          <a
            href="/products"
            onClick={handleProductsClick}
            className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
          >
            <span className="inline-block min-w-[80px] text-center">Products</span>
          </a>
          {/* Dropdown */}
          {isMenuOpen && (
            <div className="absolute left-0 bg-white text-gray-700 w-max mt-2 rounded-lg shadow-md p-2">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={{ pathname: '/products', query: { category: category.name } }}
                    // href={`/products/${category.slug}`} // Navigate to product page based on the category slug
                    onClick={() => handleCategoryClick(category.slug)} // Close the menu after selecting a category
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

        <Link
          href="/projects"
          onClick={handleLinkClick}
          className="block md:inline-block text-gray-700 px-1 md:px-1 font-normal transition-all duration-200 ease-in-out"
        >
          <span className="inline-block min-w-[80px] text-center">Strategic Initiatives</span>
        </Link>
        
        <Link
          href="/tenders"
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
    </header>
  );
};

export default NavBar;
