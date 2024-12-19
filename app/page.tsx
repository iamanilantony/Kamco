// import Navbar from "@/components/new_ui/nav";
import Hero from "@/app/landing/sections/hero";
// import Footer from "@/components/new_ui/footer";
import Categories from "@/app/landing/sections/categories";
import Highlights from "@/app/landing/sections/highlights";
import Gallery from "@/app/landing/sections/gallery";
import FAQsSection from "@/app/landing/sections/faq";
import Contact from "@/app/landing/sections/contact";

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Categories />
      <Highlights />
      <Gallery />
      <FAQsSection />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
