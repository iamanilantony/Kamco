import Link from 'next/link';
import GallerySection from '@/components/UI/Gallery';
import HighlightsSection from '@/components/UI/Highlights';
import TestimonialsSection from '@/components/UI/Testimonials';
import ContactSection from '@/components/UI/ContactSection';
import Hero from '@/components/UI/Hero';
import products from '@/public/data/categores.json'
import Image from 'next/image';
import StatsSection from '@/components/UI/StatsSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-auto px-4 max-w-screen-4xl">
        {/* Hero Section */}
        {/* Green Statistics Section */}
       <StatsSection />

        {/* Products Section */}
        <div className="py-10">
          <h2 className="text-4xl font-normal text-center mb-16 py-4 underline underline-offset-[16px] decoration-[#166434]">CATEGORIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.categories.map((category, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={{ pathname: '/products', query: { category: category.name } }}>
                  <img
                    src={category.src}
                    alt={`Category ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity flex flex-col items-center justify-center md:flex-row text-white font-sans">
                    <span className="text-lg md:text-xl font-semibold">{category.name}</span>
                    <div className="px-2 py-2 opacity-0 group-hover:opacity-80 text-xs md:text-xs rounded-md transition">
                      <img src='/right-arrow-round-white.svg' alt='Right arrow' className='w-6' />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>

        <div className='max-w-screen-2xl mx-auto'>
          {/* Gallery Section */}
          <HighlightsSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
