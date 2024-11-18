"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';
import tendorData from 'public/data/tendors.json'


export default function TenderDetails() {

    const { id } = useParams();

const tenderDetails = tendorData && tendorData?.find(prod => prod.serialNo === Number(id));

    if (!tenderDetails) {
        return <p>Product not found</p>;
    }

    const tenderDetailsdefault = {
        tenderId: "01TENDERID",
        title: "EOI FROM INTERESTED PARTIES FOR FINANCIAL INVESTMENT AND TECHNOLOGY SUPPORT IN KAMCO HYDROPONIC SYSTEM DEVELOPMENT",
        startDate: "31-Oct-2024",
        endDate: "16-Nov-2024",
        downloadLink: "16-Nov-2024",
        additionalInfo: [
            "Eligible participants must have a proven track record in hydroponic technology.",
            "The financial investment proposal should cover a minimum of 20% equity stake.",
            "Participants must have the necessary licenses and approvals to operate in the specified regions.",
            "Proposal submissions must be in PDF format and submitted via the online portal."
        ]
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto p-6 md:p-12">
            <h1 className="text:xl md:text-2xl font-semibold text-[#166434] mb-4">{tenderDetails.title}</h1>

            {/* Tender ID and Date Range */}
            <div className="mb-6">
                <p className="text-xl font-medium">Tender ID: <span className="font-normal">{tenderDetails.serialNo}</span></p>
                <p className="text-xl font-medium">Tender Dates: <span className="font-normal">{tenderDetails.openingDate} to {tenderDetails.submissionDeadline}</span></p>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
                <ul className="list-inside list-disc text-base text-gray-800">
                    {tenderDetailsdefault.additionalInfo.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
                <Link href={tenderDetails.documentLink} className="w-full inline-block text-center bg-[#166434] text-white px-6 py-3 rounded-md hover:bg-[#0f4222] transition">
                    Download
                </Link>
            </div>

            <div className="mt-4 text-center">
                <Link className="text-sm text-gray-600 hover:text-gray-900" href="/tendors">
                    Back to Tenders
                </Link>
            </div>
        </div>
    );
}
