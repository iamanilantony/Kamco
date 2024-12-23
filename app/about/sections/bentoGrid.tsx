"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const BentoGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "Agricultural Revolution",
      customImageStyle: "",
      description:
        "Tools have advanced, making farming more efficient and predictable.",
      imageUrl: "/gallery/2.JPG",
      customCardStyle: "",
      span: "col-span-2 max-sm:col-span-1", // Takes more grid columns
    },
    {
      title: "Quality Machinery",
      customImageStyle: "object-contain -right-36 h-3/4",
      description:
        "KAMCO offers ISO 9001:2015 certified Tillers, Tractors, and Engines for farmers.",
      imageUrl: "/new_images/bentoGrid/image2.webp",
      customCardStyle: "top-10 left-10",
      span: "col-span-2 max-sm:col-span-1",
    },
    {
      title: "Our Mission",
      customImageStyle: "h-3/5",
      description:
        "Total farming solution through Agriculture Mechanization by sourcing, developing latest technologies and value added products to boost up agriculture production in our nation.",
      imageUrl: "/gallery/3.JPG",
      customCardStyle: "top-28 left-5",
      span: "sm:row-span-3 max-sm:col-span-1",
    },
    {
      title: "Our Vision",
      customImageStyle: "w-full",
      description:
        "To provide sustainable and affordable farming solution through Agricultural Mechanization.",
      imageUrl: "/gallery/5.JPG",
      customCardStyle: "w-2/5 top-1/2 -translate-y-1/2",
      span: "col-span-4 max-sm:col-span-1",
    },
    {
      title: "KAMCO's Leadership",
      customImageStyle: "object-contain h-3/4",
      description:
        "State-owned KAMCO promotes mechanized farming for small farmers.",
      imageUrl: "/gallery/6.JPG",
      customCardStyle: "top-10",
      span: "col-span-1 max-sm:col-span-1",
    },
    {
      title: "Farmers Training",
      customImageStyle: "left-0",
      description: "KAMCO provides training on modern farming techniques.",
      imageUrl: "/gallery/7.JPG",
      customCardStyle: "left-3/4 bottom-8 -translate-x-[25%]",
      span: "col-span-3 max-sm:col-span-1",
    },
  ];

  return (
    <div className="p-4 md:px-16 mt-32">
      <div className="grid max-sm:flex max-sm:flex-col grid-rows-3 grid-cols-5 md:grid-rows-3 gap-4 gap-x-3 min-h-screen">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "bg-white rounded-lg shadow-md flex flex-col justify-between relative overflow-hidden z-10 border-[0.1px] border-[#5B5B5B]",
              card.span
            )}
          >
            {card.imageUrl && (
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={600}
                height={150}
                className={cn(
                  "rounded-lg absolute right-0 bottom-0 object-cover h-full max-sm:relative max-sm:h-[300px]",
                  !isMobile && card.customImageStyle
                )}
                draggable={false}
              />
            )}
            <div
              className={cn(
                "absolute bottom-10 left-10 z-10 text-left",
                !isMobile && card.customCardStyle
              )}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight urbanist-font ">
                {card.title}
              </h3>
              <p className="inter-font text-black">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
