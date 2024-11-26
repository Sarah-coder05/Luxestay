import React, { useState, useEffect } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";

interface FileUploadProps {
  fileLimit: number; 
  onFilesChange?: (files: File[]) => void; 
}

interface FileData {
  file: File; 
  progress: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ fileLimit, onFilesChange }) => {
  const [files, setFiles] = useState<FileData[]>([
    { file: new File([''], 'Deed-of-ownership.png'), progress: 80 },
    { file: new File([''], 'Certificate-of-occupancy.png'), progress: 100 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setFiles((currentFiles) =>
        currentFiles.map((fileData) =>
          fileData.progress < 100
            ? { ...fileData, progress: fileData.progress + 10 }
            : fileData
        )
      );
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    const totalFiles = files.length + selectedFiles.length;

    if (totalFiles > fileLimit) {
      alert(`You can only upload up to ${fileLimit} files.`);
      return;
    }

    const newFiles = selectedFiles.map((file) => ({
      file,
      progress: 0, 
    }));
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    if (onFilesChange) {
      onFilesChange(updatedFiles.map((fileData) => fileData.file));
    }
  };
  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    if (onFilesChange) {
      onFilesChange(updatedFiles.map((fileData) => fileData.file));
    }
  };

  return (
    <div>
      <div className="border-2 border-dashed border-gray-300 py-6 text-center rounded-lg mb-4 hover:bg-gray-50">
        <input
          type="file"
          id="file-input"
          className="hidden"
          multiple
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-input"
          className="cursor-pointer text-purple-600 hover:text-purple-800"
        >
            <div className='border rounded-full p-2 w-fit mb-2 mx-auto'>
               <IoCloudUploadOutline className='mx-auto text-gray-500'/> 
            </div>
          Click, or drag and drop to upload
          <p className="text-sm px-2 absolute text-gray-400 mb-4">PNG, JPG, or GIF (max. 800x400px)</p>
        </label>
      </div>

      <div className="space-y-4">
        {files.map((fileData, index) => (
          <div
            key={index}
            className="flex items-center justify-between border p-4 rounded-lg bg-gray-50"
          >
      
            <div className="flex-1">
              <p className="text-sm font-medium">{fileData.file.name}</p>
              <div className="flex items-center mt-1">
                <progress
                  className="w-full h-1 bg-gray-200 rounded"
                  value={fileData.progress}
                  max={100}
                ></progress>
                <span className="ml-2 text-sm text-gray-500">{fileData.progress}%</span>
              </div>
            </div>

            
            <button
              onClick={() => removeFile(index)}
              className="text-red-500 hover:text-red-700 ml-4"
              aria-label="Delete file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
      </div>
    </div>
  );
};

export default FileUpload;
