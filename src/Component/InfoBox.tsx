import React from "react";

interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, content }) => {
  return (
    <div className="bg-orange-100 p-4 rounded-md shadow-md">
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{content}</p>
    </div>
  );
};

export default InfoBox;
