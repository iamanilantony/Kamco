import Image from "next/image";

import React from "react";

const Highlights = () => {
  return (
    <section className="max-w-[94vw] mx-auto px-4 md:mt-32 mt-16">
      <div className="gap-8 items-center flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-3 lg:gap-6">
          <div className="flex flex-col urbanist-font">
            <h3 className="text-xl text-[rgb(52,121,40)] leading-snug">
              Highlights
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Harvest Insights: Modern <br className="hidden lg:block" />{" "}
              Farming Tips and Techniques
            </h1>
          </div>
          <p className="text-gray-700 md:max-w-[50%] inter-font text-sm lg:text-base">
            Welcome to Harvest Insights, Kamco's blog dedicated to helping
            farmers thrive. From expert advice on crop management to the latest
            innovations in agricultural machinery, we share practical tips,
            industry news, and success stories to empower modern farmers. Join
            us on the journey toward more sustainable, productive, and
            profitable farming.
            <br />
            <span className="text-red-500 font-semibold mt-2 cursor-pointer">
              Read More
            </span>
          </p>
        </div>

        {/* Right Content */}
      </div>
      <div className="mt-8">
        <div>
          <div className="relative bg-red-50">
            <Image
              src="/new_images/wheat.webp" // Replace with your image path
              alt="Farming Insights"
              className="rounded-lg shadow-md object-cover w-full"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <button className="px-6 py-3 text-lg font-medium bg-lime-200 text-green-900 rounded-lg shadow hover:bg-lime-300 transition">
          View All Articles
        </button>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition">
            &#8592;
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-700 transition">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;