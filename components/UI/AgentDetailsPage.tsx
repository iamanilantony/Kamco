// pages/index.tsx
import Image from 'next/image';

export default function AgentDetails() {
    return (
        <div className="p-8 font-sans">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center p-6 rounded-lg w-full max-w-4xl">
                    <div className="flex items-center mb-4">
                        <div className="bg-gray-400 rounded-full h-16 w-16 mr-4"></div>
                        <h1 className="text-2xl font-bold">Kottaram Traders</h1>
                    </div>
                    <p className="text-gray-600 text-center mb-4">
                        Kottaram Traders is a trusted dealer in agricultural tools and equipment, committed to providing high-quality products to support farmers in maximizing their productivity. With a reputation for reliability and customer satisfaction, Kottaram Traders offers a wide range of tools, from tillers to harvesters, tailored to meet the diverse needs of modern farmers. Their knowledgeable team is dedicated to helping clients find the right equipment to ensure successful and efficient farming operations.
                    </p>
                    <div className="flex justify-between w-full mb-6">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">8</h2>
                            <p className="text-gray-500">Products</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">4.3</h2>
                            <p className="text-gray-500">Rating</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">155</h2>
                            <p className="text-gray-500">Customers</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">19</h2>
                            <p className="text-gray-500">Years</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-16 mt-8">
                        <button className="bg-black text-white py-2 px-4 rounded">Contact</button>
                        <button className="border border-black text-black py-2 px-4 rounded">Enquire Now</button>
                    </div>
                </div>

                <div className="w-full max-w-4xl mt-8">
                    <h2 className="text-2xl font-bold mb-4">Products</h2>
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
