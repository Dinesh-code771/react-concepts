import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  return (
    <div className="flex h-screen  justify-center items-center">
      <form onSubmit={handleClick}>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 cursor-pointer">
          Login with Facebook
        </button>
      </form>
    </div>
  );
}
