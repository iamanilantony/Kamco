import React from "react";

type ReviewCardProps = {
  name: string;
  designation: string;
  location: string;
  rating: number;
  review: string;
  profileImage: string;
};

const ReviewCard = ({
  name,
  designation,
  location,
  rating,
  review,
  profileImage,
}: ReviewCardProps) => {
  return (
    <div className="bg-[#f9fafb] border border-gray-200 rounded-lg p-6 max-w-md mx-auto shadow-sm">
      <div className="flex items-center mb-4">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        {/* Name and Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">
            {designation}, {location}
          </p>
        </div>
      </div>
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      {/* Review */}
      <p className="text-sm text-gray-700 leading-relaxed">{review}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="p-16 my-32 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug urbanist-font">
        Farmers Recount Their Experiences
      </h1>
      <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          fill="none"
        >
          <rect width="1000" height="600" fill="#F9FAFB" />

          <rect
            x="100"
            y="100"
            width="800"
            height="400"
            rx="16"
            fill="#FFFFFF"
            stroke="#E5E7EB"
          />

          <circle cx="160" cy="180" r="40" fill="url(#profileImage)" />

          <text
            x="220"
            y="170"
            fill="#111827"
            font-size="24"
            font-family="Arial, sans-serif"
            font-weight="bold"
          >
            Emily Green
          </text>
          <text
            x="220"
            y="200"
            fill="#6B7280"
            font-size="16"
            font-family="Arial, sans-serif"
          >
            Agribusiness Owner, Kochi, Kerala
          </text>

          <g transform="translate(820, 140)">
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#FBBF24"
            />
            <use x="30" href="#star" />
            <use x="60" href="#star" />
            <use x="90" href="#star" />
            <use x="120" href="#star" />
          </g>

          <foreignObject x="120" y="240" width="760" height="200">
            <p
              style={{
                color: "#374151",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Kamco’s website is a go-to resource for farmers and agricultural
              businesses seeking high-quality equipment. The site’s design is
              clean and user-friendly, making it easy for visitors to explore
              their extensive range of tools, from tractors to reapers and
              tillers. Each product page provides detailed specifications and
              practical insights, helping users make informed choices. The site
              also includes a helpful blog, “Harvest Insights,” which covers
              valuable farming tips, industry news, and success stories.
              Overall, Kamco’s website is an excellent platform that reflects
              their commitment to empowering modern farmers with reliable,
              efficient tools and insightful resources.
            </p>
          </foreignObject>

          <defs>
            <pattern
              id="profileImage"
              patternUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image
                href="https://via.placeholder.com/80"
                width="80"
                height="80"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
            <path
              id="star"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#FBBF24"
            />
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
