import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);    
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
export default Counter;