import { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function BSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden md:block">
      {/* Sidebar */}
      <div
        className={`  relative top-0 left-0 h-screen bg-blue-600 text-white p-4 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-[-10%]"
        }`}
        style={{ width: isOpen ? "250px" : "70px" }}
      >
        <button
          className="absolute top-4 right-[-15px] bg-blue-800 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? "←" : "→"}
        </button>
        <ul className="mt-10 space-y-4">
          <li
            className={`flex items-center ${
              !isOpen ? "justify-center" : ""
            } hover:text-gray-200`}
          >
            <FaHome className="text-xl" />
            {isOpen && (
              <a href="/home/icon" className="ml-4 cursor-pointer">
                Home
              </a>
            )}
          </li>
          <li
            className={`flex items-center ${
              !isOpen ? "justify-center" : ""
            } hover:text-gray-200`}
          >
            <FaInfoCircle className="text-xl" />
            {isOpen && <span className="ml-4">About</span>}
          </li>
          <li
            className={`flex items-center ${
              !isOpen ? "justify-center" : ""
            } hover:text-gray-200`}
          >
            <FaServicestack className="text-xl" />
            {isOpen && <span className="ml-4">Services</span>}
          </li>
          <li
            className={`flex items-center ${
              !isOpen ? "justify-center" : ""
            } hover:text-gray-200`}
          >
            <FaPhone className="text-xl" />
            {isOpen && <span className="ml-4">Contact</span>}
          </li>
        </ul>
      </div>
    </div>
  );
}
