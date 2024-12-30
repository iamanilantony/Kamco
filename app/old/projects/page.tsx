'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const CompanyInfoPage = () => {
    const [activeTab, setActiveTab] = useState('hydroponicSystems'); // Default tab

    const renderContent = () => {
        switch (activeTab) {
            case 'hydroponicSystems':
                return (
                    <div>
                        {/* <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Hydroponic_Farm_Illustration.jpg' alt="Hydroponic Systems" /> */}
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/hydrophonic.jpg' alt="Hydroponic Systems" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">Hydroponic Systems</h2>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold text-green-600 mb-4">Leading Sustainable Agriculture</h1>

                            <p className="mb-4">
                            KAMCO is expanding into hydroponic systems—an advanced, soil-free farming method that boosts sustainability and efficiency. Using nutrient-rich water, our systems help grow crops like lettuce, spinach, herbs, tomatoes, cucumbers, and even strawberries faster and with higher yields.
                            </p>

                            <h1 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise in Hydroponics</h1>
                            <p className="mb-4">
                            With years of experience in agriculture, KAMCO offers complete hydroponic solutions, ideal for urban and semi-urban farmers. Our systems are designed to:                            </p>

                            <ul className="list-disc list-inside mb-4">
                                <li><strong>Increase Yield & Growth Speed:</strong> Plants grow 30-50% faster and produce up to 10 times more than traditional farming. Vertical stacking optimizes space, making it perfect for cities.</li>
                                <li><strong>Use Smart Technology:</strong> Our software and IoT systems allow real-time monitoring, automated irrigation, nutrient dosing, and lighting, making hydroponic farming easier to manage.</li>
                                <li><strong>Promote Sustainability:</strong> Hydroponics uses less water and no soil, making it ideal for urban areas with limited land, helping maximize food production in crowded spaces.</li>
                                <li><strong>Offer Complete Solutions:</strong> We provide everything from system setup and maintenance to expert advice and high-quality planting materials, making hydroponic farming easy and accessible.</li>
                            </ul>

                            <h1 className="text-xl font-semibold text-indigo-800 mb-2">Project Goals</h1>
                            <p className="mb-4">
                            KAMCO’s hydroponic systems aim to:
                            </p>

                            <ul className="list-disc list-inside mb-4">
                                <li>Expand sustainable farming in urban areas.</li>
                                <li>Improve resource efficiency for better profits and higher yields.</li>
                                <li>Educate communities and institutions about hydroponic farming.</li>
                                <li>Tap into the commercial potential of urban farming for a strong agribusiness sector.</li>
                            </ul>

                            <p className="mb-4">
                            With KAMCO's expertise, R&D, and support network, we're ready to lead the way in sustainable, urban farming. Join us in shaping the future of agriculture with our innovative hydroponic solutions.                            </p>
                        </div>

                    </div>
                );
            case 'nightPachaCurryStreetInitiative':
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Night_Market.jpg' alt="Company Night Pacha Curry Street Initiative" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">Night Pacha Curry Street Initiative</h2>
                        <div className="p-4">
                            {/* <h1 className="text-2xl font-bold text-green-600 mb-4">Night Pacha Curry Street Initiative</h1> */}

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Bringing Fresh, Healthy Produce to Kerala's Cities
</h2>
                            <p className="mb-4">
                            KAMCO is launching the Night Pacha Curry Street project to bring fresh, organic fruits, vegetables, and locally grown produce to Kerala’s urban areas. These vibrant night markets will offer easy access to healthy food while supporting local farmers and promoting sustainable farming practices.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">KAMCO’s Role
</h2>
                            <p className="mb-4">

                            With years of experience in agriculture, KAMCO will manage and organize the markets, helping connect farmers with customers and create a lively, welcoming space. The project will also showcase agricultural tools and eco-friendly farming methods, educating the community along the way.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Community Impact and Partnerships
</h2>
                            <p className="mb-4">
                            By partnering with event experts and using government funding, KAMCO aims to create an enjoyable experience for both residents and tourists. This initiative will help local farmers thrive and encourage healthier food choices for Kerala’s urban population.
                            </p>
                        </div>


                    </div>
                );
            // case 'polyclinicAndEmployeeWelfare':
                // return (
                //     <div>
                //         <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Polyclinic.jpg' alt="Company Polyclinic and Employee Welfare" />
                //         <h2 className="text-3xl md:text-4xl font-bold mb-4">Polyclinic and Employee Welfare</h2>
                //         <div className="p-4">
                //             {/* <h1 className="text-2xl font-bold text-green-600 mb-4">Polyclinic and Employee Welfare</h1> */}

                //             <h2 className="text-xl font-semibold text-indigo-800 mb-2">KAMCO: Your Partner in Health and Well-Being</h2>
                //             <p className="mb-4">
                //                 At KAMCO, we are committed to prioritizing the health and well-being of our employees. To enhance our existing medical facilities, we are actively seeking a corporate health partner to establish and operate a polyclinic within the KAMCO campus. This initiative aims to provide comprehensive healthcare services not only to our employees but also to the general public, furthering our commitment to community health.
                //             </p>

                //             <h2 className="text-xl font-semibold text-indigo-800 mb-2">Comprehensive Health Services</h2>
                //             <p className="mb-4">
                //                 The proposed polyclinic will offer a wide range of medical services, ensuring convenient access to healthcare for KAMCO employees and their dependents. With our strategic location near the airport, the facility is positioned to attract a diverse clientele, creating a valuable revenue stream that will help cross-subsidize healthcare expenses.
                //             </p>

                //             <h2 className="text-xl font-semibold text-indigo-800 mb-2">Expertise in Employee Welfare</h2>
                //             <p className="mb-4">
                //                 KAMCO has a longstanding tradition of supporting employee health through comprehensive medical reimbursement facilities for inpatient treatments and partnerships with local hospitals for first aid services. By integrating a polyclinic into our campus, we will enhance our commitment to employee welfare and foster a healthier workplace environment.
                //             </p>
                //         </div>

                //     </div>
                // );
            case 'tractorManufacturing':
                return (
                    <div className="text-sm md:text-base">
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/kamco_factory.JPG' alt="Tractor Manufacturing" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left px-4 text-left">Tractor Manufacturing</h2>
                        <div className="p-4">
                            <p className="text-xl font-semibold text-indigo-800 mb-2">KAMCO's Strategic Expansion
</p>

                            <p className="mb-4">
                            KAMCO (Kerala Agro Machinery Corporation Ltd.) is entering the tractor manufacturing sector, driven by a commitment to innovation and excellence. We’re exploring partnerships with leading tractor manufacturers to integrate advanced features that meet the growing needs of farmers.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Access to Advanced Technology</h2>
                            <p className="mb-4">
                            Through these collaborations, KAMCO will gain access to cutting-edge technology, enhancing our product offerings and expanding our reach in India’s largest agricultural tractor market. With over 800,000 units sold annually, the partnership positions KAMCO to meet the increasing demand for mechanization, especially among small farmers.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Focusing on Market Needs</h2>
                            <p className="mb-4">
                            Compact tractors (20-40 HP) are in high demand, as over 85% of Indian farmers have small landholdings. KAMCO aims to provide affordable, efficient solutions for this segment to boost productivity and sustainability.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Long-Term Growth and Sustainability</h2>
                            <p className="mb-4">
                            Partnering with a leading tractor manufacturer will strengthen KAMCO’s market position, open new opportunities, and ensure long-term growth and sustainability in the agricultural machinery sector. Together, we’ll help transform farming practices for a more productive future.                            </p>
                        </div>

                    </div>
                );
            case 'seedsandPlanting':
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='planting.jpg' alt="Seeds and Planting Materials" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">Seeds and Planting Materials</h2>
                        <div className="p-4">

                            <p className="mb-4">
                            Helping Farmers Grow with Quality Products
KAMCO is expanding into the seeds and planting materials business to support agricultural growth and productivity in India. With our strong background in agriculture, we aim to provide farmers with high-quality seeds, seedlings, and planting materials, helping to improve crop yields and sustainability.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise  
</h2>
                            <p className="mb-4">
                            Building on years of experience, KAMCO will offer a wide range of premium seeds and planting materials that meet strict industry standards. We ensure that all products are reliable and of the highest quality.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Strategic Partnerships  
</h2>
                            <p className="mb-4">
                            We collaborate with government agencies, corporations, and trusted suppliers both in India and abroad. These partnerships help us source the best materials and deliver them to farmers, nurseries, and agricultural organizations.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Wide Accessibility  
</h2>
                            <p className="mb-4">
                            Thanks to our extensive dealer network and partnerships with government schemes like Navodhan, KAMCO ensures that high-quality seeds and planting materials are available to farmers across the country, boosting productivity and crop quality.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Commitment to Agricultural Growth  
</h2>
                            <p className="mb-4">
                            KAMCO is dedicated to supporting farmers and promoting sustainable farming practices. By providing top-quality planting materials, we aim to help farmers of all sizes improve their yields and contribute to national agricultural development.                            </p>

                            <p className="mb-4">
                            With a strong reputation for quality and a broad network, KAMCO is a trusted partner in the seeds and planting materials industry, helping farmers succeed and grow in a sustainable way.                            </p>
                        </div>

                    </div>
                );
            case 'fertilizersAndSoil':
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/WomanFieldwithPlants.jpg' alt="Fertilizers and Soil Health" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">KAMCO's Fertilizer Solutions
</h2>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Supporting Indian Agriculture
</h2>
                            <p className="mb-4">
                            KAMCO is expanding its expertise to include high-quality fertilizers, offering farmers comprehensive agricultural solutions. With our strong market presence and trusted dealer network, we are entering the fertilizer sector through both trading and manufacturing to deliver essential nutrients directly to farmers.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Meeting India's Fertilizer Demand
</h2>
                            <p className="mb-4">
                            India is one of the largest consumers of fertilizers, with high demand for key nutrients like nitrogen (N), phosphorus (P), and potassium (K), as well as specialty and organic fertilizers for sustainable growth. KAMCO aims to meet this need by supplying fertilizers such as urea, diammonium phosphate (DAP), and complex formulations.                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">KAMCO’s Approach</h2>
                            <p className="mb-4">
                            KAMCO is exploring both trading and manufacturing models to supply fertilizers, addressing India’s annual consumption of 65-70 million metric tonnes. With our reputation for quality and expansive distribution network, we aim to boost crop productivity, improve soil health, and support the government’s goal to double farmers’ incomes.
                            </p>

                            <p className="mb-4">
                            KAMCO’s entry into fertilizers reinforces our commitment to empowering farmers and driving sustainable agricultural growth.                            </p>
                        </div>



                    </div>
                );
         
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="CSR" />
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">CSR</h2>
                        <div>
                            <ul>
                                <li className='text-blue-800'>
                                    <Link href='https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf' target="_blank" rel="noopener noreferrer">Corporate Social Responsibility(CSR) Policy of KAMCO-Malayalam Version</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex-row font-sans">
            {/* Sidebar for larger screens, Select input for mobile */}
            <div className="block md:hidden mb-4 px-8">
                <select
                    className="w-full p-2 border rounded-md"
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                >
                    <option value="hydroponicSystems">Hydroponic Systems</option>
                    <option value="nightPachaCurryStreetInitiative">Night Pacha Curry Street Initiative</option>
                    {/* <option value="polyclinicAndEmployeeWelfare">Polyclinic and Employee Welfare</option> */}
                    <option value="fertilizersAndSoil">Fertilizers and Soil Health</option>
                    <option value="seedsandPlanting">Seeds and Planting Materials</option>
                    <option value="tractorManufacturing">Tractor Manufacturing</option>
                </select>
            </div>
            <div className="hidden md:block w-full md:w-1/5 bg-gray-100 p-4 pr-0 text-sm md:text-base text-left">
                <ul>
                    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'hydroponicSystems' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('hydroponicSystems')}>Hydroponic Systems</span>
                    </li>
                    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'nightPachaCurryStreetInitiative' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('nightPachaCurryStreetInitiative')}>Night Pacha Curry Street Initiative</span>
                    </li>
                    {/* <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'polyclinicAndEmployeeWelfare' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('polyclinicAndEmployeeWelfare')}>Polyclinic and Employee Welfare</span>
                    </li> */}
                    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'fertilizersAndSoil' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('fertilizersAndSoil')}>Fertilizers and Soil Health</span>
                    </li>
                    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'seedsandPlanting'
                        ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('seedsandPlanting')}>Seeds and Planting Materials</span>
                    </li>
                    <li className={`cursor-pointer py-2 md:py-4 mb-2 transition hover:text-green-600 ${activeTab === 'tractorManufacturing' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('tractorManufacturing')}>Tractor Manufacturing</span>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-full md:w-3/4 p-4 md:px-8 md:pr-24 text-left overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default CompanyInfoPage;
