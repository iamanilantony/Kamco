import Image from 'next/image';

export default function AgentDetails() {
    return (
        <div className="p-4 md:p-8 font-sans">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center p-4 md:p-6 rounded-lg w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-6">
                        <div className="bg-gray-400 rounded-full h-12 w-12 md:h-16 md:w-16 mb-2 md:mb-0 md:mr-4"></div>
                        <h1 className="text-xl md:text-2xl font-bold">Kottaram Traders</h1>
                    </div>
                    <p className="text-gray-600 text-center mb-4 md:mb-6">
                        Kottaram Traders is a trusted dealer in agricultural tools and equipment, committed to providing high-quality products to support farmers in maximizing their productivity. With a reputation for reliability and customer satisfaction, Kottaram Traders offers a wide range of tools, from tillers to harvesters, tailored to meet the diverse needs of modern farmers. Their knowledgeable team is dedicated to helping clients find the right equipment to ensure successful and efficient farming operations.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between w-full mb-6 space-y-4 md:space-y-0">
                        <div className="text-center w-full md:w-auto">
                            <h2 className="text-lg md:text-xl font-semibold">8</h2>
                            <p className="text-gray-500 text-sm md:text-base">Products</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <h2 className="text-lg md:text-xl font-semibold">4.3</h2>
                            <p className="text-gray-500 text-sm md:text-base">Rating</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <h2 className="text-lg md:text-xl font-semibold">155</h2>
                            <p className="text-gray-500 text-sm md:text-base">Customers</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <h2 className="text-lg md:text-xl font-semibold">19</h2>
                            <p className="text-gray-500 text-sm md:text-base">Years</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-16 mt-8 w-full md:justify-center">
                        <button className="bg-black text-white py-2 px-4 rounded w-full md:w-auto">Contact</button>
                        <button className="border border-black text-black py-2 px-4 rounded w-full md:w-auto">Enquire Now</button>
                    </div>
                </div>

                <div className="w-full max-w-4xl mt-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="border rounded-lg shadow-lg">
                                <Image
                                    src="/Kamco_hero1.svg" // Replace with actual image path
                                    alt={`Product ${index + 1}`}
                                    width={300}
                                    height={150} // Adjusted height to reduce the image size
                                    className="rounded-t-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
