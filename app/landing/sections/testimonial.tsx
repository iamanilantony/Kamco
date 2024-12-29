"use client";

import { Star, Quote, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Animatedheading from "@/components/new_ui/animatedheading";
import { Swiper, SwiperSlide } from "swiper/react";
import useIsMobile from "@/lib/hooks/useIsMobile";

type ReviewCardProps = {
  name: string;
  designation: string;
  location: string;
  rating: number;
  review: string;
  profileImage: string;
  video: string;
  className?: string;
};

function ReviewCard({
  name,
  designation,
  location,
  rating,
  review,
  profileImage,
  video,
}: ReviewCardProps) {
  const handleClick = () => {
    window.open(video, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-2xl min-h-[385px] rounded-2xl bg-white p-6 shadow-xl sm:p-8 cursor-pointer transition-all hover:shadow-2xl mx-3">
      <div className="relative">
        <Quote className="h-8 w-8 text-[#274321]/20" />

        <div className="grid gap-6 md:grid-cols-[1fr,250px]">
          <div className="space-y-4">
            <p className="text-base text-left leading-relaxed text-gray-700 sm:text-lg line-clamp-6 sm:line-clamp-none">
              {review}
            </p>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-xl bg-gray-50 p-4">
            <div className="w-full  flex justify-center">
              <div className="relative w-24  h-24  overflow-hidden rounded-xl">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{designation}</p>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
            <div className="rounded-lg bg-[#274321]/5 p-2 flex items-center gap-2 w-fit md:w-auto mx-auto">
              <PlayCircle className="h-5 w-5 text-[#274321]" />
              <button
                onClick={() => handleClick()}
                className="text-xs font-medium text-[#274321]"
              >
                Watch Video Testimonial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Testimonial = () => {
  const testimonialCards = [
    {
      name: " Anil Pradhaan",
      designation: "Farmer",
      location: "Agribusiness Owner, Amritsar, Punjab",
      rating: 5,
      review:
        "Kamco’s website made finding the right tractor easy with clear details and reviews. The tractor improved productivity, and the excellent service ensured a smooth purchase. Its fuel efficiency and durability make it a great investment. Kamco’s quality and customer focus exceeded my expectations.",
      profileImage: "/new_images/testimonials/person1.jpg",
      video: "https://youtu.be/LhzGVPbqS1k",
    },
    {
      name: "Sunil Grover",
      designation: "Farmer",
      location: "Farm Entrepreneur, Ahmedabad, Gujarat",
      rating: 4,
      review:
        "Kamco’s site helped me find the ideal power weeder with ease. The support team promptly answered my questions. The equipment has reduced labor and boosted efficiency. The blog provided useful tips, and the weeder has been a durable tool for my farm.",
      profileImage: "/new_images/testimonials/person2.jpg",
      video: "https://youtu.be/kTi11aaSR5E",
    },
    {
      name: "Mahesh Kumar",
      designation: "Farmer",
      location: "Farmer, Hyderabad, Telangana",
      rating: 4,
      review:
        "Kamco’s range of implements and accurate reviews made my choice easy. The seamless purchase process and excellent support were impressive. The equipment has boosted farm productivity and reliability, making Kamco a top choice for farmers.",
      profileImage: "/new_images/testimonials/person3.png",
      video: "https://youtu.be/kTi11aaSR5E",
    },
    {
      name: " Anil Pradhaan",
      designation: "Farmer",
      location: "Agribusiness Owner, Amritsar, Punjab",
      rating: 5,
      review:
        "Kamco’s website made finding the right tractor easy with clear details and reviews. The tractor improved productivity, and the excellent service ensured a smooth purchase. Its fuel efficiency and durability make it a great investment. Kamco’s quality and customer focus exceeded my expectations.",
      profileImage: "/new_images/testimonials/person1.jpg",
      video: "https://youtu.be/LhzGVPbqS1k",
    },
    {
      name: "Sunil Grover",
      designation: "Farmer",
      location: "Farm Entrepreneur, Ahmedabad, Gujarat",
      rating: 4,
      review:
        "Kamco’s site helped me find the ideal power weeder with ease. The support team promptly answered my questions. The equipment has reduced labor and boosted efficiency. The blog provided useful tips, and the weeder has been a durable tool for my farm.",
      profileImage: "/new_images/testimonials/person2.jpg",
      video: "https://youtu.be/kTi11aaSR5E",
    },
    {
      name: "Mahesh Kumar",
      designation: "Farmer",
      location: "Farmer, Hyderabad, Telangana",
      rating: 4,
      review:
        "Kamco’s range of implements and accurate reviews made my choice easy. The seamless purchase process and excellent support were impressive. The equipment has boosted farm productivity and reliability, making Kamco a top choice for farmers.",
      profileImage: "/new_images/testimonials/person3.png",
      video: "https://youtu.be/kTi11aaSR5E",
    },
  ];

  const { ismobile } = useIsMobile();

  return (
    <div className="p-4 max-sm:px-0 sm:pt-16 mb-0 flex flex-col justify-center items-center max-w-[94vw] mx-auto">
      <Animatedheading>Farmers Recount Their Experiences</Animatedheading>

      <div className="sm:p-6 flex justify-center items-center w-full">
        <Swiper spaceBetween={10} slidesPerView={ismobile ? 1 : 2} loop={true}>
          {testimonialCards.map((testimonial, index) => (
            <SwiperSlide className="py-8" key={index}>
              <ReviewCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
