
import React, { useState } from "react";
import ReservationTable from "./ReservationTable";
import { Reservation } from "./Reservation";

const mockReservations: Reservation[] = [
  {
    bookingNumber: "P3448635",
    property: "Transcorp Hilton",
    guestName: "Cody Fisher",
    checkIn: "Oct 24, 2024",
    checkOut: "Oct 26, 2024",
    totalPaid: "₦500,000",
    bookedOn: "Oct 24, 2024",
    status: "Upcoming",
  },
  {
    bookingNumber: "P3448636",
    property: "Luxury Apartment",
    guestName: "Marvin McKinney",
    checkIn: "Nov 6, 2018",
    checkOut: "Nov 8, 2018",
    totalPaid: "₦500,000",
    bookedOn: "Nov 6, 2018",
    status: "Declined",
  },
  {
    bookingNumber: "P3448636",
    property: "Luxury Apartment",
    guestName: "Marvin McKinney",
    checkIn: "Nov 6, 2018",
    checkOut: "Nov 8, 2018",
    totalPaid: "₦500,000",
    bookedOn: "Nov 6, 2018",
    status: "Awaiting Approval",
  },
  {
    bookingNumber: "P3448636",
    property: "Luxury Apartment",
    guestName: "Marvin McKinney",
    checkIn: "Nov 6, 2018",
    checkOut: "Nov 8, 2018",
    totalPaid: "₦500,000",
    bookedOn: "Nov 6, 2018",
    status: "Canceled",
  },
  {
    bookingNumber: "P3448636",
    property: "Luxury Apartment",
    guestName: "Marvin McKinney",
    checkIn: "Nov 6, 2018",
    checkOut: "Nov 8, 2018",
    totalPaid: "₦500,000",
    bookedOn: "Nov 6, 2018",
    status: "Awaiting Approval",
  },
  
];

const ReservationData: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <ReservationTable
      reservations={mockReservations}
      title="12 Reservations"
      onPreviousPage={handlePreviousPage}
      onNextPage={handleNextPage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

export default ReservationData;
