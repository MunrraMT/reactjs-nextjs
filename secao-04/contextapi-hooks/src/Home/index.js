import { useEffect } from 'react';
import { useCounterContext } from '../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => actions.increase(), [actions]);

  return (
    <main>
      <h1 onClick={() => actions.increase()}>Oi</h1>
    </main>
  );
};

export default Home;
