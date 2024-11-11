'use client';

import Slider from "react-slick";
import Link from 'next/link';

const GallerySection = () => {
    const galleryItems = [
        { image: "gallery/13.jpg" },
        { image: "gallery/2.jpg" },
        { image: "gallery/3.jpg" },
        { image: "gallery/4.jpg" },
        { image: "gallery/5.jpg" },
        { image: "gallery/6.jpg" },
        { image: "gallery/7.jpg" },
        { image: "gallery/8.jpg" },
        { image: "gallery/9.jpg" },
        { image: "gallery/10.jpg" },
        { image: "gallery/11.jpg" },
        { image: "gallery/12.jpg" },
        { image: "gallery/13.jpg" }, 
    ];

    const gallerySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className="py-10 bg-[#166434] mx-2 mt-16 md:mx-auto w-full">
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex justify-center items-center px-8 md:px-16 mb-8 md:mb-0">
                    <Slider {...gallerySettings} className="w-full">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="h-64 md:h-96 w-full"> 
                                <img
                                    src={item.image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg" 
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full md:w-1/2 px-8 md:px-4 flex flex-col justify-center text-left">
                    <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">Gallery</h2>
                    <p className="text-white mb-4 font-sans w-full md:w-4/5 font-normal">
                        Explore the world of KAMCO with the photos of our past events, products, customers, and so on.
                    </p>
                    <Link href="/gallery" className="w-full md:w-1/5 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition font-sans">
                        View All Photos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
