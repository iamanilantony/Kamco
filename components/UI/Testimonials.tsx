'use client';

import Slider from "react-slick"; 
import Link from 'next/link';
import styles from '@/app/styles/Highlights.module.css'; // Ensure the path is correct

const TestimonialsSection = () => {
    const highlights = [
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
        {
          content: "The quality of these tools is unmatched! I've seen a noticeable improvement in my farm's efficiency since switching to their products. Highly recommended!",
          author: "Raghesh K, Rice Farmer",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <img src='/right-arrow-black.svg' alt="Next" className="arrow" />,
        prevArrow: <img src='/left-arrow-black.svg' alt="Previous" className="arrow" />,
    };
  
    return (
        <div className="py-10 mt-20">
            <h2 className="text-4xl font-normal text-center mb-8">Testimonials</h2>
            <div className="max-w-8xl mx-auto mb-1">
                <Slider {...settings}>
                    {highlights.map((highlight, index) => (
                        <div key={index} className={`py-16 px-4`}> {/* Reduced margin */}
                        <div className={`text-center cursor-pointer p-1 py-16 px-4 border`}>
                            <p className="mx-4 text-gray-500 font-sans text-base max-w-80">{highlight.content}</p>
                            <p className="mx-4 text-gray-500 font-sans mb-2 text-xs">{highlight.author}</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsSection;
