import React from "react";
import Card from "@/components/new_ui/carouselCard";
import CarouselComponent from "@/components/new_ui/carousel";

const Journy = () => {
  let cards = [
    {
      key: 1,
      content: <Card image="/new_images/about/jorny/image-0.webp" />,
    },
    {
      key: 2,
      content: <Card image="/new_images/about/jorny/image-1.webp" />,
    },
    {
      key: 3,
      content: <Card image="/new_images/about/jorny/image-2.webp" />,
    },
    {
      key: 4,
      content: <Card image="/new_images/about/jorny/image-3.webp" />,
    },
    {
      key: 5,
      content: <Card image="/new_images/about/jorny/image-4.webp" />,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center w-full mb-4 md:mb-6">
        Our Journey Over The Years
      </h2>
      <div className="min-h-[80vh] w-[80vw] flex items-center justify-center">
        <CarouselComponent
          cards={cards}
          height="500px"
          width="80%" // Changed from "30%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
};

export default Journy;
