import CompanyInfoPage from "@/components/UI/CompanyInfo";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col md:flex-row justify-center py-10 md:mx-20">
            {/* Left Side - Contact Information */}
            <div className="md:w-max p-6 py-12 border-2 border-[#166434] md:rounded-2xl rounded-xl flex flex-col justify-start mx-auto md:mx-16 mb-8 md:mb-0"> 
                {/* Centered on mobile */}
                <h2 className="text-2xl font-semibold mb-6 text-left">Important Links</h2>
                <ol className="list-decimal pl-5 space-y-4 text-left text-base font-medium text-gray-700">
                    <li>
                        <Link
                            href="https://www.kamcoindia.com/userfiles/PIO_24-04-2024(1).jpg"
                            target="_blank"
                            className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
                        >
                            List of Public Information Officers
                        </Link>
                    </li>
                    <li>
                        Query Disposition Status (BEFORE 2020):
                        <span className="block mt-2">
                            <Link
                                href="https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                                target="_blank"
                                className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
                            >
                                2021
                            </Link>
                        </span>
                        <span className="block mt-2">
                            <Link
                                href="https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                                target="_blank"
                                className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
                            >
                                2022
                            </Link>
                        </span>
                        <span className="block mt-2">
                            <Link
                                href="https://www.kamcoindia.com/userfiles/CSR_KAMCO.pdf"
                                target="_blank"
                                className="cursor-pointer hover:bg-gray-100 rounded-md p-2 block"
                            >
                                2023
                            </Link>
                        </span>
                        (Click on the required year)
                    </li>
                </ol>
            </div>
        </div>
    );
}