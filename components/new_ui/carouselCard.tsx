"use client";

import React from "react";
import { animated } from "react-spring";

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  return (
    <animated.div className="flex flex-col justify-center  w-[60vw] h-fit rounded-lg">
      <img
        src={image}
        alt="dfghj"
        className=" w-full h-full object-cover rounded-2xl"
      />
    </animated.div>
  );
}

export default Card;
