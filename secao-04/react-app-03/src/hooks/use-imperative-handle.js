/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react/cjs/react.development';

const UseImperativeHandle = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();

    while (Date.now() < now + 300)
      divRef.current.divRef2.scrollTop = divRef.current.divRef2.scrollHeight;
  });

  const handleClick = () => {
    setCounted((prev) => [...prev, Number(prev.slice(-1)) + 1]);
    divRef.current.handleClick();
  };

  return (
    <>
      <button onClick={handleClick} type="button">
        Count {counted.slice(-1)}
      </button>
      <DisplayCounted counter={counted} ref={divRef} />
    </>
  );
};

const DisplayCounted = forwardRef(({ counter }, ref) => {
  const [rand, setRand] = useState('0.24');
  const divRef2 = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef2: divRef2.current,
  }));

  return (
    <div
      ref={divRef2}
      style={{ height: '100px', width: '100px', overflowY: 'scroll' }}
    >
      {counter.map((item) => (
        <p onClick={handleClick} key={`c-${item}`}>
          {item} +++ {rand}
        </p>
      ))}
    </div>
  );
});

export default UseImperativeHandle;
