import React from "react";
import {Payment} from './Interface'

import { FaPlane, FaFilePdf } from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";

const PaymentHistory: React.FC = () => {
  const payments: Payment[] = [
    {
      date: "Oct 4, 2024",
      id: "4846",
      amount: "₦500,000",
      status: "Paid",
      purposeIcon: <FaPlane className="text-gray-500" />,
      pdfLink: "Invoice",
    },
    {
      date: "Oct 4, 2024",
      id: "3933",
      amount: "₦500,000",
      status: "Received",
      purposeIcon: <FaFilePdf className="text-gray-500" />,
      pdfLink: "Invoice",
    },
    {
        date: "Oct 4, 2024",
        id: "4846",
        amount: "₦500,000",
        status: "Paid",
        purposeIcon: <FaPlane className="text-gray-500" />,
        pdfLink: "Invoice",
      },
      {
        date: "Oct 4, 2024",
        id: "3933",
        amount: "₦500,000",
        status: "Received",
        purposeIcon: <FaFilePdf className="text-gray-500" />,
        pdfLink: "Invoice",
      },
      {
        date: "Oct 4, 2024",
        id: "4846",
        amount: "₦500,000",
        status: "Paid",
        purposeIcon: <FaPlane className="text-gray-500" />,
        pdfLink: "Invoice",
      },
      {
        date: "Oct 4, 2024",
        id: "3933",
        amount: "₦500,000",
        status: "Received",
        purposeIcon: <FaFilePdf className="text-gray-500" />,
        pdfLink: "Invoice",
      },
      {
        date: "Oct 4, 2024",
        id: "4846",
        amount: "₦500,000",
        status: "Paid",
        purposeIcon: <FaPlane className="text-gray-500" />,
        pdfLink: "Invoice",
      },
      {
        date: "Oct 4, 2024",
        id: "3933",
        amount: "₦500,000",
        status: "Received",
        purposeIcon: <FaFilePdf className="text-gray-500" />,
        pdfLink: "Invoice",
      },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Payment History</h2>
      <p className="text-sm text-gray-500 mb-4">
        View all payments you’ve made or have been made to you.
      </p>
      <div className="border mb-4"></div>
      <div className="overflow-x-auto border rounded-2xl p-6">
        <table className="table-auto w-full ">
          <thead>
            <tr className="text-gray-600 bg-gray-50 text-sm border-b">
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">ID</th>
              <th className="py-3 text-left">Amount</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Purpose</th>
              <th className="py-3 text-left">PDF</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
              key={index}
              className={`text-sm h-12 text-gray-700  ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
                <td className="py-2">{payment.date}</td>
                <td>{payment.id}</td>
                <td>{payment.amount}</td>
                <td>
                  <span
                    className={`flex items-center ${
                      payment.status === "Paid" ? "text-green-500" : "text-orange-500"
                    }`}
                  >
                    {payment.status === "Paid" ? (
                      <CgArrowsExchange className="mr-1 h-6 w-6" />
                    ) : (
                      <CgArrowsExchange className="mr-1 h-6 w-6" />
                    )}
                    {payment.status}
                  </span>
                </td>
                <td>{payment.purposeIcon}</td>
                <td>
                  <a href="#you" className="text-blue-500 hover:underline">
                    {payment.pdfLink}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md hover:bg-gray-200">
          Previous
        </button>
        <span className="text-gray-500">1 of 10</span>
        <button className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
    
  );
};

export default PaymentHistory;
