/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { GlobalContextProvider } from '../components/useContext/providers/GlobalContext';
import Div from '../components/useContext/Div';
import '../App.css';

const UseContext = () => (
  <main className='App'>
    <GlobalContextProvider>
      <Div />
    </GlobalContextProvider>
  </main>
);

export default UseContext;
