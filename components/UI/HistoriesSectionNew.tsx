'use client';

import { useState, useEffect, useRef } from 'react';
import History from '@/public/data/history'; // Ensure this is correctly imported
import Image from 'next/image';

const HistorySection = () => {
  const [activeTab, setActiveTab] = useState('1973'); // Default active tab is 1973
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // References to the section elements for scroll handling

  // Intersection Observer for scroll-based reveal
  const [visible, setVisible] = useState<boolean[]>(new Array(History.length).fill(false)); // Track visibility of each section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        console.log(entry.isIntersecting, `Section ${index + 1} - ${History[index].year} is in view!`); // Log if section is in view

        if (entry.isIntersecting) {
          setVisible((prev) => {
            const updated = [...prev];
            updated[index] = true; // Mark the section as visible when it's in view
            return updated;
          });
        }
      });
    }, { threshold: 0 }); // Use threshold 0 to trigger once any part of the section is in view

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [History.length]);

  return (
    <section className="w-full p-2 md:px-8 md:pr-24 text-left overflow-auto" style={{ minHeight: '100vh' }}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 md:mt-20 text-center">Our Journey</h2>

        {/* History Content */}
        <div className="w-full md:w-3/4">
          {History.map((point, index) => (
            <div
              key={point.year}
              ref={(el) => (sectionRefs.current[index] = el)} // Set ref for each section
              className={`flex items-center justify-between my-8 p-4 md:p-8 rounded-lg 
                ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} 
                ${visible[index] ? '' : 'opacity-100'}`} // Only show when visible
              style={{ transition: 'opacity 1s ease' }}
            >
              {/* Year and Description (Left or Right) */}
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-semibold">{point.year}</h3>
                <p className="text-sm md:text-base mt-4">{point.description}</p>
              </div>

              {/* Vertical Line (Only visible on large screens) */}
              <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

              {/* Image Content (Opposite side) */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0">
                <Image
                  src={point.image}
                  alt={`Image for ${point.year}`}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
