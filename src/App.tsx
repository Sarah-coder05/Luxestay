import React from "react";
import FlightCard from "./Component/FlightCard";
import RoomList from "./Component/RoomList";
import PropertyCard from "./Component/Property";
import { flightData } from "./Component/FlightData";
import { propertyData } from "./Component/PropertyData";
import HotelDetails from "./Component/HotelDetails";
import Reviews from "./Component/Reviews";
import PropertyPage from "./Component/PropertyPage";
import LandingPage from "./Component/LandingPage";
import { sampleData } from "./Component/LandingPageProps";
import ReservationData from "./Component/ReservationData";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 space-y-8">
      <FlightCard {...flightData} />
      <RoomList />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {propertyData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <HotelDetails/>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Reviews</h1>
        <Reviews/>
        <PropertyPage/>
      </div>
      <LandingPage{...sampleData}/>
      <ReservationData/>
    </div>
  );
};

export default App;
