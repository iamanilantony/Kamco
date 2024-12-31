'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import useIsMobile from '@/lib/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import Animatedbutton from '@/components/new_ui/animatedbutton';
import { TextScramble } from '@/components/new_ui/textscramble';
import { TextEffect } from '@/components/new_ui/textanimation';

export default function Hero() {
   const { ismobile } = useIsMobile();
   return (
      <div>
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='relative h-fit  w-[94vw] mx-auto rounded-lg md:mt-0'
         >
            {/* Background Image with Overlay */}
            <div className='absolute inset-0 z-0'>
               <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover rounded-2xl md:object-cover'
                  src='/new_images/hero.webm'
               />
               <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-black/10' />
            </div>

            {/* Content Container */}
            <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
               <div className='flex flex-col items-start justify-center gap-8 py-10 lg:py-20'>
                  {/* Hero Text */}
                  <div className='max-w-3xl space-y-6'>
                     <TextEffect
                        per='char'
                        preset='slide'
                        className='font-heading text-3xl font-bold text-left leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'
                     >
                        {'A Boon for the Farmer,'}
                     </TextEffect>
                     <TextEffect
                        per='char'
                        preset='slide'
                        delay={0.65}
                        className='font-heading !mt-0 text-3xl font-bold text-left leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'
                     >
                        A Gain for the Nation
                     </TextEffect>
                     <TextEffect
                        preset='blur'
                        delay={0.3}
                        className='max-w-xl text-lg text-gray-200 sm:text-xl text-left'
                     >
                        Unleashing the power of innovation—tools that turn hard work into
                        unstoppable growth, enabling greater efficiency and sustainable success.
                     </TextEffect>
                  </div>

                  {/* CTA Buttons */}
                  {!ismobile && (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='mt-2 flex flex-col gap-4 sm:flex-row sm:gap-6'
                     >
                        <Link
                           href='/projects'
                           className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-green-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <span className='relative'>New Initiatives</span>
                           <span className='absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full' />
                        </Link>
                        <Link
                           href={'/dealers'}
                           className='group inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-white hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                        >
                           Explore Dealers
                        </Link>
                     </motion.div>
                  )}

                  {/* Statistics Grid */}
                  <div
                     className={cn(
                        'mt-2 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6',
                        ismobile ? 'hidden' : 'opacity-100'
                     )}
                  >
                     {[
                        { number: '50+', label: 'Years of Experience' },
                        { number: '80+', label: 'Dealers Across Country' },
                        { number: '1L+', label: 'Happy Customers' },
                        { number: '900+', label: 'Skilled Manpower' },
                     ].map((stat, index) => (
                        <motion.div
                           key={stat.label}
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{
                              duration: 0.6,
                              delay: 0.8 + index * 0.2, // Staggered delay for each card
                           }}
                           className='rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:p-6'
                        >
                           <div className='text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                              {stat.number}
                           </div>
                           <div className='mt-1 text-sm text-gray-300 sm:text-base'>
                              {stat.label}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Decorative Elements */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent' />
            <div className='absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-green-500/20 blur-3xl' />
            <div className='absolute -right-48 top-3/4 h-96 w-96 rounded-full bg-green-500/20 blur-3xl' />
            <div className='pt-8  flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10'>
               {/* Stats */}
            </div>
         </motion.div>
         {ismobile && (
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.5, ease: 'easeOut' }}
               className='max-w-full md:max-w-[94vw] w-full flex flex-col md:flex-row justify-between'
            >
               {/* Stats Section */}
               <div className='pt-8  flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10'>
                  {/* Stats */}
                  <div className='flex justify-center lg:justify-start space-x-6 md:space-x-20 ml-4 md:ml-12'>
                     <div className='text-center'>
                        <TextScramble
                           duration={1}
                           className='text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900'
                        >
                           50+
                        </TextScramble>
                        <p className='text-xs sm:text-sm md:text-lg font-medium text-gray-600'>
                           Years of <br /> Experience
                        </p>
                     </div>
                     <div className='text-center'>
                        <TextScramble
                           duration={1}
                           className='text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900'
                        >
                           80+
                        </TextScramble>
                        <p className='text-xs sm:text-sm md:text-lg font-medium text-gray-600'>
                           Dealers <br /> Across Country
                        </p>
                     </div>
                     <div className='text-center'>
                        <TextScramble
                           duration={1}
                           className='text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900'
                        >
                           1L+
                        </TextScramble>
                        <p className='text-xs sm:text-sm md:text-lg font-medium text-gray-600'>
                           Happy <br /> Customers
                        </p>
                     </div>
                     <div className='text-center'>
                        <TextScramble
                           duration={1}
                           className='text-3xl sm:text-3xl md:text-5xl urbanist-font font-bold text-gray-900'
                        >
                           900+
                        </TextScramble>
                        <p className='text-xs sm:text-sm md:text-lg font-medium text-gray-600'>
                           Skilled <br /> Manpower
                        </p>
                     </div>
                  </div>
               </div>
               <div className='flex flex-col space-y-3 mt-6 md:mt-0 px-4 md:px-0'>
                  <Animatedbutton
                     navigateto={'/projects'}
                     delay={1}
                     className='bg-[#274321] text-white hover:bg-[#3b6631]'
                  >
                     New Initiatives
                  </Animatedbutton>
                  <Animatedbutton
                     navigateto={'/dealers'}
                     delay={1}
                     className='bg-[#d7ffbf] hover:bg-[#beff96]'
                  >
                     Explore Dealers
                  </Animatedbutton>
               </div>
            </motion.div>
         )}
      </div>
   );
}
