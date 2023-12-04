import React, { useState } from 'react';

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState('general');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="settings-page">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="grid grid-cols-4 gap-4">
        {/* Left Side - Options */}
        <div className="col-span-1">
          <div className="mb-4">
            <button
              className={`block text-sm font-medium text-gray-700 focus:outline-none ${
                selectedOption === 'general' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleOptionClick('general')}
            >
              General Information
            </button>
          </div>
          <div className="mb-4">
            <button
              className={`block text-sm font-medium text-gray-700 focus:outline-none ${
                selectedOption === 'manage' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleOptionClick('manage')}
            >
              Manage Account
            </button>
          </div>
          <div className="mb-4">
            <button
              className={`block text-sm font-medium text-gray-700 focus:outline-none ${
                selectedOption === 'notification' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleOptionClick('notification')}
            >
              Notification
            </button>
          </div>
          <div className="mb-4">
            <button
              className={`block text-sm font-medium text-gray-700 focus:outline-none ${
                selectedOption === 'security' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleOptionClick('security')}
            >
              Security
            </button>
          </div>
          <div className="mb-4">
            <button
              className={`block text-sm font-medium text-gray-700 focus:outline-none ${
                selectedOption === 'preferences' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleOptionClick('preferences')}
            >
              Preferences
            </button>
          </div>
        </div>

        {/* Right Side - Contents */}
        <div className="col-span-3">
          {selectedOption === 'general' && (
            <section className="mb-8">
              {/* Upload Profile Picture */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Upload Profile Picture</h2>
                <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                {/* Implement your profile picture upload component here */}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded-md p-2 w-full"
                    // Implement your state and onChange handler for the name field
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-md p-2 w-full"
                    // Implement your state and onChange handler for the email field
                  />
                </div>

                {/* Department */}
                <div className="mb-4">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="border rounded-md p-2 w-full"
                    // Implement your state and onChange handler for the department field
                  />
                </div>

                {/* Entrance Year */}
                <div className="mb-4">
                  <label htmlFor="entrance-year" className="block text-sm font-medium text-gray-700">
                    Entrance Year
                  </label>
                  <input
                    type="text"
                    id="entrance-year"
                    name="entrance-year"
                    className="border rounded-md p-2 w-full"
                    // Implement your state and onChange handler for the entrance year field
                  />
                </div>
              </div>
            </section>
          )}

          {/* Add sections for other options (Manage Account, Notification, Security, Preferences) here */}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
