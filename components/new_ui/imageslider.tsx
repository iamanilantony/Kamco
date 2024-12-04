"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SlideContent = string | ReactNode;

interface ImageSliderProps {
  slides: SlideContent[];
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  interval = 3000,
  showArrows = true,
  showDots = true,
  autoPlay = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    if (autoPlay) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoPlay, interval, nextSlide]);

  const renderSlide = (slide: SlideContent, index: number) => {
    if (typeof slide === "string") {
      return (
        <Image
          src={slide}
          alt={`Slide ${index + 1}`}
          className="absolute w-full h-full object-cover"
        />
      );
    } else {
      return (
        <div className="absolute w-full h-full flex items-center justify-center">
          {slide}
        </div>
      );
    }
  };

  return (
    <div className={cn("relative w-full mx-auto", className)}>
      <div className="overflow-hidden rounded-lg aspect-video">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {renderSlide(slide, index)}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
