import React from 'react';
import RoomCard from './Roomcard';
import { MdOutlineBed, MdGroups2 } from "react-icons/md";
import { FaWifi, FaMountain, FaRulerCombined } from 'react-icons/fa';
import image from '../Component/Asset/Property.png';
import image1 from '../Component/Asset/Property 1=Variant3.png'

const RoomList: React.FC = () => {
  const roomData = {
    title: 'Deluxe King Room',
    images: [
      image, // Replace these paths with actual paths or imported images
      image1,
      image,
      image1,
      image,
    ],
    amenities: [
      { icon: <FaWifi />, label: 'Free Wi-Fi' },
      { icon: <MdGroups2/>, label: 'Twin beds' },
      { icon: <FaMountain />, label: 'Mountain View' },
      { icon: <MdOutlineBed/>, label: 'Twin beds' },
      { icon: <FaRulerCombined />, label: '28 sq ft' },

    ],
    roomsLeft: 34,
    price: 140000,
    detailsLink: '/room-details',
  };

  return (
    <div className="flex justify-center p-4">
      <RoomCard {...roomData} />
    </div>
  );
};

export default RoomList;
