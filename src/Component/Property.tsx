import React from "react";
import { RiShieldCheckLine } from "react-icons/ri";

export interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  details: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({ image, title, price, details }) => {
  return (
    <div className="max-w-s w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* Title with amour icon in its own div */}
        <div className="flex space-x-9 items-center mb-2">
          <h3 className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{title}</h3>
          <RiShieldCheckLine  className="text-green-500 mr-2" /> 
        </div>
        <p className="text-lg text-grayfont-bold">₦{price.toLocaleString()}</p>

        {/* Details section */}
        <div className="flex flex-wrap gap-2 mt-2">
          {/* Display the first 3 details on one line */}
          {details.slice(0, 3).map((detail, index) => (
            <span key={index} className="bg-gray-100 border text-gray-700 px-2 py-1 rounded-full text-xs whitespace-nowrap">
              {detail}
            </span>
          ))}
          {/* Conditionally display the fourth detail on the next line */}
          {details.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs whitespace-nowrap">
              {details[3]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
