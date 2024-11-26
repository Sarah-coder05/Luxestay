import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountSettings from "./Component/AccountSettings";
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
import Reservations from "./Component/ReservationPage";
import PropertyCategory from "./Component/PropertyCategory";
import PropertyDetails from "./Component/PropertyDetails";
import AddressForm from "./Component/AddressForm";
import AmenitiesForm from "./Component/AmenitiesForm";
import { amenitiesList } from "./Component/AmenitiesList";
import PropertyDocuments from "./Component/PropertyDocuments";
import PropertyPhotos from "./Component/PropertyPhotos";
import FAQs from "./Component/FAQs";
import Rules from "./Component/Rules";
import Payments from "./Component/Payments";
import PendingApproval from "./Component/PendingApproval";
import SecurityAndPrivacySettings from "./Component/SecurityAndPrivacySettings";
import PaymentsAndPayout from "./Component/PaymentsAndPayouts";
import FeedbackSection from "./Component/FeedbackSection";
import { feedbackGiven, feedbackReceived } from "./Component/FeedbackData";
import Notifications from "./Component/Notifications";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Routing Section */}
      <Router>

      {/* Non-Routed Components */}
      <div className="space-y-8 p-4">
        <FlightCard {...flightData} />
        <RoomList />
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {propertyData.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
        <HotelDetails />
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Reviews</h1>
          <Reviews />
        </div>
        <PropertyPage />
        <LandingPage {...sampleData} />
        <ReservationData />
        <Reservations />
        <PropertyCategory />
        <PropertyDetails />
        <AddressForm
          onSubmit={(data) => console.log("Form submitted:", data)}
          onBack={() => console.log("Back button clicked")}
        />
        <AmenitiesForm
          amenities={amenitiesList}
          onBack={() => console.log("Back clicked")}
          onSubmit={(selected) => console.log("Selected amenities:", selected)}
        />
        <PropertyDocuments />
        <div className="w-3/4 flex items-center justify-center bg-gray-50 p-4">
          <PropertyPhotos
            fileLimit={5}
            onFilesChange={(files) => console.log("Files changed:", files)}
          />
        </div>
        <FAQs />
        <Rules />
        <Payments />
        <PendingApproval />
        <AccountSettings/>
      </div>
      <Routes>
         <Route path="/" element={<AccountSettings/>} />
         <Route path="/security-and-privacy" element={<SecurityAndPrivacySettings />} />
         <Route path="/payments-and-payouts" element={<PaymentsAndPayout/>} />
         <Route path="/reviews" element={<FeedbackSection
        feedbackGiven={feedbackGiven}
        feedbackReceived={feedbackReceived}
      />} />
        </Routes>
          <Notifications/>
      </Router>
    </div>
    
  );
};

export default App;
