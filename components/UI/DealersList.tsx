// pages/dealers.js
import Link from 'next/link';

export default function DealersPage() {
    const dealers = [
        {
            id: 1,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 2,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 3,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 4,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 5,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 6,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 7,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 8,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        {
            id: 9,
            name: 'Kottaram Traders',
            address: 'Integra VIP, 1st Floor, Opp. Rahman Hospital, V.I.P Road, Six Mile, Guwahati-781 022, Assam State',
            phone: '09401981187, 08638027350',
        },
        // Add more dealers as needed
    ];

    return (
        <div className="min-h-screen min-w-xl font-sans px-20">
            <h1 className="text-3xl font-bold mb-6">Authorized Dealers</h1>

            {/* Filter, Sort, and Categories Buttons */}
            <div className="flex space-x-4 mb-4">
                <button className="border border-gray-300 rounded-md px-4 py-2">Filters</button>
                <button className="border border-gray-300 rounded-md px-4 py-2">Sort</button>
                <button className="border border-gray-300 rounded-md px-4 py-2">Categories</button>
            </div>

            {/* Dealers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dealers.map((dealer, index) => (
                    <Link href={`/dealers/${dealer.id}`} key={index}>
                        <div className="p-6 border rounded-lg shadow-sm bg-white text-left hover:bg-[#166434] hover:text-white cursor-pointer transition duration-300 ease-in-out">
                            <div className="flex items-center mb-4">
                                <div className={`w-10 h-10 rounded-full bg-gray-300`} />
                                <h2 className={`ml-4 text-lg font-bold`}>{dealer.name}</h2>
                            </div>
                            <p className={`text-sm`}>{dealer.address}</p>
                            <p className={`text-sm mt-2`}>Tel: {dealer.phone}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}