import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the eye icons from react-icons

interface PasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface PasswordSettingsProps {
  onSave: (values: PasswordFormValues) => void;
}

const PasswordSettings: React.FC<PasswordSettingsProps> = ({ onSave }) => {
  const [showPassword, setShowPassword] = useState<{
    currentPassword: boolean;
    newPassword: boolean;
    confirmPassword: boolean;
  }>({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const formik = useFormik<PasswordFormValues>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("This field is required"),
      newPassword: Yup.string().required("This field is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      onSave(values);
    },
  });

  const togglePasswordVisibility = (
    field: keyof typeof showPassword
  ) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 rounded-md shadow-md mx-auto"
    >
      <h2 className="text-lg font-semibold">Password Settings</h2>
      <p className="text-sm text-gray-500 mb-4">
        Change your password to secure your account.
      </p>
      <div className="space-y-4">
        {["currentPassword", "newPassword", "confirmPassword"].map(
          (field, index) => (
            <div key={index} className="relative">
              <input
                id={field}
                name={field}
                type={showPassword[field as keyof typeof showPassword] ? "text" : "password"}
                value={formik.values[field as keyof PasswordFormValues]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border ${
                  formik.touched[field as keyof PasswordFormValues] &&
                  formik.errors[field as keyof PasswordFormValues]
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                placeholder={`${
                  field === "currentPassword"
                    ? "Current password"
                    : field === "newPassword"
                    ? "New password"
                    : "Confirm new password"
                }`}
              />
              {formik.touched[field as keyof PasswordFormValues] &&
                formik.errors[field as keyof PasswordFormValues] && (
                  <p className="text-sm text-red-500 mt-1">
                    {formik.errors[field as keyof PasswordFormValues]}
                  </p>
                )}
              {field !== "confirmPassword" && (
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => togglePasswordVisibility(field as keyof typeof showPassword)} // Cast to keyof typeof showPassword
                >
                  {showPassword[field as keyof typeof showPassword] ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              )}
            </div>
          )
        )}
      </div>
      <button type="submit" className="col-span-1 mx-auto ml-auto mr-0 sm:col-span-2 px-2 py-1 border rounded-2xl hover:bg-purple-700">
        Save changes
      </button>
    </form>
  );
};

export default PasswordSettings;
