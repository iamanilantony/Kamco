"use client";
import React, { useState } from "react";
import InfoDiv from "@/components/new_ui/infoDiv";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
const ConpanyInfo = () => {
  const CompanyActivities = [
    "Manufacturing and marketing of Agriculture machines like Power Tillers, Tractors, Power Reaper, Diesel Engines etc.",
    "Power Tiller produced at Athani & Palakkad units. Major components for Power Tiller are manufactured at Athani and all other components bought out from dedicated Venders in India. There are around 250 vendors now.",
    "Kalamassery unit produce Engine for Power Tiller",
    "Power Reaper produced at Mala",
    "Trading/manufacturing of other farm machines.",
  ];

  const marketing = [
    "The Company has 45 dealers all over India.",
    "New Dealers appointed to cover selected districts in Tamil Nadu, Karnataka, Maharashtra, Orissa and Andra Pradesh.",
    "Close interaction with the Govt. of India in the formulation of new schemes & policies for farm mechanization.",
    "Regular demonstrations and service camps are being organized in various States.",
    " Kamco Power Reaper has been exported to Iran and Sri Lanka recently. These Machines has been well accepted by the customers.",
  ];

  const Certifications = [
    {
      title: "Quality Systems",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: " ISO 9001 - 2000 Version",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Quality Policy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Quality Objectives",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "ISO Procedures and Manuals",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const tableData = [
    { department: "Corporate Office", cols: [1, 1, 0, 0, 0, 0] },
    { department: "Marketing", cols: [1, 1, 0, 0, 0, 0] },
    { department: "Materials", cols: [1, 0, 0, 0, 0, 0] },
    { department: "Purchase", cols: [0, 1, 1, 1, 1, 1] },
    { department: "Production", cols: [0, 0, 0, 0, 0, 0] },
    { department: "Assembly", cols: [0, 1, 1, 1, 1, 1] },
    { department: "Pretreatment&Ptg", cols: [0, 1, 1, 1, 1, 0] },
    { department: "Machine Shop", cols: [0, 1, 0, 0, 0, 0] },
    { department: "Maintenance", cols: [0, 1, 1, 1, 1, 1] },
    { department: "Quality Assurance", cols: [0, 1, 1, 1, 1, 1] },
    { department: "Engineering", cols: [0, 1, 0, 0, 0, 0] },
    { department: "Store", cols: [0, 1, 1, 1, 1, 1] },
    { department: "Human Resource Management", cols: [1, 1, 1, 1, 1, 1] },
    { department: "Human Resource Development", cols: [1, 1, 0, 0, 0, 0] },
    { department: "Finance", cols: [1, 1, 1, 1, 1, 1] },
    { department: "Internal Audit", cols: [1, 1, 0, 0, 0, 0] },
    { department: "Systems", cols: [1, 1, 0, 0, 0, 0] },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full py-6 md:py-12 space-y-8 md:space-y-12 mt-6 md:mt-12 text-left">
      <InfoDiv title="Company Name">
        Kerala Agro Machinery Corporation Ltd. (KAMCO) was established in the
        year 1973 as a wholly owned subsidiary of Kerala Agro Industries
        Corporation Ltd. (KAIC), Trivandrum, for manufacture of agricultural
        machinery specifically Power Tillers and Diesel Engines. Subsequently
        KAMCO became a separate Govt. of Kerala undertaking in 1986. Paid up
        capital is Rs. 161 lakh Present Net Worth of the Company is Rs. 6014.14
        lakh. Total work force at present is 567 Certified for ISO 9001 - 2000
        version from September 2002.At present, KAMCO has five units located at
        Athani and Kalamassery in Ernakulam District , at Kanjikode in Palakkad
        District, at Mala in Trichur dist. and at Valiyavelicham in Kannur
        District. With the present work force KAMCO can produce 8400 Power
        Tillers & 1200 Power Reapers per annum.
      </InfoDiv>
      <div className="relative rounded-xl">
        <Image
          src="/new_images/companydetails.webp" // Replace with your image path
          alt="Farming Insights"
          className="rounded-lg shadow-md object-cover w-full h-64 max-sm:h-32"
          width={800}
          height={400}
          draggable={false}
        />
      </div>
      <InfoDiv title="Objective of the Company">
        <div className="space-y-8">
          <p>
            The objectives of the Company are to manufacture in India, either in
            collaboration with or otherwise or import & trade agricultural
            machinery like Tractors, Power Tillers, Power Reapers, Combine
            harvester, Transplanter, Diesel Engines, Pump sets, Implements,
            accessories and spares thereto. The objectives also include
            establishment of engineering workshops/repair shops to undertake
            repairs and servicing of agricultural machinery or other machinery,
            equipment, implements and tools.
          </p>
          <p>
             Assembly Unit was established in 1970 at Athani by M/s. Kerala Agro
            Industries Corporation for the assembly of Kubota Power Tillers in
            technical collaboration with M/s.Kubota Ltd., Japan, the world's
            leading manufacturer of Power Tillers and other agricultural
            machinery. On expiry of the collaboration, KAMCO manufactures power
            tillers with their own facilities.
          </p>
          <p>
             KAMCO Power Tillers have become the most sought after Power Tillers
            in India because of their quality and reliability.
          </p>
        </div>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Activities of the Company">
        <div className="space-y-6">
          {CompanyActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#fffbe6] p-4 md:p-6 px-6 md:px-12 rounded-2xl"
            >
              <p className="text-sm md:text-base">{activity}</p>
            </div>
          ))}
        </div>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      {/* table div */}
      <div className="overflow-x-auto p-2 md:p-4">
        <table className="table-auto min-w-[800px] md:w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#FFFBE6]">
              <th className="border border-black p-2 text-left font-semibold">
                Division/ <br />
                Department
              </th>
              <th className="border border-black p-2">Corporate Setup</th>
              <th className="border border-black p-2">Athani</th>
              <th className="border border-black p-2">Palakkad</th>
              <th className="border border-black p-2">Kalamassery</th>
              <th className="border border-black p-2">Mala</th>
              <th className="border border-black p-2">Valiyavelicham</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-[#FFFBE6]">
                <td className="border border-black p-2">{row.department}</td>
                {row.cols.map((val, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-black p-2 text-center felx items-center justify-center"
                  >
                    {val === 1 && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.4974 10L9.16406 11.6667L12.9141 7.91669M6.10887 3.18227C6.77873 3.12881 7.41466 2.8654 7.92612 2.42954C9.11967 1.4124 10.8751 1.4124 12.0687 2.42954C12.5801 2.8654 13.2161 3.12881 13.8859 3.18227C15.4491 3.30701 16.6904 4.54831 16.8152 6.11149C16.8686 6.78136 17.132 7.41728 17.5679 7.92874C18.585 9.12229 18.585 10.8778 17.5679 12.0713C17.132 12.5828 16.8686 13.2187 16.8152 13.8885C16.6904 15.4517 15.4491 16.693 13.8859 16.8178C13.2161 16.8712 12.5801 17.1346 12.0687 17.5705C10.8751 18.5876 9.11967 18.5876 7.92612 17.5705C7.41466 17.1346 6.77873 16.8712 6.10887 16.8178C4.54568 16.693 3.30439 15.4517 3.17964 13.8885C3.12619 13.2187 2.86278 12.5828 2.42691 12.0713C1.40978 10.8778 1.40978 9.12229 2.42691 7.92874C2.86278 7.41728 3.12619 6.78136 3.17964 6.11149C3.30439 4.54831 4.54568 3.30701 6.10887 3.18227Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table div */}
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Marketing">
        <div className="space-y-4 md:space-y-6">
          {marketing.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#fffbe6] p-4 md:p-6 px-6 md:px-12 rounded-2xl"
            >
              <p className="text-sm md:text-base">{activity}</p>
            </div>
          ))}
        </div>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Memorandum of Association">
        <Link
          href="#"
          className="underline underline-offset-2 flex items-center text-black group"
        >
          {" "}
          View General Memorandum of Association{" "}
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Rules and Regulations">
        <div className="space-y-4 md:space-y-8">
          {[
            { title: "Standing Orders", link: "" },
            { title: "Delegation of Powers", link: "" },
            { title: "Staff by laws", link: "" },
            {
              title: "Recruitment and Promotion Policies of Officers",
              link: "",
            },
            {
              title: "Recruitment and Promotion Policies of Workers",
              link: "",
            },
            { title: "Leave rules", link: "" },
            { title: "PF Trust Rules", link: "" },
            { title: "Gratuity Rules", link: "" },
            { title: "Welfare Centre Functions", link: "" },
            { title: "Conveyance Advance", link: "" },
            { title: "Medical Reimbursement", link: "" },
            { title: "Group Personal Accident Insurance Scheme", link: "" },
            { title: "Group Personal Leave Encashment Scheme", link: "" },
          ].map((rule, index) => (
            <Link
              href={rule.link}
              className="underline underline-offset-2 flex items-center text-black group"
            >
              {" "}
              {rule.title}{" "}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Quality Systems and Certifications">
        <div className="space-y-4 md:space-y-6">
          {Certifications.map((faq, index) => {
            return (
              <motion.div className="flex flex-col gap-2" key={index}>
                <div
                  className="p-3 md:p-6 md:px-16 rounded-lg transition-colors max-w-full bg-[#fffbe6]"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {faq.title}
                    </h3>
                    <span className="text-xl font-bold">
                      {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 md:p-6 md:px-16 rounded-lg bg-[#c0eba6]"
                    >
                      <p className="mt-3 inter-font text-sm md:text-base">
                        {faq.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </InfoDiv>
      <hr className="w-full h-[2px] bg-black" />
      <InfoDiv title="Directory of Employee">
        <motion.div className="flex flex-col gap-2">
          <div
            className="p-3 md:p-6 md:px-16 rounded-lg transition-colors max-w-full bg-[#fffbe6]"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg  font- text-gray-900">Human Resources</h3>
              <span className="text-xl font-bold">
                {isActive ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="p-4 md:p-6 md:px-16 rounded-lg bg-[#c0eba6]"
              >
                <p className="mt-3 inter-font text-sm md:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt harum corporis quam vel beatae, aliquid error ullam
                  et, accusamus sint non nam blanditiis, id repudiandae fugit
                  excepturi delectus eius molestias.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </InfoDiv>
    </div>
  );
};

export default ConpanyInfo;