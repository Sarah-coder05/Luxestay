import React from "react";
import AccountHeader from "./AccountHeader";
import Sidebar from "./SideBar";
import { payoutMethods, handleCountrySelect } from "./Data";
// import BottomAccountSettings from "./BottomAccountSettings";
import PaymentHistory from "./PaymentHistory";
import PayoutMethods from "./PayoutMethods";
import InfoBox from "./InfoBox";

const PaymentsAndPayout: React.FC = () => {
  



  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 space-y-6">
      {/* Header Section */}
      <AccountHeader
        name="Esther Inontah"
        email="estherinontah@gmail.com"
        phone="0817304784"
      />

      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <PaymentHistory/>
         <div >
            <PayoutMethods methods={payoutMethods} onCountrySelect={handleCountrySelect} />
        </div>
        </div>
        <div className="w-full sm:w-1/4 space-y-4">
          <InfoBox
            title="Which details can be edited?"
            content="You can modify your personal information, contact information, and accessibility needs. For security verification purposes, some fields may be locked for editing."
          />
          <InfoBox
            title="What details are disclosed to third parties?"
            content="LuxeStay values your data privacy and only shares booking details as required."
          />
        </div>
      </div>
      
    </div>
  );
};

export default PaymentsAndPayout;
