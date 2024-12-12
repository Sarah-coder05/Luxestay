import React from "react";
import { FaTimesCircle,  FaDollarSign } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type Feature = {
  icon: JSX.Element;
  text: string;
  included: boolean;
};

type CardProps = {
  route: string;
  features: Feature[];
  footerText?: string;
};

const InfoCard: React.FC<CardProps> = ({ route, features, footerText }) => {
  return (
    <div className="border rounded-lg shadow-md px-4  bg-gray-50 w-full">
      <div className="mb-1">
        <p className="text-sm font-semibold text-gray-700">{route}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {feature.icon}
            <span className={feature.included ? "text-gray-800" : "text-gray-500"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      {footerText && (
        <p className="text-sm text-gray-500 mt-1 mb-1">{footerText}</p>
      )}
    </div>
  );
};

const SeatAndBag: React.FC = () => {
  const seatOptions = [
    {
      route: "Abuja to Kigali",
      features: [
        {
          icon: <FaDollarSign className="text-gray-500" />,
          text: "Seat choice is for a fee",
          included: true,
        },
      ],
    },
    {
      route: "Abuja to Kigali",
      features: [
        {
          icon: <FaTimesCircle className="text-red-500" />,
          text: "Seat choice is not allowed",
          included: false,
        },
      ],
    },
  ];

  const bagOptions = [
    {
      route: "Abuja to Kigali",
      features: [
        {
          icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "Carry on bag is included",
          included: true,
        },
        {
            icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "1st checked bag included",
          included: true,
        },
      ],
      footerText: "After booking, you can purchase additional bags for this flight through Air peace",
    },
    {
      route: "Kigali to Abuja",
      features: [
        {
            icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "Carry on bag is included",
          included: true,
        },
        {
            icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "2 checked bags included",
          included: true,
        },
      ],
      footerText: "After booking, you can purchase additional bags for this flight through RwandAir",
    },
  ];

  return (
    <div className=" py-5">
      <div className="w-full mx-auto space-y-10">
        <div className="border bg-white rounded-2xl p-3">
          <h2 className="font-bold text-xl text-gray-900 mb-4">Seats</h2>
          <div className="space-y-4 ">
            {seatOptions.map((option, index) => (
              <InfoCard key={index} route={option.route} features={option.features} />
            ))}
          </div>
        </div>

        <div className="border bg-white p-3 rounded-2xl">
          <h2 className="font-bold text-xl text-gray-900 mb-4">Bags</h2>
          <div className="space-y-4">
            {bagOptions.map((option, index) => (
              <InfoCard
                key={index}
                route={option.route}
                features={option.features}
                footerText={option.footerText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatAndBag;
