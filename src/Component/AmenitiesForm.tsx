import React from "react";

type AmenitiesFormProps = {
  amenities: { name: string; icon: React.ReactNode }[];
  onSubmit: (selectedAmenities: string[]) => void;
  onBack: () => void;
};

const AmenitiesForm: React.FC<AmenitiesFormProps> = ({
  amenities,
  onSubmit,
  onBack,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const selectedAmenities = Object.keys(
      Object.fromEntries(formData.entries())
    ).filter((key) => formData.get(key) === "on");
    onSubmit(selectedAmenities);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">
        Tell guests what your place has to offer
      </h2>
      <p className="text-gray-600 mb-6">
        Select as many amenities as you offer.
      </p>
      <form onSubmit={handleSubmit} className=" space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <label
              key={index}
              className="flex w-fit items-center bg-gray-100 space-x-2 px-2 rounded-lg text-gray-700"
            >
                <input
                type="checkbox"
                name={amenity.name}
                className="h-4  text-purple-600 text-sm border-gray-300 rounded focus:ring-purple-500"
              />
              {amenity.icon && (
                <span className=" text-sm">{amenity.icon}</span>
              )}
              
              <span>{amenity.name}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default AmenitiesForm;
