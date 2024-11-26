import { FaUniversity, FaPaypal } from "react-icons/fa";
import { PayoutMethod } from "./PayoutMethod";

export const payoutMethods: PayoutMethod[] = [
  {
    id: "bank",
    name: "Bank Account",
    description: "3-5 business days",
    processingTime: "No fees",
    fees: "",
    icon: <FaUniversity className="text-5xl text-indigo-500" />,
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "1 business day",
    processingTime: "PayPal fees may apply",
    fees: "",
    icon: <FaPaypal className="text-5xl text-blue-500" />,
  },
];

export const handleCountrySelect = (country: string) => {
  console.log("Selected Country:", country);
};
