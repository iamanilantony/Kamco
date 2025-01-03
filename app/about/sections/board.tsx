import Image from "next/image";
import React from "react";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Shri. C K Sasidharan",
      role: "CHAIRMAN KAMCO",
      imageUrl: "/new_images/directors/Sasidharan.webp", // Replace with real image URL
    },
    {
      name: " Sri. N. Rajeev ",
      role: "MD i/c, KAMCO",
      imageUrl: "/MD.jpg", // Replace with real image URL
    },
    {
      name: " Sri. M.R. Anoop ",
      role: "Govt Director",
      imageUrl: null,
    },
    {
      name: "Sri. G. Sreeni",
      role: "Joint Secretary, Finance Department, Government of Kerala, Thiruvananthapuram",
      imageUrl: null,
    },
    {
      name: "Smt. T.D. Meena",
      role: "Govt Director",
      imageUrl: null,
    },
    {
      name: "Shri. Buhari",
      role: "Director, KAMCO",
      imageUrl: "/new_images/directors/Buhari.webp",
    },
    {
      name: "Shri. M T Nikson",
      role: "Director, KAMCO",
      imageUrl: "/new_images/directors/Nikson.webp",
    },
    {
      name: "Shri. K.A. Chackochan",
      role: "Director, KAMCO",
      imageUrl: "/new_images/directors/Chackochan.webp",
    },
    {
      name: "Shri. C.K. Gopi",
      role: "Director, KAMCO",
      imageUrl: "/new_images/directors/Gopi.webp",
    },
    {
      name: " Sri. Gopalakrishna Pillai",
      role: "Director, KAMCO",
      imageUrl: "/new_images/directors/Sri. Gopalakrishna Pillai.JPG",
    },
  ];

  const placeholderImage = "https://via.placeholder.com/150";
  return (
    <div className="p-8 md:space-y-16 space-y-8 md:my-20 my-8 ">
      <h2 className="text-3xl md:text-5xl font-bold text-center w-full mb-4 md:mb-6">
        Board of Directors
      </h2>

      <div className="flex flex-col gap-16 md:px-12">
        <div className="flex flex-col gap-5 mx-auto md:flex-row md:gap-48">
          {[directors[0], directors[1]].map((item, i) => {
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <Image
                  width={200}
                  height={200}
                  src={item.imageUrl || placeholderImage}
                  alt={`${item.name} - ${item.role}`}
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-5 gap-y-16 mx-auto sm:grid-cols-2 md:grid-cols-4">
          {directors.slice(2).map((item, i) => {
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <Image
                  width={200}
                  height={200}
                  src={item.imageUrl || placeholderImage}
                  alt={`${item.name} - ${item.role}`}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
