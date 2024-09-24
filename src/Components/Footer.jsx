import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "white",
          color: "black",
          borderRadius: "0.5rem",
        }}
      >
        <p>© 2021</p>
      </footer>
    </div>
  );
}
