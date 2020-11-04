import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/app.scss';

import App from './App';

import store from './redux/store';


let inc = () => store.dispatch({ type: 'add' })

store.subscribe(() => console.log("Изменился store", store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <button onClick={inc}> + 1 </button>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
