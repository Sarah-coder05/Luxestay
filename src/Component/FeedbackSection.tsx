import React, { useState } from "react";
import SideBar from "./SideBar";
import AccountHeader from "./AccountHeader";

type Feedback = {
  id: number;
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  date: string;
};

type FeedbackSectionProps = {
  feedbackGiven: Feedback[];
  feedbackReceived: Feedback[];
};

const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  feedbackGiven,
  feedbackReceived,
}) => {
  const [activeTab, setActiveTab] = useState<"given" | "received">("given");

  const activeFeedback =
    activeTab === "given" ? feedbackGiven : feedbackReceived;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 space-y-6">
    <AccountHeader
        name="Esther Inontah"
        email="estherinontah@gmail.com"
        phone="0817304784"
      />
    <div className="flex mt-4 flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        <SideBar/>
      <div className="flex-1 bg-white border rounded-2xl p-4 ">
      <h1 className="text-2xl font-bold ">Reviews</h1>
      <p className="text-gray-600 mb-6">
        View all reviews given on stays or flights and received on your
        properties.
      </p>

      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("given")}
          className={`pb-2 px-4 text-sm font-medium ${
            activeTab === "given"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500"
          }`}
        >
          Reviews Given
        </button>
        <button
          onClick={() => setActiveTab("received")}
          className={`pb-2 px-4 text-sm font-medium ${
            activeTab === "received"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500"
          }`}
        >
          Reviews Received
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeFeedback.map((feedback) => (
          <div
            key={feedback.id}
            className="p-4 bg-gray-50 rounded-lg shadow-md border"
          >
            <h3 className="text-lg font-semibold mb-2">{feedback.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{feedback.subtitle}</p>
            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    index < feedback.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.375 2.451a1 1 0 00-.364 1.118l1.286 3.962c.3.921-.755 1.688-1.539 1.118l-3.375-2.451a1 1 0 00-1.175 0l-3.375 2.451c-.784.57-1.838-.197-1.539-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.464 9.39c-.783-.57-.381-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.962z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-3">{feedback.description}</p>
            <p className="text-xs text-gray-400">{feedback.date}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-4 py-2 border text-black text-sm font-medium rounded-2xl hover:bg-gray-100">
          Load more reviews
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default FeedbackSection;
