/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { useReducer } from 'react';
import globalState from '../components/useReducer/providers/data';
import '../App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }

    case 'inverter': {
      console.log('chamou inverter');
      return { ...state, title: state.title.split('').reverse().join('') };
    }

    default:
      console.error('Escolha um type válido!');
      break;
  }

  return { ...state };
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <main className='App'>
      <h1>
        {title} - {counter}
      </h1>

      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>

      <button type='button' onClick={() => dispatch({ type: 'inverter' })}>
        Inverter
      </button>

      <button type='button' onClick={() => dispatch({ type: 'Error' })}>
        Sem Action
      </button>
    </main>
  );
};

export default UseReducer;
