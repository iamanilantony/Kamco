import Image from "next/image";
import Link from "next/link";
import React from "react";

const SupplierRegistration = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center text-left inter-font">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl py-12">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          Supplier Registration Request
        </h1>

        {/* Logo and Contact Section */}
        <div className="text-center mb-6 grid place-items-center">
          <Image
            src="/new_images/logo.webp"
            alt="KAMCO Logo"
            width={200}
            height={200}
          />
          <h2 className="text-xl font-bold">
            Kerala Agro Machinery Corporation Ltd
          </h2>
          <p className="italic">(A Government of Kerala Undertaking)</p>
          <p className="mt-2">
            Regd.Office: Athani – 683 585, Ernakulam Dist., Kerala State <br />
            Tel: 0484-2474301 (5 lines) Fax: 0484-2474589 <br />
            Email:{" "}
            <Link href="mailto:mail@kamcoindia.com" className="text-blue-500">
              mail@kamcoindia.com
            </Link>{" "}
            <br />
            Website:{" "}
            <Link href="https://web.kamcoindia.com" className="text-blue-500">
              www.kamcoindia.com
            </Link>
          </p>
        </div>

        {/* Content Section */}
        <div className="text-gray-700 leading-relaxed mb-8">
          <p>
          Kerala Agro Machinery Corporation Ltd. (KAMCO) is dedicated to meeting the farming needs of small and marginal farmers by providing access to mechanized farming. Our products are designed to help small farmers enjoy the benefits of modern agricultural technology. Each product undergoes rigorous testing and certification by competent authorities to ensure the highest quality standards. KAMCO has earned the prestigious ISO 9001:2015 certification for maintaining global standards and systems.
          </p>
          <br/>
          <p>
KAMCO offers a wide range of products, including Tillers, Tractors, Reapers, Diesel Engines, Weeders, Brush Cutters, Pumpsets and other agricultural machineries. Our success can be attributed to a unique marketing strategy that has enabled us to expand our reach beyond India, capturing the International Agro-machinery market.
          </p>
        </div>

        {/* Applications Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Applications are invited for enlistment/registration of suppliers
            for the supply of:
          </h3>
          <p>
            All components such as castings, sheet metal, fabricated items,
            machined items, gears, sub-assemblies, bearings, fasteners,
            accessories, etc., used for Tractors, Power Tillers, Power Reapers,
            Weeders, and other agricultural machinery manufactured by us.
          </p>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <p className="mb-8">
            Interested parties may download the Vendor Registration Form (VRF)
            from the website indicated below and send the VRF duly filled up
            along with their details and credentials to
            <Link
              href="mailto:materials@kamcoindia.com"
              className="text-blue-500"
            >
              {" "}
              materials@kamcoindia.com
            </Link>{" "}
            and
            <Link href="mailto:mail@kamcoindia.com" className="text-blue-500">
              {" "}
              mail@kamcoindia.com
            </Link>
            .
          </p>
          <Link
            href="https://web.kamcoindia.com/userfiles/VRF(1).pdf" // Replace with the actual download link
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to DOWNLOAD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupplierRegistration;
