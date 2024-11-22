// pages/dealers.js

import Link from 'next/link';
import dealers from '@/public/data/dealers'

export default function DealersPage() {
    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 font-sans">
            <h1 className="text-3xl font-bold mb-6">Authorized Dealers</h1>

            {/* Filter, Sort, and Categories Select Inputs */}
            {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                    <option>Filters</option>
                    <option>By State</option>
                    <option>By Rating</option>
                    <option>By Proximity</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                    <option>Sort</option>
                    <option>Name: A-Z</option>
                    <option>Name: Z-A</option>
                    <option>Rating: High to Low</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto">
                    <option>Categories</option>
                    <option>All Dealers</option>
                    <option>Top-rated</option>
                    <option>Newly Added</option>
                </select>
            </div> */}

            {/* Dealers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dealers.map((dealer, index) => (
                    // <Link href={`/dealers/${dealer.id}`} key={index}>
                        <div className="p-6 border rounded-lg shadow-sm bg-white text-left hover:bg-[#166434] hover:text-white cursor-pointer transition duration-300 ease-in-out">
                            <div className="flex items-center mb-4">
                                {/* <div className={`w-10 h-10 rounded-full bg-gray-300`} /> */}
                                <h2 className={`ml-0 text-lg font-bold`}>{dealer.name}</h2>
                            </div>
                            <p className={`text-sm`}>{dealer.address}</p>
                            <p className={`text-sm mt-2`}>Tel: {dealer.phone}</p>
                        </div>
                    // </Link>
                ))}
            </div>
        </div>
    );
}
