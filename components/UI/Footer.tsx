'use client';

import Link from 'next/link';

const FooterSection = () => {
    return (
        <div className="bg-[#166434] text-white py-10 px-4">
            {/* Newsletter Section */}
            <div className="mb-8 bg-white text-gray-800 font-sans flex flex-col md:flex-row items-center justify-center py-8">
                <span className='bg-black p-6 mr-0 md:mr-6 mb-4 md:mb-0'>
                    <img src="paperclip.svg" alt="Newsletter Icon" />
                </span>
                <div className='mb-4 md:mb-0 md:mr-16 text-center md:text-left'>
                    <h2 className="text-xl font-bold flex items-center mb-2 justify-center md:justify-start">
                        Newsletter
                    </h2>
                    <p>Sign up for our newsletter</p>
                </div>
                <div className="flex w-full md:w-auto justify-center md:justify-start px-2">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="p-2 rounded-l-lg border border-gray-300 focus:outline-none w-full md:w-96"
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-r-lg">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Company Information */}
            <div className='flex flex-col md:flex-row mt-16 justify-between'>
                <div className="mb-8 font-normal md:w-2/5">
                    <h2 className="text-3xl mb-4">KAMCO</h2>
                    <p className="mb-4 font-sans">
                        KAMCO (Kerala Agro Machinery Corporation Ltd.) is a leading manufacturer of high-quality agricultural machinery, dedicated to empowering farmers with innovative and reliable equipment. With a commitment to excellence and sustainability, KAMCO supports the growth of the agricultural sector by providing advanced tools that enhance productivity and efficiency.
                    </p>
                    <p className="mb-2 font-sans">91-484-2474301 (5 lines), 9400865666</p>
                    <p className="mb-2 font-sans">mail@kamcoindia.com</p>
                    <p className='font-sans'>KAMCO, Kerala Agro Machinery Corporation Limited</p>
                    <p className='font-sans'>Regd. Office: Athani - 683 585, Ernakulam Dist., Kerala State.</p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 font-sans text-normal md:w-1/5 mt-8 md:mt-0">
                    <div className='mr-0 md:mr-40'>
                        <ul>
                            <li className='mb-4'><Link href="/dealers">Products</Link></li>
                            <li className='mb-4'><Link href="/dealers">Dealers</Link></li>
                            <li className='mb-4'><Link href="/tendors">Tenders</Link></li>
                            <li className='mb-4'><Link href="/notifications">Notifications</Link></li>
                            <li className='mb-4'><Link href="/highlights">Highlights</Link></li>
                            <li className='mb-4'><Link href="/highlights">Production</Link></li>
                            <li className='mb-4'><Link href="/highlights">CSR</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-4'><Link href="/overview">Overview</Link></li>
                            <li className='mb-4'><Link href="/overview">Company Information</Link></li>
                            <li className='mb-4'><Link href="/history">History</Link></li>
                            <li className='mb-4'><Link href="/board-of-directors">Board of Directors</Link></li>
                            <li className='mb-4'><Link href="/organizational-structure">Organizational Structure</Link></li>
                            <li className='mb-4'><Link href="/organizational-structure">Quality Assurance</Link></li>
                            <li className='mb-4'><Link href="/manufacturing-process">Manufacturing Process</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='font-sans mt-8 md:mt-0 md:mr-4'>
                    <h3 className="font-bold">Follow Us on</h3>
                    <ul className="flex space-x-4 flex-row md:flex-col justify-center items-center mt-4 md:mt-0">
                        <li><Link href="#"><img src="/fb.svg" alt="Facebook" /></Link></li>
                        <li><Link href="#"><img src="/youtube.svg" alt="YouTube" /></Link></li>
                        <li><Link href="#"><img src="/instagram.svg" alt="Instagram" /></Link></li>
                        <li><Link href="#"><img src="/mail.svg" alt="Email" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
