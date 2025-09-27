import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decreaseCount() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={incrementCount}> + </button>
        <button onClick={decreaseCount}> - </button>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
    </div>
  );
};

export default Counter;
