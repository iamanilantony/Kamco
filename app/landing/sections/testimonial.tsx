import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type ReviewCardProps = {
  name: string;
  designation: string;
  location: string;
  rating: number;
  review: string;
  profileImage: string;
  className?: string;
};

const ReviewCard = ({
  name,
  designation,
  location,
  rating,
  review,
  profileImage,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#f9fafb] border rounded-3xl p-4 min-h-[300px] sm:p-6 w-[85vw] sm:w-[60vw] md:w-[calc(50vw-50px)] relative border-black my-16  mx-4 sm:mx-8 text-left",
        className
      )}
    >
      {/* making the inward curve */}
      <div className=" absolute top-0 left-20 -translate-x-[0.55rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-2">
        <div className="h-5 w-5 rounded-tl-3xl border-black border-t border-l"></div>
      </div>

      <div className=" absolute top-20 left-0 -translate-x-[0.3rem] -translate-y-[0.55rem] z-50 bg-white pl-1 pt-1">
        <div className="h-5 w-5 rounded-tl-3xl border-black border-t border-l"></div>
      </div>

      <div className=" h-20 w-20 absolute -top-1 -left-1 rounded-br-3xl bg-white border-b border-r border-black">
        <div className="w-20 h-20 rounded-full bg-red-500 -translate-x-2 -translate-y-2 overflow-hidden">
          <Image
            height={80}
            width={80}
            src={profileImage}
            alt={`'s profile`}
            className="w-20 h-20 rounded-br-xl object-cover"
          />
        </div>
      </div>
      <div className="flex items-center mb-4 ml-16">
        {/* Name and Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-2 sm:gap-0">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {designation}, {location}
            </p>
          </div>
          {/* Rating */}
          <div className="flex items-center">
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
      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed my-3 sm:my-5 sm:mt-8">
        {review}
      </p>
    </div>
  );
};

const Testimonial = () => {
  //create me some testimonial cards content
  const testimonialCards = [
    {
      name: "John Doe",
      designation: "Farmer",
      location: "Agribusiness Owner, Kochi, Kerala",
      rating: 5,
      review:
        "Kamco’s website is a go-to resource for farmers and agricultural businesses seeking high-quality equipment. The site’s design is clean and user-friendly, making it easy for visitors to explore their extensive range of tools, from tractors to reapers and tillers. Each product page provides detailed specifications and practical insights, helping users make informed choices. The site also includes a helpful blog, “Harvest Insights,” which covers valuable farming tips, industry news, and success stories. Overall, Kamco’s website is an excellent platform that reflects their commitment to empowering modern farmers with reliable, efficient tools and insightful resources.",
      profileImage: "/new_images/person.webp",
    },
    {
      name: "Jane Doe",
      designation: "Farmer",
      location: "Agribusiness Owner, Kochi, Kerala",
      rating: 4,
      review:
        "Kamco’s website is a go-to resource for farmers and agricultural businesses seeking high-quality equipment. The site’s design is clean and user-friendly, making it easy for visitors to explore their extensive range of tools, from tractors to reapers and tillers. Each product page provides detailed specifications and practical insights, helping users make informed choices. The site also includes a helpful blog, “Harvest Insights,” which covers valuable farming tips, industry news, and success stories. Overall, Kamco’s website is an excellent platform that reflects their commitment to empowering modern farmers with reliable, efficient tools and insightful resources.",
      profileImage: "/new_images/person.webp",
    },
    {
      name: "Jane Doe",
      designation: "Farmer",
      location: "Agribusiness Owner, Kochi, Kerala",
      rating: 4,
      review:
        "Kamco’s website is a go-to resource for farmers and agricultural businesses seeking high-quality equipment. The site’s design is clean and user-friendly, making it easy for visitors to explore their extensive range of tools, from tractors to reapers and tillers. Each product page provides detailed specifications and practical insights, helping users make informed choices. The site also includes a helpful blog, “Harvest Insights,” which covers valuable farming tips, industry news, and success stories. Overall, Kamco’s website is an excellent platform that reflects their commitment to empowering modern farmers with reliable, efficient tools and insightful resources.",
      profileImage: "/new_images/person.webp",
    },
    {
      name: "Jane Doe",
      designation: "Farmer",
      location: "Agribusiness Owner, Kochi, Kerala",
      rating: 4,
      review:
        "Kamco’s website is a go-to resource for farmers and agricultural businesses seeking high-quality equipment. The site’s design is clean and user-friendly, making it easy for visitors to explore their extensive range of tools, from tractors to reapers and tillers. Each product page provides detailed specifications and practical insights, helping users make informed choices. The site also includes a helpful blog, “Harvest Insights,” which covers valuable farming tips, industry news, and success stories. Overall, Kamco’s website is an excellent platform that reflects their commitment to empowering modern farmers with reliable, efficient tools and insightful resources.",
      profileImage: "/new_images/person.webp",
    },
    {
      name: "Jane Doe",
      designation: "Farmer",
      location: "Agribusiness Owner, Kochi, Kerala",
      rating: 4,
      review:
        "Kamco’s website is a go-to resource for farmers and agricultural businesses seeking high-quality equipment. The site’s design is clean and user-friendly, making it easy for visitors to explore their extensive range of tools, from tractors to reapers and tillers. Each product page provides detailed specifications and practical insights, helping users make informed choices. The site also includes a helpful blog, “Harvest Insights,” which covers valuable farming tips, industry news, and success stories. Overall, Kamco’s website is an excellent platform that reflects their commitment to empowering modern farmers with reliable, efficient tools and insightful resources.",
      profileImage: "/new_images/person.webp",
    },
  ];
  return (
    <div className="p-4 sm:p-16 mb-16 sm:mb-32 flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug urbanist-font text-center px-4">
        Farmers Recount Their Experiences
      </h1>
      <div className="p-2 sm:p-6 flex justify-center items-center w-full">
        <Marquee
          gradient={true}
          speed={40}
          gradientColor="white"
          gradientWidth={50}
          pauseOnClick={true}
          className="flex gap-16 sm:gap-32 my-12 sm:my-24"
        >
          {testimonialCards.map((testimonial, index) => (
            <ReviewCard
              className={
                index % 2 === 0 ? "translate-y-8 sm:translate-y-16" : ""
              }
              key={index}
              {...testimonial}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
