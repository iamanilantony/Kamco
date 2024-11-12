'use client';

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

interface ProductProps {
  title: string;
  images: string[];
}

const ProductImageSlider = ({ product }: { product: ProductProps }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const sliderRef = useRef<any>(null); // Create a reference for the slider

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    sliderRef.current.slickGoTo(index); // Move the slider to the clicked image
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImage,
    beforeChange: (current: number, next: number) => setCurrentImage(next), // Sync state with slider on change
    afterChange: (index: number) => setCurrentImage(index), // Sync state after change
    ref: sliderRef // Attach the ref to the slider
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="relative">
        {/* Main Image Slider */}
        <Slider {...settings} className="w-full">
          {product.images.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>

        {/* Arrow buttons */}
        <button
          onClick={() => {
            setCurrentImage((currentImage - 1 + product.images.length) % product.images.length);
            sliderRef.current.slickPrev(); // Navigate to previous image
          }}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-400 bg-opacity-50 p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={() => {
            setCurrentImage((currentImage + 1) % product.images.length);
            sliderRef.current.slickNext(); // Navigate to next image
          }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-400 bg-opacity-50 p-2 rounded-full"
        >
          &#8594;
        </button>

        {/* Preview Images */}
        <div className="flex justify-center space-x-4 mt-4 overflow-x-auto">
          {product.images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)} // Update main image on preview click
              className="cursor-pointer relative"
            >
              <Image
                src={img}
                alt={`Preview ${index}`}
                width={70}
                height={70}
                className={`object-cover rounded-md transition-all duration-200 transform ${
                  currentImage === index ? 'scale-110 border-2 border-[#008C44]' : ''
                }`}
              />
              {currentImage === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-md"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
