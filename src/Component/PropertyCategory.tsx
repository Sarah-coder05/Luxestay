import React, { useState } from "react";
import { FaHotel, FaBuilding, FaHome } from "react-icons/fa";
import { MdVilla } from "react-icons/md";

const PropertyCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      title: "Hotel",
      description:
        "Lodging, usually with restaurants, meeting rooms, and various guest services.",
      icon: <FaHotel size={40} />,
    },
    {
      title: "Motel",
      description:
        "A self-catering apartment featuring hotel-like amenities, including a reception desk.",
      icon: <FaBuilding size={40} />,
    },
    {
      title: "Apartment",
      description:
        "Furnished and self-catering accommodation available for short- and long-term rental.",
      icon: <FaBuilding size={40} />,
    },
    {
      title: "House",
      description: "Detached home with a private, separate entrance.",
      icon: <FaHome size={40} />,
    },
    {
      title: "Villa",
      description:
        "Private, self-contained home offering a luxurious, self-catering experience.",
      icon: <MdVilla size={40} />,
    },
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    console.log(`Selected Category: ${category}`);
  };

  const handleCancel = () => {
    setSelectedCategory(null);
    console.log("Cancel clicked");
  };

  const handleContinue = () => {
    if (selectedCategory) {
      console.log(`Continuing with category: ${selectedCategory}`);
    } else {
      console.log("Please select a category before continuing.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-start mb-6">
          <h1 className="text-2xl font-bold">Property Category</h1>
          <p className="text-gray-600">
            Select the category that best matches your property. This helps
            guests discover it more easily.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category.title)}
              className={`p-4 border border-gray-200 rounded-lg shadow-sm hover:border-purple-500 transition ${
                selectedCategory === category.title
                  ? "border-purple-500"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-start mb-2 ">
                {category.icon}
              </div>
              <h2 className="font-semibold text-start text-lg mb-1">{category.title}</h2>
              <p className="text-sm text-start text-gray-600">{category.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between w-full max-w-4xl px-6">
        <button
          onClick={handleCancel}
          className="w-full sm:w-auto px-4 py-2 mb-2 sm:mb-0 bg-gray-200 text-gray-700 rounded-xl hover:bg-blue-700"
        >
           ← Cancel
        </button>
        <button
          onClick={handleContinue}
          className="w-full sm:w-auto px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-700"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default PropertyCategory;
