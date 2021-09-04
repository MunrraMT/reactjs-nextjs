import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { useCounterContext } from '../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounterContext();

  const [value, setValue] = useState('');

  return (
    <main>
      <Header />

      <Button onBtnClick={actions.increase}>Increase</Button>
      <Button onBtnClick={actions.decrease}>Decrease</Button>
      <Button onBtnClick={actions.reset}>Reset</Button>
    </main>
  );
};

export default Home;
