import React, { useState } from "react";
import uploaded from './Asset/Uploaded.png'

interface PropertyPhotosProps {
  fileLimit: number;
  onFilesChange?: (files: File[]) => void;
}

const PropertyPhotos: React.FC<PropertyPhotosProps> = ({ fileLimit, onFilesChange }) => {
  const initialImages = [
    { id: 1, name: "Image1.jpg", url: uploaded },
    { id: 2, name: "Image2.jpg", url: uploaded },
    { id: 3, name: "Image3.jpg", url: uploaded },
    { id: 4, name: "Image4.jpg", url: uploaded },
    { id: 5, name: "Image5.jpg", url: uploaded },
  ];

  const [files, setFiles] = useState<(File | { id: number; name: string; url: string })[]>(
    initialImages
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    const totalFiles = files.length + selectedFiles.length;

    if (totalFiles > fileLimit) {
      alert(`You can only upload up to ${fileLimit} files.`);
      return;
    }

    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);
    if (onFilesChange) {
      onFilesChange(updatedFiles as File[]);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (onFilesChange) {
      onFilesChange(updatedFiles as File[]);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full mx-auto max-w-screen-lg">
      <h3 className="text-xl font-bold mb-2">Property photos</h3>
      <p className="text-gray-500 mb-4">
        Share photos of your property to give guests a clear idea of what to expect.
      </p>
      <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg mb-4 hover:bg-gray-50">
        <input
          type="file"
          id="photo-upload"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="photo-upload"
          className="cursor-pointer text-purple-600 hover:text-purple-800"
        >
          Click, or drag and drop to upload
        </label>
        <p className="text-sm text-gray-400 mt-2">PNG, JPG, or GIF (max. 800x400px)</p>
      </div>
      <p className="text-sm text-center bg-green-100 border rounded-xl p-1 text-gray-500 mb-4">
        This first image attracts the guest to your property, so select one of your best.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file, index) => (
          <div key={index} className="relative">
        
            <img
              src={(file as any).url || URL.createObjectURL(file as File)}
              alt={(file as any).name || (file as File).name}
              className="w-full h-32 object-cover rounded-lg"
            />
        
            <button
              onClick={() => removeFile(index)}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-red-100"
              aria-label="Delete file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-red-500"
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

        {files.length < fileLimit && (
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 h-32 rounded-lg cursor-pointer hover:bg-gray-100">
            <label
              htmlFor="photo-upload"
              className="cursor-pointer text-gray-500 text-3xl"
            >
              +
            </label>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          className="px-4 py-2 text-black bg-gray-200 rounded-lg hover:bg-gray-600"
        >
          Back
        </button>
        <button
          className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropertyPhotos;
