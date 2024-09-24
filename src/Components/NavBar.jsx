import React, { useState, useMemo, useCallback } from 'react';

function SmallExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Using useMemo for expensive calculation
  const doubleCount = useMemo(() => {
    console.log('Expensive calculation running...');
    return count * 2;
  }, [count]);

  // Using useCallback for function memoization
  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Double Count: {doubleCount}</p>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name"
      />
    </div>
  );
}

export default SmallExample;
