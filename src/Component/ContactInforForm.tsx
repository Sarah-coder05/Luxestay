import React from "react";

const ContactInfoForm: React.FC = () => {
  return (
    <div>
      
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="email" placeholder="Email address" className="p-2 border rounded-2xl" />
        <div className="flex items-center">
          <span className="bg-gray-200 p-2 border rounded-l-2xl">+234</span>
          <input type="text" placeholder="Phone number" className="p-2 border rounded-r-md flex-1" />
        </div>

        <label>We'll send a verificarion link to your new email address. Please check your inbox.</label>
        <label></label>
        <input type="text" placeholder="Country" className="p-2 border rounded-2xl" />
        <input type="text" placeholder="Address 1" className="p-2 border rounded-2xl" />
        <input type="text" placeholder="Address 2" className="p-2 border rounded-2xl" />
        <input type="text" placeholder="City" className="p-2 border rounded-2xl" />
        <input type="text" placeholder="State/Region" className="p-2 border rounded-2xl" />
        <input type="text" placeholder="Postal code" className="p-2 border rounded-2xl" />
        
      </form>
    </div>
  );
};

export default ContactInfoForm;
