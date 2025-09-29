import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  initialValue?: number;
  step?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);
  const reset = () => setCount(initialValue);

  return (
    <div className="counter-component">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-controls">
        <button 
          className="counter-btn counter-btn-secondary" 
          onClick={decrement}
        >
          -
        </button>
        <button 
          className="counter-btn counter-btn-primary" 
          onClick={increment}
        >
          +
        </button>
        <button 
          className="counter-btn counter-btn-reset" 
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;