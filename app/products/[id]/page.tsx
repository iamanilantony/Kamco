"use client";

import { CircleCheck, ShieldCheck } from "lucide-react";
import { VscTools } from "react-icons/vsc";
import { useParams, useRouter } from "next/navigation";
import products from "@/public/data/tempProductDetils";
import React from "react";
import { Button } from "@/components/UI/button";
import Image from "next/image";

const ProductInfo = () => {
  const params = useParams();
  const id = params?.id;
  const product = products && products.find((prod) => prod.id === String(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    specs,
    highlights,
    additionalFeatures,
    models,
    productDescription,
    internationalDelivery,
  } = product;

  const highlightIcons = {
    ShieldCheck: <ShieldCheck size={36} />,
    VscTools: <VscTools size={36} className="font-bold text-xl" />,
    CircleCheck: <CircleCheck size={36} />,
  };

  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full urbanist-font p-8 md:p-16 lg:p-32 text-left">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8 pb-12">
        <Image
          src={product.image[0]}
          alt="Tractor"
          width={800}
          height={600}
          draggable={false}
          className="w-full lg:w-1/2 object-contain h-auto border border-gray-300 rounded-xl max-h-[30rem]"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full lg:w-1/2 max-h-[30rem]">
          {/* <Image
            height={300}
            width={400}
            draggable={false}
            src={product.image[1] || "/new_images/products/product/img1.webp"}
            alt="Tractor in Field"
            className="w-full h-full object-contain border border-gray-300 rounded-xl"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src={product.image[2] || "/new_images/products/product/img2.webp"}
            alt="Tractor in Water"
            className="w-full h-full border border-gray-300 rounded-xl"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src={product.image[3] || "/new_images/products/product/img3.webp"}
            alt="Tractor in Muddy Terrain"
            className="w-full h-full border border-gray-300 rounded-xl"
          />
          <Image
            height={300}
            width={400}
            draggable={false}
            src={product.image[4] || "/new_images/products/product/img4.webp"}
            alt="Tractor near Tree"
            className="w-full h-full border border-gray-300 rounded-xl"
          /> */}
          {product.image.slice(1, 5).map((img, index) => (
            <Image
              key={index}
              height={300}
              width={400}
              draggable={false}
              src={img}
              alt="Tractor in Field"
              className="w-full h-full object-contain border border-gray-300 rounded-xl"
            />
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex max-sm:flex-col justify-between items-center w-full">
          <div className="flex justify-center gap-8 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold">{product.name}</h2>
            <select className="border h-12 border-gray-300 p-2 rounded w-full md:w-auto bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out shadow-sm">
              {models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between gap-3 items-center mb-8">
            <Button
              onClick={() => router.push("/dealers")}
              size={"lg"}
              className="bg-[#166434] hover:bg-[#166434] py-8 md:py-8 px-6 md:px-12 text-xl rounded-2xl"
            >
              Contact Dealers
            </Button>
            <Button
              onClick={() => router.push("/#connect")}
              className="bg-[#C0EBA6] hover:bg-[#C0EBA6] text-black py-8 md:py-8 px-6 md:px-12 text-xl rounded-2xl"
            >
              Enquire Now
            </Button>
          </div>
        </div>
        <p className="text-black inter-font text-base font-medium">
          {productDescription}
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
                    {
                      // @ts-ignore
                      highlightIcons[highlight.icon]
                    }
                  </div>
                  <p className="text-black text-base">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-12 md:w-1/2">
          <h1 className="text-3xl font-bold">Additional Features</h1>
          <ul className="list-disc pl-5 space-y-6 text-black text-base">
            {additionalFeatures.map((feature, index) => (
              <li key={index} className="inter-font font-medium ">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-black" />
      <div className="w-full space-y-4 ">
        <h1 className="text-3xl font-bold">Product Specifications</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-8 md:gap-y-8">
          {specs.map((spec, index) => (
            <div key={index}>
              <p className="font-medium text-normal flex flex-col">
                {spec.label}
              </p>
              <div className="inter-font mt-2 font-bold text-xl">
                {spec.value.split("|").map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full h-[2px] bg-black" />

      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold">International Delivery</h1>
        <p className="inter-font text-base">{internationalDelivery}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
