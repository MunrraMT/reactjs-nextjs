import { useCounterContext } from '../contexts/CounterContext';

const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <main>
      <h1>Oi</h1>
    </main>
  );
};

export default Home;
