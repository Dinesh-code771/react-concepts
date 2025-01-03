import React, { useEffect, useCallback } from "react";
import { useState } from "react";
import BNavBar from "./BNavBar";
import BMain from "./BMain";
export default function BenzApp() {
  const [count, setCount] = useState(0);
  const [name, setName] = React.useState("Benz");
  // const increment = () => {
  //   console.log("Button clicked");
  //   setCount((prevCount) => prevCount + 1);
  // }

  const increment = useCallback(() => {
    console.log("Button clicked");
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="bg-black h-screen text-white">
      <BNavBar name={name}/>
      <SideBar />

      <BMain name={name} />
    </div>
  );
}
