// Code Author : Jimi Keurulainen
// File Name : Bottombody.js

import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import '../css/index.css';

function Bottombody(props) {
  const myRef = useRef(null);
  const { innerHeight: height, innerWidth: width } = window;
  useEffect(() => {
    myRef.current.scrollTo(props.state * width, 0);
  })

  return (
    <div id="Carousel" ref={myRef} >
    <div className='Scrolled'>
      <div style={{backgroundColor: "grey"}}>
        GALLERY
      </div>
      <div style={{backgroundColor: "green"}}>
        ABOUT ME
      </div>
      <div style={{backgroundColor: "red"}}>
        CONTACT
      </div>
    </div>
    </div>
  );
}

export default Bottombody;