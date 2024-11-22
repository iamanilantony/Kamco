'use client';

import Slider from "react-slick";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/app/styles/Highlights.module.css'; // Ensure the path is correct

const HighlightsSection = () => {
  const highlights = [
    {
      title: "Innovative Farming Techniques Revolutionizing Agriculture",
      date: "12-09-2024",
      readTime: "6 min read",
      image: "/Kamco_hero1.svg",
    },
    {
      title: "Sustainable Solutions: Building a Greener Future for Farmers",
      date: "15-11-2024",
      readTime: "5 min read",
      image: "/products/PR-02.jpg",
    },
    {
      title: "The Future of Agriculture: AI and Automation in Farming",
      date: "18-11-2024",
      readTime: "7 min read",
      image: "/products/PR-01.jpg",
    },
    {
      title: "How Drones are Changing the Landscape of Modern Farming",
      date: "22-11-2024",
      readTime: "3 min read",
      image: "/Kamco_hero2.svg",
    },
    {
      title: "Smart Irrigation: Using Technology to Conserve Water",
      date: "25-11-2024",
      readTime: "5 min read",
      image: "/products/PR-03.jpg",
    },
  ];


  const [slidesToShow, setSlidesToShow] = useState(3);

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
    <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Highlights</h2>
      <div className="max-w-8xl mx-auto mb-4">
        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <div key={index} className={`text-left cursor-pointer p-1`}> {/* Reduced margin */}
              <img src={highlight.image} alt={highlight.title} className="w-full h-56 object-cover rounded-lg mb-2" />
              <h3 className="mx-4 mt-2 font-normal mb-1 text-lg">{highlight.title}</h3>
              <p className="mx-4 text-gray-500 font-sans">{highlight.date}</p>
              <p className="mx-4 text-gray-500 font-sans mb-2">{highlight.readTime}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center mt-16">
        <Link href="/articles" className="bg-[#166434] text-white px-4 py-2 rounded-2xl hover:bg-green-700 transition font-sans">
          Read All Articles
        </Link>
      </div>
    </div>
  );
};

export default HighlightsSection;
