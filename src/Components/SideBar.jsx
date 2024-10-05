import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function SideBar() {
  // const count = useSelector((state) => state.counter.count);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          flex: 0.2,
        }}
      >
        <aside
          style={{
            backgroundColor: "black",
            color: "black",
            padding: "1rem",
            border: "1px solid white",
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
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dinesh"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Dinesh
              </Link>
            </li>
            <li>
              <Link
                to="/sunitha"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Sunitha
              </Link>
            </li>
            <li>
              <Link
                to="/counter"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Counter
              </Link>
            </li>
          </ul>
        </aside>
        {"count:" + 0}
      </div>
      {/* <button onClick={() => {
        navigate("/settings");
      }}>settings</button> */}

      {/* <div>
        <h1>second</h1>
      </div> */}
    </>
  );
}
