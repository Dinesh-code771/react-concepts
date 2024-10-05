import React from "react";
import { Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <div
      style={{
        flex: 3,
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        border: "1px solid black",
        height: "100vh",
        margin: "15px",
        borderRadius: "0.5rem",
      }}
    >
      <h1>Settings home page</h1>
      <Outlet />
    </div>
  );
}
