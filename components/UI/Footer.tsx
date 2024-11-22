import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {

    const footerLinks = [
        { name: "Home", slug: '#' },
        { name: "About us", slug: 'aboutUs' },
        { name: "Products", slug: 'products' },
        { name: "Strategic Initiatives", slug: 'projects' },
        { name: "Support", slug: '#' },
        { name: "Tenders", slug: 'tendors' },
        { name: "Media", slug: '#' },
    ]
    return (
        <footer className="bg-[#166434] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info Section */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <img
                                src="/LogoMain.png"
                                alt="KAMCO Logo"
                                className="h-16"
                                width={200}
                                height={64}
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            KAMCO was started way back in 1973 to aid farmers in their quest for higher
                            productivity, more prosperity and greater happiness in their lives.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Main Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Main Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        href={item.slug}
                                        className="text-gray-300 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">›</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Join our newsletter</h3>
                        <div className="bg-white rounded-2xl p-2 py-2 w-fit flex items-center">
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="text-sm ml-2 text-black border-0 focus:outline-none focus:ring-0"
                            />
                            <button className="text-white bg-orange-600 p-4 rounded-2xl">
                                <img src='/right-arrow-black.svg' className="w-[15px]" />
                            </button>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p>91-484-2474301 (5lines),</p>
                                    <p>9400865666</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                                <Link
                                    href="mailto:mail@kamcoindia.com"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    mail@kamcoindia.com
                                </Link>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                    <p>Kerala Agro Machinery Corporation Limited</p>
                                    <p>Regd. Office: Athani - 683 585,</p>
                                    <p>Ernakulam Dist., Kerala State.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-300">
                            © Copyright 2024 kamcoindia.com
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <Link href="#" className="hover:text-white transition-colors">
                                Terms & Conditions
                            </Link>
                            <span>/</span>
                            <Link href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <span>/</span>
                            <Link href="#" className="hover:text-white transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

