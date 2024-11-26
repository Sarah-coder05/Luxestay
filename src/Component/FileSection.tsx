import React from 'react';

interface FileSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode; 
  onBack?: () => void;
  onContinue?: () => void;
}

const FileSection: React.FC<FileSectionProps> = ({
  title,
  subtitle,
  children,
  onBack,
  onContinue,
}) => {
  return (
    <div className="p-6 w-3/4 mx-auto bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{subtitle}</p>
      {children}
      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
        >
          ← Back
        </button>
        <button
          onClick={onContinue}
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default FileSection;
