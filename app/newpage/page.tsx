// import Navbar from "@/components/new_ui/nav";
import Hero from "@/app/newpage/landing/sections/hero";
// import Footer from "@/components/new_ui/footer";
import Categories from "@/app/newpage/landing/sections/categories";
import Highlights from "@/app/newpage/landing/sections/highlights";
import Gallery from "@/app/newpage/landing/sections/gallery";
import FAQsSection from "@/app/newpage/landing/sections/faq";
import Contact from "@/app/newpage/landing/sections/contact";

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
