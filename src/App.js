import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { useEffect, useState } from "react";
import ConditionalCom from "./Components/ConditionalCom";
import List from "./Components/List";
import FunctionMemo from "./Components/FunctionMemo";
import { createContext, useContext } from "react";
import { useReducer } from "react";
import UserForm from "./Components/UserForm";
// import AdminForm from "./Components/AdminForm";
import Model from "./Components/Model";
import React from "react";
import DataDisplayWithLoading from "./Components/DataDisplay";
import { Outlet } from "react-router-dom";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export const DataContext = createContext();
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* <NavBar/> */}
      <SideBar />
      {/* <AdminForm /> */}
      <Outlet />
    </div>
  );
}

export default App;
