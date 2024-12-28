'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Highlights() {
   const containerRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   return (
      <motion.section
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.85, ease: 'easeOut' }}
         className='relative overflow-hidden  py-3 sm:py-4'
      >
         {/* Background Wheat Pattern */}
         <div className='absolute inset-0 opacity-5'>
            <Image
               src='/new_images/wheat.webp' // Replace with your image path
               alt='Wheat pattern'
               fill
               className='object-cover'
               priority
            />
         </div>

         <div ref={containerRef} className='relative mx-auto w-[94vw]'>
            <div ref={contentRef} className='relative'>
               <h2 className='mb-8 text-2xl !text-left font-bold tracking-tight text-[#274321] sm:text-3xl lg:text-4xl'>
                  Highlights
               </h2>

               {/* Featured Article Card */}
               <div className='overflow-hidden rounded-lg bg-white shadow-xl'>
                  <div className='grid lg:grid-cols-2'>
                     {/* Image Section */}
                     <div className='relative h-[400px] overflow-hidden lg:h-full'>
                        <Image
                           src='/new_images/wheat.webp' // Replace with your image path
                           alt='Golden wheat field at sunset'
                           fill
                           className='object-cover transition-transform duration-700 hover:scale-105'
                           sizes='(max-width: 768px) 100vw, 50vw'
                           priority
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
                     </div>

                     {/* Content Section */}
                     <div className='flex flex-col justify-between p-6 sm:p-8 lg:p-10'>
                        <div className='space-y-6'>
                           <div className='flex items-center space-x-2'>
                              <span className='inline-block rounded-full bg-[#d7ffbf] px-3 py-1 text-sm font-medium text-[#274321]'>
                                 Highlights
                              </span>
                              <span className='text-sm text-gray-500'>5 min read</span>
                           </div>

                           <h2 className='text-3xl font-bold tracking-tight text-left md:text-center text-gray-900 sm:text-4xl'>
                              Harvest Insights: Modern Farming Tips and Techniques
                           </h2>

                           <p className='text-base leading-relaxed text-left md:text-center text-gray-600 sm:text-lg'>
                              Welcome to Harvest Insights, Kamco's blog dedicated to helping farmers
                              thrive. From expert advice on crop management to the latest
                              innovations in agricultural machinery, we share practical tips,
                              industry news, and success stories to empower modern farmers.
                           </p>

                           <div className='flex flex-wrap items-center gap-4'>
                              <Link
                                 href='/articles/harvest-insights'
                                 className='group inline-flex items-center gap-2 rounded-full bg-[#274321] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1a2d15] sm:text-base'
                              >
                                 Read Article
                                 <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                              </Link>
                              <Link
                                 href='/articles'
                                 className='group inline-flex items-center gap-2 rounded-full bg-[#d7ffbf] px-6 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-[#c1f7a1] sm:text-base'
                              >
                                 View All Articles
                              </Link>
                           </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className='mt-8 flex items-center justify-between border-t border-gray-200 pt-6'>
                           <div className='text-sm text-gray-500'>Article 1 of 12</div>
                           <div className='flex items-center gap-2'>
                              <button
                                 className='group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:bg-[#274321] hover:text-white'
                                 aria-label='Previous article'
                              >
                                 <ArrowLeft className='h-5 w-5' />
                              </button>
                              <button
                                 className='group rounded-full bg-gray-100 p-3 transition-all duration-300 hover:bg-[#274321] hover:text-white'
                                 aria-label='Next article'
                              >
                                 <ArrowRight className='h-5 w-5' />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Decorative Elements */}
         <div className='absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-[#d7ffbf]/20 blur-3xl' />
         <div className='absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-[#274321]/10 blur-3xl' />
      </motion.section>
   );
}
