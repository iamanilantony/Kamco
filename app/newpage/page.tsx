import Navbar from "@/components/new_ui/nav";
import React from "react";
import Hero from "./sections/hero";
import Footer from "@/components/new_ui/footer";
import Categories from "./sections/categories";
import Highlights from "./sections/highlights";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <Highlights />
      <Footer />
    </div>
  );
};

export default page;
