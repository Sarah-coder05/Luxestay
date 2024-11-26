import React from "react";
import { PayoutMethod } from "../Component/PayoutMethod";

interface PayoutMethodsProps {
  methods: PayoutMethod[];
  onCountrySelect: (country: string) => void;
}

const PayoutMethods: React.FC<PayoutMethodsProps> = ({ methods, onCountrySelect }) => {
  return (
    <div className=" bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Payout Methods</h2>
      <p className="text-sm text-gray-600 mb-4">
        Let us know where you'd like us to send your money.
      </p>
      <div className="mb-6">
        <label htmlFor="billingCountry" className="block text-sm font-medium text-gray-700">
          Billing country<span className="text-red-500">*</span>
        </label>
        <select
          id="billingCountry"
          className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => onCountrySelect(e.target.value)}
        >
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">This is where you opened your financial account.</p>
      </div>
      <ul>
        {methods.map((method) => (
          <li
            key={method.id}
            className="flex items-center justify-between p-4 mb-2 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center gap-4">
              {method.icon}
              <div>
                <p className="font-medium text-gray-800">{method.name}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
                <p className="text-sm text-gray-500">{method.processingTime}</p>
              </div>
            </div>
            <div className="text-right">

              <p className="text-sm text-gray-500">{method.fees}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default PayoutMethods;
