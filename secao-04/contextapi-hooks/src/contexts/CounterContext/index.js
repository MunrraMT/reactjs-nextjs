import { createContext, useContext, useReducer, useRef } from 'react';
import buildActions from './build-actions';

import reducer from './reducer';

const Context = createContext();

const initialState = {
  counter: 0,
  loading: false,
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
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
