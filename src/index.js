import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Carousel from './components/Carousel';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter base="/">
    <div className='Body'>
      <div className='Header'>

      </div>
      <Carousel />
      <div className='Navbar'>

      </div>
      <div className='Bottombody'>

      </div>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
