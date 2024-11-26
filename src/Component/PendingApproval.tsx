import React from "react";
import Card from "./Card";

const PendingApproval: React.FC = () => {
  return (
    <Card
      title="" 
      description="" 
      footerContent={
        <div className="flex justify-center">
          <button
            onClick={() => alert("I understand clicked")}
            className="px-6 py-2 text-white bg-teal-700 hover:bg-green-500 rounded-md"
          >
            I understand
          </button>
        </div>
      }
    >
      <div className="flex flex-col justify-center items-center text-center space-y-6 py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5l3 3-3 3M5 19l3-3-3-3m4 3v-3m4 3v-3m4 3V9l3-3M9 9V6m-3 3v6"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Congratulations! Your Listing is now Pending Approval
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            All properties listed undergo inspection and verification by LuxeStay’s team before going live. This process ensures quality and typically takes 2-3 weeks. We'll notify you once your listing is approved and visible to potential reservations.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PendingApproval;
