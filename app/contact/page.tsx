import ContactSection from "@/components/UI/ContactSection";
import Gallery from "@/components/UI/GalleryPage";
import ProductsPage from "@/components/UI/Products";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import Link from "next/link";

export default function Page() {

    return (
        <div className="flex md:flex-row flex-col">
            <div className="w-full md:w-1/2 md:my-14 my-0 px-4 md:px-0">
                <ContactSection />
            </div>
            <div className="w-fit md:w-1/2 flex flex-col justify-start items-start py-4 md:px-0 px-4 md:mx-20 mx-4 my-8 md:my-14 bg-white rounded-lg border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                        <div className="text-lg text-gray-700">
                            <p>91-484-2474301 (5 lines)</p>
                            <p>9400865666</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                        <Link
                            href="mailto:mail@kamcoindia.com"
                            className="text-lg text-gray-700 hover:text-yellow-500 transition-colors"
                        >
                            mail@kamcoindia.com
                        </Link>
                    </div>
                    <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                        <div className="text-lg text-gray-700">
                            <p>Kerala Agro Machinery Corporation Limited</p>
                            <p>Regd. Office: Athani - 683 585,</p>
                            <p>Ernakulam Dist., Kerala State.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
