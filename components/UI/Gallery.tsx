'use client';

import Slider from "react-slick";
import Link from 'next/link';

const GallerySection = () => {
    const galleryItems = [
        { image: "/Kamco_hero1.svg" },
        { image: "/Kamco_hero2.svg" },
        { image: "/Kamco_hero3.svg" },
        { image: "/eco-luxury2.svg.svg" },
        { image: "/eco-luxury3.svg.svg" },
        { image: "/eco-luxury4.svg.svg" },
        { image: "/eco-luxury5.svg.svg" },
        // Add more gallery items as needed
    ];

    const gallerySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Showing one image at a time
        slidesToScroll: 1,
    };

    return (
        <div className="py-10 bg-[#166434] -mx-16 mt-16">
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row"> {/* Responsive layout */}
                <div className="w-full md:w-1/2 text-center md:text-left my-auto px-4 md:pl-16"> {/* Adjusted text section */}
                    <h2 className="text-4xl font-normal text-white mb-4">Gallery</h2>
                    <p className="text-white mb-4 font-sans w-3/5 font-normal mx-auto">
                        Explore the world of KAMCO with the photos of our past events, products, customers, and so on.
                    </p>
                    <Link href="/gallery" className="w-1/2 md:w-1/5 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-100 transition font-sans">
                        View All Photos
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-16 mt-8 md:mt-0"> {/* Center slider on mobile */}
                    <Slider {...gallerySettings} className="w-full"> {/* Ensure slider takes full width */}
                        {galleryItems.map((item, index) => (
                            <div key={index} className="h-96 w-full"> {/* Set a fixed height for slider items */}
                                <img
                                    src={item.image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg" // Ensure image covers the area
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default GallerySection;
