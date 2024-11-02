'use client'

import { useState } from 'react';

const data = [
  {
    category: 'All',
    date: '24 Jun 2024',
    time: '15:45',
    title: 'RECRUITMENT FOR THE POST OF SALES OFFICER (ON CONTRACT BASIS)',
    description: 'As a part of expansion of our markets and to improve sales in Odisha, the Company is planning to recruit dynamic and self-motivated persons with a flare of sales, on contract basis.'
  },
  {
    category: 'Releases',
    date: '24 Jun 2024',
    time: '15:45',
    title: 'RECRUITMENT FOR THE POST OF SALES OFFICER (ON CONTRACT BASIS)',
    description: 'As a part of expansion of our markets and to improve sales in Odisha, the Company is planning to recruit dynamic and self-motivated persons with a flare of sales, on contract basis.'
  },
  {
    category: 'Products',
    date: '24 Jun 2024',
    time: '15:45',
    title: 'RECRUITMENT FOR THE POST OF SALES OFFICER (ON CONTRACT BASIS)',
    description: 'As a part of expansion of our markets and to improve sales in Odisha, the Company is planning to recruit dynamic and self-motivated persons with a flare of sales, on contract basis.'
  },
  {
    category: 'News',
    date: '24 Jun 2024',
    time: '15:45',
    title: 'RECRUITMENT FOR THE POST OF SALES OFFICER (ON CONTRACT BASIS)',
    description: 'As a part of expansion of our markets and to improve sales in Odisha, the Company is planning to recruit dynamic and self-motivated persons with a flare of sales, on contract basis.'
  }
];

const RecruitmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-4 md:p-6 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for articles, notifications, news"
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-green-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-nowrap overflow-x-auto space-x-2 md:space-x-4 text-sm md:text-lg font-semibold border-b border-green-700 mb-4">
          <button onClick={() => setSelectedCategory('All')} className={`pb-2 ${selectedCategory === 'All' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}>All</button>
          <button onClick={() => setSelectedCategory('Releases')} className={`pb-2 ${selectedCategory === 'Releases' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}>Releases</button>
          <button onClick={() => setSelectedCategory('Products')} className={`pb-2 ${selectedCategory === 'Products' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}>Products</button>
          <button onClick={() => setSelectedCategory('News')} className={`pb-2 ${selectedCategory === 'News' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}>News</button>
        </div>
        <div className="space-y-6">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-md flex flex-col md:flex-row items-center">
              <div className="flex flex-col justify-center items-center text-lg text-gray-500 mb-2 md:mb-0 text-right min-w-fit font-semibold pr-0 md:pr-4 border-b-2 md:border-b-0 md:border-r-2 border-green-700">
                <div>{item.date}</div> 
                <div>{item.time}</div>
              </div>
              <div className="h-full w-full md:w-px bg-green-700 mx-0 md:mx-4 md:block hidden"></div>
              <div className='text-left mt-2 md:mt-0'>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentList;