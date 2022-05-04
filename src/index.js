// Code Author : Jimi Keurulainen
// File Name : index.js

import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import Body from './components/Body';
import { Canvas } from '@react-three/fiber';
import Sword2 from './models/Sword2.js';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HashRouter base="/">
    <Body>
      <div className='Header'>
        <h1>Jimi Keurulainen</h1>
        <p style={{color: "red"}}>Website isn't very responsive yet!</p>
      </div>
      <Canvas style={{ background: "rgb(180, 180, 180)", height:"100vh" }}>
        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Sword2 />
        </Suspense>
      </Canvas>
    </Body>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
