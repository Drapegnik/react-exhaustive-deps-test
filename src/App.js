import React, { useState, useEffect } from "react";
import "./styles.css";

const Test = ({ count }) => {
  useEffect(() => {
    console.log("effect", count);
  }, []);
  return <div>{count}</div>;
};

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
      <Test count={count} />
    </div>
  );
}
