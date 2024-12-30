"use client";

import { Button } from "@/components/UI/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Newsletter = () => {
  const newsletters = [
    // { title: "January Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "February Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "March Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "April Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "May Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "June Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "July Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "August Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "September Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "October Newsletter", image: "https://via.placeholder.com/150" },
    // { title: "November Newsletter", image: "https://via.placeholder.com/150" },
    { title: "December Newsletter", image: "/NewLetter/Newsletter_Dec.png", link: "/NewLetter/KAMCO_December_Newsletter.pdf" },
  ];

  const newslettersPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsletters.length / newslettersPerPage);
  const startIndex = (currentPage - 1) * newslettersPerPage;
  const endIndex = startIndex + newslettersPerPage;
  const currentNewsletters = newsletters.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen text-center p-8 md:p-16 lg:p-32 lg:py-16 space-y-20 urbanist-font">
      <h1 className="text-3xl md:text-5xl font-bold">Newsletters</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-12">
        {currentNewsletters.map((newsletter, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <Link href={newsletter.link} passHref>
              {/* <a target="_blank" rel="noopener noreferrer"> */}
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer">
                  <Image
                    src={newsletter.image}
                    alt={newsletter.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
                    {newsletter.title}
                  </div>
                </div>
              {/* </a> */}
            </Link>

          </div>

        ))}
      </div>
      {
        newsletters.length > 6 && (
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
        )
      }
    </div>
  );
};

export default Newsletter;
