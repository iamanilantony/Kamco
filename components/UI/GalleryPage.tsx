"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

interface GalleryProps {
  images: string[]
  imagesPerPage?: number
}

export default function Gallery({ images, imagesPerPage = 10 }: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(images.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = images.slice(startIndex, endIndex)

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h5 className='w-full text-center text-4xl font-bold mb-10'>Gallery</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="aspect-square relative overflow-hidden rounded-lg shadow-md">
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
  )
}

