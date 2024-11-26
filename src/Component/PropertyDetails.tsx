import React from "react";
import { FaStar } from "react-icons/fa";

const PropertyDetails: React.FC = () => {
  

  const handleBack = () => {
    console.log("Back button clicked");
  };

  const handleContinue = () => {
    console.log("Continue button clicked");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full lg:w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="text-start mb-6">
          <h1 className="text-2xl font-bold">Tell us about your property</h1>
          <p className="text-gray-600">
            Provide valid details of your property
          </p>
        </div>
        <div className="mb-6 border p-4 rounded-xl">
          <h2 className="font-semibold text-gray-700 mb-2">
            Property title and description
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="What's the name of your property?"
              className="w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Describe your property for your guests"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
        </div>
        <div className="mb-6 border p-4 rounded-xl">
          <h2 className="font-semibold text-gray-700 mb-4">Property Rating (optional)</h2>
          <div className="space-y-3">
            {[0, 1, 2, 3, 4, 5].map((rating) => (
              <label
                key={rating}
                className="flex items-center cursor-pointer space-x-3"
              >
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  className="hidden"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      size={20}
                      className={
                        index < rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {rating === 0
                    ? "None"
                    : `${rating} Star${rating > 1 ? "s" : ""} Hotel`}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <button
            onClick={handleBack}
            className="w-full sm:w-auto border-2 py-1 px-4 mb-4 sm:mb-0 text-gray-700 rounded hover:bg-blue-700"
          >
            ← Back
          </button>
          <button
            onClick={handleContinue}
            className="w-full sm:w-auto px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
