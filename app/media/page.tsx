"use client";
import { Button } from "@/components/UI/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react"; // updated import
import { Fragment } from "react"; // new import

const Media = () => {
  const images = ["/News/news1.JPG", "/News/news2.jpg", "/News/news3.jpeg"];
  const dummyImages = [
    "/NewsAndEvents/IMG20241031112229.jpg",
    "/NewsAndEvents/IMG20241031112513.jpg",
    "/NewsAndEvents/MAC00377.JPG",
    "/NewsAndEvents/MAC00286.JPG",
    "/NewsAndEvents/MAC00230.JPG",
    "/NewsAndEvents/MAC00205.JPG",
    "/NewsAndEvents/Image2.jpeg",
    "/NewsAndEvents/Image3.jpeg",
    "/NewsAndEvents/Image4.jpeg",
    "/NewsAndEvents/MOU.jpg",
    "/NewsAndEvents/MOU1.jpeg",
  ];

  const imagesPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageType, setPageType] = useState("news"); // new state
  const [transition, setTransition] = useState(false); // new state
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // new state

  const totalPages = Math.ceil(
    (pageType === "news" ? images.length : dummyImages.length) / imagesPerPage
  );
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages =
    pageType === "news" ? images.slice(startIndex, endIndex) : dummyImages;

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handlePageTypeChange = (type: any) => {
    setTransition(true);
    setTimeout(() => {
      setPageType(type);
      setCurrentPage(1);
      setTransition(false);
    }, 300); // duration of the transition
  };

  return (
    <div className="min-h-screen text-center md:p-32 p-12 py-12 space-y-24 urbanist-font">
      <h1 className="text-3xl md:text-5xl font-bold urbanist-font">Media</h1>
      <div className="flex mt-0 w-full justify-center items-center py-4">
        <Button
          size={"lg"}
          className={cn(
            "text-2xl p-8 border-b rounded-none",
            pageType === "news" && "border-b-2 border-black"
          )}
          variant="ghost"
          onClick={() => handlePageTypeChange("news")}
        >
          News
        </Button>
        <Button
          size={"lg"}
          className={cn(
            "text-2xl p-8 border-b rounded-none",
            pageType === "events" && "border-b-2 border-black"
          )}
          variant="ghost"
          onClick={() => handlePageTypeChange("events")}
        >
          Events
        </Button>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          transition ? "opacity-0" : "opacity-100"
        }`}
      >
        {pageType == "news" ? (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16">
            {images.map((image, index) => (
              <div
                key={index}
                className=" relative overflow-hidden rounded-lg shadow-md"
                onClick={() => setSelectedImage(image)} // new onClick handler
              >
                <Image
                  src={image}
                  alt={`Gallery image ${startIndex + index + 1}`}
                  width={500}
                  height={500}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16">
            {dummyImages.map((image, index) => (
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
        )}
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
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      >
        <Transition
          show={selectedImage !== null}
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="relative">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Enlarged image"
                width={800}
                height={800}
                className="rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
            >
              Close
            </button>
          </div>
        </Transition>
      </Dialog>
    </div>
  );
};

export default Media;
