import CompanyInfoPage from "@/components/UI/CompanyInfo";

export default function Page() {

    return (
        <div className="flex flex-col md:flex-row justify-center py-10 md:mx-20">
            {/* Left Side - Contact Information */}
            <div className="md:w-[500px] p-2 border-2 border-[#166434] md:rounded-2xl rounded-xl flex flex-col justify-center mx-auto md:mx-16 mb-8 md:mb-0"> {/* Centered on mobile */}
                <h2 className="text-2xl font-normal mb-4 text-center">CHIEF MINISTER’S REDRESSAL CELL</h2>
                <p className="mb-2 text-center">Charge Officer - KAMCO:</p>
                <p className="mb-2 text-center">Shri. Vijayakumar M C, Sr. Manager (HR)</p>
                <p className="mb-2 text-center">Phone: +91-944 699 2031, 0484-2474301</p>
                <p className="mb-2 text-center">Email: vijayakumar@kamcoindia.com</p>
                <p className="mb-2 text-center">Visiting Time: 3 PM - 4 PM</p>
            </div>
        </div>
    )
}