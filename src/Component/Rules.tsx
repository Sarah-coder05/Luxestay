import React from "react";
import ReusableList from "./ReusableList";

const Rules: React.FC = () => {
  const preloadedRules = [
    {
        title: "Check-in",
        subtopic: "From 15:00 to 22:00.",
      description: "Guests will be required to show a photo ID and credit card at check-in.",
    },
    {
        title: "Check-in",
        subtopic: "From 15:00 to 22:00.",
      description: "Guests will be required to show a photo ID and credit card at check-in.",
    },
  ];

  return (
    <ReusableList
      title="Rules and Information"
      description="Let your guests know the rules on the grounds and any other information."
      placeholder="Enter a rule or info"
      buttonText="Add new rule or info"
      defaultItems={preloadedRules} 
    />
  );
};

export default Rules;
