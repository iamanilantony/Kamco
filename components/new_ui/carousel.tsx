"use client";

import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

interface Card {
  key: number;
  content: JSX.Element;
}

interface CarouselProps {
  cards: Card[];
  offset: number;
  showArrows: boolean;
  width: string;
  height: string;
  margin: string;
}

export default function Carroussel(props: CarouselProps) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState<number>(2);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | null>(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div style={{ width: "100%", height: "100%", margin: props.margin }}>
      <Carousel
        slides={cards}
        //@ts-ignore
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.default} // Changed from config.gentle
      />
    </div>
  );
}
