"use client";
import { Button } from "@/components/UI/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Media = () => {
  const images = [
    "/gallery/1.JPG",
    "/gallery/2.JPG",
    "/gallery/3.JPG",
    "/gallery/4.JPG",
    "/gallery/5.JPG",
    "/gallery/6.JPG",
    "/gallery/7.JPG",
    "/gallery/8.JPG",
    "/gallery/9.JPG",
    "/gallery/10.JPG",
    "/gallery/11.JPG",
    "/gallery/12.JPG",
    "/gallery/13.JPG",
  ];

  const imagesPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen text-center p-32 py-12 space-y-32 urbanist-font">
      <h1 className="text-3xl md:text-5xl font-bold">Media</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={image}
              alt={`Gallery image ${startIndex + index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <Button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Media;
