import './styles/global-styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home test-props='Passando Props para Class' />
  </React.StrictMode>,
  document.getElementById('root')
);
