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
            <Link href="https://www.kamcoindia.com" className="text-blue-500">
              www.kamcoindia.com
            </Link>
          </p>
        </div>

        {/* Content Section */}
        <div className="text-gray-700 leading-relaxed mb-8">
          <p>
            Kerala Agro Machinery Corporation Ltd. (KAMCO) is intended to cater
            to the farming requirements of small and marginal scale farmers. It
            is an initiative to allow small farmers to enjoy mechanized farming.
            The quality standard for each and every product has been tested &
            certified by competent authorities. The global standard and system
            maintained has earned KAMCO ISO 9001:2008 certifications.
          </p>
          <p className="mt-4">
            KAMCO's product range includes Tiller, Tractor, Reaper, Diesel
            Engine, Weeder, Brush Cutter and Pumpset. Its unparalleled success
            can be attributed to its unique marketing strategy. Today, KAMCO's
            marketing efforts have gone above the confines of India to capture
            the overseas agro-machinery market.
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
            href="https://www.kamcoindia.com/userfiles/VRF(1).pdf" // Replace with the actual download link
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
