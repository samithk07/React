import React, { useState } from "react";
import "./Previous.css";

function MyComponent() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // For last button
  const [number, setNumber] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);

  function handleIncreaseNumber() {
    setNumber((prev) => {
      setPreviousValue(prev); // storing previous value
      return prev + 1;
    });
  }

  return (
    <div>
      Count: {count}
      <br /><br />

      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(prev => prev + 5)}>Increment 5</button>

      <br /><br />

      <h3>Number: {number}</h3>
      <h4>Previous Value: {previousValue}</h4>

      <button onClick={handleIncreaseNumber}>Increase Number</button>
    </div>
  );
}

export default MyComponent;


