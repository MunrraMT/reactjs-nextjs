/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';
import globalState from './data';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
