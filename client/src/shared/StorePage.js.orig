// StorePage.js
import React from 'react';
import { GooseAvatar } from './Avatars';

const StorePage = () => {
  return (
    <div className="container mx-auto p-4 text-left">
      <h2 className="text-2xl font-bold mb-4">Store</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Available Avatars</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Avatar 1 */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105 square-avatar">
              <GooseAvatar name="civilEngineer" size={24} />
            </div>
            <p className="mt-2 text-center">
              <button className="text-black-500">Civil Engineer Goose</button>
            </p>
          </div>

          {/* Avatar 2 */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105 square-avatar">
              <GooseAvatar name="designer" size={24} />
            </div>
            <p className="mt-2 text-center">
              <button className="text-black-500">Designer Goose</button>
            </p>
          </div>

          {/* Avatar 3 */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105 square-avatar">
              <GooseAvatar name="business" size={24} />
            </div>
            <p className="mt-2 text-center">
              <button className="text-black-500">Business Goose</button>
            </p>
          </div>

          {/* Add other avatars here */}
        </div>
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold mb-2">Purchased Avatars</h3>
        {/* You can statically render purchased avatars here if needed */}
      </div>
    </div>
  );
};

export default StorePage;
