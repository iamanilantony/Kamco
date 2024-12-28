import Link from "next/link";
import React from "react";

const DealerRegistration: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center inter-font">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Dealer Registration Request
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-8">
          Please click here to download the Dealership Application Form.
        </p>

        {/* Download Button */}
        <div className="mb-6">
          <Link
            href="https://www.kamcoindia.com/userfiles/KAMCO-APPLICATION-FOR-DEALERSHIP.pdf" // Replace with the actual download link
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to DOWNLOAD
          </Link>
        </div>

        {/* Footer Section */}
        <p className="text-sm text-gray-600">
          Scanned copy of the duly filled and signed application form along with
          the required documents may be sent to us by mail at{" "}
          <a
            href="mailto:marketing@kamcoindia.com"
            className="text-blue-500 hover:underline"
          >
            marketing@kamcoindia.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DealerRegistration;
