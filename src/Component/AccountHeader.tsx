import React from "react";

interface AccountHeaderProps {
  name: string;
  email: string;
  phone: string;
}

const AccountHeader: React.FC<AccountHeaderProps> = ({ name, email, phone }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
      <div>
        <h1 className="text-lg md:text-xl font-bold text-gray-800">Account Settings</h1>
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-sm text-gray-600">{email} · {phone}</p>
      </div>
      <button className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
        Edit
      </button>
    </div>
  );
};

export default AccountHeader;
