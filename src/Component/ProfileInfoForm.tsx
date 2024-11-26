import React from "react";

const ProfileInfoForm: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Profile Info</h2>
      <p className="text-sm text-gray-600 mb-4">Update your information and how we can reach you.</p>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First name" className="p-2 border bg-gray-50 rounded-md" />
        <input type="text" placeholder="Last name" className="p-2 border bg-gray-50 rounded-md" />
        <input type="text" placeholder="Preferred name" className="p-2 border  border bg-gray-50 rounded-md" />
        <select className="p-2 border border bg-gray-50 rounded-md">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className="col-span-1 sm:col-span-2  w-full grid grid-cols-3 gap-6">
          <select className="p-2 border bg-gray-50 rounded-md">
            <option>Day</option>
          </select>
          <select className="p-2 border border bg-gray-50 rounded-md">
            <option>Month</option>
          </select>
          <select className="p-2 border border bg-gray-50 rounded-md">
            <option>Year</option>
          </select>
        </div>
        <textarea rows={4} placeholder="Accessibility needs" className="col-span-1 border bg-gray-50 sm:col-span-2 p-2 border rounded-md" />
        <button className="col-span-1 mx-auto ml-auto mr-0 sm:col-span-2 px-2 py-1 border rounded-2xl hover:bg-purple-700">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
