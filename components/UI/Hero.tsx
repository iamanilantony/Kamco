'use client'
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="flex flex-column justify-start items-center min-h-max gap-8 px-2 md:px-20 mb-24 md:mt-2 md:mb-4 mt-18 h-[50rem]"
      style={{ backgroundImage: `url('kamco_factory1.JPG')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Text Content */}
      <div className="order-2 md:order-1 flex flex-col space-y-4 w-full md:w-1/2 items-start animate__animated animate__fadeIn animate__delay-[0.05s]">
        <h1 className="text-white text-left text-4xl md:text-6xl font-normal mb-4 text-left animate-bounce-up">
          Empowering Farmers, Enriching the Nation.
        </h1>

        <p className="text-gray-200 font-medium text-base w-full md:w-3/4 mb-4 font-sans text-left animate__animated animate__fadeIn animate__delay-1s animate__bounceInUp">
          Unleashing the power of innovation—tools that turn hard work into unstoppable growth, enabling greater efficiency and sustainable success.
        </p>
        <div className="flex justify-between md:justify-start sm:space-y-0 sm:space-x-4 animate__animated animate__fadeIn animate__delay-2s animate__bounceInUp">
          <Link href="/products" target='_blank' className="bg-white mr-2 md:mr-4 text-black text-xs h-10 md:h-max md:text-base px-2 md:px-6 py-3 rounded-md hover:bg-gray-200 transition font-sans">
            Explore Products
          </Link>
          <Link href="/dealers" className="border text-white border-white text-gray-900 px-2 md:px-6 py-3 text-xs h-10 md:h-max md:text-base rounded-md hover:border-gray-400 hover:text-white transition font-sans">
            Explore Dealers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
