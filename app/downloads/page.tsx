import React from "react";

const Downloads = () => {
  return (
    <div className="min-h-screen container mx-auto py-16">
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-4xl">
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border border-gray-300 font-semibold">
                  Document Name
                </th>
                <th className="p-3 border border-gray-300 font-semibold">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300">
                  KAMCO APPLICARION FOR DEALERSHIP
                </td>
                <td className="p-3 border border-gray-300">
                  <a
                    href="https://drive.google.com/file/d/1p5Zx5XD3Zt8a-0pIyQOyrIjNHwql8YM8/view?usp=drive_link"
                    className="text-blue-600 hover:underline"
                  >
                    View PDF
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300">
                  VENDOR REGISTRATION FORM
                </td>
                <td className="p-3 border border-gray-300">
                  <a
                    href="https://drive.google.com/file/d/1lWkxriSCSjjCOzRMHhPia93kiCk3XEA8/view?usp=drive_link"
                    className="text-blue-600 hover:underline"
                  >
                    View PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
