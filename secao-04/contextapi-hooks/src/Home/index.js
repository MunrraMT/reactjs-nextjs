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

      <section>
        <Button onBtnClick={actions.increase}>Increase</Button>
        <Button onBtnClick={actions.decrease}>Decrease</Button>
        <Button onBtnClick={actions.reset}>Reset</Button>

        <Button disabled={state.loading} onBtnClick={actions.asyncIncrease}>
          asyncIncrease
        </Button>
        <Button disabled={state.loading} onBtnClick={actions.asyncError}>
          asyncError
        </Button>
      </section>

      <section>
        <input
          type="text"
          value={value}
          onInput={(e) => setValue(e.target.value)}
        />
        <button onClick={() => actions.setCounter(value)}>Mudar valor</button>
      </section>
    </main>
  );
};

export default Home;
