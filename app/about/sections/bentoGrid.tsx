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
      imageUrl: "/new_images/bentoGrid/image1.webp",
      customCardStyle: "w-3/5",
      span: "col-span-2 max-sm:col-span-1",
      textColor: "",
      overlayColor: "",
    },
    {
      title: "Quality Machinery",
      customImageStyle: "object-contain -right-36 h-3/4",
      description:
        "KAMCO offers ISO 9001:2015 certified Tillers, Tractors, and Engines for farmers.",
      imageUrl: "/new_images/bentoGrid/image2.webp",
      customCardStyle: "top-10 left-10 w-3/5",
      span: "col-span-2 max-sm:col-span-1",
      textColor: "text-black",
      overlayColor: "",
    },
    {
      title: "Our Mission",
      customImageStyle: "h-3/5",
      description:
        "Total farming solution through Agriculture Mechanization by sourcing, developing latest technologies and value added products to boost up agriculture production in our nation.",
      imageUrl: "/new_images/bentoGrid/image3.webp",
      customCardStyle: "top-10 left-5",
      span: "sm:row-span-3 max-sm:col-span-1",
      textColor: "text-black",
      overlayColor: "",
    },
    {
      title: "Our Vision",
      customImageStyle: "w-full",
      description:
        "To provide sustainable and affordable farming solution through Agricultural Mechanization.",
      imageUrl: "/new_images/bentoGrid/image4.webp",
      customCardStyle: "w-2/5 top-1/2 -translate-y-1/2",
      span: "col-span-4 max-sm:col-span-1",
      textColor: "",
      overlayColor: "",
    },
    {
      title: "KAMCO's Leadership",
      customImageStyle: "object-contain h-3/4",
      description:
        "State-owned KAMCO promotes mechanized farming for small farmers.",
      imageUrl: "/new_images/bentoGrid/image5.webp",
      customCardStyle: "top-10",
      span: "col-span-1 max-sm:col-span-1",
      textColor: "",
      overlayColor: "",
    },
    {
      title: "Farmers Training",
      customImageStyle: "-left-24 object-contain",
      description: "KAMCO provides training on modern farming techniques.",
      imageUrl: "/new_images/bentoGrid/image6.webp",
      customCardStyle: "left-3/4 bottom-8 -translate-x-[25%]",
      span: "col-span-3 max-sm:col-span-1",
      textColor: "text-black",
      overlayColor: "",
    },
  ];

  return (
    <div className="p-4 md:px-16 md:mt-20 mt-8">
      <div className="grid max-sm:flex max-sm:flex-col grid-rows-3 grid-cols-5 md:grid-rows-3 gap-4 gap-x-3 min-h-screen">
        {cards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "bg-white rounded-lg shadow-md flex flex-col justify-between relative overflow-hidden z-10 border-[0.1px] border-[#5B5B5B]",
              card.span
            )}
          >
            <div
              className={`h-full w-full absolute ${card.overlayColor} z-10 overlay`}
            ></div>
            {card.imageUrl && (
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={600}
                height={1200}
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
                !isMobile && card.customCardStyle,
                card.textColor
              )}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight urbanist-font ">
                {card.title}
              </h3>
              <p className="inter-font ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
