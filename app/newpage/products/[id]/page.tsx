"use client";

import { CircleCheck, ShieldCheck } from "lucide-react";
import { VscTools } from "react-icons/vsc";
import { useParams } from 'next/navigation';
import products from '@/public/data/productDetails.json'
import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import Image from "next/image";

const ProductInfo = () => {

  const { id } = useParams();
  const product = products && products?.products.find(prod => prod.id === id);

  const specs = [
    { label: "Engine Model", value: "ER 90" },
    { label: "Tiller Model", value: "KMB 200" },
    {
      label: "Type",
      value: "Rotary, Diesel powered, water cooled with radiator",
    },
    { label: "Width", value: "600mm" },
    { label: "RPM", value: "2000" },
    { label: "Fuel Consumption", value: "1.5 litres per hour" },
    { label: "Fuel tank Capacity", value: "10.7 litres" },
    { label: "Depth", value: "190mm" },
    { label: "Speeds", value: "Forward 6| Backward 2| Tilling 4" },
    { label: "Wheel Track", value: "Max: 930mm| Min: 690mm" },
    { label: "Travelling Speed", value: "15kmph" },
    { label: "Tilling Capacity", value: "1 hect/8hrs" },
    { label: "Weight", value: "485 kg" },
    { label: "Trailer Body", value: "1830x980x350mm" },
    { label: "No of Blades", value: "20" },
    { label: "Light Unit", value: "12 volts, 90 Watts" },
  ];

  const highlights = [
    {
      icon: <ShieldCheck size={36} />,
      text: "2-year warranty on engine and major parts",
    },
    {
      icon: <VscTools size={36} className="font-bold text-xl" />,
      text: "Routine checks for hydraulic system and oil changes",
    },
    {
      icon: <CircleCheck size={36} />,
      text: "Compatible with most standard agricultural implements",
    },
  ];

  const additionalFeatures = [
    "Adjustable Depth Control Skid Shoes: The adjustable depth control skid shoes allow precise control over the depth of tillage, ensuring optimal soil preparation for various crops. This feature enables farmers to tailor the tilling process to specific soil conditions and planting requirements.",
    "Durable Side Chain Drive: The durable side chain drive system efficiently transfers power from the engine to the tilling blades, ensuring consistent performance and longevity. This robust design minimizes downtime and reduces maintenance needs, making it a reliable choice for demanding agricultural applications.",
    "Rear Debris Shield: The rear debris shield effectively prevents soil and debris from being thrown backward, minimizing soil erosion and creating a cleaner working environment. This feature also helps to protect the operator from flying debris, enhancing safety and comfort during operation.",
  ];
  const models = ["KMB200"];


  if (!product) {
      return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full urbanist-font p-8 md:p-16 lg:p-32">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8 pb-12">
        <Image
          src={product.image[0]}
          alt="Tractor"
          width={800}
          height={600}
          draggable={false}
          className="w-full lg:w-1/2 h-auto "
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full lg:w-1/2">
          <Image
            height={300}
            width={400}
            draggable={false}
            src={product.image[0] || "/new_images/products/product/img1.webp"}
            alt="Tractor in Field"
            className="w-full h-auto"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src="/new_images/products/product/img2.webp"
            alt="Tractor in Water"
            className="w-full h-auto"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src="/new_images/products/product/img3.webp"
            alt="Tractor in Muddy Terrain"
            className="w-full h-auto"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src="/new_images/products/product/img4.webp"
            alt="Tractor near Tree"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="">
        <div className="flex max-sm:flex-col justify-between items-center w-full">
          <div className="flex justify-center gap-8 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Power Tillers
            </h2>
            <select className="border h-12 border-gray-300 p-2 rounded w-full md:w-auto bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out shadow-sm">
              <option value="KMB200">KMB200</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex justify-between gap-3 items-center mb-8">
            <Button
              size={"lg"}
              className="bg-[#166434] hover:bg-[#166434] py-8 md:py-8 px-6 md:px-12 text-xl rounded-2xl"
            >
              Contact Dealers
            </Button>
            <Button className="bg-[#C0EBA6] hover:bg-[#C0EBA6] text-black py-8 md:py-8 px-6 md:px-12 text-xl rounded-2xl">
              Enquire Now
            </Button>
          </div>
        </div>
        <p className="text-black inter-font text-lg">
          The KAMCO Power Tiller is a robust and efficient agricultural tool
          designed to simplify farming tasks. It's a versatile machine that can
          handle a variety of field operations, from tilling to ploughing and
          more. With its powerful engine and sturdy build, the KAMCO Power
          Tiller can effortlessly tackle tough terrains and heavy-duty work. Its
          ergonomic design ensures comfortable operation, reducing fatigue and
          maximizing productivity. Whether you're a small-scale farmer or a
          large-scale agricultural operation, the KAMCO Power Tiller is a
          reliable and cost-effective solution. Experience the power and
          precision of KAMCO, and take your farming to the next level.
        </p>
      </div>
      <hr className="w-full h-[2px] bg-black" />
      <div className="flex gap-5 max-sm:flex-col justify-between items-center w-full">
        <div className="md:w-2/5 space-y-12">
          <h1 className="text-2xl font-bold">Highlights</h1>
          <div className="flex ">
            <div className="flex gap-3 ">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 items-center text-center"
                >
                  <div className="p-4 bg-[#FFFBE6] rounded-full flex justify-center items-center text-[#5B5B5B]">
                    {highlight.icon}
                  </div>
                  <p className="text-black">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-12 md:w-1/2">
          <h1 className="text-3xl font-bold">Additional Features</h1>
          <ul className="list-disc pl-5 space-y-6 text-black text-lg">
            {additionalFeatures.map((feature, index) => (
              <li key={index} className="inter-font">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-black" />
      <div className="w-full space-y-12 ">
        <h1 className="text-3xl font-bold">Product Specifications</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-8 md:gap-y-12">
          {specs.map((spec, index) => (
            <div key={index}>
              <p className="font-medium text-normal flex flex-col">
                {spec.label}
              </p>
              <div className="inter-font mt-2 font-bold text-xl">
                {spec.value.split("|").map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full h-[2px] bg-black" />

      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold">International Delivery</h1>
        <p className="inter-font text-lg">
          Experience the power and efficiency of the KAMCO Power Tiller, now
          available for international delivery. Whether you're a farmer in the
          heartland of America, the fertile fields of Europe, or the diverse
          landscapes of Asia, our reliable and durable tiller is designed to
          meet your specific needs. With its robust engine, versatile
          implements, and user-friendly design, the KAMCO Power Tiller is the
          perfect tool to elevate your agricultural practices. Order yours today
          and revolutionize your farming operations on a global scale.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
