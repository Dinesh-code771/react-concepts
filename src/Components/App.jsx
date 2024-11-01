import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Categories searchValue={searchValue} />
    </div>
  );
}
