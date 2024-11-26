import React from 'react';
import FileUpload from './FileUpload';
import FileSection from './FileSection';

const PropertyDocuments: React.FC = () => {
  const handleFilesChange = (files: File[]) => {
    console.log('Uploaded files:', files); 
  };

  const handleBack = () => {
    console.log('Navigating back...');
  };

  const handleContinue = () => {
    console.log('Continuing to the next step...');
  };

  return (
    <FileSection
      title="Property Documents"
      subtitle="Upload all relevant legal and verifiable documents of your property."
      onBack={handleBack}
      onContinue={handleContinue}
    >
      <FileUpload fileLimit={5} onFilesChange={handleFilesChange} />
    </FileSection>
  );
};

export default PropertyDocuments;
