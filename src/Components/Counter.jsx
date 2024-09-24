import React, { useState } from "react";
import "../Styles/Component.css";
export default function Counter(props) {
// props.increment();
  return (
    <div className="container">
      {props.children}
      <h2 id="count">{props.count}</h2>
      <div className="buttons">
        {props.count < 10 ? (
          <button onClick={props.increment} className="button">
            Increment
          </button>
        ) : null}
        {props.count > 0 ? (
          <button
            onClick={props.decrement}
            disabled={props.count === 0}
            className="button"
          >
            Decrement
          </button>
        ) : null}
      </div>
    </div>
  );
}
