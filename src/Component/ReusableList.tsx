import React, { useState } from "react";

interface ReusableListProps {
  title: string; 
  description: string; 
  buttonText: string; 
  placeholder: string; 
  defaultItems?: { title: string; subtopic: string; description: string }[]; 
}

const ReusableList: React.FC<ReusableListProps> = ({
  title,
  description,
  buttonText,
  defaultItems = [],
}) => {
  const [items, setItems] = useState(defaultItems);

  const addNewItem = () => {
    setItems([...items, { title: "New FAQ", subtopic: "Enter subtopic", description: "Enter description" }]);
  };
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-screen-lg mx-auto">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>

      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-2 border border-gray-300 rounded-lg bg-gray-50 relative"
        >
          <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
          <p className="text-sm text-gray-600 italic mb-2">{item.subtopic}</p>
          <p className="text-gray-700">{item.description}</p>
          <button
            onClick={() => removeItem(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            aria-label="Delete FAQ"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        onClick={addNewItem}
        className="mx-auto flex items-center justify-center py-2 px-4 text-purple-600 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 mb-6"
      >
        {buttonText}
      </button>

      <div className="flex justify-between items-center">
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
          Back
        </button>
        <button className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ReusableList;
