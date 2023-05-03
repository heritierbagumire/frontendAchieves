import React from 'react';  
import { store } from 'react-redux';
import  ReactDOM  from 'react-dom';
import App from './App';

import './index.css';   
// import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Could not find root element');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

  
