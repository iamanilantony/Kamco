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
    // const renderContent = () => {
    //     switch (activeTab) {
    //         case 'overview':
    //             return (
    //                 <div>
    //                     <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero2.svg' alt="Company Overview" />
    //                     <h2 className="text-2xl md:text-4xl font-bold mb-4">Overview</h2>
    //                     <div className="text-sm md:text-base space-y-4">
    //                         <p>The link between land and man started from the origin of mankind. It can be said that the evolution of agriculture had a major role in the advancement of humanity. At every stage of human evolution, the tools man used changed, and so did agricultural tools. Today, from farm animals and ploughs, farm machinery has revolutionized agriculture the world over, making a farmer’s success more predictable. In India, Kerala Agro Machinery Corporation Ltd. (KAMCO) has led the efforts to promote mechanized farming from the front.</p>
    //                         <p>Established as a fully State government-owned company, KAMCO caters to the farming requirements of small and marginal scale farmers. From Tiller, Tractor, and Reaper to Diesel Engine, we manufacture and provide small farmers with big help in farming. Our company is ISO 9001:2015 certified, and all the machines we produce have built-in quality, allowing users to perform their work flawlessly. These world-class machines are fast becoming the first choice for the farming community in India and abroad.</p>
    //                         <p>In addition to supplying farm machinery, KAMCO organizes training programs for farmers on modern farming techniques. Our vision is to develop a new breed of tech-savvy farmers who can practice productive farming and lead prosperous lives.</p>
    //                     </div>

    //                 </div>
    //             );
    //         case 'board':
    //             return (

    //             );
    //         // case 'structure':
    //         //     return (
    //         //         <div>
    //         //             <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Organizational Structure" />
    //         //             <h2 className="text-2xl md:text-4xl font-bold mb-4">Organizational Structure</h2>
    //         //             <img src='https://www.kamcoindia.com/userfiles/Organizational%20Chart_20-12-2021(1).jpg' />
    //         //         </div>
    //         //     );
    //         case 'Achievements':
    //             return (
    //                 <div>
    //                     <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Achievements" />
    //                     <h2 className="text-2xl md:text-4xl font-bold mb-4">Achievements</h2>
    //                     <div className="text-sm md:text-base space-y-4">
    //                         <p>KAMCO is originally conceived by Kerala Agro Industries Corporation Ltd. (KAIC), as a central government and state government joint venture, who promotes agro-based industries in Kerala by manufacturing farm equipment, machinery & implements required for mechanized farming. During that time, the demand for agricultural machinery rose tremendously, and the Government of Kerala decided to separate the manufacturing wing of KAIC to form KAMCO in 1973. This was the beginning of KAMCO.</p>

    //                         <p>The head office and first manufacturing unit of KAMCO at Athani in Ernakulam District of Kerala started off with a single product: the Power Tiller. The know-how was through a technical tie-up with Japan’s Kubota Corporation. The Power Tiller is a multi-utility machine that can be used for various agricultural applications such as tilling, ploughing, weeding, pumping, puddling, leveling, spraying, hulling, and transportation. Farmers soon embraced KAMCO Power Tiller due to its superior quality performance and robust nature. The success of the first product prompted KAMCO to expand its manufacturing capacity, leading to the establishment of a second unit at Kalamassery for engine production.</p>

    //                         <p>KAMCO's expansion continued with the third manufacturing unit at Kanjikode, Palakkad, for Power Tiller production in 1995, driven by growing demand. The development of new products and technology upgrades remained a priority for KAMCO, resulting in the production of the Power Reaper, a versatile harvesting machine, at the Kalamassery Unit in 1997. To further increase production, a fourth manufacturing unit was set up in Mala, Thrissur, in 2000.</p>

    //                         <p>Product development at KAMCO was an ongoing process. In 2005, the company introduced the low smoke 12 HP DI Engine. When this innovation was fitted to the power tiller, it gave birth to the Super DI Power Tiller, a machine that quickly gained popularity among farmers. The introduction of a compact, lightweight 4 HP Petrol Engine Power Weeder/Garden Tiller for horticultural use in 2010 added further value to KAMCO’s product lineup. That same year, KAMCO collaborated with M/s. Barbieri SRL, Italy, to develop a compact 16 HP mini tractor for dry land applications.</p>

    //                         <p>The steady expansion continued with a fifth manufacturing unit at Valiyavelicham, Kannur District, in 2014. KAMCO further diversified its product range to include Brush Cutters and Engine Water Pumps. The latest addition to KAMCO’s product lineup is a 1 HP petrol engine-powered Paddy Weeder or Cono Weeder, designed to remove weeds from paddy fields.</p>

    //                         <p>KAMCO remains committed to developing new products and accessories that enhance the utility and durability of its machines.</p>

    //                         <hr className="my-4" />

    //                         <p>When a company takes every step in the right direction and lives and breathes quality, people are apt to take notice and recognize it. First, it comes from customers who praise the products with utter satisfaction. Then the competitors start to acknowledge the inimitable strengths. Finally, the industry watchers and concerned organizations bestow awards and accolades. KAMCO has set the perfect example.</p>

    //                         <p>KAMCO has been awarded ISO 9001: 2015 certification for its management system. The company has established quality standards for each and every component which are well documented. (Reference: ISO 9001 Certificate by Intertek).</p>

    //                         <ul className="list-disc pl-5 space-y-2">
    //                             <li><strong>FACT MKK NAYAR MEMORIAL PRODUCTIVITY AWARDS 2019-20</strong> - Second Best Productivity Performance in Industry to KAMCO, Palakkad Unit</li>
    //                             <li><strong>AUTODESK IMAGINE AWARD 2021</strong> - Design and Manufacturing Categories</li>
    //                             <li><strong>SAFETY AWARD 2009</strong> - First Prize for Outstanding Performance in Industrial Safety issued by Dept. of Factories & Boilers</li>
    //                             <li><strong>CERTIFICATE OF INDUSTRIAL SAFETY AWARD 2002</strong> - Issued by National Safety Council of India</li>
    //                             <li><strong>INDUSTRY EXCELLENCE AWARD 1999</strong> - Issued by The Institution of Engineers [India]</li>
    //                             <li><strong>INDUSTRY EXCELLENCE AWARD 1998</strong> - Issued by The Institution of Engineers [India]</li>
    //                             <li><strong>PRODUCTIVITY AWARD 1989-90</strong> - By Kerala State Productivity Council</li>
    //                             <li><strong>PRODUCTIVITY AWARD 1987-88</strong> - Issued by Kerala State Productivity Council</li>
    //                         </ul>
    //                     </div>


    //                 </div>
    //             );
    //         case 'manufacturing':
    //             return (
    //                 <div>
    //                     <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Manufacturing Process" />
    //                     <h2 className="text-2xl md:text-4xl font-bold mb-4">Manufacturing Process</h2>
    //                     <div className="text-sm md:text-base space-y-4">
    //                         <p>Dedicated small and medium scale industries supply raw materials for critical components. Critical manufacturing operations are carried out in-house at the Machine Shop.</p>

    //                         <p>The Machine Shop is equipped with special purpose machinery to perform critical operations like milling, grinding, drilling, etc., for mass production of components.</p>

    //                         <p>Inspection at various stages of manufacturing is conducted to reduce the process rejection rate.</p>

    //                         <p>The facility is installed with a modern painting booth system for components and assemblies where Polyurethane paints are used.</p>

    //                         <p>Components are painted after proper pre-treatment, ensuring adherence to required quality standards in the well-equipped Paint Shop.</p>

    //                         <p>The Effluent Treatment Plant is functioning effectively to meet the required norms on environmental pollution as announced by the Pollution Control Board.</p>
    //                     </div>

    //                 </div>
    //             );
    //         case 'production':
    //             return (
    //                 <div>
    //                     <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Production" />
    //                     <h2 className="text-2xl md:text-4xl font-bold mb-4">Production</h2>
    //                     <div className="text-sm md:text-base space-y-4">
    //                         <p>KAMCO's production empire expands to six state-of-the-art manufacturing units across the Southern Indian state of Kerala. All these units employ stringent quality control and testing measures at every stage, from procuring raw materials to the finished product.</p>

    //                         <p>The registered head office at Athani serves as both the administrative command center and a manufacturing site for Power Tillers and Tractors. The second unit, established in 1992 at Kalamassery, produces Diesel Engines. The third and fourth units, set up in 1995 and 2000, are located at Kanjikode, Palakkad, and Mala, Thrissur, respectively, and focus on manufacturing Power Reapers. In 2014, the fifth manufacturing unit was established at Valiyavelicham, Kannur, and the sixth unit for tractor manufacturing was also set up at Athani.</p>

    //                         <h3 className="font-bold">Assembly Tillers/Reapers</h3>
    //                         <p>The assembly line consists of:</p>
    //                         <ul className="list-disc pl-5 space-y-2">
    //                             <li>Engine Assembly Line</li>
    //                             <li>Transmission Assembly Line</li>
    //                             <li>Tiller Assembly Line</li>
    //                         </ul>
    //                         <p>Transmission and engine assemblies converge at the Tiller Assembly Line, where the final Power Tiller is produced. Stage inspections and testing are conducted at various workstations, including engine testing, to ensure extensive quality checks at each stage for superior product quality.</p>

    //                         <p>All sub-assemblies of Power Tillers are inspected for conformity with specifications. Engines are tested at the assembly stage to meet RTA norms and ensure compliance with Engine Emission Standards. The assembly line for tractor production is automated with a modern conveyor system. Skilled mechanics and supervisors maintain quality throughout the assembly process, with management closely monitoring and coordinating activities to achieve maximum performance without compromising product quality.</p>

    //                         <h3 className="font-bold">Reaper Assembly Stages</h3>
    //                         <ol className="list-decimal pl-5 space-y-2">
    //                             <li><strong>Engine Assembly:</strong> Engine and gear box assembly with running tests.</li>
    //                             <li><strong>Assembly Line-1:</strong> Initial stage of reaper chassis assembly where engine-gear box assembly, bevel gear box, and conveyor chains are fitted to the main frame. Running tests are conducted before moving to the next stage.</li>
    //                             <li><strong>Assembly Line-2:</strong> Fitting of sheet metal components, guide rods, star wheels, cutter assembly, and subsequent tests.</li>
    //                             <li><strong>Assembly Line-3:</strong> Final stage where the chain case for power transmission and wheels are fitted, followed by necessary tests.</li>
    //                         </ol>

    //                         <p>KAMCO operates an efficient network comprising 50 dealers to meet customer needs. The commitment of its workers to make a difference sets KAMCO apart. Special training sessions, product familiarization demos, and bi-annual dealer meetings keep the network updated with new products and their functionality.</p>

    //                         <h3 className="font-bold">Manufacturing Units</h3>
    //                         <ul className="list-disc pl-5 space-y-2">
    //                             <li>Athani</li>
    //                             <li>Palakkad</li>
    //                             <li>Kalamassery</li>
    //                             <li>Mala</li>
    //                         </ul>

    //                         <h3 className="font-bold">Quality Mantra</h3>
    //                         <p>KAMCO's workforce embodies professionalism, striving to ensure 100% quality in every aspect of their work. This commitment results in superior, flawless products. With a network of over 80 dealers, KAMCO conducts bi-annual dealer meetings, special training sessions, and product familiarization demos to add value for the end customer. Together, KAMCO practices its quality motto, continuously raising the bar and enabling satisfaction among countless customers.</p>
    //                     </div>

    //                 </div>
    //             );
    //         case 'csr':
    //             return (
    //                 <div>
    //                     <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="CSR" />
    //                     <h2 className="text-2xl md:text-4xl font-bold mb-4">CSR</h2>
    //                     <div>
    //                         <ul>
    //                             <li className='text-blue-800'>
    //                                 <Link href='https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf' target="_blank" rel="noopener noreferrer">Corporate Social Responsibility(CSR) Policy of KAMCO-Malayalam Version</Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             );
    //         default:
    //             return null;
    //     }
    // };

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
            {/* <HeroSlider/> */}
            {/* <section id="values" className="values section py-12">
                <h2 className="text-center text-[30px] mb-10 font-bold"><span className="border-b-4 border-[#008C44] font-bold">Values</span></h2>
                <div className="flex flex-wrap gap-4 lg:flex-nowrap justify-center items-baseline md:px-8 lg:px-20 xl:px-24">
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Group-1.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Customer</h4>
                            <p className="text-[14px] max-w-48 pb-2">Make every interaction count, even the smallest ones</p>
                        </div>
                    </div>
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Frame.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Integrity</h4>
                            <p className="text-[14px] max-w-48 pb-2">Doing the right thing, even when no one is watching</p>
                        </div>
                    </div>
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Frame-1.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Synergy</h4>
                            <p className="text-[14px] max-w-48 pb-2">Together we achieve more</p>
                        </div>
                    </div>
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Group-1-1.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Speed</h4>
                            <p className="text-[14px] max-w-48 pb-2">It's not the big, but the fast that wins</p>
                        </div>
                    </div>
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Frame-2.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Stretch</h4>
                            <p className="text-[14px] max-w-48 pb-2">Go the extra mile, it is never crowded</p>
                        </div>
                    </div>
                    <div className="text-center px-3 values-lists">
                        <img src="https://www.vsttractors.com/wp-content/uploads/2024/08/Frame-3.png" className="text-center mx-auto pb-2" />
                        <div className="text-center">
                            <h4 className="font-bold pb-2">Go Green</h4>
                            <p className="text-[14px] max-w-48 pb-2">Conserve to serve</p>
                        </div>
                    </div>

                </div>
            </section> */}


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

            <section className='w-full md:w-full p-4 md:px-8 md:pr-24 text-left overflow-auto'>
                <div className='flex justify-between w-full px-10 items-center'>
                    <div className='w-3/4 mx-20'>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Information</h2>
                        <p className="text-sm md:text-base">KAMCO was started way back in 1973 to aid farmers in their quest for higher productivity, more prosperity and greater happiness in their lives. KAMCO products for mechanized farming are manufactured in 5 production units. A 700-strong team of highly qualified and experienced Engineers, Professionals, and Technicians form the foundation of the continued success of KAMCO in achieving their goals. More than 250 dedicated vendors and over 80 dealers align with KAMCO in a successful partnership of providing exceptional assistance to the farming sector. No wonder KAMCO has become an acronym for Quality in the minds of hundreds of thousands of customers in India and abroad.</p>
                    </div>
                    <img className="w-3/4 mx-20 h-48 md:h-96 object-cover mb-4 rounded-lg" src='/Kamco_hero1.svg' alt="Company Information" />
                </div>
            </section>

            {/* Content Area */}
            {/* <div className="w-full md:w-full p-4 md:px-8 md:pr-24 text-left overflow-auto">
                {renderContent()}
            </div> */}
        </div>
    );
};

export default CompanyInfoPage;





{/* <div className="block md:hidden mb-4 px-8">
<select
    className="w-full p-2 border rounded-md"
    value={activeTab}
    onChange={(e) => setActiveTab(e.target.value)}
>
    <option value="info">Company Information</option>
    <option value="overview">Overview</option>
    <option value="history">History</option>
    <option value="board">Board of Directors</option>
    <option value="structure">Organizational Structure</option>
    <option value="Achievements">Achievements</option>
    <option value="manufacturing">Manufacturing Process</option>
    <option value="production">Production</option>
    <option value="csr">CSR</option>
</select>
</div>
<div className="hidden md:block w-full md:w-2/3 bg-gray-100 p-4 mx-20 text-sm md:text-base">
<ul className='flex justify-between'>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'overview' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('overview')}>Overview</span>
    </li>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'history' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('history')}>History</span>
    </li>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'board' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('board')}>Board of Directors</span>
    </li>
     <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'structure'
        ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('structure')}>Organizational Structure</span>
    </li> 
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'Achievements' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('Achievements')}>Achievements</span>
    </li>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'manufacturing' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('manufacturing')}>Manufacturing Process</span>
    </li>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'production' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('production')}>Production</span>
    </li>
    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'csr' ? 'text-green-600' : ''}`}>
        <span onClick={() => setActiveTab('csr')}>CSR</span>
    </li>
</ul>
</div> */}