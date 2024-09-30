import React, { useState, useMemo, useCallback } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
function SmallExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const value = useContext(DataContext);
  // Using useMemo for expensive calculation
  const doubleCount = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 2;
  }, [count]);

  // Using useCallback for function memoization
  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {value.age}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default SmallExample;
