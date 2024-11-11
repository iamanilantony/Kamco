'use client'

import Slider from "react-slick";
import Image from 'next/image';

const facilitiesData = [
  {
    title: "Athani Unit – The Power Hub",
    description: "Located at our head office, the Athani facility houses KAMCO’s primary production lines for Power Tillers, including the KMB200, Super DI, and Super DI-SS models, as well as Tractors. This unit features meticulously organized assembly lines—Engine, Transmission, and Tiller lines—all converging to produce our flagship Power Tillers.",
    image: "/general/ATHANI_UNIT.jpg",
  },
  {
    title: "Kalamassery Unit – Diesel Engine Expertise",
    description: "Our second unit, established in 1992 in Kalamassery, specializes in Diesel Engine production. This facility is equipped for engine and gearbox assembly, with comprehensive testing to ensure optimal performance, reliability, and durability, forming the core of our Power Tiller and Tractor lineup.",
    image: "/general/KALAMASSERY_UNIT.jpg",
  },
  {
    title: "Kanjikode, Palakkad Unit – Expanding Production",
    description: "Established in 1995, the Kanjikode facility in Palakkad contributes to our production of Power Tillers, further expanding our reach and ability to serve India’s farmers with durable, high-quality machinery built for diverse agricultural applications.",
    image: "/general/KANJIKODE_UNIT.jpg",
  },
  {
    title: "Mala, Thrissur Unit – Dedicated to Harvesting Solutions",
    description: "Our fourth unit in Mala, Thrissur, focuses on producing Power Reapers. With specialized assembly lines for critical components, the facility is equipped for thorough inspections and testing at every stage, ensuring that each reaper delivers reliability and performance that farmers can depend on.",
    image: "/general/MALA_UNIT.jpg",
  },
  {
    title: "Kannur Unit – Garden Tiller and Power Weeder Innovation",
    description: "Inaugurated in 2014, our Kannur facility at Valiyavelicham is dedicated to Garden Tillers and Power Weeders, including models like the B30, K40, and the Eco Leopard Tiller KLW 100D. This unit combines cutting-edge manufacturing practices with stringent quality controls, ensuring that our tillers and weeders are robust, efficient, and versatile for various farming needs.",
    image: "/general/KANNUR_UNIT.jpg",
  },
  {
    title: "Athani Tractor Manufacturing Unit",
    description: "Our Athani campus also houses a specialized unit for Tractor production, featuring an advanced, automated conveyor assembly system. Each tractor undergoes rigorous testing to ensure durability, power, and fuel efficiency, aligning with our mission to deliver modern, sustainable solutions for India’s agricultural future.",
    image: "/general/ATHANI_TRACTOR_UNIT.jpg",
  },
];

const ManufacturingSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-[#008C44] py-12 px-4 md:px-16">
      <h2 className="text-4xl text-white text-center font-bold mb-8">KAMCO Manufacturing Facilities</h2>

      <div className="w-full">
        <Slider {...settings}>
          {facilitiesData.map((facility, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={facility.image}
                alt={facility.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#008C44]">{facility.title}</h3>
              <p className="text-gray-700 mt-2">{facility.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ManufacturingSection;
