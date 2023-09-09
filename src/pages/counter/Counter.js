import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
        setCount(count - 1);
      }

      return (
        <div>
          <h1>Counter</h1>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      );
    };
  
  

  
  export default Counter;