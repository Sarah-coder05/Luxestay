import React from "react";
import AccountHeader from "./AccountHeader";
import Sidebar from "./SideBar";
import PasswordSettings from "./PasswordSettings";
import SocialAccounts from "./SocialAccounts";
import InfoBox from "./InfoBox";
import ContactInfoForm from "./ContactInforForm";
import BottomAccountSettings from "./BottomAccountSettings";

const AccountSettings: React.FC = () => {
  const socialAccounts = [
    { name: "Facebook", status: "Not connected", action: "Connect" },
    { name: "Google", status: "estherinontah@gmail.com", action: "Disconnect" },
    { name: "Apple", status: "Not connected", action: "Connect" },
  ];

  const handleSavePassword = () => {
    alert("Password saved!");
  };

  const handleSocialAction = (accountName: string) => {
    alert(`Action triggered for ${accountName}`);
  };

  const handleDeactivateAccount = () => {
    console.log("Account deactivated");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 space-y-6">
      <AccountHeader
        name="Esther Inontah"
        email="estherinontah@gmail.com"
        phone="0817304784"
      />

      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        <Sidebar />
        <div className="flex-1 space-y-6">
          <PasswordSettings onSave={handleSavePassword} />
          <SocialAccounts
            accounts={socialAccounts}
            onActionClick={handleSocialAction}
          />
          <div className="bg-white p-4 shadow border rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800">
              Privacy Settings
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Change your Privacy settings to secure your data.
            </p>
            <div className="border mb-6"></div>
            <ContactInfoForm />
          </div>
          <BottomAccountSettings
            title="Account Settings"
            description="Permanently deactivate your LuxeStay account and data."
            buttonText="Deactivate account"
            onButtonClick={handleDeactivateAccount}
        />
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
