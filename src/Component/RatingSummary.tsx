
import React from "react";

interface RatingSummaryProps {
  rating: number;
  description: string;
  reviewCount: number;
}

const RatingSummary: React.FC<RatingSummaryProps> = ({
  rating,
  description,
  reviewCount,
}) => {
  return (
    <div className="p-4 bg-teal-500 text-white rounded-lg min-w-[200px] w-72 flex flex-col items-center justify-center">
      <p className="text-4xl font-bold">{rating} ⭐</p>
      <p className="text-lg">{description}</p>
      <p className="text-sm">{reviewCount} reviews</p>
    </div>
  );
};

export default RatingSummary;
