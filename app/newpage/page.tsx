import Navbar from "@/components/new_ui/nav";
import React from "react";
import Hero from "./sections/hero";
import Footer from "@/components/new_ui/footer";
import Categories from "./sections/categories";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
};

export default page;
