import React, { useState } from 'react';
import '../css/index.css';

function setScroll() {
  const { innerHeight: height } = window;
  if (window.scrollY == 0) {
    window.scrollTo(0, height);
  }
  else {
    window.scrollTo(0, 0);
  }
}

function Navbar() {

  return (
    <div className='Navbar'>
        <button onClick={() => setScroll()}>
            GALLERY
        </button>
        <button onClick={() => setScroll()}>
            ABOUT ME
        </button>
        <button onClick={() => setScroll()}>
            CONTACT
        </button>
    </div>
  );
}

export default Navbar;