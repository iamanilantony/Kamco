import CompanyInfoPage from "@/components/UI/CompanyInfo";
import Link from "next/link";

export default function Page() {
  const links = [
    { href: "/Docs/PIO.pdf", text: "List of Public Information Officers" },
  ];

  const queryDispositionLinks = [
    {
      href: "https://web.kamcoindia.com/ckeditor_files/1729853675.pdf",
      text: "2023",
    },
    {
      href: "https://web.kamcoindia.com/ckeditor_files/1729853656.pdf",
      text: "2022",
    },
    {
      href: "https://web.kamcoindia.com/ckeditor_files/1729853636.pdf",
      text: "2021",
    },
    {
      href: "https://web.kamcoindia.com/userfiles/RIA%20-Register_Updated_ason_DEC2021(2).pdf",
      text: "BEFORE 2020",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center py-10 md:mx-20 mt-16 h-auto md:min-h-[60vh] overflow-y-auto">
      {/* Left Side - Contact Information */}
      <div className="w-full md:w-max p-6 py-12 border-2 border-[#166434] md:rounded-2xl rounded-xl flex flex-col justify-start mx-auto md:mx-16 mb-8 md:mb-0 ">
        {/* Centered on mobile */}
        <h2 className="text-2xl font-semibold mb-6 text-left">
          Important Links
        </h2>
        <ol className="list-decimal pl-5 space-y-4 text-left text-base font-medium text-gray-700">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
              >
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            Query Disposition Status:
            {queryDispositionLinks.map((link, index) => (
              <span className="block mt-2" key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
                >
                  {link.text}
                </Link>
              </span>
            ))}
            (Click on the required year)
          </li>
        </ol>
      </div>
    </div>
  );
}
