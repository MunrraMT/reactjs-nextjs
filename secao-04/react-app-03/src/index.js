import React from 'react';
import ReactDOM from 'react-dom';
import Home from './hooks/customHook';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
