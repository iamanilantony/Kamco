"use client";

import Image from "next/image";
import React from "react";
import { animated } from "react-spring";

interface CardProps {
  image: string;
  description?: string;
  year?: string;
}

function Card({ image, description, year }: CardProps) {
  return (
    <animated.div className="flex flex-col justify-center relative w-[60vw] h-fit rounded-lg overflow-hidden ">
      <Image
        src={image}
        alt="dfghj"
        height={500}
        width={800}
        className="object-cover rounded-2xl h-full w-full"
      />
      <div className="absolute w-full p-8 left-0 bottom-0 bg-black/50 text-left space-y-2 py-12 text-white">
        <h1 className="text-3xl font-bold urbanist-font">{year}</h1>
        <p className="inter-font">{description}</p>
      </div>
    </animated.div>
  );
}

export default Card;
