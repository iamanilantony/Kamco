'use client';
import Image from 'next/image';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Animatedbutton from '@/components/new_ui/animatedbutton';
import { ArrowRight } from 'lucide-react';

const GalleryLegacy = () => {
   const ref = useRef<HTMLDivElement>(null);
   const [isMobile, setIsMobile] = React.useState(false);
   const imagesToShow = isMobile ? 2 : 4;

   React.useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   useGSAP(
      () => {
         gsap.registerPlugin(ScrollTrigger);
         gsap.utils.toArray<HTMLDivElement>('.parall-img').forEach(img => {
            const randomDuration = gsap.utils.random(0.5, 1.5);
            gsap.from(img, {
               opacity: 0,
               y: '500px',
               duration: randomDuration,
               ease: 'power2.inOut',
               scrollTrigger: {
                  trigger: ref.current,
                  start: '20% 50%',
                  end: 'bottom 50%',
                  // markers: true,
               },
            });
         });
      },
      { scope: ref }
   );

   return (
      <div ref={ref} className='my-8 pb-2 flex flex-col justify-between relative gap-64'>
         {/* <Link
        href="/gallery"
        className="bg-[#d7ffbf] py-3 md:py-5 px-8 md:px-16 rounded-2xl text-xl md:text-2xl urbanist-font absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32 md:-translate-y-48 z-10"
      >
        Explore Gallery
      </Link> */}
         <Animatedbutton
            delay={0.5}
            viewBased
            navigateto='/gallery'
            className='group absolute top-[30%] left-[40%] z-10 inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-600 px-3 py-3 text-lg font-medium text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
         >
            Explore Gallery
         </Animatedbutton>

         <div className='flex justify-between items-center gap-8 md:gap-24 pl-5'>
            {Array.from({ length: imagesToShow }).map((_, index) => (
               <div
                  style={{
                     transform: `translateY(${Math.sin(index * 5) * 150}px)`,
                  }}
               >
                  <Image
                     key={index}
                     src={`/new_images/gallery/${index + 1}.JPG`}
                     alt='Gallery Image'
                     className='rounded-lg parall-img w-full aspect-square shadow-lg'
                     width={300}
                     height={300}
                  />
               </div>
            ))}
         </div>
         <div className='flex justify-between items-center gap-8 md:gap-24'>
            {Array.from({ length: imagesToShow }).map((_, index) => (
               <div
                  style={{
                     transform: `translateY(${Math.sin(index * 5) * 150}px)`,
                  }}
               >
                  <Image
                     key={index}
                     src={`/new_images/gallery/${index + 4 + 1}.JPG`}
                     alt='Gallery Image'
                     className='rounded-lg parall-img w-full aspect-square'
                     width={300}
                     height={300}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default GalleryLegacy;