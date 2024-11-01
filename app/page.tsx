import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import GallerySection from '@/components/UI/Gallery';
import HighlightsSection from '@/components/UI/Highlights';
import TestimonialsSection from '@/components/UI/Testimonials';
import ContactSection from '@/components/UI/ContactSection';

export default function Home() {

  const highlights = [
    {
      title: "Top 10 Must-Have Tools for Every Modern Farmer",
      date: "03-10-2024",
      readTime: "4 min read",
      image: "/path/to/highlight-image1.jpg", // Update image path
    },
    {
      title: "Top 10 Must-Have Tools for Every Modern Farmer",
      date: "03-10-2024",
      readTime: "4 min read",
      image: "/path/to/highlight-image2.jpg", // Update image path
    },
    // Add more highlights as needed
  ];

  const galleryImages = [
    {
      image: "/Kamco_hero2.svg", // Update image path
    },
    {
      image: "/Kamco_hero2.svg", // Update image path
    },
    // Add more gallery images as needed
  ];

  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4">

        {/* Hero Section */}
        <div className="min-h-max grid md:grid-cols-2 gap-8 items-center mb-24 mt-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 text-left">
            <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-4">Cultivating Success</h1>
            <p className="text-gray-700 text-thin text-base w-3/4 mb-4 font-sans">
              From tillers and tractors to sprayers and seeders, we offer a wide range of high-quality agricultural tools that help farmers work smarter, not harder. Trust us to provide the equipment you need to cultivate success, season after season.
            </p>
            <div className="flex space-x-4">
              <Link href="/register" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition font-sans">
                Register Now
              </Link>
              <Link href="/dealers" className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition font-sans">
                Explore Dealers
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="grid grid-cols-3 gap-4 h-full">
            {/* Left Column with Two Stacked Images */}
            <div className="col-span-2 grid grid-rows-2 gap-4 h-full">
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <Image src="/Kamco_hero2.svg" fill className="object-cover" alt="Image 1" />
              </div>
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <Image src="/Kamco_hero3.svg" fill className="object-cover" alt="Image 2" />
              </div>
            </div>

            {/* Right Column with Single Tall Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image src="/Kamco_hero1.svg" fill className="object-cover" alt="Image 3" />
            </div>
          </div>
        </div>

        {/* Green Statistics Section */}
        <div className="min-h-[30vh] bg-[#166434] text-white flex items-center justify-around py-8 rounded-lg mt-12 px-40">
          <div className="text-center">
            <p className="text-4xl font-bold">50+</p>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">80+</p>
            <p className="text-lg">Dealers Across Country</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">1L+</p>
            <p className="text-lg">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">900+</p>
            <p className="text-lg">Skilled Man Power</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-10 my-24">
          <h2 className="text-4xl font-normal text-center mb-16 py-4 underline underline-offset-[16px] decoration-[#166434]">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  // src={`/products/image${index + 1}.svg`} // Update image source here
                  src={`/Kamco_hero1.svg`} // Update image source here
                  alt={`Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                  <h3 className="text-xl font-semibold">Product Title {index + 1}</h3>
                  <p className="text-center mb-4">Short description of the product.</p>
                  <Link href="/more-details" className="bg-green-600 px-4 py-2 text-xs rounded-md hover:bg-green-700 transition">
                    More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
       <HighlightsSection />
       <GallerySection />
       <TestimonialsSection />
       <ContactSection />

      </div>
    </>
  )
}
