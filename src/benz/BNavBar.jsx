import React from "react";

export default function BNavBar() {
  const [iisSearchOpen, setiisSearchOpen] = React.useState(false);
 
  return (
    <nav className="bg-blue-600 p-4 flex gap-5 items-center justify-between">
      <div className="burger w-10 h-10 bg-black rounded-full"></div>
      {/* Logo */}
      {!iisSearchOpen && (
        <div className="text-white font-bold text-xl">MyApp</div>
      )}

      {/* Search Bar */}
      {iisSearchOpen ? (
        <div className=" md:block relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l5 5m-5-5a7 7 0 11-10-10 7 7 0 0110 10z"
            />
          </svg>
        </div>
      ) : null}

      {/* Navigation Links */}
      <div
        onClick={() => {
          setiisSearchOpen(!iisSearchOpen);
        }}
        className="flex justify-center align-centers h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400  transform -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l5 5m-5-5a7 7 0 11-10-10 7 7 0 0110 10z"
          />
        </svg>
      </div>
    </nav>
  );
}
