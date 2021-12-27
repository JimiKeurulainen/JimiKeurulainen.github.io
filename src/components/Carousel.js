// Code Author : Jimi Keurulainen
// File Name : Carousel.js

import React, { useState } from 'react';
import '../css/index.css';

function Carousel(props) {

  return (
    <div id="Carousel">
    <div>
      <div style={{backgroundColor: "blue"}}>
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

export default Carousel;