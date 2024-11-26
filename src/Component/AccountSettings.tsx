import React from "react";
import AccountHeader from "./AccountHeader";
import Sidebar from "./SideBar";
import ProfileInfoForm from "./ProfileInfoForm";
import ContactInfoForm from "./ContactInforForm";
import InfoBox from "./InfoBox";

const AccountSettings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 space-y-6">
      <AccountHeader name="Esther Inontah" email="estherinontah@gmail.com" phone="0817304784" />
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        <Sidebar />
        <div className="flex-1 space-y-6">
          <ProfileInfoForm />
          <div className="bg-white p-4 shadow border rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800">Contact Info</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Receive account activity alerts and trip updates by sharing this information.
                    </p>
                <ContactInfoForm/>
                <button type="submit" className="col-span-1 mx-auto mt-4 right-0 justify-end flex sm:col-span-2 px-2 py-1 border rounded-2xl hover:bg-gray-100">
                    Save changes
                </button>
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

export default AccountSettings;
