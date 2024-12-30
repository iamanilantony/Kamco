import Link from 'next/link';
import tendorData from 'public/data/tendors.json';

const TenderTable = () => {
    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-md">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search for articles, notifications, news"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Sl No.</th>
                                <th className="border border-gray-300 p-2">Tender ID</th>
                                <th className="border border-gray-300 p-2">Tender Title</th>
                                <th className="border border-gray-300 p-2">Published Date</th>
                                <th className="border border-gray-300 p-2">Last Date to Download</th>
                                <th className="border border-gray-300 p-2">Submission Deadline</th>
                                <th className="border border-gray-300 p-2">Opening Date</th>
                                <th className="border border-gray-300 p-2">Download Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tendorData.map((tendor, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-50">
                                    <td className="border border-gray-300 p-2 text-center">{tendor.serialNo}</td>
                                    <td className="border border-gray-300 p-2 text-center">{tendor.tendorID}</td>
                                    <td className="border border-gray-300 p-2">{tendor.title}</td>
                                    <td className="border border-gray-300 p-2 text-center">{tendor.publishedDate}</td>
                                    <td className="border border-gray-300 p-2 text-center">{tendor.lastDateToDownload}</td>
                                    <td className="border border-gray-300 p-2 text-center">{tendor.submissionDeadline}</td>
                                    <td className="border border-gray-300 p-2 text-center">{tendor.openingDate}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        <Link href={`/tendors/${tendor.serialNo}`} className="text-green-700 hover:underline">Read more</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TenderTable;
