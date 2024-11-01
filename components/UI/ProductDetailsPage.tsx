'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
    const { id } = useParams();

    // Sample product data (Replace this with actual data fetching logic)
    const products = [
        {
            id: '1',
            title: "Heavy-Duty Rotary Tiller",
            price: 15299,
            piecesLeft: 128,
            description: "Engine Power: 50 HP minimum required Working Width: 5 feet (customizable options available) Tilling Depth: Adjustable up to 8 inches Blades: Hardened steel blades for superior cutting and durability Gearbox: Heavy-duty, sealed gearbox for long-lasting performance Weight: 650 lbs Drive Type: PTO shaft with shear bolt protection Features: Adjustable skid shoes for varied depth control Side chain drive for consistent performance Rear shield to prevent debris from flying Ideal For: Soil preparation for planting Mixing compost or organic matter Breaking up compacted soil",
            features: [
                'Adjustable skid shoes for varied depth control',
                'Side chain drive for consistent performance',
                'Rear shield to prevent debris from flying'
            ],
            idealfor: [
                'Soil preparation for planting',
                'Mixing compost or organic matter',
                'Breaking up compacted soil'
            ],
            blades: 'Hardened steel blades for superior cutting and durability',
            gearbox: 'Heavy-duty, sealed gearbox for long-lasting performance',
            weight: '650 lbs',
            image: "/Kamco_hero1.svg", // Replace with actual image paths
            additionalDetails: {
                warranty: "2-year limited warranty on parts and labor",
                maintenance: "Requires periodic blade sharpening and gearbox lubrication",
                compatibility: "Fits most standard tractors with a 3-point hitch system",
            },
            dealers: [
                { name: "Kottaram Traders", rating: 4.3, image: '/Kamco_hero1.svg' },
                { name: "Kottaram Traders", rating: 4.3, image: '/Kamco_hero1.svg' },
                { name: "Kottaram Traders", rating: 4.3, image: '/Kamco_hero1.svg' },
                { name: "Kottaram Traders", rating: 4.2, image: '/Kamco_hero1.svg' },
                { name: "Kottaram Traders", rating: 4.3, image: '/Kamco_hero1.svg' },
                { name: "Kottaram Traders", rating: 4.3, image: '/Kamco_hero1.svg' },
            ],
            otherProducts: [
                "/Kamco_hero2.svg", // Replace with actual image paths
                "/Kamco_hero3.svg",
            ],
        },
        // Add more products as needed
    ];

    // Find the product by ID
    const product = products.find(prod => prod.id === id);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="container mx-auto p-4 font-sans">
            <div className="flex flex-col md:flex-row mb-8">
                <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-6 mt-4 md:mt-0 text-left">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <h2 className="text-xl text-gray-700">₹ {product.price}</h2>
                    <p className="text-gray-500">{product.piecesLeft} Pieces Left</p>
                    <p className="mt-4">{product.description}</p>
                    <div className="mt-4">
                        <button className="bg-[#166434] text-white px-4 py-2 rounded-md hover:bg-[#0f4222] transition duration-200">Contact Dealers</button>
                        <button className="ml-2 bg-gray-200 text-[#166434] px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">Enquire Now</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between text-left'>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Product Detail</h2>
                    <div className="py-4 rounded-lg">
                        <h3 className="font-semibold">Product Detail</h3>
                        <p>Warranty: {product.additionalDetails.warranty}</p>
                        <p>Maintenance: {product.additionalDetails.maintenance}</p>
                        <p>Compatibility: {product.additionalDetails.compatibility}</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Additional Details</h2>
                        <div className="py-4 rounded-lg">
                            <p>Warranty: {product.additionalDetails.warranty}</p>
                            <p>Maintenance: {product.additionalDetails.maintenance}</p>
                            <p>Compatibility: {product.additionalDetails.compatibility}</p>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Dealers Near You</h2>
                        <ul className="grid grid-cols-2 gap-4">
                            {product.dealers.map((dealer, index) => (
                                <li key={index} className="flex items-center mb-2">
                                    <img src={dealer.image} alt={`Other Product ${index + 1}`} className="w-8 h-8 object-cover rounded-2xl mr-2" />
                                    <div className="flex flex-col">
                                        <span className="font-bold">{dealer.name}</span>
                                        <span className="text-gray-500">{dealer.rating} Rating</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-2">Other Products</h2>
                <div className="flex space-x-4">
                    {product.otherProducts.map((image, index) => (
                        <img key={index} src={image} alt={`Other Product ${index + 1}`} className="w-128 h-128 object-cover rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
