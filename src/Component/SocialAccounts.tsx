import React from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

interface Account {
  name: string;
  status: string;
  action: string;
}

interface SocialAccountsProps {
  accounts: Account[];
  onActionClick: (accountName: string) => void;
}

const SocialAccounts: React.FC<SocialAccountsProps> = ({
  accounts,
  onActionClick,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Facebook":
        return <FaFacebookF className="text-white rounded-full bg-blue-600 p-1  w-8 h-8" />;
      case "Google":
        return <FaGoogle className="text-red-500 w-6 h-6" />;
      case "Apple":
        return <FaApple className="text-white rounded-full bg-black p-1 w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border shadow-md">
      <h2 className="text-lg font-semibold">Social Accounts</h2>
      <p className="text-sm text-gray-500">
        Manage your social accounts to secure your data.
      </p>
      <div className="mt-4 space-y-4">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                {getIcon(account.name)}
              </div>
              <div>
                <p className="font-semibold">{account.name}</p>
                <p className="text-sm text-gray-500">{account.status}</p>
              </div>
            </div>
            <button
              onClick={() => onActionClick(account.name)}
              className={`text-sm font-semibold ${
                account.action === "Disconnect"
                  ? "text-red-500"
                  : "text-purple-600"
              }`}
            >
              {account.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccounts;
