/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from 'react';
import '../App.css';

// customHook
const useMyHook = (func, delay = 1000) => {
  const saveFunc = useRef();

  useEffect(() => {
    saveFunc.current = func;
  }, [func]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveFunc.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

// App.js
const CustomHook = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((prev) => prev + 1), delay);

  return (
    <main className='App'>
      <h1>Counter: {counter}</h1>
      <h1>Delay: {delay}</h1>

      <button
        type='button'
        onClick={() => {
          setDelay((prev) => Number(prev) + Number(incrementor));
        }}
      >
        + {incrementor}
      </button>

      <button
        type='button'
        onClick={() => {
          setDelay((prev) => Number(prev) - Number(incrementor));
        }}
      >
        - {incrementor}
      </button>

      <input
        type='number'
        value={incrementor}
        onChange={(e) => setIncrementor(e.target.value)}
      />
    </main>
  );
};

export default CustomHook;
