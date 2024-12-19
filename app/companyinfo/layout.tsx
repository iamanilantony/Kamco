import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Companylayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen md:px-16 px-8 gap-16 relative">
      <div className="space-y-8 md:space-y-12 sticky top-0 self-start pt-24 max-md:hidden">
        {[
          { title: "Company Profile", link: "#" },
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
        ].map((rule, index) => (
          <Link
            key={index}
            href={rule.link}
            style={{
              textWrap: "nowrap",
            }}
            className="underline underline-offset-2 flex items-center text-black group "
          >
            {rule.title}
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
      <div className="overflow-y-scroll flex-1 scroll-smooth">{children}</div>
    </div>
  );
};

export default Companylayout;
