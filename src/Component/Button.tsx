import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  direction?: 'left' | 'right'; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant, direction }) => {
  const arrow = direction === 'right' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ) : direction === 'left' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  ) : null;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white ${
        variant === 'primary' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-300 hover:bg-gray-400'
      } flex items-center`}
    >
      {direction === 'left' && arrow}
      {label}
      {direction === 'right' && arrow}
    </button>
  );
};

export default Button;
