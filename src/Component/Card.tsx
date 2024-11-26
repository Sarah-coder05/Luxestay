import React from "react";
interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ title, description, children, footerContent }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-screen-lg mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
      {footerContent && <div className="mt-6">{footerContent}</div>}
    </div>
  );
};

export default Card;
