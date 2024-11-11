'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/UI/hover-card"
import HistorySection from './HistoriesSection';
import ManufacturingSection from './ManufactoringSection';

const CompanyInfoPage = () => {
    return (
        <div className="flex md:flex-col flex-row font-sans items-center">
            <div
                className="relative flex flex-col justify-center items-start min-h-max gap-8 px-2 md:px-20 mb-24 md:mt-2 md:mb-4 mt-18 w-full h-[35rem]"
                style={{ backgroundImage: `url('IMG1112135.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="order-2 md:order-1 flex flex-col space-y-4 w-full md:w-1/2 items-center mx-auto animate__animated animate__fadeIn animate__delay-[0.05s]">
                    <h1 className="text-white text-center text-4xl md:text-8xl font-semibold mb-4 animate-bounce-up">
                        About Us
                    </h1>
                </div>
            </div>
            <section className='w-full md:w-full p-4 md:px-8 md:pr-24 text-left overflow-auto'>
                <div className='flex justify-between w-full px-10 items-center'>
                    <img className="w-3/4 mx-20 h-48 md:h-96 object-cover mb-4 rounded-lg" src='/Kamco_hero1.svg' alt="Company Information" />
                    <div className='w-3/4 mx-20'>
                        <p className="text-sm md:text-base">KKAMCO was started way back in 1973 to aid farmers in their quest for higher productivity, more prosperity and greater happiness in their lives. KAMCO products for mechanized farming are manufactured in 5 production units. A 700-strong team of highly qualified and experienced Engineers, Professionals, and Technicians form the foundation of the continued success of KAMCO in achieving their goals. More than 250 dedicated vendors and over 80 dealers align with KAMCO in a successful partnership of providing exceptional assistance to the farming sector. No wonder KAMCO has become an acronym for Quality in the minds of hundreds of thousands of customers in India and abroad.</p>
                    </div>
                </div>
            </section>

            <section id="missionVission" className="bg-cover bg-center bg-[#008C44]">
                <div className="vision-mission-bg-img lg:ps-5 lg:pe-5 py-10">
                    <ul className="flex items-center lg:ps-5 lg:pe-5 text-white">
                        <li className="w-1/2">
                            <div className="bg-overlay w-full px-5">
                                <div className="text-center px-5 mx-0 lg:mx-5">
                                    <h4 className="text-bold  text-2xl font-sans  font-semibold">Our Vision </h4>
                                    <p className="text-base font-sans pt-4 w-2/3 mx-auto md:min-h-[135px] lg:min-h-[90px] xl:min-h-[120px]  2xl:min-h-[80px]">We will be a 3000 Cr Global brand in diversified farm mechanization products and solutions by 2025.</p>
                                </div>
                            </div>
                        </li>
                        <li className="w-1/2 mt-5 md:mt-0">
                            <div className="bg-overlay w-full px-5">
                                <div className="text-center px-5 mx-0 lg:mx-5">
                                    <h4 className="text-bold  text-2xl font-sans bg- font-semibold">Our Mission</h4>
                                    <p className="text-base font-sans pt-4 w-2/3 mx-auto  md:min-h-[135px] lg:min-h-[90px] xl:min-h-[120px] 2xl:min-h-[80px] ">We will accomplish our vision with undivided and undeterred commitment towards innovative quality products, through inspired individuals, simplified systems and 5X leadership.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>


            <section className='w-full md:w-full p-4 md:px-8 md:pr-24 text-left overflow-auto'>
                <div className='flex justify-between w-full px-10 items-center'>
                    <div className='w-3/4 mx-20'>
                        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Information</h2> */}
                        <div className="text-sm md:text-base space-y-4">
                            <p><strong>Agricultural Evolution:</strong> Tools have advanced, making farming more efficient and predictable.</p>

                            <p><strong>KAMCO's Leadership:</strong> State-owned KAMCO promotes mechanized farming for small farmers.</p>

                            <p><strong>Quality Machinery:</strong> KAMCO offers ISO 9001:2015 certified Tillers, Tractors, and Engines for farmers.</p>

                            <p><strong>Farmer Training:</strong> KAMCO provides training on modern farming techniques.</p>

                            <p><strong>Vision:</strong> Empowering farmers with innovative solutions for a prosperous future.</p>
                        </div>

                    </div>
                    <img className="w-3/4 mx-20 h-48 md:h-96 object-cover mb-4 rounded-lg" src='/general/DSC_0013.JPG' alt="Company Information" />
                </div>
            </section>

            <section className="flex justify-between my-6 md:my-8 md:space-x-24">
                {/* First Circle */}
                <HoverCard>
                    <HoverCardTrigger>
                        <div className="relative flex items-center cursor-pointer justify-center rounded-full w-32 h-32 sm:w-40 sm:h-40 bg-[#008C44] hover:bg-green-600 hover:shadow-lg transition-all duration-300">
                            <p className="text-white text-center px-4 py-2 w-full text-xs sm:text-base md:text-sm">
                                Five Decades of Innovation in Agricultural Machinery
                            </p>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <Image src='/general/OLDPHOTOS/IMG20241031112402.JPG' height={400} width={400} alt='athanifactory3-1-09002.JPG' />
                    </HoverCardContent>
                </HoverCard>


                {/* Second Circle */}
                <HoverCard>
                    <HoverCardTrigger>
                        <div className="relative flex items-center cursor-pointer justify-center rounded-full w-32 h-32 sm:w-40 sm:h-40 bg-[#008C44] hover:bg-green-600 hover:shadow-lg transition-all duration-300">
                            <p className="text-white text-center px-4 py-2 w-full text-xs sm:text-base md:text-sm">
                                Empowering Farmers with Advanced, Reliable Solutions
                            </p>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <Image src='/general/DSC_0013.JPG' height={400} width={400} alt='athanifactory3-1-09002.JPG' />
                    </HoverCardContent>
                </HoverCard>

                {/* Third Circle */}
                <div className="relative flex items-center cursor-pointer justify-center rounded-full w-32 h-32 sm:w-40 sm:h-40 bg-[#008C44] hover:bg-green-600 hover:shadow-lg transition-all duration-300">
                    <p className="text-white text-center px-4 py-2 w-full text-xs sm:text-base md:text-sm">
                        Shaping the Future of Farming with Precision and Quality
                    </p>
                </div>
            </section>

            <HistorySection />

            <section>
                <ManufacturingSection />
            </section>

            <section>
                <div className="text-sm md:text-base md:mx-20 md:my-20 md:py-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Board of Directors</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mb-10">
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/ckeditor_files/1724654902.jpg' alt='Shri. C K Sasidharan' className='w-40 h-40' width={200} height={200} />
                            <p className="font-bold mt-2">Shri. C K Sasidharan</p>
                            <p>CHAIRMAN, KAMCO</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src='https://www.kamcoindia.com/ckeditor_files/1724654670.jpg' alt='Shri. Prasanth Nair, IAS' className='w-40 h-40' width={200} height={200} />
                            <p className="font-bold mt-2">Shri. Prasanth Nair, IAS</p>
                            <p>MD, KAMCO</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t-2 py-20">

                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/no-image.jpg' alt='Additional Secretary' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Additional Secretary</p>
                            <p>Agriculture (PU) Department,</p>
                            <p>Government of Kerala, Thiruvananthapuram.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/no-image.jpg' alt='Sri. Sreeni G.' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Sri. Sreeni G.</p>
                            <p>Joint Secretary,</p>
                            <p>Finance Department,</p>
                            <p>Government of Kerala, Thiruvananthapuram.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/no-image.jpg' alt='Sri. George Sebastian' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Sri. George Sebastian</p>
                            <p>Additional Director (Planning)</p>
                            <p>Directorate of Agriculture Development & Farmers Welfare Department</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/BUHARI-1.jpg' alt='Shri. Buhari' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Shri. Buhari</p>
                            <p>Director, KAMCO</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/M-T-NIKSON-1.jpg' alt='Shri. M T Nikson' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Shri. M T Nikson</p>
                            <p>Director, KAMCO</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/K-A-CHAKKOCHAN-1.jpg' alt='Shri. K.A. Chackochan' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Shri. K.A. Chackochan</p>
                            <p>Director, KAMCO</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/C-K-GOPI-1.jpg' alt='Shri. C.K. Gopi' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Shri. C.K. Gopi</p>
                            <p>Director, KAMCO</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image src='https://www.kamcoindia.com/userfiles/VADAKODU-MONACHAN-1.jpg' alt='Shri. Vadakodu Monachan' className='w-20 h-20' width={100} height={100} />
                            <p className="font-bold mt-2">Shri. Vadakodu Monachan</p>
                            <p>Director, KAMCO</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyInfoPage;