// src/components/ReservationTable.tsx
import React from "react";
import frame from './Asset/Frame 924.png'
import { PiPrinterThin } from "react-icons/pi";
import { ReservationTableProps } from "../Component/Reservation";

const ReservationTable: React.FC<ReservationTableProps> = ({
  reservations,
  title = "Reservations",
  onPreviousPage,
  onNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="border bg-white rounded-2xl p-4">
        <h2 className="text-xl pb-3 font-semibold">
          <span className="text-blue-700 font-bold">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-wrap sm-flex-col sm-w-full  gap-4 space-x-4">
            <select className="border px-5 py-2 bg-gray-100 rounded-md">
              <option>Status</option>
            </select>
            <input type="date" className="border px-7 py-1 bg-gray-100 rounded-md" />
            <input type="date" className="border bg-gray-100 px-7 py-1 rounded-md" />
            <button className="bg-blue-900 text-white px-7 py-1 rounded-md">
              Apply filter
            </button>
            <button className="border px-3 py-1 rounded-md flex items-center">
              <PiPrinterThin className=" w-14"/>Print reservation list
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mt-7 rounded-full border p-5">
          <thead>
            <tr className="bg-white rounded-3xl">
              <th className="p-3 text-left">Booking Number</th>
              <th className="p-3 text-left">Property</th>
              <th className="p-3 text-left hidden md:table-cell">Guest Name</th>
              <th className="p-3 text-left hidden md:table-cell">Check-In</th>
              <th className="p-3 text-left hidden md:table-cell">Check-Out</th>
              <th className="p-3 text-left hidden md:table-cell">Total Paid</th>
              <th className="p-3 text-left hidden md:table-cell">Booked On</th>
              <th className="p-3 text-left hidden md:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr
                key={index}
                className={`border-b text-gray-700 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-3">
                  <a href={`/reservations/${reservation.bookingNumber}`} className="text-blue-600 underline">
                    {reservation.bookingNumber}
                  </a>
                </td>
                <td className="p-3 gap-3 flex items-center">
                  {/* Image for property */}
                  <img src={frame} alt="Property" />
                  {reservation.property}
                </td>
                <td className="p-3 hidden md:table-cell">{reservation.guestName}</td>
                <td className="p-3 hidden md:table-cell">{reservation.checkIn}</td>
                <td className="p-3 hidden md:table-cell">{reservation.checkOut}</td>
                <td className="p-3 hidden md:table-cell">{reservation.totalPaid}</td>
                <td className="p-3 hidden md:table-cell">{reservation.bookedOn}</td>
                <td className="p-3 hidden md:table-cell">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      reservation.status === "Upcoming"
                        ? "bg-green-100 text-sm text-green-700"
                        : reservation.status === "Declined"
                        ? "bg-red-100 text-sm text-red-700"
                        : reservation.status === "Cancelled"
                        ? "bg-gray-200 text-sm text-gray-500"
                        : reservation.status === "Awaiting Approval"
                        ? "bg-red-100 text-sm text-red-500"
                        : "bg-gray-200 text-sm text-gray-500"
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onPreviousPage}
          className="border px-4 py-2 rounded-md"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          onClick={onNextPage}
          className="border px-4 py-2 rounded-md"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReservationTable;
