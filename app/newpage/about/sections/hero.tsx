import React from "react";

const Hero = () => {
  return (
    <div className="px-4 py-8 md:px-8 md:py-16">
      <div className="w-full flex flex-col justify-end items-start text-white bg-[url('/new_images/about/heroImage.webp')] bg-cover bg-center h-full min-h-[50vh] rounded-3xl">
        <div className="text-left p-8 md:p-16 md:py-24 space-y-4 md:space-y-6 max-w-[calc(90vw-2rem)] md:max-w-[calc(90vw-3rem)]">
          <h1 className="text-2xl md:text-5xl font-bold mb-1 urbanist-font">
            Know More About KAMCO
          </h1>
          <p className="text-sm md:text-lg inter-font">
            KAMCO, a name synonymous with agricultural excellence, has been at
            the forefront of revolutionizing farming practices for decades. With
            a steadfast commitment to innovation and quality, we've consistently
            delivered cutting-edge solutions that empower farmers to achieve
            higher yields and greater efficiency. From our humble beginnings to
            becoming a global leader, KAMCO has always been driven by a passion
            for agriculture and a dedication to our customers. Our unwavering
            focus on research and development has led to the creation of a
            diverse range of products, including tractors, tillers, reapers, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;