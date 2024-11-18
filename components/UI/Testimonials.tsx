'use client';

import Slider from "react-slick";
import { useEffect, useState } from 'react';

const VideoTestimonialsSection = () => {
  const highlights = [
    {
      videoSrc: "https://www.youtube.com/embed/EugBMMdValI", // Example YouTube embed link
      author: "Raghesh K, Rice Farmer",
    },
    {
      videoSrc: "https://www.youtube.com/embed/EugBMMdValI",
      author: "Asha M, Agro Expert",
    },
    {
      videoSrc: "https://www.youtube.com/embed/EugBMMdValI",
      author: "Suresh P, Equipment Dealer",
    },
    // More video testimonials...
  ];

  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 for server-side rendering

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <img src='/right-arrow-black.svg' alt="Next" className="arrow" />,
    prevArrow: <img src='/left-arrow-black.svg' alt="Previous" className="arrow" />,
  };

  return (
    <div className="py-10 mt-20">
      <h2 className="text-4xl font-normal text-center mb-8">Video Testimonials</h2>
      <div className="max-w-8xl mx-auto mb-1 px-4">
        <Slider {...settings} className="px-4 md:px-0">
          {highlights.map((highlight, index) => (
            <div key={index} className={`py-8 px-2 md:py-16 md:px-4`}>
              <div className={`text-center cursor-pointer p-1 border rounded-lg bg-white`}>
                <div className="relative">
                  <iframe
                    width="100%"
                    height="315"
                    src={highlight.videoSrc}
                    title="Video Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
                <p className="mx-4 text-gray-500 font-sans mt-4 text-xs">{highlight.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoTestimonialsSection;
