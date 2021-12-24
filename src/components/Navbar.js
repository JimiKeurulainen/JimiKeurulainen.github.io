import React, { useState } from 'react';
import '../css/index.css';

function Navbar() {
  const { innerHeight: height } = window;
  let margin = 0;
  const [pos, setPos] = useState(false);
  const togglePos = () => setPos(value => !value);

  if (pos === true) {
    margin = 20;
    window.scrollTo(0, height);
  }
  else {
    margin = 0;
    window.scrollTo(0, 0);
  }

  const btnStyle = {
    marginTop: `${margin}vh`
  }

  return (
    <div id='Navbar'>
      <button style={btnStyle} onClick={togglePos}>
        GALLERY
      </button>
      <button style={btnStyle} onClick={togglePos}>
        ABOUT ME
      </button>
      <button style={btnStyle} onClick={togglePos}>
        CONTACT
      </button>
    </div>
  );
}

export default Navbar;