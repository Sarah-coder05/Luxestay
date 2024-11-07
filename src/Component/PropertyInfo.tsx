
import React from "react";

interface PropertyInfoCardProps {
  title: string;
  items: { label: string;  }[];
}

const PropertyInfoCard: React.FC<PropertyInfoCardProps> = ({ title, items }) => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <h4 className="font-semibold text-lg mb-3">{title}</h4>
    <div className="flex grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="text-sm">
          <span className=" text-black-600 p-2 bg-gray-400">{item.label}</span> 
        </div>
      ))}
    </div>
  </div>
);

export default PropertyInfoCard;
