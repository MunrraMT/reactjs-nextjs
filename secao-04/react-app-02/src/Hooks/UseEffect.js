import { useState, useEffect } from 'react';
import '../App.css';

const eventFn = () => console.log('h1 clicado');

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);

  useEffect(() => {
    console.log('ComponentWillUnmount');
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  useEffect(() => {
    console.log('ComponentDidUpdate com dependencias');
    console.log('counter1 mudou para', counter);
  }, [counter]);

  return (
    <div className='App'>
      <p>teste 01</p>

      <h1>
        C1: {counter}, C2: {counter2}
      </h1>

      <button onClick={() => setCounter((prev) => prev + 1)} type='button'>
        C1++
      </button>

      <button onClick={() => setCounter2((prev) => prev + 1)} type='button'>
        C2++
      </button>
    </div>
  );
}

export default UseEffect;
