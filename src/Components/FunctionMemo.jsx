import React, { useState, useCallback } from "react";
import "../Styles/List.css";

function FunctionMemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <Child onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

const Child = React.memo(({ onIncrement }) => {
  console.log("rendered again");
  return <button onClick={onIncrement}>Increment</button>;
});

export default FunctionMemo;
