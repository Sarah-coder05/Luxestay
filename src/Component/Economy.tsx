import React from "react";
import { TbPlaneArrival } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {  FaDollarSign } from "react-icons/fa";

type Feature = {
  icon: JSX.Element;
  text: string;
  included: boolean;
};

type CardProps = {
  title: string;
  airline: string;
  route: string;
  features: Feature[];
};

const EconomyCard: React.FC<CardProps> = ({ title, airline, route, features }) => {
  return (
    <div className="border-2 shadow rounded-lg  p-2 bg-white w-full ">
      <div className="flex border-b pb-2 mb-2">
        <div>
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm flex gap-1 text-gray-500"><TbPlaneArrival className="mt-1"/>{airline}</p>
        </div>
        <p className="text-sm ml-auto text-gray-500">{route}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            {feature.icon}
            <span className={feature.included ? "text-gray-800" : "text-gray-800"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EconomyCards: React.FC = () => {
  const cards = [
    {
      title: "Economy",
      airline: "Air peace",
      route: "Abuja to Kigali",
      features: [
        {
          icon: <MdOutlineCancel className="p-1 w-7 h-7" />,
          text: "Seat choice not included",
          included: false,
        },
        {
          icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "Carry-on bag",
          included: true,
        },
        {
          icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "1st checked bag included",
          included: true,
        },
        {
          icon: <FaDollarSign className="border border-black rounded-full p-1 w-5 h-5 ml-1" />,
          text: "Change fee applies",
          included: true,
        },
        {
          icon: <MdOutlineCancel className=" p-1 w-7 h-7" />,
          text: "Non-refundable",
          included: false,
        },
      ],
    },
    {
      title: "Economy",
      airline: "RwandAir",
      route: "Abuja to Kigali",
      features: [
        {
          icon: <MdOutlineCancel className="p-1 w-7 h-7" />,
          text: "Seat choice not included",
          included: false,
        },
        {
          icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "Carry-on bag",
          included: true,
        },
        {
          icon: <IoIosCheckmarkCircleOutline className="p-1 w-7 h-7" />,
          text: "2 checked bags included",
          included: true,
        },
        {
          icon: <FaDollarSign className="border border-black rounded-full p-1 w-5 h-5 ml-1" />,
          text: "Change fee applies",
          included: true,
        },
        {
          icon: <MdOutlineCancel className="p-1 w-7 h-7" />,
          text: "Non-refundable",
          included: false,
        },
      ],
    },
  ];

  return (
    <div className=" py-4">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <EconomyCard
            key={index}
            title={card.title}
            airline={card.airline}
            route={card.route}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default EconomyCards;
