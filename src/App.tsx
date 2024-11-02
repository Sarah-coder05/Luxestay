import React from "react";
import FlightCard from "./Component/FlightCard";
import RoomList from "./Component/RoomList";
import { flightData } from "./Component/FlightData";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 space-y-8">
      {/* FlightCard Component */}
      <FlightCard {...flightData} />
      
      {/* RoomList Component */}
      <RoomList />
    </div>
  );
};

export default App;
