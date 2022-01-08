// Code Author : Jimi Keurulainen
// File Name : index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Body from './components/Body';
import Carousel from './components/Carousel';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter base="/">
    <Body>
      <div className='Header'>
        <h1>Jimi Keurulainen</h1>
        <p style={{color: "red"}}>Website isn't very responsive yet!</p>
      </div>
      <Carousel />
    </Body>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
