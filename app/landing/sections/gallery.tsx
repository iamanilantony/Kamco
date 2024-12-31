'use client';

import Animatedheading from '@/components/new_ui/animatedheading';
import useIsMobile from '@/lib/hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const Gallery = () => {
   const imagesToShow = 8;
   const router = useRouter();

   return (
      <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.85, ease: 'easeOut' }}
         className='p-4 flex flex-col justify-center items-center max-w-[94vw] mx-auto'
      >
         <Animatedheading className='mb-8'>Image Gallery</Animatedheading>

         <div className='grid grid-cols-1  grid-rows-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full'>
            {Array.from({ length: imagesToShow }).map((_, index) => (
               <div className='relative' onClick={() => router.push('/gallery')}>
                  <Image
                     key={index}
                     src={`/new_images/gallery/${index + 1}.JPG`}
                     alt='Gallery Image'
                     className='rounded-lg parall-img aspect-square shadow-lg w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                     width={300}
                     height={300}
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'></div>
               </div>
            ))}
         </div>

         <Link
            href={'/gallery'}
            className='group mt-8 inline-flex items-center gap-2 rounded-full bg-[#274321] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1a2d15] sm:text-base'
         >
            Explore Gallery
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
         </Link>
      </motion.div>
   );
};

export default Gallery;
