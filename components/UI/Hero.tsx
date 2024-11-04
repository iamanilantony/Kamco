'use client'

import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
    return(
        <div className="min-h-max grid md:grid-cols-2 gap-8 items-center mb-24 md:mt-12 md:mb-4 mt-18">
        {/* Image Content */}
        <div className="order-1 md:order-2 grid grid-cols-3 gap-4 h-full">
          {/* Image Slider for Mobile */}
          <div className="col-span-3 md:col-span-2 grid grid-rows-1 gap-4 h-full">
            <div className="relative w-full h-52 md:h-72 rounded-lg overflow-hidden md:hidden">
              <Slider autoplay infinite dots={false}>
                <div className="w-full h-52 rounded-lg overflow-hidden">
                  <Image src="/Kamco_hero2.svg" fill className="object-cover" alt="Image 1" />
                </div>
                <div className="w-full h-52 rounded-lg overflow-hidden">
                  <Image src="/Tractor.jpg" fill className="object-cover" alt="Image 2" />
                </div>
              </Slider>
            </div>
            {/* Static images for larger screens */}
            <div className="relative w-full h-52 md:h-72 rounded-lg overflow-hidden md:block hidden">
              <Image src="/Kamco_hero2.svg" fill className="object-cover" alt="Image 1" />
            </div>
            <div className="relative w-full h-52 md:h-72 rounded-lg overflow-hidden md:block hidden">
              <Image src="/Tractor.jpg" fill className="object-cover" alt="Image 2" />
            </div>
          </div>

          {/* Right Column with Single Tall Image */}
          <div className="relative w-full h-52 md:h-full rounded-lg overflow-hidden md:block hidden">
            <Image src="/Kamco_hero1.svg" fill className="object-cover" alt="Image 3" />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center space-y-4 text-left">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-4">Cultivating Success</h1>
          <p className="text-gray-700 text-thin text-base w-full md:w-3/4 mb-4 font-sans">
            From tillers and tractors to sprayers and seeders, we offer a wide range of high-quality agricultural tools that help farmers work smarter, not harder. Trust us to provide the equipment you need to cultivate success, season after season.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="https://www.kamcoindia.com/dealers" target='_blank' className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition font-sans text-center">
              Register Now
            </Link>
            <Link href="/dealers" className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition font-sans text-center">
              Explore Dealers
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Hero