'use client'

import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="flex flex-column justify-start items-center min-h-max gap-8 px-20 mb-24 md:mt-2 md:mb-4 mt-18 h-[50rem]"
      style={{ backgroundImage: `url('kamco_factory1.JPG')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Text Content */}
      <div className="order-2 md:order-1 flex flex-col space-y-4 w-1/2 items-start">
        <h1 className="text-white text-left text-4xl md:text-6xl font-normal mb-4 text-left">Empowering Farmers, Enriching the Nation.</h1>
        <p className="text-gray-200 font-medium text-base w-full md:w-3/4 mb-4 font-sans text-left">
        Unleashing the power of innovation—tools that turn hard work into unstoppable growth, enabling greater efficiency and sustainable success.
        </p>
        <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="https://www.kamcoindia.com/dealers" target='_blank' className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-700 transition font-sans">
            Register Now
          </Link>
          <Link href="/dealers" className="border text-white border-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition font-sans">
            Explore Dealers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero