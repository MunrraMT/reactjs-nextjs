import { memo, useCallback, useState } from 'react';
import Prop from 'prop-types';
import '../App.css';

const Button = memo(({ incrementButton }) => {
  console.log('filho');

  return (
    <button type='button' onClick={() => incrementButton(10)}>
      +
    </button>
  );
});

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  incrementButton: Prop.func,
};

function UseCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((prev) => Number(prev) + Number(num));
  }, []);

  console.log('pai');

  return (
    <div className='App'>
      <p>teste 01</p>
      <h1>Counter: {counter}</h1>

      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCallback;
