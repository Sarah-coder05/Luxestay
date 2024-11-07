// src/components/ReviewCard.tsx
import React from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  property: string;
  roomType: string;
  rating: number;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  property,
  roomType,
  rating,
  reviewText,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white flex-shrink-0 w-64 h-49 ">
      <h3 className="font-semibold">{name} — <span className="text-gray-500 italic font-light text-sm">{property}</span></h3>
      <p className="text-gray-500 italic text-sm">
        Hotel — {roomType}
      </p>
      <p className="flex items-center">
        {"⭐".repeat(rating)}{" "}
      </p>
      <p className="text-gray-600 mt-2 text-sm">{reviewText}</p>
      <span className="text-gray-400 ml-2 text-xs">{date}</span>
    </div>
  );
};

export default ReviewCard;
