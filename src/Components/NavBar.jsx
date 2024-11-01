import React from "react";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar({ setSearchValue, searchValue }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="elements">
        <div className="leftElements">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="logo"
          >
            <img src="/myntra logo.png" alt="" />
          </div>
          <div className="details">
            <u1 className="list">
              <li>MEN</li>
              <li>WOMEN</li>
              <li>KIDS</li>
              <li>HOME & LIVING</li>
              <li>BEAUTY</li>
              <li>STUDIO</li>
            </u1>
          </div>
        </div>
        <div className="rightElements">
          <div className="search">
            <CiSearch size={15} />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="icons">
            <div className="icon">
              <CiUser size={15} />
              <p>Profile</p>
            </div>
            <div className="icon">
              <FaRegHeart size={15} />
              <p>Wishlist</p>
            </div>
            <div className="icon">
              <IoBagOutline size={15} />
              <p>cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
