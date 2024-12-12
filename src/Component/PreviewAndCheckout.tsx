import React from "react";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
import { FaWifi, FaPlug, FaChair } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import SeatAndBag from "./SeatAndBag";
import EconomyCards from "./Economy";
const Timeline: React.FC = () => {
  return (
    <div className="relative flex pt-1 flex-col items-center">
      <TbPlaneDeparture className="text-3xl pb-2" />
      <div className="w-4 h-4 border-gray-400 border-2 mb-1 rounded-full"></div>
      <div className="h-32 border-l-2 border-gray-400  border-dashed border-gray-300"></div>
      <div className="h-25 border-l-2 border-dashed border-gray-300"></div>
      <div className="w-4 h-4 border-gray-400  border-2 mt-1 rounded-full"></div>
      <TbPlaneArrival className="text-3xl pb-2" />
    </div>
  );
};

const FlexIcons: React.FC = () => {
  return (
    <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg border justify-end ">
      <FaWifi />
      <FaPlug />
      <FaChair />
      <MdOutlineLiveTv />
      <RiArrowDropDownLine className="text-xl" />
    </div>
  );
};

const PreviewAndCheckout: React.FC = () => {
  const flightSegments = [
    {
      from: "Kigali",
      fromCode: "KGL",
      time: "14:30pm",
      airport: "Kigali Int’l Airport (ACC)",
      travelTime: "2h 15m",
      details: [
        "RwandAir",
        "Economy/Coach (D)",
        "Airbus 858",
        "Boeing 737 - 800",
      ],
      to: "Accra",
      toCode: "ACC",
      toTime: "16:45pm",
      layover: "1h 15m in Accra (ACC)",
    },
    {
      from: "Accra",
      fromCode: "ACC",
      time: "18:00pm",
      airport: "Kotoka Int’l Airport (ACC)",
      travelTime: "1h 15m",
      details: [
        "RwandAir",
        "Economy/Coach (D)",
        "Airbus 858",
        "Boeing 737 - 800",
      ],
      to: "Abuja",
      toCode: "ABV",
      toTime: "19:15pm",
      destination: "Nnamdi Azikiwe Int’l Airport (ABV)",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full md:w-2/3 space-y-3">
         

          <div className="border rounded-lg bg-gray-100 p-6">
            {flightSegments.map((segment, index) => (
              <div
                key={index}
                className={` border-b last:border-b-0 ${index > 0 ? "mt-4" : ""}`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                      <Timeline />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 flex items-center">
                          {segment.from} — {segment.time}
                        </h4>
                        <p className="text-sm mb-12 text-gray-600">
                          {segment.airport}
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Travel time: {segment.travelTime}
                        </p>
                        <ul className="text-sm text-gray-500 space-x-1 flex flex-wrap mt-">
                          {segment.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center">
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="font-bold text-lg mt-12">
                          {segment.to} — {segment.toTime}
                        </p>
                        {segment.destination && (
                          <p className="text-sm mb-12 text-gray-600">
                            Destination: {segment.destination}
                          </p>
                        )}
                        {segment.layover && (
                          <p className="text-sm mb-12 text-gray-600">
                            Layover: {segment.layover}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <FlexIcons
                    />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <EconomyCards/>
          <SeatAndBag/>
          <div className="border rounded-lg shadow-md bg-white p-3 ">
            <h2 className="font-bold text-xl text-gray-900 mb-2">Your Flight has separate tickets</h2>
            <p className="text-gray-600 text-xs p-2 border bg-gray-100 rounded-lg">
            Your flight is a combination of two one-way fares, each subject to its own rules and restrictions. If one of your flights is changed or cancelled,
            it will not automatically alter the other flight. Changes to the other flight may incur a charge.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 space-y-10">
          <div className="border rounded-lg shadow-md p-6 bg-white">
            <h2 className="font-bold text-xl text-gray-900 mb-4">Pricing Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Ticket Cost</span>
              <span>$920.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Cost</span>
              <span>$1000.00</span>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Check Out
            </button>
          </div>

          <div className="border rounded-lg shadow-md p-6 bg-white">
            <h2 className="font-bold text-xl text-gray-900 mb-4">Free Cancellation</h2>
            <p className="text-gray-600">
            We understand that plans change. It
            costs $0 to cancel within 24 hours ofbooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewAndCheckout;
