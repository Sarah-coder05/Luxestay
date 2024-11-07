
import React from "react";
import PropertyInfoCard from "./PropertyInfo";
import { RiMapPinLine } from "react-icons/ri";
import building1 from "./Asset/Building-1.png";
import building from "./Asset/Building.png";
import building2 from "./Asset/Building-2.png";
import building3 from "./Asset/Building-3.png";
import building4 from "./Asset/Building-4.png";

const PropertyPage: React.FC = () => {
  const amenities = [
    { label: "Bedrooms", value: "4" },
    { label: "Bathrooms", value: "4" },
    { label: "Furnishing", value: "Unfurnished" },
    { label: "Area", value: "600 sqm" },
  ];

  const propertyDetails = [
    { label: "Type", value: "Residential Land" },
    { label: "Architectural style", value: "Contemporary" },
    { label: "Total Area", value: "600 sqm" },
    { label: "Condition", value: "Newly-Built" },
    { label: "Furnishing", value: "Unfurnished" },
    { label: "Estate Name", value: "Mab Global and Brains and Hammers City" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">
              4bdrm House in Mab Global And, Life Camp for sale
            </h2>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <RiMapPinLine className="mr-2" />
              Mab Global Gwarinpa, Abuja, Life Camp
            </div>
          </div>

          <p className="text-gray-600 mt-4">
            This is a newly built FOUR BEDROOM TERRACE semi-finished City estate
            by mab global estate &amp; brains - hammers, very affordable and
            beautiful at life-camp EXT abuja.
          </p>

          <div className="flex space-x-4 text-sm font-medium mt-6">
            <span className="text-purple-600 border-b-2 border-purple-600 pb-2 cursor-pointer">
              Amenities and Facilities
            </span>
            <span className="text-gray-600 pb-2 cursor-pointer">
              Property Details
            </span>
            <span className="text-gray-600 pb-2 cursor-pointer">Locations</span>
          </div>

          <PropertyInfoCard
            title="Amenities and Facilities"
            items={amenities}
          />
          <PropertyInfoCard title="Property Details" items={propertyDetails} />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-gray-800">₦50,000,000</p>
            <p className="text-gray-500 text-sm">Negotiable</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-500 text-sm">
              Posted on the 23rd Sept 2024
            </p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
              Due Diligence
            </button>
            <button className="mt-2 w-full bg-white border border-gray-300 py-2 rounded-lg text-gray-700">
              Report posting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
