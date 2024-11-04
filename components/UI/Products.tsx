'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import allProducts from '@/public/data/products.json';


// const formatSubcategories = (categories: any) => {
//     return categories.flatMap(category => 
//         category.subcategories?.map(subcategory => ({
//             name: subcategory.name,
//             codeName: subcategory.codeName,
//             src: subcategory.src,
//             piecesLeft: 128, // Default value, replace as needed
//             description: `Description for ${subcategory.name}` // Custom description, replace as needed
//         }))
//     );
// };

const ProductsPage = () => {

    const searchParams = useSearchParams();
    const category = searchParams.get('category'); // Read the category from the query parameter
    const router = useRouter();
    // Sample product data derived from JSON structure provided
    const allProducts = [
        { name: "Power Tillers", codeName: "PR-011", category: "Land Preparation", src: "/products/PR-011.jpg", piecesLeft: 128, description: "Efficient tillers for land preparation." },
        { name: "Tractors", codeName: "PR-012", category: "Land Preparation", src: "/products/PR-012.jpg", piecesLeft: 75, description: "High-performance tractors for large-scale fields." },
        { name: "Drone", codeName: "PR-021", category: "Plant protection", src: "/products/PR-021.png", piecesLeft: 56, description: "Advanced drones for plant protection." },
        { name: "Echo Leopard Power weeder", codeName: "PR-031", category: "De weeding", src: "/products/PR-031.png", piecesLeft: 150, description: "Reliable power weeder for de-weeding tasks." },
        { name: "Geared Power weeder", codeName: "PR-032", category: "De weeding", src: "/products/PR-032.jpg", piecesLeft: 60, description: "Durable, geared power weeder for intensive work." },
        { name: "Garden Tillers", codeName: "PR-033", category: "Garden Tools", src: "/products/PR-033.jpg", piecesLeft: 120, description: "Compact tillers for garden use." },
        { name: "Cono Weeder", codeName: "PR-035", category: "De weeding", src: "/products/PR-035.png", piecesLeft: 85, description: "Specialized cono weeder for efficient de-weeding." },
        { name: "Brush Cutter", codeName: "PR-036", category: "Plant protection", src: "/products/PR-036.jpg", piecesLeft: 200, description: "Versatile brush cutter for various applications." },
        { name: "Power Reaper", codeName: "PR-041", category: "Harvesting", src: "/products/PR-041.jpg", piecesLeft: 45, description: "Efficient power reaper for harvesting tasks." },
      ];

    // const router = useRouter();
    // const { category } = router.query;

    // const formattedProducts =  formatSubcategories(products);


    const itemsPerPage = 5; // Number of items to display per page
    // const totalItems = products.filter(product => {
    //     if (product?.src) {
    //         const image = new Image();
    //         image.src = product.src;
    //         return image.complete;
    //     }
    //     return false;
    // })

    const filteredProducts = category
    ? allProducts.filter((product) => product.category === category)
    : allProducts;

    const totalPages = Math.ceil(filteredProducts.filter(product => product?.src || 0).length / itemsPerPage); // Total number of pages based on products with images

    const [currentPage, setCurrentPage] = useState(1); // State to track the current page

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Ensure page is within bounds
        setCurrentPage(page);
    };

        // Get the current items to display, filtering out products without images
        const startIndex = (currentPage - 1) * itemsPerPage;
        
        const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 font-sans">
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-2 w-full md:flex-row md:space-x-4 md:space-y-0">
                    {/* <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Filters</option>
                        <option>Price Range</option>
                        <option>Availability</option>
                        <option>Ratings</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Sort</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest First</option>
                    </select> */}
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                        <option>Categories</option>
                        <option>Land Preparation</option>
                        <option>Plant protection</option>
                        <option>De weeding</option>
                        <option>Harvesting</option>
                        <option>Garden Tools</option>
                        <option>KAMCO-lite</option>
                    </select>
                </div>
                <Link href="/dealers">
                    <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200 text-sm md:text-base w-max">
                        Explore Dealers
                    </button>
                </Link>
            </header>

            <div className="space-y-6">
                {currentItems.map((product, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row cursor-pointer hover:bg-gray-100 transition-bg duration-300"
                    >
                        <img src={product.src} alt={product.name} className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-16" />
                        <div className="flex-1 text-left">
                            <div className='flex justify-between mb-2 flex-col md:flex-row'>
                                <h2 className="text-lg md:text-xl font-bold">{product.name}</h2>
                                <p className="text-gray-500 text-sm md:text-base">{product.piecesLeft} Pieces Left</p>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base mb-2">{product.description}</p>
                            <Link href={`/products/${product.codeName}`}>
                                <button className="text-[#166434] font-semibold hover:underline text-sm md:text-base">Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Previous
                </button>
                <span className="text-sm md:text-base">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;