import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
        <Link to="/" className="text-teal-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
