import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface RoomCardProps {
  title: string;
  images: string[];
  amenities: { icon: JSX.Element; label: string }[];
  roomsLeft: number;
  price: number;
  detailsLink: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  images,
  amenities,
  roomsLeft,
  price,
  detailsLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const totalImages = images.length;

  const handlePrev = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
      setIsFlipping(false);
    }, 500); // Adjust duration as needed
  };

  const handleNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
      setIsFlipping(false);
    }, 500);
  };

  return (
    <div className="rounded-lg shadow-lg bg-white p-4 w-full max-w-xs sm:max-w-md mx-auto">
      {/* Image carousel */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`${title} - Slide ${currentIndex + 1}`}
          className={`w-full h-48 sm:h-64 rounded-lg object-cover transition-transform duration-500 ${
            isFlipping ? 'transform rotate-y-180' : ''
          }`}
          style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
        />

        {/* Navigation and pagination */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-gray-800 text-sm"
          style={{ minWidth: '160px', justifyContent: 'space-between' }}
        >
          {/* Previous button */}
          <button onClick={handlePrev} className="text-gray-800 p-2 hover:bg-gray-200 rounded-full">
            <FaChevronLeft />
          </button>

          {/* Pagination indicator */}
          <span className="whitespace-nowrap">{currentIndex + 1} / {totalImages}</span>

          {/* Next button */}
          <button onClick={handleNext} className="text-gray-800 p-2 hover:bg-gray-200 rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Room information */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <div className="grid grid-cols-3 mt-2 text-gray-600">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 mb-2 whitespace-nowrap">
              <span>{amenity.icon}</span>
              <span className="text-sm">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Room availability and price */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-green-600 font-medium">{roomsLeft} rooms left</span>
        <a href={detailsLink} className="text-blue-500 no-underline">
          View more details →
        </a>
      </div>

      {/* Reservation button */}
      <button className="mt-5 w-full border-2 text-black py-2 rounded-lg font-semibold text-center">
        Reserve for ₦{price.toLocaleString()}
      </button>
    </div>
  );
};

export default RoomCard;
