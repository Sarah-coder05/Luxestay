import React from "react";
import image from './Asset/Image (1).png'
import { FaArrowsToEye } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { VscSymbolNumeric } from "react-icons/vsc";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

type BookingDetailsProps = {
  hotelName: string;
  bookingNumber: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  totalRooms: number;
  guests: number;
  paymentStatus: string;
  status: string;
  guest: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  specialRequest: string;
  totalPrice: number;
};

const BookingInfoCard: React.FC<BookingDetailsProps> = ({
  hotelName,
  bookingNumber,
  checkIn,
  checkOut,
  roomType,
  totalRooms,
  guests,
  paymentStatus,
  status,
  guest,
  specialRequest,
  totalPrice,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="lg:flex gap-2 pt-2 bg-blue-50 rounded-xl px-2">
        <img src={image} alt="see" className="my-2 w-30 h-24"/>
        <div>
        <div>
          <div className="mb-3 ">
            <h1 className="text-2xl font-bold">{hotelName}</h1>
            <button className="mt-2 px-2 py-1 mr-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              Hotel
            </button>
            <button className="mt-2 px-2 py-1 bg-gray-300 text-black rounded hover:bg-blue-700">
              Motel
            </button>
          </div>
        </div>
        <div className="border-b pb-4 mb-2">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-2">
              <VscSymbolNumeric className="mt-1"/>
              <h2 className="font-semibold text-gray-500">Booking Number</h2>
              <p className="text-black">{bookingNumber}</p>
            </div>
            <div className="flex gap-2">
              <FaRegCalendarCheck className="mt-1"/>
              <h2 className="font-semibold text-gray-500">Check-in</h2>
              <p className="text-black">{checkIn}</p>
            </div>
            <div className="flex gap-2">
              <FaRegCalendarCheck className="mt-1"/>
              <h2 className="font-semibold text-gray-500">Check-out</h2>
              <p className="text-black">{checkOut}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="border-b bg-gray-100 px-4 mt-4 rounded-xl pt-2 pb-2 mb-2">
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
          <div>
            <div className="flex gap-1">
              <FaArrowsToEye className="text-gray-500 mt-1"/>
              <h2 className="font-semibold text-sm text-gray-500">Room/Property Type</h2>
            </div>
            <p className="text-gray-700">{roomType}</p>
          </div>
          <div>
            <div className="flex gap-1">
            <FaArrowsToEye className="text-gray-500 mt-1"/>
            <h2 className="font-semibold text-sm text-gray-500">Total Rooms/Property Type</h2>
            </div>
            <p className="text-gray-700">{totalRooms} Rooms</p>
          </div>
          <div>
            <div className="flex gap-1">
              <MdOutlinePeopleAlt className="text-gray-500 mt-1"/>
              <h2 className="font-semibold text-sm text-gray-500">Expected Guests</h2>
            </div>
            <p className="text-gray-700">{guests} Guests</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm text-gray-500">Payment Status</h2>
            <p className="text-gray-700">{paymentStatus}</p>
          </div>
          <div>
            <div className="flex gap-1">
              <FaRegCheckCircle className="text-gray-500 mt-1"/>
              <h2 className="font-semibold text-sm text-gray-500">Status</h2>
            </div>
            <p className="text-blue-600 font-semibold">{status}</p>
          </div>
        </div>
      </div>
      <div className="border-b px-6 pb-4 mb-4">
        <h2 className="font-bold mb-2">Booking Guest Details</h2>
        <div className="space-y-4">
          <div className="flex justify-content-end">
            <h3 className="font-semibold text-gray-500">First Name</h3>
            <p className="text-gray-700 ml-auto">{guest.firstName}</p>
          </div>
          <div className="flex">
            <h3 className="font-semibold text-gray-500">Last Name</h3>
            <p className="text-gray-700 ml-auto">{guest.lastName}</p>
          </div>
          <div className="flex">
            <h3 className="font-semibold text-gray-500">Email Address</h3>
            <p className="text-gray-700 ml-auto">{guest.email}</p>
          </div>
          <div className="flex">
            <h3 className="font-semibold text-gray-500">Phone Number</h3>
            <p className="text-gray-700 ml-auto">{guest.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-b px-6 pb-4 mb-4">
        <h2 className="font-bold mb-2">Special Request</h2>
        <p className="p-4 bg-gray-100 rounded-md">{specialRequest}</p>
      </div>

      <div className="block lg:flex px-6 pb-2">
        <div className="mt-4">
          <h2 className="font-bold text-lg">Total Price</h2>
          <p className="text-xl font-bold text-gray-800">₦{totalPrice.toLocaleString()}</p>
        </div>
        <div className="space-y-4 ml-auto">
          <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Accept Booking
          </button>
          <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Decline and Refund
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoCard;
