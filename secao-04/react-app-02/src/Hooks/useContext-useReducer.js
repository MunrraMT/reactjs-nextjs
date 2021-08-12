/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer, useRef } from 'react';
import Prop from 'prop-types';
import '../App.css';

// actions.js
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const globalState = {
  title: 'Título do contexto',
  body: 'Body do contexto',
  counter: 0,
};

// reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }

    default:
      console.error('type invalid');
  }

  return { ...state };
};

// AppContextProvider
const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <AppContext.Provider value={{ state, changeTitle }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.protoType = {
  children: Prop.node.isRequired,
};

// H1/index.js
const H1 = () => {
  const {
    state: { title },
    changeTitle,
  } = useContext(AppContext);

  const inputRef = useRef(null);

  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{title}</h1>
      <input type='text' ref={inputRef} />
    </>
  );
};

// App.js
const UseContextComUseReducer = () => (
  <AppContextProvider>
    <main className='App'>
      <H1 />
    </main>
  </AppContextProvider>
);

export default UseContextComUseReducer;
