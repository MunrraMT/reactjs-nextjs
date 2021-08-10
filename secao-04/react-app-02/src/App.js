import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'App-logo reverse' : 'App-logo';

  const reverseToggle = () => setReverse(!reverse);
  const handleIncrement = () => setCounter((prev) => prev + 1);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className={reverseClass} alt='logo' />

        <h1>Contador: {counter}</h1>

        <button
          onClick={reverseToggle}
          style={{ fontSize: '2.5rem' }}
          type='button'
        >
          {reverseClass}
        </button>

        <hr />

        <button
          onClick={handleIncrement}
          style={{ fontSize: '2.5rem' }}
          type='button'
        >
          Increment {counter}
        </button>
      </header>
    </div>
  );
}

export default App;
