import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/index.css';

function Bottombody(props) {
  return (
    <div className="Carousel">
    <div>
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