
import React from "react";
import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";

const Reviews: React.FC = () => {
  const overallRating = 4.5;
  const ratingDescription = "Very good";
  const totalReviews = 100;

  const reviewData = Array(8).fill({
    name: "Adeola",
    date: "Oct 20, 2024",
    property: "Palm View Estate, Lekki",
    roomType: "Deluxe Room",
    rating: 3,
    reviewText:
      "I bought a property at Palm View Estate and the entire process was seamless. The seller was professional, and the neighborhood is serene.",
  });

  return (
    <div className="flex space-x-6 p-6 bg-gray-100 rounded-lg max-w-7xl mx-auto">
      <RatingSummary
        rating={overallRating}
        description={ratingDescription}
        reviewCount={totalReviews}
      />
      <div className="flex overflow-x-auto space-x-4 flex-nowrap max-w-full">
        {reviewData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            date={review.date}
            property={review.property}
            roomType={review.roomType}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
