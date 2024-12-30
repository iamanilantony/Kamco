import Gallery from "@/components/UI/GalleryPage";

export default function Page() {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-4xl">
                <table className="w-full border-collapse border border-gray-300 text-left">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 border border-gray-300 font-semibold">Report</th>
                            <th className="p-3 border border-gray-300 font-semibold">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2021-22</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/Kamco Annual Report - 2021-2022 (3).pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Return 2021-22</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/KAMCO_Form_MGT_7-2022-Final.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2020-21</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/FINANCIALS FY 2020-21.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Return 2020-21</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/FORM MGT-7-KAMCO-FY 2020-21.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2019-20</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/Annual Report 2019-20.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2018-19</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/Annual Report 2018-19.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2017-18</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/Annual Report 2017-18.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-gray-300">Annual Report 2016-17</td>
                            <td className="p-3 border border-gray-300">
                                <a 
                                    href="https://www.kamcoindia.com//userfiles/Annual Report 2016-17.pdf" 
                                    className="text-blue-600 hover:underline">View Report</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
