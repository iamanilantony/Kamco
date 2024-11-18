import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-cover bg-center py-16 px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-8">Our Achievements</h2>
            {/* <div className="flex justify-between">
            <div className="w-1/2">
                <Image src='/gallery/4.JPG' alt="achievements" width={100} height={100} className="w-full h-auto px-10 rounded-lg"/>
            </div>
            <div className="text-sm w-1/2 md:text-base text-black space-y-6 md:space-y-8">
                <p>
                    KAMCO, originally conceived by Kerala Agro Industries Corporation Ltd. (KAIC) as a joint venture between the central and state governments, promotes agro-based industries in Kerala by manufacturing farm equipment, machinery, and implements required for mechanized farming. In 1973, the Government of Kerala decided to separate the manufacturing wing of KAIC to form KAMCO, marking the beginning of our journey.
                </p>
                <p>
                    Our first manufacturing unit at Athani in Ernakulam District began with a single product: the Power Tiller, developed through a technical tie-up with Japan’s Kubota Corporation. This versatile machine quickly gained popularity among farmers due to its superior quality and robust performance.
                </p>
                <p>
                    Over the years, KAMCO expanded its manufacturing units and product range. In 1995, we established a third unit at Kanjikode, Palakkad, for Power Tiller production. The development of new products and technology upgrades remained a priority, leading to the production of the Power Reaper in 1997 and the Super DI Power Tiller in 2005.
                </p>
                <p>
                    Our commitment to innovation continued with the introduction of a compact, lightweight 4 HP Petrol Engine Power Weeder/Garden Tiller in 2010 and a 1 HP petrol engine-powered Paddy Weeder in 2014. Today, KAMCO remains dedicated to developing new products and accessories that enhance the utility and durability of our machines.
                </p>
            </div>
            </div> */}
                {/* <hr className="my-8 border-t-2 border-black" /> */}
                <ul className="list-none pl-5 mt-20">
                <p>
                    KAMCO's dedication to quality has been recognized through various awards:
                </p>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>FACT MKK NAYAR MEMORIAL PRODUCTIVITY AWARDS 2019-20</strong> - Second Best Productivity Performance in Industry to KAMCO, Palakkad Unit</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>AUTODESK IMAGINE AWARD 2021</strong> - Design and Manufacturing Categories</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>SAFETY AWARD 2009</strong> - First Prize for Outstanding Performance in Industrial Safety issued by Dept. of Factories & Boilers</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>CERTIFICATE OF INDUSTRIAL SAFETY AWARD 2002</strong> - Issued by National Safety Council of India</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>INDUSTRY EXCELLENCE AWARD 1999</strong> - Issued by The Institution of Engineers [India]</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>INDUSTRY EXCELLENCE AWARD 1998</strong> - Issued by The Institution of Engineers [India]</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>PRODUCTIVITY AWARD 1989-90</strong> - By Kerala State Productivity Council</li>
                    <li className="my-10 cursor-pointer hover:text-green-500 transition-all duration-300 ease-in-out"><strong>PRODUCTIVITY AWARD 1987-88</strong> - Issued by Kerala State Productivity Council</li>
                </ul>
        </div>
    );
}
