import Link from 'next/link';
import GallerySection from '@/components/UI/Gallery';
import HighlightsSection from '@/components/UI/Highlights';
import TestimonialsSection from '@/components/UI/Testimonials';
import ContactSection from '@/components/UI/ContactSection';
import Hero from '@/components/UI/Hero';

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
    <div className="max-w-screen-2xl mx-auto px-4">
      {/* Hero Section */}
      <Hero />
      {/* Green Statistics Section */}
      <div className="min-h-[30vh] bg-[#166434] text-white flex flex-wrap items-center justify-around py-8 rounded-lg mt-12 px-4 md:px-40">
        <div className="text-center mb-4 md:mb-0">
          <p className="text-3xl md:text-4xl font-bold">50+</p>
          <p className="text-base md:text-lg">Years of Experience</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p className="text-3xl md:text-4xl font-bold">80+</p>
          <p className="text-base md:text-lg">Dealers Across Country</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p className="text-3xl md:text-4xl font-bold">1L+</p>
          <p className="text-base md:text-lg">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold">900+</p>
          <p className="text-base md:text-lg">Skilled Man Power</p>
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
                src={`/Kamco_hero1.svg`} // Update image source here
                alt={`Product ${index + 1}`}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                <h3 className="text-lg md:text-xl font-semibold">Product Title {index + 1}</h3>
                <p className="text-sm md:text-base text-center mb-4">Short description of the product.</p>
                <Link href="/more-details" className="bg-green-600 px-4 py-2 text-xs md:text-sm rounded-md hover:bg-green-700 transition">
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
  )
}
