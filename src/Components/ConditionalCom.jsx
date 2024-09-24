import React, { useState } from "react";

export default function ConditionalCom() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        {isLoggedIn ? "Welcome User" : "you are not logged in"}
      </h1>
      <button
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1.2rem",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "0.5rem",
        }}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
