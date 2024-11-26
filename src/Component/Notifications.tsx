import React from 'react';
import AccountHeader from './AccountHeader';
import SideBar from './SideBar';

const Notifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 space-y-6">
        <AccountHeader
        name="Esther Inontah"
        email="estherinontah@gmail.com"
        phone="0817304784"
      />
         <div className="flex mt-4 flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
            <SideBar/>
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-10 pb-20">
                {/* Header */}
                <div className="text-center">
                <h1 className="text-xl font-semibold text-gray-800">Your Notifications</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Stay up to date with inquiries, bookings, and updates for all your property, hotels or stays listings.
                </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center mt-4 space-x-2">
                {['All', 'Inquiries', 'Requests', 'Confirmations', 'Insights', 'Refunds', 'Price drops'].map((tab, index) => (
                    <button
                    key={index}
                    className={`px-4 py-2 text-sm rounded-full ${
                        tab === 'Confirmations'
                        ? 'bg-purple-100 text-purple-600 font-medium'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    >
                    {tab}
                    </button>
                ))}
                </div>

                {/* Content */}
                <div className="mt-10 flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                <h2 className="mt-6 text-lg font-medium text-gray-800">You have no new booking confirmation</h2>
                <p className="text-sm text-gray-500 mt-1 text-center">
                    Your confirmations for properties, hotels or stays bookings will appear here.
                </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Notifications;
