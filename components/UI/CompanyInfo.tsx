'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const CompanyInfoPage = () => {
    const [activeTab, setActiveTab] = useState('info'); // Default tab

    const renderContent = () => {
        switch (activeTab) {
            case 'info':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-4xl font-bold mb-4">Company Information</h2>
                        <p>KAMCO was started way back in 1973 to aid farmers in their quest for higher productivity, more prosperity and greater happiness in their lives. KAMCO products for mechanized farming are manufactured in 5 production units. A 700-strong team of highly qualified and experienced Engineers, Professionals, and Technicians form the foundation of the continued success of KAMCO in achieving their goals. More than 250 dedicated vendors and over 80 dealers align with KAMCO in a successful partnership of providing exceptional assistance to the farming sector. No wonder KAMCO has become an acronym for Quality in the minds of hundreds of thousands of customers in India and abroad.
                            Quality, truly exceptional quality, is KAMCO’s strength. In fact Quality has become a culture in the corporation.</p>
                    </div>
                );
            case 'overview':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero2.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p>KAMCO was started way back in 1973 to aid farmers in their quest for higher productivity, more prosperity and greater happiness in their lives. KAMCO products for mechanized farming are manufactured in 5 production units. A 700-strong team of highly qualified and experienced Engineers, Professionals, and Technicians form the foundation of the continued success of KAMCO in achieving their goals. More than 250 dedicated vendors and over 80 dealers align with KAMCO in a successful partnership of providing exceptional assistance to the farming sector. No wonder KAMCO has become an acronym for Quality in the minds of hundreds of thousands of customers in India and abroad.
                            Quality, truly exceptional quality, is KAMCO’s strength. In fact Quality has become a culture in the corporation.</p>
                    </div>
                );
            case 'history':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero3.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">History</h2>
                        <p>The history of KAMCO is rich with innovations and commitment to quality...</p>
                    </div>
                );
            case 'board':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero2.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Board of Directors</h2>
                        <p>Our board consists of experienced professionals dedicated to guiding KAMCO...</p>
                    </div>
                );
            case 'structure':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Organizational Structure</h2>
                        <p>KAMCO has a well-defined organizational structure to streamline operations...</p>
                    </div>
                );
            case 'quality':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
                        <p>Quality assurance is paramount at KAMCO, with strict standards to ensure excellence...</p>
                    </div>
                );
            case 'manufacturing':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Manufacturing Process</h2>
                        <p>Our manufacturing process is designed for efficiency and sustainability...</p>
                    </div>
                );
            case 'production':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">Production</h2>
                        <p>Production at KAMCO utilizes advanced technologies to ensure high-quality outputs...</p>
                    </div>
                );
            case 'csr':
                return (
                    <div>
                        <img className="w-full h-72 object-cover mb-4" src='/Kamco_hero1.svg' alt="Company Information" />
                        <h2 className="text-2xl font-bold mb-4">CSR</h2>
                        <p>Corporate social responsibility is at the heart of KAMCO’s operations...</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex font-sans">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-100 p-4 text-base">
                <ul>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'overview' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('info')}>Company Information</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'overview' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('overview')}>Overview</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'history' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('history')}>History</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'board' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('board')}>Board of Directors</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'structure' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('structure')}>Organizational Structure</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'quality' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('quality')}>Quality Assurance</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'manufacturing' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('manufacturing')}>Manufacturing Process</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'production' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('production')}>Production</span>
                    </li>
                    <li className={`cursor-pointer py-4 mb-2 transition transition-2000 hover:text-green-600 ${activeTab === 'csr' ? 'text-green-600' : ''}`}>
                        <span onClick={() => setActiveTab('csr')}>CSR</span>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="w-3/4 p-4 text-left px-8 pr-24">
                {/* <h1 className="text-3xl font-bold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1> */}
                {renderContent()}
            </div>
        </div>
    );
};

export default CompanyInfoPage;
