import React from "react";

export default function SideBar() {
  return (
    <>
      <div
        style={{
          flex: 1,
        }}
      >
        <aside
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "1rem",

            height: "100vh",
            margin: "15px",
            borderRadius: "0.5rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              gap: "3rem",
            }}
          >
            <li>
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </aside>
      </div>

      {/* <div>
        <h1>second</h1>
      </div> */}
    </>
  );
}
