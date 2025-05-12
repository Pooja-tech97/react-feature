import React, { useState, useCallback } from "react";
import Logger from "./Logger";
import Navbar from "../components/Navbar";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleLog = useCallback(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div>
      <Navbar />
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+ Increment</button>
      <Logger onLog={handleLog} />
    </div>
  );
};

export default Counter;
