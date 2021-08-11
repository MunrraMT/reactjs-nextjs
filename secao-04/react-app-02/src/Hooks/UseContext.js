/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react';
import '../App.css';

const globalState = {
  title: 'Título do contexto',
  body: 'Body do contexto',
  counter: 0,
};
const GlobalContext = createContext();

const H1 = () => {
  const {
    contextState: { title },
  } = useContext(GlobalContext);

  return <h1 className='App'>{title}</h1>;
};

const H2 = () => {
  const {
    contextState: { counter },
  } = useContext(GlobalContext);

  return <h2 className='App'>{counter}</h2>;
};

const P = () => {
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = useContext(GlobalContext);

  return (
    <p
      onClick={() => {
        setContextState((prev) => ({ ...prev, counter: prev.counter + 1 }));
      }}
    >
      {body}
    </p>
  );
};

const Div = () => (
  <>
    <H1 />
    <P />
    <H2 />
  </>
);

const UseContext = () => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <main className='App'>
      <GlobalContext.Provider value={{ contextState, setContextState }}>
        <Div />
      </GlobalContext.Provider>
    </main>
  );
};

export default UseContext;
