import React from "react";
import map from './Asset/Google Map.png'

type AddressFormProps = {
  onSubmit: (data: Record<string, string>) => void;
  onBack: () => void;
};

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, onBack }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    onSubmit(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Confirm your address</h2>
      <p className="text-gray-600 mb-6">Where is the property you're listing?</p>
      <div className="flex flex-col lg:flex-row gap-6">
        <form
          onSubmit={handleSubmit}
          className="flex-1 grid grid-cols-1 gap-4"
        >
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              id="country"
              required
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            >
              <option value="">Select Country</option>
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State/Region<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
              Address 1 <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              id="address1"
              name="address1"
              required
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
              Address 2 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Postal Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              required
              className="w-full mt-1 border bg-gray-50 border-gray-300 rounded-md p-2"
            />
          </div>
        </form>
        <div className="flex-1 flex flex-col items-start lg:pl-6">
          <p className="text-gray-700 mb-4">
            This is the location we'll show to guests on our site. Move the map
            to find the exact location of your property then click to drop the pin.
          </p>
          <img
            src={map}
            alt="Random"
            className="w-full h-70 object-cover rounded-md border"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Continue
            </button>
          </div>
    </div>
  );
};

export default AddressForm;
