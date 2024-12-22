import React from "react";
import Hero from "./sections/hero";
import Categories from "./sections/categories";
import Highlights from "./sections/highlights";
import Gallery from "./sections/gallery";
import FAQsSection from "./sections/faq";
import Contact from "./sections/contact";
import Testimonial from "./sections/testimonial";

const Landing = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#d7ffbf]/10 to-[#d7ffbf]/20">
      <Hero />
      <Categories />
      <Highlights />
      <Testimonial />
      <Gallery />
      <FAQsSection />
      <Contact />
    </div>
  );
};

export default Landing;
