'use client';

import Slider from "react-slick"; 

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
        slidesToShow: window.innerWidth < 768 ? 1 : 3,
        slidesToScroll: 1,
        nextArrow: <img src='/right-arrow-black.svg' alt="Next" className="arrow" />,
        prevArrow: <img src='/left-arrow-black.svg' alt="Previous" className="arrow" />,
    };
  
    return (
        <div className="py-10 mt-20">
            <h2 className="text-4xl font-normal text-center mb-8">Testimonials</h2>
            <div className="max-w-8xl mx-auto mb-1 px-4">
                <Slider {...settings} className="px-4 md:px-0">
                    {highlights.map((highlight, index) => (
                        <div key={index} className={`py-8 px-2 md:py-16 md:px-4`}>
                            <div className={`text-center cursor-pointer p-1 border rounded-lg shadow-md bg-white`}>
                                <p className="mx-4 text-gray-700 font-sans text-base max-w-80">{highlight.content}</p>
                                <p className="mx-4 text-gray-500 font-sans mt-4 text-xs">{highlight.author}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsSection;
