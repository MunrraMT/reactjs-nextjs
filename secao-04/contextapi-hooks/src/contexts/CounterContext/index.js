import { createContext, useContext, useState } from 'react';

const Context = createContext();

const initialState = {
  counter: 0,
  loading: false,
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error(
      'Você não pode usar o <useCounterContext /> fora de um <CounterContextProvider />',
    );
  }

  return [...context];
};

export { CounterContextProvider, useCounterContext, initialState };
