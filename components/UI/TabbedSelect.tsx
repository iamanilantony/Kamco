'use client';

import Image from 'next/image';

const categories = [
    { name: "Land Preparation", image: "/products/PR-011.jpg" },
    { name: "Plant protection", image: "/products/PR-012.jpg" },
    { name: "De weeding", image: "/products/PR-033.jpg" },
    { name: "Harvesting", image: "/products/PR-032.jpg" },
    { name: "Garden Tools", image: "/products/PR-041.jpg" },
];

const TabbedSelect = ({ category, handleCategoryChange }: { category: string, handleCategoryChange: (value: string) => void }) => {
    return (
        <div className="w-full md:w-auto mx-auto">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {categories.map((categoryItem, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryChange(categoryItem.name)}
                        className={`px-6 py-2 rounded-md text-sm md:text-base font-semibold 
                            ${category === categoryItem.name ? "bg-[#008C44] text-white" : "bg-white text-gray-700 border border-gray-100"} 
                            transition-all duration-200 flex flex-col justify-center items-center`}
                    >
                        <div className="flex justify-center items-center w-20 h-20">
                            <Image 
                                src={categoryItem.image} 
                                alt={categoryItem.name} 
                                width={80} 
                                height={80} 
                                className={`transition-all duration-300 ${category === categoryItem.name ? 'grayscale-0' : 'grayscale'} hover:grayscale-0`} 
                            />
                        </div>
                        <span className="text-xs sm:text-sm">{categoryItem.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabbedSelect;
