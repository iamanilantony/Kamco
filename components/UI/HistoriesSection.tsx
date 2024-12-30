'use client'
import { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

const historyContent = [
  {
    year: '1973',
    description: 'In 1973, KAMCO was formed as a joint venture between Kerala Agro Industries Corporation Ltd. (KAIC) and the Government of Kerala, focusing on agro-based industries.',
    image: '/general/OLDPHOTOS/IMG20241031112402.jpg',
  },
  {
    year: '1974',
    description: 'In 1974, KAMCO began production of the Power Tiller, a versatile machine that became essential for farming, offering multi-purpose functionality for tilling, ploughing, and more.',
    image: '/products/PR-031.png',
  },
  {
    year: '1992',
    description: 'In 1992, KAMCO commissioned the Kalamassery unit for Diesel Engine production, enhancing its capabilities to produce more efficient and reliable power sources for farming machinery.',
    image: '/general/Kalamassery.png',
  },
  {
    year: '1995',
    description: 'In 1995, KAMCO expanded with the Palakkad unit, focusing on Power Tiller production to meet increasing demand, further establishing KAMCO as a leader in mechanized farming.',
    image: '/general/PLANTS/PALAKKADUNIT.jpg',
  },
  {
    year: '2000',
    description: 'In 2000, KAMCO commissioned the Mala unit for Power Reaper production, diversifying its product line to cater to harvesting needs, offering innovative solutions to farmers.',
    image: '/general/PLANTS/MALAUNIT.jpg',
  },
  {
    year: '2005',
    description: 'In 2005, KAMCO introduced the low smoke 12 HP DI Engine, leading to the creation of the Super DI Power Tiller, a favorite among farmers.',
    image: '/general/SuperDIPowerTiller1.png',
  },
  {
    year: '2010',
    description: 'In 2010, KAMCO developed a compact 4 HP petrol engine-powered Power Weeder and collaborated with M/s. Barbieri SRL for a 16 HP mini tractor for dry land applications.',
    image: '/products/PR-032.jpg',
  },
  {
    year: '2012',
    description: 'In 2012, the second unit at Athani was commissioned to increase Tractor production, reinforcing KAMCO’s commitment to meeting the growing demand for efficient farm equipment.',
    image: '/general/PLANTS/ATHANI.png',
  },
  {
    year: '2014',
    description: 'The fifth manufacturing unit was established in Kannur District, and KAMCO diversified into Brush Cutters and Engine Water Pumps to provide a wider range of agricultural solutions.',
    image: '/general/PLANTS/TRACTORUNITBLDG.jpg',
  },
  {
    year: '2016',
    description: 'In 2016, KAMCO established the Kannur unit for Eco Leopard Tiller production, introducing eco-friendly tilling solutions to further reduce environmental impact in agriculture.',
    image: '/general/athani factory 3-1-09 004.JPG',
  },
];


const HistorySection = () => {
  const [activeTab, setActiveTab] = useState('1973'); // Default active tab is 1973

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10, // Show multiple years horizontally
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setActiveTab(historyContent[next].year),
  };

  return (
<section className="w-full p-2 md:px-8 md:pr-24 text-left overflow-auto">
  <div className="flex flex-col items-center justify-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 md:mt-20 text-center">Our Journey</h2>

    {/* Horizontal Slider (Top Section) */}
    <div className="w-full md:w-2/4 mb-6 md:mb-10">
      <Slider {...settings}>
        {historyContent.map((point, index) => (
          <div
            key={index}
            className={`text-xs md:text-base cursor-pointer text-center p-1 md:p-4 transition-all duration-300 ${activeTab === point.year ? 'bg-[#008C44] text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(point.year)} // Handle click to change active tab
          >
            <p className="font-semibold">{point.year}</p>
          </div>
        ))}
      </Slider>
    </div>

    {/* Info and Image (Right Side) */}
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 mt-8 md:mt-0 md:ml-8">
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{activeTab}</h2>
        <div className="text-sm md:text-base space-y-4">
          <p>{historyContent.find(point => point.year === activeTab)?.description}</p>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-5/6 md:w-1/2 mt-6 md:mt-0">
        <Image
          src={historyContent.find(point => point.year === activeTab)?.image || '/img/default.jpg'}
          alt={`Image for ${activeTab}`}
          width={500}
          height={300}
          className="rounded-lg object-cover w-full h-80"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default HistorySection;
