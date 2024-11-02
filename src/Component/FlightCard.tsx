import React from 'react';
import airpiece from './Asset/Airpeace logo.png';
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdLuggage, MdAirlineSeatReclineExtra } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";

export interface FlightCardProps {
    airlineLogo: string;
    departureTime: string;
    arrivalTime: string;
    from: string;
    to: string;
    duration: string;
    price: number;
    currency: string;
    isBest: boolean;
    numLuggage: number;
    numBags: number;
}

const FlightCard: React.FC<FlightCardProps> = ({
    airlineLogo,
    departureTime,
    arrivalTime,
    from,
    to,
    duration,
    price,
    currency,
    isBest,
    numLuggage,
    numBags
}) => {
    return (
        <div className="max-w-4xl w-full mx-auto bg-white border rounded-lg shadow-md p-6 space-y-4">
            {/* Top row with Best badge and Share + Search icons */}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {isBest && (
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                            Best
                        </div>
                    )}
                </div>
                <div className="flex items-center bg-gray-100 rounded-md border-2 p-0 space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                        <IoShareSocialOutline className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                        <span className="material-icons">share</span>
                    </button>
                </div>
            </div>

            {/* Flight Details and Duration Row */}
            <div className="flex space-x-6">
                {/* Airline Logo and Details */}
                <img src={airpiece} alt="Airline Logo" className="w-14 h-14" />
                <div className="space-y-0">
                    <p className="text-lg font-semibold">{departureTime} – {arrivalTime}</p>
                    <p className="text-gray-500 text-sm">{from} to {to}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                        <PiAirplaneTakeoffLight className="w-4 h-4 mr-1" />
                        <p>Air peace</p>
                    </div>
                </div>

                {/* Middle Section with Flight Type and Centered Duration */}
                <div className="flex-1 flex justify-center">
                    <p className="text-md font-bold text-center">nonstop</p>
                </div>
                
                {/* Duration */}
                <div>
                    <p className="text-md font-bold">{duration}</p>
                </div>
            </div>

            {/* Pricing and Actions Row */}
            <div className="flex items-center justify-between pt-4 rounded-md p-5 bg-gray-100 border-t">
                {/* Price Details */}
                <div>
                    <p className="text-l font-bold">{currency}{price.toLocaleString()}<span className="text-sm font-normal text-gray-500"> / per person</span></p>
                    <p className="text-sm text-gray-500">{currency}{price.toLocaleString()} total</p>
                </div>

                {/* Flight Class and Airline */}
                <div className="hidden md:flex items-center space-x-3 text-gray-500">
                    <div  className='hidden md:flex items-center'>
                        <span className="material-icons"><MdAirlineSeatReclineExtra className="w-4 h-4 mr-1" /></span>
                        <p>Economy</p>
                    </div>
                    <div className='hidden md:flex items-center'>
                    <span className="material-icons"><PiAirplaneTakeoffLight className="w-4 h-4 mr-1" /></span>
                    <p>Air peace</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                    <button className="border border-gray-300 p-1 rounded flex items-center">
                        <LiaShoppingBagSolid className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600 ml-1">{numBags}</span> {/* Display numBags next to the shopping bag icon */}
                    </button>
                    <button className="border border-gray-300 p-1 rounded flex items-center">
                        <MdLuggage className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-600 ml-1">{numLuggage}</span> {/* Display numLuggage next to the luggage icon */}
                    </button>
                    <button className="bg-blue-700 text-white px-6 py-1 rounded-lg">Select flight</button>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
