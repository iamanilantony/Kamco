"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import { MoveLeft, MoveRight } from "lucide-react";
import Modal from "@/components/new_ui/modal";

type ReviewCardProps = {
  name: string;
  designation: string;
  location: string;
  rating: number;
  review: string;
  profileImage: string;
  video: string;
  className?: string;
  onVideoClick: () => void;
};

const ReviewCard = ({
  name,
  designation,
  location,
  rating,
  review,
  profileImage,
  video,
  className,
  onVideoClick,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#f9fafb] border rounded-3xl p-4 min-h-[280px] sm:p-6 w-full relative border-black my-16 text-left",
        className
      )}
    >
      {/* making the inward curve */}
      <div className="absolute top-0 left-20 -translate-x-[0.55rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-2">
        <div className="h-5 w-5 rounded-tl-3xl border-black border-t border-l"></div>
      </div>

      <div className="absolute top-20 left-0 -translate-x-[0.3rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-1">
        <div className="h-5 w-5 rounded-tl-3xl border-black border-t border-l"></div>
      </div>

      <div className="h-20 w-20 absolute -top-1 -left-1 rounded-br-3xl bg-white border-b border-r border-black">
        <div className="w-20 h-20 rounded-full bg-white -translate-x-2 -translate-y-2 overflow-hidden relative">
          <button
            onClick={onVideoClick}
            className="w-20 h-20 rounded-br-xl object-cover cursor-pointer"
          >
            <Image
              height={120}
              width={120}
              src={profileImage}
              alt={`'s profile`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center mb-4 ml-16">
        {/* Name and Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 sm:gap-0">
          <div>
            <h3 className="text-base sm:text-3xl font-semibold text-gray-900">
              {name}
            </h3>
            <p className="text-xs sm:text-base text-gray-600">
              {designation}, {location}
            </p>
          </div>
          {/* Rating */}
          <div className="flex items-center ml-0 sm:ml-8">
            {[...Array(rating)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review */}
      <p className="text-xs sm:text-base text-gray-700 leading-relaxed my-3 sm:my-5 sm:mt-8">
        {review}
      </p>
    </div>
  );
};

const Testimonial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  const testimonialCards = [
    {
      name: "Rahul Singh",
      designation: "Farmer",
      location: "Agribusiness Owner, Amritsar, Punjab",
      rating: 5,
      review:
        "Kamco’s website made my search for high-quality tractors easy. The detailed specs and user reviews helped me make an informed choice. The tractor has improved my farm's productivity, and customer service ensured timely delivery. The fuel efficiency and durability make it a cost-effective investment. I appreciate Kamco's commitment to quality. The tractor's performance in various terrains has been exceptional, and it has significantly reduced my operational costs. I highly recommend Kamco to fellow farmers looking for reliable and efficient farming equipment.",
      profileImage: "/new_images/testimonials/person1.jpg",
      video: "https://www.youtube.com/watch?v=LhzGVPbqS1k",
    },
    {
      name: "Priya Patel",
      designation: "Farmer",
      location: "Farm Entrepreneur, Ahmedabad, Gujarat",
      rating: 4,
      review:
        "Kamco’s site helped me find the perfect power weeder. The support team answered my queries promptly, and the descriptions made choosing easy. The power weeder reduced manual labor and increased efficiency. The durability is outstanding, and Kamco is a great resource for farmers upgrading their tools. The power weeder's ergonomic design and ease of use have made it an indispensable tool on my farm. The after-sales service provided by Kamco has been excellent, ensuring that any issues are resolved quickly and efficiently.",
      profileImage: "/new_images/testimonials/person2.jpg",
      video: "https://www.youtube.com/watch?v=kTi11aaSR5E",
    },
    {
      name: "Mahesh Kumar",
      designation: "Farmer",
      location: "Farmer, Hyderabad, Telangana",
      rating: 4,
      review:
        "Kamco offers excellent agricultural implements. The product specs and reviews guided me to the right choice. The equipment has been a game-changer, boosting efficiency. Their after-sales support has been commendable, and the reliability of Kamco's products has exceeded my expectations. The equipment's robust build and advanced features have significantly improved my farming operations. Kamco's dedication to innovation and quality is evident in every product, making them a trusted partner for my agricultural needs.",
      profileImage: "/new_images/person.webp",
      video: "https://www.youtube.com/watch?v=zoVUu-0Z2JE",
    },
    {
      name: "Anjali Varma",
      designation: "Farmer",
      location: "Farm Owner, Jaipur, Rajasthan",
      rating: 4,
      review:
        "Kamco’s site was effortless to use. Their blog taught me new farming techniques, and the product descriptions gave me confidence. The tools improved my farm's productivity and simplified tasks. Kamco’s quality and customer support make them my go-to source for equipment. The detailed guides and tutorials on their website have been incredibly helpful in optimizing my farming practices. Kamco's commitment to customer satisfaction is evident in their prompt and efficient service.",
      profileImage: "/new_images/person.webp",
      video: "https://www.youtube.com/watch?v=zoVUu-0Z2JE",
    },
    {
      name: "Arjun Reddy",
      designation: "Farmer",
      location: "Agripreneur, Guntur, Andhra Pradesh",
      rating: 4,
      review:
        "I’m thrilled with my Kamco drone. The website guided me step by step, and the drone has transformed crop monitoring. The quality is top-notch, and its advanced features optimize crop management. Kamco’s focus on innovation is evident in their products. The drone's high-resolution imaging and real-time data analysis have revolutionized my approach to farming. Kamco's continuous support and updates ensure that I am always equipped with the latest technology to enhance my farm's productivity.",
      profileImage: "/new_images/person.webp",
      video: "https://www.youtube.com/watch?v=zoVUu-0Z2JE",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className=" mb-16 sm:mb-64 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug urbanist-font text-center px-4">
        Farmers Recount Their Experiences
      </h1>
      <div className="p-2 max-sm:px-2 flex justify-center items-center w-full relative">
        <button
          className="absolute left-8 z-10 p-2 max-sm:hidden"
          // @ts-ignore
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MoveLeft size={72} />
        </button>
        <button
          className="absolute right-32 z-10 p-2 max-sm:hidden"
          // @ts-ignore
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MoveRight size={72} />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={150}
          slidesPerView={2.35}
          loop={true}
          onSwiper={(swiper) => {
            //@ts-ignore
            swiperRef.current = swiper;
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 2.35,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 2.35,
              spaceBetween: 150,
            },
          }}
          className="mySwiper w-full"
        >
          {testimonialCards.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                className={cn(
                  index % 2 != 0 || index == testimonialCards.length - 1
                    ? "mt-52"
                    : ""
                  // index % 2 == 0 ? "opacity-60" : ""
                )}
                onVideoClick={() => openModal(testimonial.video)}
                {...testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>
  );
};

export default Testimonial;
