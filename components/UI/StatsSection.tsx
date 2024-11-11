'use client'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ endValue }: { endValue: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // 3 seconds for the count-up
    const increment = endValue / (duration / 50); // Calculate the increment value per interval (50ms interval)

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endValue) {
          return Math.min(prevCount + increment, endValue); // Ensure it does not exceed the end value
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 50); // Update every 50ms (this controls the smoothness of the animation)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [endValue]);

  return <span>{Math.floor(count)}+</span>; // Round down the count for a cleaner display
};

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when the section comes into view
    threshold: 0.5,  // When 50% of the section is in view
  });

  return (
    <div
      ref={ref}
      className="min-h-[30vh] bg-[#166434] text-white flex flex-wrap items-center justify-around rounded-lg mt-12 px-4 md:px-20"
    >
      <div className="text-center mb-4 md:mb-0">
        <p className="text-xl md:text-4xl font-bold">
          {inView ? <CountUp endValue={50} /> : '0'}
        </p>
        <p className="text-sm md:text-lg">Years of Experience</p>
      </div>
      <div className="text-center mb-4 md:mb-0">
        <p className="text-xl md:text-4xl font-bold">
          {inView ? <CountUp endValue={80} /> : '0'}
        </p>
        <p className="text-sm md:text-lg">Dealers Across Country</p>
      </div>
      <div className="text-center mb-4 md:mb-0">
        <p className="text-xl md:text-4xl font-bold">
          {inView ? <CountUp endValue={100000} /> : '0'}
        </p>
        <p className="text-sm md:text-lg">Happy Customers</p>
      </div>
      <div className="text-center">
        <p className="text-xl md:text-4xl font-bold">
          {inView ? <CountUp endValue={900} /> : '0'}
        </p>
        <p className="text-sm md:text-lg">Skilled Man Power</p>
      </div>
    </div>
  );
};

export default StatsSection;
