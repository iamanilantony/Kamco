'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import TabbedSelect from './TabbedSelect';
import AllProducts from '@/public/data/productsList'

const ProductsPage = () => {
    const searchParams = useSearchParams();
    const categoryFromParams = searchParams.get('category') || '';
    const router = useRouter();

    const itemsPerPage = 12; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
    const [category, setCategory] = useState(categoryFromParams); // State to track the current page
    const [filteredProducts, setFilteredProducts] = useState(AllProducts); // State to hold filtered products

    // Function to filter products based on category
    const filterProductsByCategory = (category: string | null) => {
        if (category) {
            return AllProducts.filter((product) => product.category === category);
        }
        return AllProducts;
    };
    
    // Initial filtering on component mount
    useEffect(() => {
        const initialFilteredProducts = filterProductsByCategory(category);
        setFilteredProducts(initialFilteredProducts);
    }, [category]);

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > Math.ceil(filteredProducts.length / itemsPerPage)) return; // Ensure page is within bounds
        setCurrentPage(page);
    };

    // Function to handle category selection
    const handleCategoryChange = (value: string) => {
        const selectedCategory = value;
        setCategory(category === selectedCategory ? '' : selectedCategory);
        // setCategory(category ==== selectedCategory ? '' : selectedCategory);
        const newFilteredProducts = filterProductsByCategory(selectedCategory);
        setFilteredProducts(newFilteredProducts);
        setCurrentPage(1); // Reset to the first page when the category changes
    };

    // Get the current items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="px-4 md:px-10 lg:px-2 py-10 font-sans">
            <header className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-2 w-full md:flex-col md:space-x-4 md:space-y-0">
                    <TabbedSelect category={category} handleCategoryChange={handleCategoryChange} />
                </div>
                {/* <Link href="/dealers">
                    <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200 text-sm md:text-base w-max">
                        Explore Dealers
                    </button>
                </Link> */}
            </header>
            <hr className='my-10'/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-20">
                {currentItems.map((product, index) => (
                    <Link href={`/products/${product.codeName}`}>
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between cursor-pointer hover:bg-gray-100 transition-all duration-300 h-[20rem]"
                        >
                            {/* Product Image */}
                            <img
                                src={product.src}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            {/* Product Details */}
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                                {/* <p className="text-gray-500 text-sm">{product.piecesLeft} Pieces Left</p> */}

                                {/* <button className="text-[#166434] font-semibold hover:underline text-sm">Details</button> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6 md:px-20">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Previous
                </button>
                <span className="text-sm md:text-base">Page {currentPage} of {Math.ceil(filteredProducts.length / itemsPerPage)}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
                    className="px-3 py-2 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;
