import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  const links = [
    { name: "Personal Info", path: "/" },
    { name: "Security & Privacy Settings", path: "/security-and-privacy" },
    { name: "Payments and Payouts", path: "/payments-and-payouts" },
    { name: "Reviews", path: "/reviews" },
    { name: "Notifications", path: "/notifications" },
    { name: "Help and Feedback", path: "/help-and-feedback" },
  ];

  return (
    <div className="w-full sm:w-1/5 bg-white p-4 my-auto items-start mt-0 mx-2 rounded-md shadow-md">
      <ul className="space-y-4">
        {links.map((link) => (
          <li
            key={link.name}
            className="flex items-center justify-between text-gray-800 hover:text-purple-600 cursor-pointer"
          >
            <Link to={link.path} className="flex-1">
              {link.name}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 group-hover:text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
