import { useCounterContext } from '../../contexts/CounterContext';

const Header = () => {
  const [state] = useCounterContext();

  return <h1>Counter: {state.counter}</h1>;
};

export default Header;
