import React from "react";
import Card from "./Card";
import Button from "./Button";

const Payments: React.FC = () => {
  return (
    <Card
      title="Payments"
      description="Let your guests know the rules on the grounds and any other information."
      footerContent={
        <div className="flex justify-between items-center">
          <Button
            label="Back"
            onClick={() => alert("Back clicked")}
            variant="secondary"
            direction="left" 
          />
          <Button
            label="Continue"
            onClick={() => alert("Continue clicked")}
            variant="primary"
            direction="right" 
          />
        </div>
      }
    >
      <div className="space-y-4">
        <p className="p-4 bg-gray-100 rounded-md">
          To receive payments from LuxeStay, specify your preferred method of receiving payments in your{" "}
          <a href="#sarah" className="text-blue-500">Account Settings</a>.
          
        </p>
        <p className="p-4 bg-gray-100 rounded-md">Your guest pays through luxestay.com with more options like debit cards or transfers.</p>
        <p className="p-4 bg-gray-100 rounded-md">We facilitate your guest’s payment. You don’t have to deal with fraud, chargebacks, or invalid cards.</p>
        <p className="p-4 bg-gray-100 rounded-md">LuxeStay.com sends payouts to you. You’ll receive a bank transfer by the 15th of each month that covers all bookings with a check-out in the previous month.</p>
      </div>
    </Card>
  );
};

export default Payments;
