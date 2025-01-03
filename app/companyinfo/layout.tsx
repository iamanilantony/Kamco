"use client";

import { Button } from "@/components/UI/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Companylayout = ({ children }: { children: React.ReactNode }) => {
  const [activeLink, setActiveLink] = useState<string>("");

  const links = [
    { title: "Company Profile", link: "#Company Name" },
    { title: "Marketing", link: "#Marketing" },
    {
      title: "Memorandum of Association",
      link: "#Memorandum of Association",
    },
    { title: "Rules and Regulations", link: "#Rules and Regulations" },
    {
      title: "Quality Systems and Certifications",
      link: "#Quality Systems and Certifications",
    },
    { title: "Directory of Employee", link: "#Directory of Employee" },
  ];

  return (
    <div className="flex min-h-screen px-12 gap-12 relative -mt-16 md:-mt-20">
      <div className="space-y-8 sticky top-0 self-start pt-24 max-md:hidden flex flex-col justify-start">
        {links.map((rule, index) => (
          <Button
            key={index}
            className="bg-gray-100 shadow-sm text-left w-full md:p-5 md:py-6 hover:bg-gray-200 active:bg-gray-300 transition-colors"
          >
            <Link
              href={rule.link}
              scroll={false}
              style={{ textWrap: "nowrap" }}
              // Apply a different text color for the active link
              className={`flex items-start group text-base w-full transition-colors ${
                activeLink === rule.link
                  ? "text-green-600 font-semibold"
                  : "text-black"
              }`}
              onClick={(e) => {
                e.preventDefault();
                // Record which link was clicked
                setActiveLink(rule.link);

                const targetId = rule.link.replace("#", "");
                const targetElem = document.getElementById(targetId);

                if (targetElem) {
                  const offsetPos =
                    targetElem.getBoundingClientRect().top +
                    window.scrollY -
                    120; // 20px offset
                  window.scrollTo({ top: offsetPos, behavior: "smooth" });
                }
              }}
            >
              {rule.title}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        ))}
      </div>

      <div className="overflow-y-scroll flex-1 scroll-smooth scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default Companylayout;
