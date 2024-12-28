import { Button } from '@/components/UI/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
   //  const products = [
   //     {
   //        name: 'Power Tillers',
   //        image: '/new_images/products/icons/img1.webp',
   //        link: '/products/PR-011',
   //     },
   //     {
   //        name: 'Geared Power Weeder',
   //        image: '/new_images/products/icons/img2.webp',
   //        link: '/products/PR-032',
   //     },
   //     {
   //        name: 'Brush Cutters',
   //        image: '/new_images/products/icons/img3.webp',
   //        link: '/products/PR-036',
   //     },
   //     {
   //        name: 'Power Reaper',
   //        image: '/new_images/products/icons/img4.webp',
   //        link: 'products/PR-041',
   //     },
   //  ];

   return (
      <div className='min-h-[50vh] md:min-h-[70vh] lg:min-h-[93vh] flex flex-col md:flex-row gap-12 md:justify-between items-center md:px-16 py-8 text-left relative'>
         <Image
            src='/new_images/products/heroimage.webp'
            alt='hero'
            width={1200}
            height={1200}
            className='object-cover absolute h-full w-full top-0 left-0 '
            draggable={false}
         />
         <div className='absolute h-full w-full top-0 left-0 bg-black/50'></div>
         <div className='container text-white z-10 w-full md:w-2/3 space-y-6 md:space-y-12 p-4 md:p-0 h-full'>
            <h1 className='text-4xl md:text-6xl font-bold urbanist-font'>
               KAMCO: More Than Products, We’re Transforming Lives
            </h1>
            <p className='mt-2 inter-font text-base md:text-lg font-normal'>
               At KAMCO, we don’t just create agricultural solutions – we empower farmers. Every
               product we design is a step toward making farming easier, more efficient, and more
               rewarding. From tackling tough terrains to boosting productivity, our mission is to
               touch lives, support dreams, and drive the future of agriculture.
            </p>

            <Button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-600 px-7 py-7 text-lg font-medium text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
               <Link href='#product-grid' className='w-full flex items-center gap-4'>
                  Explore
                  <ArrowRight />
               </Link>
            </Button>
         </div>
         {/* right section */}
         {/* <div className='text-white p-4 md:p-6 rounded-md z-10 w-full md:w-auto mt-8 md:mt-0 space-y-16 max-sm:hidden'>
            <h2 className='text-lg md:text-xl font-semibold text-center mb-4 md:mb-6'>
               Other Top Products
            </h2>

            <ul className='space-y-4 md:space-y-10'>
               {products.map((product, index) => (
                  <li key={index} className='flex items-center justify-between gap-6'>
                     <div className='flex items-center space-x-8'>
                        <Link
                           href={'#product-grid'}
                           className='bg-white rounded p-2 cursor-pointer'
                        >
                           <Image
                              src={product.image}
                              height={100}
                              width={100}
                              alt={product.name}
                              className='w-10 h-10 md:w-16 md:h-16 object-cover rounded'
                           />
                        </Link>
                        <p
                           style={{
                              textWrap: 'wrap',
                              maxWidth: '150px',
                           }}
                           className='text-xl md:text-base font-medium inter-font '
                        >
                           {product.name}
                        </p>
                     </div>
                  </li>
               ))}
            </ul>
         </div> */}
      </div>
   );
};

export default Hero;
