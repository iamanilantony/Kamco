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
                            <h1 className="text-2xl font-bold text-green-600 mb-4">Leading the Future of Sustainable Agriculture with Advanced Hydroponic Systems</h1>

                            <p className="mb-4">
                                Leveraging decades of expertise in agricultural innovation, KAMCO is now expanding its product range into hydroponic systems – an advanced, soil-free method of cultivation that offers substantial benefits for sustainable and efficient farming. Our new hydroponic solutions are engineered with the highest precision, using mineral nutrient solutions in water to cultivate a variety of high-value crops, including lettuce, spinach, herbs, tomatoes, cucumbers, leafy vegetables, and even strawberries.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise and Capabilities in Hydroponics</h2>
                            <p className="mb-4">
                                KAMCO brings its extensive experience and technical knowledge to this emerging agricultural technology, providing a complete, end-to-end solution tailored to meet the needs of urban and semi-urban farmers. Our hydroponic systems are designed to:
                            </p>

                            <ul className="list-disc list-inside mb-4">
                                <li><strong>Maximize Yield and Growth Speed:</strong> By providing direct access to nutrient solutions, our systems allow plants to grow 30-50% faster than traditional methods, with yields up to 10 times higher. Vertical layering within the system optimizes space, making it ideal for urban environments where land is limited.</li>
                                <li><strong>Leverage Cutting-Edge Software and IoT Automation:</strong> Developed by KAMCO’s R&D team, our proprietary software and IoT solutions offer real-time monitoring and control for hydroponic systems. With capabilities like automated irrigation, nutrient dosing, and lighting management, our system ensures optimal conditions and ease of use, allowing farmers to focus on production without concerns over system management.</li>
                                <li><strong>Drive Sustainable Agriculture:</strong> We are committed to promoting sustainable agriculture by introducing hydroponic solutions in densely populated regions. With the capacity to cultivate a wide range of crops using less water and no soil, KAMCO's hydroponic systems are ideal for maximizing agricultural productivity in space-constrained urban areas.</li>
                                <li><strong>Complete, Integrated Solutions for Farmers:</strong> Our full-service offering includes the hardware, software, installation, and maintenance of hydroponic systems, as well as access to high-quality planting materials and expert agricultural advisory services. This approach ensures seamless integration, making advanced hydroponic farming more accessible than ever.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Project Goals and Strategic Impact</h2>
                            <p className="mb-4">
                                Our hydroponic systems align with KAMCO’s broader vision of empowering farmers and fostering food security. By deploying these solutions, we aim to:
                            </p>

                            <ul className="list-disc list-inside mb-4">
                                <li>Expand sustainable farming options in urban and semi-urban areas.</li>
                                <li>Enhance resource efficiency for higher profitability and better yield outcomes.</li>
                                <li>Educate communities, including institutions and educational centers, on the benefits of hydroponic farming.</li>
                                <li>Tap into the commercial potential of urban hydroponics, creating a resilient and profitable agribusiness sector.</li>
                            </ul>

                            <p className="mb-4">
                                With our proven expertise, dedicated R&D, and expansive marketing and support network, KAMCO is well-positioned to lead in this transformative agricultural field, offering sustainable, profitable solutions that contribute to local food security and empower farmers. Join us in shaping the future of urban farming with KAMCO’s hydroponic solutions.
                            </p>
                        </div>

                    </div>
                );
            case 'nightPachaCurryStreetInitiative':
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/NightMarkets2.jpg' alt="Company Night Pacha Curry Street Initiative" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">Night Pacha Curry Street Initiative</h2>
                        <div className="p-4">
                            {/* <h1 className="text-2xl font-bold text-green-600 mb-4">Night Pacha Curry Street Initiative</h1> */}

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Bringing Fresh, Healthy Produce to Kerala’s Urban Communities</h2>
                            <p className="mb-4">
                                As part of its commitment to socio-economic growth and the promotion of healthy lifestyles, KAMCO is launching the "Night Pacha Curry Street" project in urban areas across Kerala. This unique initiative creates vibrant night markets offering fresh, organic fruits, vegetables, and locally sourced produce, providing an accessible hub for nutritious food options in Kerala's bustling cityscapes.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise and Role as a Facilitator</h2>
                            <p className="mb-4">
                                With decades of experience supporting agricultural advancements, KAMCO serves as a trusted facilitator for "Night Pacha Curry Street," leveraging our networks and expertise to manage the markets, integrate vendors, and create a welcoming, dynamic environment. The project also highlights various agricultural machinery beneficial for farm produce, making the space both a market and an educational platform that supports local farmers while promoting sustainable, eco-friendly practices.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Strategic Partnerships and Community Impact</h2>
                            <p className="mb-4">
                                To bring "Pacha Curry Street" to life, KAMCO will engage with event management experts and utilize available funding through government schemes, ensuring a seamless and appealing experience for residents and tourists alike. This community-centered approach not only supports local farmers but also fosters a healthier lifestyle among Kerala’s urban population, encouraging the consumption of fresh, nutritious food.
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
                            <p className="text-xl font-semibold text-indigo-800 mb-2">KAMCO: Pioneering Tractor Manufacturing Through Strategic Collaboration</p>

                            <p className="mb-4">
                                Kerala Agro Machinery Corporation Ltd. (KAMCO) is poised to expand its product offerings by entering the tractor manufacturing sector, driven by our commitment to innovation and excellence in agricultural machinery. To enhance our capabilities, we are exploring strategic collaborations with leading tractor manufacturers, aiming to integrate advanced features that meet the evolving needs of farmers.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Access to Cutting-Edge Technology</h2>
                            <p className="mb-4">
                                Through this collaboration, KAMCO will gain access to cutting-edge technology and expertise, allowing us to enhance our product offerings and improve market reach in a highly competitive and growing agricultural sector. With India’s agricultural tractor market being the largest globally, with over 800,000 units sold annually, this partnership positions KAMCO to capitalize on the rising demand for mechanization, particularly among small and marginal farmers.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Meeting Market Demands</h2>
                            <p className="mb-4">
                                Compact tractors (20-40 HP) are increasingly sought after, as more than 85% of Indian farmers operate on small landholdings. By focusing on affordable and efficient solutions for this segment, KAMCO aims to cater to the specific needs of our farmers, fostering agricultural productivity and sustainability.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Long-Term Growth and Sustainability</h2>
                            <p className="mb-4">
                                Partnering with a major tractor manufacturer will not only strengthen KAMCO’s market positioning but also facilitate entry into new markets, enhancing our competitive edge in the Indian tractor industry. Together, we can leverage our strengths to ensure long-term growth and sustainability in the agricultural machinery sector.
                            </p>
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
                                With a solid foundation in the agricultural sector, KAMCO is expanding into the seeds and planting material business as part of our commitment to deliver comprehensive solutions that drive agricultural productivity. Leveraging our expertise and extensive market reach, KAMCO is poised to become a trusted provider of high-quality seeds, planting materials, and seedlings. This venture reinforces KAMCO’s dedication to supporting the nation’s agricultural growth and sustainability.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise and Capabilities</h2>
                            <p className="mb-4">
                                KAMCO’s diversification into this sector is supported by our well-established capabilities and experience in the agricultural industry. Through this new initiative, KAMCO will offer a wide range of premium-quality seeds and planting materials, selected with strict adherence to industry standards and regulatory requirements.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Strategic Collaborations and Sourcing</h2>
                            <p className="mb-4">
                                Our operations in this field will be strengthened by collaborations with government entities, corporations, public sector undertakings (PSUs), and private firms. KAMCO will source materials both domestically and internationally, working with reputable suppliers to ensure that our products meet high standards for quality and reliability. This approach allows us to deliver robust and reliable solutions to farmers, nurseries, and agricultural organizations.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Multiple Channels for Wide Accessibility</h2>
                            <p className="mb-4">
                                KAMCO’s extensive dealership network, strong ties with nurseries, and involvement in government schemes enable us to make these products accessible across the country. Through partnerships with state and central initiatives such as Navodhan, which require significant quantities of planting materials, we can reach farmers and agribusinesses directly, providing them with the resources they need to boost productivity and improve crop quality.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">A Commitment to Agricultural Growth</h2>
                            <p className="mb-4">
                                Our goal in entering the seeds and planting material business is to support agricultural productivity and contribute to regional and national development goals. By supplying high-quality planting materials, KAMCO will play an essential role in fostering sustainable agricultural practices, improving yield outcomes, and contributing to the success of small and large-scale farming operations alike.
                            </p>

                            <p className="mb-4">
                                With a legacy of agricultural innovation, a reputation for quality, and an extensive network, KAMCO is well-equipped to serve as a reliable partner in the seeds and planting material sector. By combining quality products with our market expertise, KAMCO aims to support farmers, nurseries, and agricultural initiatives across the nation, fostering growth and productivity for a more sustainable future.
                            </p>
                        </div>

                    </div>
                );
            case 'fertilizersAndSoil':
                return (
                    <div>
                        <img className="w-full h-48 md:h-72 object-cover mb-4" src='/WomanFieldwithPlants.jpg' alt="Fertilizers and Soil Health" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4 text-left">Fertilizers and Soil Health</h2>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">KAMCO’s Fertilizer Solutions: Comprehensive Support for Indian Agriculture</h2>
                            <p className="mb-4">
                                As a public sector leader in agricultural machinery, KAMCO is expanding its expertise to include high-quality fertilizers, reinforcing our commitment to providing farmers with complete agricultural solutions. Leveraging our strong market presence and trusted dealer network, we are poised to enter the fertilizer sector through trading and manufacturing, delivering essential nutrients directly to the hands of farmers.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Our Expertise and Strategic Vision</h2>
                            <p className="mb-4">
                                India is among the largest consumers of fertilizers globally, as sustainable agricultural productivity is vital for feeding its growing population. With government support through subsidies and a focus on balanced fertilizer use, demand remains high for essential nutrients like nitrogen (N), phosphorus (P), and potassium (K), along with specialty and organic fertilizers that promote sustainable growth.
                            </p>

                            <h2 className="text-xl font-semibold text-indigo-800 mb-2">KAMCO’s Fertilizer Business Models</h2>
                            <p className="mb-4">
                                To serve this demand, KAMCO is exploring two business models—trading and manufacturing—tailored to supply critical fertilizers such as urea, diammonium phosphate (DAP), and complex formulations. Our goal is to meet India’s substantial need for fertilizers, which sees an annual sales volume of about 65-70 million metric tonnes, with urea accounting for nearly 60% of total consumption.
                            </p>

                            <p className="mb-4">
                                With a reputation for quality and an expansive distribution network, KAMCO is well-positioned to support India’s agricultural sector, enhancing crop productivity and soil health while contributing to the government’s mission to double farmers' incomes. Our entry into fertilizers represents our commitment to empowering Indian farmers with the resources they need for success.
                            </p>
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
