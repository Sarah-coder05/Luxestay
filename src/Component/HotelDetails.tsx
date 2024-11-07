import React, { useState } from "react";
import {
  FaWifi,
  FaKey,
  FaSnowflake,
  FaTv,
  FaCoffee,
  FaConciergeBell,
  FaPhone,
  FaLock,
  FaClone,
  FaCut,
  FaRegWindowMaximize,
  FaVolumeMute,
} from "react-icons/fa";
import luggage from "./Asset/Person-luggage.svg"; 
import { TbIroning2, TbFridge } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { MdOutlineHeatPump, MdLiveTv, MdOutlineTv } from "react-icons/md";

import hilton from "./Asset/Hilton.png"; 
import building1 from "./Asset/Building-1.png";
import building from "./Asset/Building.png";
import building2 from "./Asset/Building-2.png"; 
import building3 from "./Asset/Building-3.png";
import building4 from "./Asset/Building-4.png"; 

const HotelDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("details");

  const amenities = [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaKey />, label: "Keyless Room Entry/Smart Locks" },
    { icon: <FaSnowflake />, label: "Air Conditioning" },
    { icon: <MdOutlineHeatPump />, label: "Heating" },
    { icon: <MdOutlineTv />, label: "Flat-Screen TV" },
    { icon: <FaTv />, label: "Cable/Satelite Channels" },
    { icon: <MdLiveTv />, label: "Streaming Services" },
    { icon: <TbFridge />, label: "Mini-Bar/Fridge" },
    { icon: <FaCoffee />, label: "Coffee/Tea Maker" },
    { icon: <FaConciergeBell />, label: "Room Service" },
    { icon: <TbIroning2 />, label: "Iron and Ironing Board" },
    { icon: <FaLock />, label: "Safe/Locker" },
    { icon: <FaPhone />, label: "Telephone" },
    { icon: <FaClone />, label: "Wardrobe/Closet" },
    { icon: <FaCut />, label: "Hairdryer" },
    { icon: <FaRegWindowMaximize />, label: "Blackout Curtains" },
    { icon: <FaVolumeMute />, label: "Soundproofed Rooms" },
  ];

  return (
    <div className="w-full bg-gray mx-auto p-4 md:p-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 h-[200px] md:h-[410px]">
          <img
            src={building} 
            alt="Main Building"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col items-start block sm:hidden p-5 bg-white rounded-xl border border-gray-300">
          <p className="text-lg text-gray-500">Hotel Brand</p>
          <img src={hilton} alt="Hilton Logo" className="h-12" />{" "}
        </div>
        <div className="hidden lg:grid w-full md:w-1/2 grid-cols-2 gap-2 h-[200px] md:h-[400px]">
          <img
            src={building1}
            alt="Gallery Top Left"
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={building2}
            alt="Gallery Top Right"
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={building3}
            alt="Gallery Bottom Left"
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={building4}
            alt="Gallery Bottom Right"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-7 mt-6">
        <div className="w-full md:w-2/3 space-y-4">
          <div className="space-y-2 border mt-6 bg-white rounded-xl p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-bold">
              Transcorp Hilton Abuja
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pt-3 pb-3">

              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-lg md:text-2xl" />
                <p className="text-gray-500 text-sm md:text-base">
                  1 Aguiyi Ironsi Street Maitama, 900001 Abuja, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
                <button className="text-green-500 text-xs md:text-sm">
                  View map
                </button>
                <GoArrowDown className="text-lg md:text-xl text-green-500" />
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Offering an outdoor pool and views of the mountains, Transcorp
              Hilton Abuja...
            </p>
          </div>
          <div className="flex flex-nowrap gap-2 md:space-x-4 border-b pb-2 text-sm md:text-base overflow-x-auto">
            {[
              "Amenities and Facilities",
              "Rooms",
              "Reviews",
              "FAQs",
              "Rules and Information",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` whitespace-nowrap px-3 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-purple-600 font-bold text-blue-700"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Amenities and Facilities" && (
            <div className="bg-white p-4 md:p-6 border rounded-xl">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                Amenities and Facilities
              </h3>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-700">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md"
                  >
                    <span>{amenity.icon}</span>
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/3 mt-6 md:mt-10 space-y-6">
          {/* Hotel Brand Section */}
          <div className="flex flex-col items-start sm:block hidden p-5 bg-white rounded-xl border-gray-300">
            <p className="text-lg text-gray-500">Hotel Brand</p>
            <img src={hilton} alt="Hilton Logo" className="h-12" />{" "}
            {/* Placeholder */}
          </div>

          {/* Illustration */}
          <div className="p-4 bg-white rounded-xl border-gray-300">
            <div className="flex items-center justify-center mb-4">
              <img src={luggage} alt="Guest Illustration" className="h-32" />{" "}
              {/* Placeholder */}
            </div>
            <p className="text-start mb-3 text-lg text-gray-700 font-medium">
              Interested in what you see?
            </p>
            <button className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
