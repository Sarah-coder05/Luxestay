// App.tsx
import React from "react";
import FlightCard from "./Component/FlightCard";
import RoomList from "./Component/RoomList";
import PropertyCard from "./Component/Property";
import { flightData } from "./Component/FlightData";
import { propertyData } from "./Component/PropertyData";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 space-y-8">
      {/* FlightCard Component */}
      <FlightCard {...flightData} />
      
      {/* RoomList Component */}
      <RoomList />

      {/* PropertyCard Components */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {propertyData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default App;
