import { useLayoutEffect, useRef, useState } from 'react/cjs/react.development';

const UseLayoutEffect = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();

    while (Date.now() < now + 1500)
      divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((prev) => [...prev, Number(prev.slice(-1)) + 1]);
  };

  return (
    <>
      <button onClick={handleClick} type="button">
        Count {counted.slice(-1)}
      </button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '100px', overflow: 'scroll' }}
      >
        {counted.map((item) => (
          <p key={`c-${item}`}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default UseLayoutEffect;
