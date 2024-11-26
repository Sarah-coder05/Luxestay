import React from "react";
interface AccountSettingsProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const BottomAccountSettings: React.FC<AccountSettingsProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2 mb-4">{description}</p>
      <div className="border"></div>
      <h3 className="text-red-500 pt-2 font-bold">Deactivate my account</h3>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 sm:w-3/4">I would like to Permanently deactivate my Luxestay account and data</p>
        <button
          onClick={onButtonClick}
          className="mt-4 sm:mt-0 sm:ml-4 text-red-500 bg-red-100 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2 px-2 w-full sm:w-auto"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BottomAccountSettings;
