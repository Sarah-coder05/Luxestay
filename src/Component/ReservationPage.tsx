import React from "react";
import BookingInfoCard from "./BookingInfoCard"

const Reservations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold mb-4">Reservations</h1>
        <BookingInfoCard
          hotelName="Transcorp Hilton"
          bookingNumber="ABC123"
          checkIn="Oct 28th 2024"
          checkOut="Oct 29th 2024"
          roomType="Deluxe King Room"
          totalRooms={3}
          guests={9}
          paymentStatus="Paid"
          status="Upcoming"
          guest={{
            firstName: "Esther",
            lastName: "Inontah",
            email: "esther@gmail.com",
            phone: "08136486343",
          }}
          specialRequest="I want red sheets on the bed and a fan rather than an AC."
          totalPrice={280000}
        />
      </div>
    </div>
  );
};

export default Reservations;
