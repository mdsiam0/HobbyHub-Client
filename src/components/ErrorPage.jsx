import React from "react";
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-indigo-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-4">
        {error.statusText || error.message || "This page doesn’t exist."}
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
