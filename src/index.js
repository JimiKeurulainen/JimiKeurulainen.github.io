import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Bottombody from './components/Bottombody';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter base="/">
    <div className='Body'>
      <div className='Header'>
        Jimi Keurulainen
      </div>
      <Carousel />
      <Navbar />
      <Bottombody />
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
