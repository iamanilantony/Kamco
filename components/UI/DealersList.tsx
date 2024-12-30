"use client";

import { useState } from "react"; // Import useState hook
import Link from "next/link";
import dealersData from "@/public/data/dealers";
import states from "@/public/data/states";

export default function DealersPage() {
  const [filteredDealers, setFilteredDealers] = useState(dealersData); // Initialize filtered dealers with all dealers

  const handleStateSelect = (state: string) => {
    const filtered = dealersData.filter((dealer) => dealer.state === state);
    setFilteredDealers(filtered); // Update the filtered dealers state
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 font-sans mt-8">
      <h1 className="text-3xl font-bold mb-6">Authorized Dealers</h1>

      {/* Filter, Sort, and Categories Select Inputs */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4">
        <select
          className="border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base w-full md:w-auto"
          onChange={(e) => handleStateSelect(e.target.value)}
        >
          <option value="" disabled selected>
            State
          </option>{" "}
          {/* Placeholder */}
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Dealers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDealers.map((dealer, index) => (
          <div
            className="p-6 border rounded-lg shadow-sm bg-white text-left hover:bg-[#166434] hover:text-white cursor-pointer transition duration-300 ease-in-out"
            key={index}
          >
            <h2 className="ml-0 text-lg font-bold">{dealer.name}</h2>
            <p className="text-sm">{dealer.address}</p>
            <p className="text-sm mt-2">Tel: {dealer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
