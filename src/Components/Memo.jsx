import React, { useState, useMemo } from "react";

// Factorial function (expensive calculation)
const factorial = (n) => {
  console.log("Calculating factorial...");
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

function FactorialComponent() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // useMemo to memoize factorial calculation
  const memoizedFactorial = useMemo(()=>{
    console.log("runnnig")
    return factorial(number);
  },[number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        Factorial of {number} is: {memoizedFactorial}
      </p>

      <button onClick={() => setCounter(counter + 1)}>
        Re-render Component (Counter: {counter})
      </button>
    </div>
  );
}

export default FactorialComponent;
