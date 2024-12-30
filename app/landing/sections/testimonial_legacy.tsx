import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

type ReviewCardProps = {
   name: string;
   designation: string;
   location: string;
   rating: number;
   review: string;
   profileImage: string;
   video: string;
   className?: string;
};

const ReviewCard = ({
   name,
   designation,
   location,
   rating,
   review,
   profileImage,
   video,
   className,
}: ReviewCardProps) => {
   return (
      <div
         className={cn(
            'bg-[#f9fafb] border rounded-3xl p-4 min-h-[300px] sm:p-6 w-[85vw] sm:w-[60vw] md:w-[calc(42vw-50px)] relative border-black my-16  mx-4 sm:mx-16 text-left',
            className
         )}
      >
         {/* making the inward curve */}
         <div className=' absolute top-0 left-20 -translate-x-[0.55rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-2'>
            <div className='h-5 w-5 rounded-tl-3xl border-black border-t border-l'></div>
         </div>

         <div className=' absolute top-20 left-0 -translate-x-[0.3rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-1'>
            <div className='h-5 w-5 rounded-tl-3xl border-black border-t border-l'></div>
         </div>

         <div className=' h-20 w-20 absolute -top-1 -left-1 rounded-br-3xl bg-white border-b border-r border-black'>
            <div className='w-20 h-20 rounded-full bg-red-500 -translate-x-2 -translate-y-2 overflow-hidden relative'>
               <Link
                  href={video}
                  target='_blank'
                  className='w-20 h-20 rounded-br-xl object-cover cursor-pointer'
               >
                  <Image height={80} width={80} src={profileImage} alt={`'s profile`} />
                  <div className='absolute inset-0 flex items-center justify-center'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                     >
                        <path d='M8 5v14l11-7z' />
                     </svg>
                  </div>
               </Link>
            </div>
         </div>
         <div className='flex items-center mb-4 ml-16'>
            {/* Name and Details */}
            <div className='flex flex-col sm:flex-row sm:justify-between w-full gap-2 sm:gap-0'>
               <div>
                  <h3 className='text-base sm:text-lg font-semibold text-gray-900'>{name}</h3>
                  <p className='text-xs sm:text-sm text-gray-600'>
                     {designation}, {location}
                  </p>
               </div>
               {/* Rating */}
               <div className='flex items-center'>
                  {[...Array(rating)].map((_, index) => (
                     <svg
                        key={index}
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 sm:h-5 sm:w-5 text-yellow-500'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                     >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                     </svg>
                  ))}
               </div>
            </div>
         </div>

         {/* Review */}
         <p className='text-xs sm:text-sm text-gray-700 leading-relaxed my-3 sm:my-5 sm:mt-8'>
            {review}
         </p>
      </div>
   );
};

const TestimonialLegacy = () => {
   const testimonialCards = [
      {
         name: 'Rahul Singh',
         designation: 'Farmer',
         location: 'Agribusiness Owner, Amritsar, Punjab',
         rating: 5,
         review:
            "Kamco’s website made my search for high-quality tractors a breeze. The product details and shipping were transparent, so I’d recommend them to anyone. The detailed specifications and user reviews helped me make an informed decision. The tractor I purchased has significantly improved my farm's productivity. The customer service was also exceptional, guiding me through the entire process and ensuring timely delivery. I am extremely satisfied with my purchase and will definitely return for more equipment in the future. The tractor's performance has exceeded my expectations, and it has become an indispensable part of my farming operations. The fuel efficiency and durability of the tractor have also been impressive, making it a cost-effective investment. I appreciate Kamco's commitment to quality and customer satisfaction, and I look forward to exploring more of their products.",
         profileImage: '/new_images/person.webp',
         video: 'https://youtu.be/LhzGVPbqS1k',
      },
      {
         name: 'Priya Patel',
         designation: 'Farmer',
         location: 'Farm Entrepreneur, Ahmedabad, Gujarat',
         rating: 4,
         review:
            "I discovered the perfect power weeder for my farm through Kamco’s well-organized site. The support team was incredibly helpful, answering all my queries promptly. The detailed descriptions and comparison tools made it easy to choose the right product. Since using the power weeder, I have noticed a significant reduction in manual labor and an increase in efficiency. The blog section also provided valuable tips on maintaining the equipment. Overall, Kamco is a great resource for any farmer looking to upgrade their tools. The power weeder has made a noticeable difference in the quality of my crops, and I am grateful for the time and effort saved. The durability and ease of use of the power weeder have been outstanding, and I am confident it will serve me well for years to come. Kamco's dedication to providing top-notch agricultural solutions is evident in their products and services.",
         profileImage: '/new_images/person.webp',
         video: 'https://youtu.be/kTi11aaSR5E',
      },
      {
         name: 'Mahesh Kumar',
         designation: 'Farmer',
         location: 'Farmer, Hyderabad, Telangana',
         rating: 4,
         review:
            "I'm impressed with the range of agricultural implements Kamco offers. The product reviews and specs are spot-on, ensuring I made the right choice. The website is user-friendly, and the checkout process was seamless. The equipment I purchased has been a game-changer for my farm, allowing me to complete tasks more efficiently and effectively. The after-sales support has also been commendable, with the team providing timely assistance whenever needed. I highly recommend Kamco to fellow farmers. The implements have significantly improved my farm's productivity, and I am pleased with their performance. The quality and reliability of Kamco's products have exceeded my expectations, and I am confident in their ability to withstand the demands of my farming operations. Kamco's commitment to innovation and customer satisfaction is truly commendable.",
         profileImage: '/new_images/person.webp',
         video: 'https://youtu.be/kTi11aaSR5E',
      },
      {
         name: 'Anjali Varma',
         designation: 'Farmer',
         location: 'Farm Owner, Jaipur, Rajasthan',
         rating: 4,
         review:
            "Navigating Kamco’s site was effortless. Their detailed blog helped me learn new farming techniques, and I quickly found the tools I needed. The comprehensive product descriptions and customer reviews gave me confidence in my purchase. The equipment has performed exceptionally well, and I have seen a noticeable improvement in my farm's productivity. The customer service team was also very supportive, providing guidance on product usage and maintenance. Kamco has become my go-to source for agricultural tools and equipment. The tools have made my farming tasks more manageable and efficient, and I am grateful for the positive impact they have had on my farm. The quality and durability of Kamco's products are impressive, and I am confident in their ability to meet my farming needs. Kamco's dedication to providing valuable resources and support to farmers is truly appreciated.",
         profileImage: '/new_images/person.webp',
         video: '#',
      },
      {
         name: 'Arjun Reddy',
         designation: 'Farmer',
         location: 'Agripreneur, Guntur, Andhra Pradesh',
         rating: 4,
         review:
            "I’m thrilled with my new Kamco drone purchase. The website guided me step by step—from specs to checkout. A fantastic experience! The drone has revolutionized the way I monitor my crops, providing real-time data and insights that have helped me make better farming decisions. The quality of the product is top-notch, and the customer support team has been very responsive to my queries. I am very satisfied with my purchase and look forward to exploring more innovative products from Kamco. The drone's advanced features and ease of use have made it an invaluable tool for my farming operations. The data collected by the drone has allowed me to optimize my crop management practices, resulting in improved yields and reduced costs. Kamco's commitment to innovation and excellence is evident in their products, and I am excited to see what they will offer next.",
         profileImage: '/new_images/person.webp',
         video: '#',
      },
   ];
   return (
      <div className='p-4 sm:p-16 mb-16 sm:mb-32 flex flex-col justify-center items-center'>
         <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug urbanist-font text-center px-4'>
            Farmers Recount Their Experiences
         </h1>
         <div className='p-2 sm:p-6 flex justify-center items-center w-full'>
            <Marquee
               gradient={true}
               speed={40}
               gradientColor='white'
               gradientWidth={50}
               pauseOnClick={true}
               className='flex gap-16 sm:gap-32 mb-12 sm:mb-24 mt-8'
            >
               {testimonialCards.map((testimonial, index) => (
                  <ReviewCard
                     className={index % 2 === 0 ? 'translate-y-8 sm:translate-y-16' : ''}
                     key={index}
                     {...testimonial}
                  />
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default TestimonialLegacy;
