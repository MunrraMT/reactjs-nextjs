import { node } from 'prop-types';
import { useReducer } from 'react';

import CounterContext from './context';
import data from './data';
import reducer from './reducer';

const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: node.isRequired,
};

export default CounterProvider;
