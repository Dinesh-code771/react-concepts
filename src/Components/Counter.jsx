import React, { useState } from "react";
import "../Styles/Component.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../Redux/counterSlice";
export default function Counter() {
  // props.increment();
  // const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 id="count">{0}</h2>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className="input"
      />
      <div className="buttons">
        <button onClick={() => dispatch(increment())} className="button">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="button">
          Decrement
        </button>
        {/* increment by */}
        <button
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
          className="button"
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}
