"use client";

import { useEffect } from "react";

const Newsletter = () => {
  useEffect(() => {
    window.location.href = "/api/downloadNewsletter";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* //tahank you for downloading our newsletter */}
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Thank you for downloading our newsletter
        </h1>
      </div>
    </div>
  );
};

export default Newsletter;
