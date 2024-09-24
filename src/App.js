import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { useEffect, useState } from "react";
import ConditionalCom from "./Components/ConditionalCom";
import List from "./Components/List";
function App() {
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
      <List />
    </div>
  );
}

export default App;
