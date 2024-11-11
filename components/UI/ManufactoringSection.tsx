'use client'

import Slider from "react-slick";
import Image from 'next/image';

// Sample data for the manufacturing units
const facilitiesData = [
  {
    title: "Athani Unit – The Power Hub",
    description: "Located at our head office, the Athani facility houses KAMCO’s primary production lines for Power Tillers, including the KMB200, Super DI, and Super DI-SS models, as well as Tractors.",
    image: "/general/PLANTS/ATHANI.png",
  },
  {
    title: "Kalamassery Unit – Diesel Engine Expertise",
    description: "Our second unit, established in 1992 in Kalamassery, specializes in Diesel Engine production, forming the core of our Power Tiller and Tractor lineup.",
    image: "/general/PLANTS/KALAMMASSERY UNIT.jpg",
  },
  {
    title: "Kanjikode, Palakkad Unit – Expanding Production",
    description: "Established in 1995, the Kanjikode facility contributes to Power Tiller production, expanding our reach to farmers with high-quality machinery.",
    image: "/general/PLANTS/PALAKKADUNIT.jpg",
  },
  {
    title: "Mala, Thrissur Unit – Dedicated to Harvesting Solutions",
    description: "Our fourth unit in Mala, Thrissur, focuses on Power Reapers with specialized assembly lines for reliability and performance.",
    image: "/general/PLANTS/MALAUNIT.jpg",
  },
  {
    title: "Kannur Unit – Garden Tiller and Power Weeder Innovation",
    description: "Inaugurated in 2014, our Kannur facility is dedicated to Garden Tillers and Power Weeders, ensuring robust and efficient solutions.",
    image: "/general/DSC_0002.JPG",
  },
  {
    title: "Athani Tractor Manufacturing Unit",
    description: "Athani houses a specialized unit for Tractor production, featuring an advanced automated conveyor assembly system for durability and power.",
    image: "/general/PLANTS/TRACTORUNITBLDG.jpg",
  },
];

const ManufacturingSection = () => {
  // Slider settings for responsive display
  const settings = {
    dots: true,  // Enable dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Speed of slide transition
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // For small devices, display one slide
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For medium screens, show two slides
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#008C44] py-12 px-4 md:px-16">
      <h2 className="text-4xl text-white text-center font-bold mb-8">KAMCO Manufacturing Facilities</h2>

      <div className="w-full max-w-screen-xl mx-auto">
        {/* Add the Slider component */}
        <Slider {...settings}>
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="relative px-8 mx-16 h-96 w-[300px] sm:w-[400px] lg:w-[600px]"
            >
              <div className="bg-white p-6 rounded-lg">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#008C44]">{facility.title}</h3>
                <p className="text-gray-700 mt-2 text-black text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ManufacturingSection;
