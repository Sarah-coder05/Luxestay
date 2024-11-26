import React from "react";
import ReusableList from "./ReusableList";

const FAQs: React.FC = () => {
  const preloadedFAQs = [
    {
      title: "Check-in",
      subtopic: "From 15:00 to 22:00.",
      description:
        "Guests will be required to show a photo ID and credit card at check-in.",
    },
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
    {
        title: "Check-in",
        subtopic: "From 15:00 to 22:00.",
        description:
        "Guests will be required to show a photo ID and credit card at check-in.",
    },
  ];

  return (
    <ReusableList
      title="FAQs"
      description="Provide clear answers to pressing questions clients might have."
      placeholder="Enter a question or FAQ"
      buttonText="Add new FAQ"
      defaultItems={preloadedFAQs}
    />
  );
};

export default FAQs;
