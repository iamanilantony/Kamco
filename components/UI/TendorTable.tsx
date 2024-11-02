const tenderData = [
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF RIDING SEAT TYPE 5',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF SHOES AND SOCKS FOR KAMCO ATHANI UNIT',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  {
    serialNo: 1,
    tenderID: '45DDASA',
    title: 'TENDER: SUPPLY OF TOOLKIT FOR WORKMEN TO KAMCO UNIT AT ATHANI',
    publishedDate: '29-Oct-2024',
    lastDateToDownload: '06-Nov-2024',
    submissionDeadline: '08-Nov-2024',
    openingDate: '29-Oct-2024',
    documentLink: '#',
  },
  // Add more entries as needed
];

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
                        {tenderData.map((tender, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 p-2 text-center">{tender.serialNo}</td>
                                <td className="border border-gray-300 p-2 text-center">{tender.tenderID}</td>
                                <td className="border border-gray-300 p-2">{tender.title}</td>
                                <td className="border border-gray-300 p-2 text-center">{tender.publishedDate}</td>
                                <td className="border border-gray-300 p-2 text-center">{tender.lastDateToDownload}</td>
                                <td className="border border-gray-300 p-2 text-center">{tender.submissionDeadline}</td>
                                <td className="border border-gray-300 p-2 text-center">{tender.openingDate}</td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <a href={tender.documentLink} className="text-green-700 hover:underline">Download</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TenderTable;
