import React, { useState } from 'react';
import '../css/index.css';

function Btn(props) {
  const { innerHeight: height } = window;
  let margin = "0vh";
  const [pos, setPos] = useState(false);
  const togglePos = () => setPos(value => !value);

  if (pos === true) {
    margin = "20vh";
    window.scrollTo(0, height);
    console.log(pos);
  }
  else if (pos === true && margin == "20vh") {
    margin = "0vh";
    window.scrollTo(0, 0);
    console.log(pos);
  }
  else {
    margin = "0vh";
    window.scrollTo(0, 0);
    console.log(pos);
  }

  const btnStyle = {
    marginTop: margin
  }

  return <button style={btnStyle} onClick={togglePos}>
          {props.name}
        </button>
}

function Navbar() {
  return (
    <div id='Navbar'>
        <Btn name="GALLERY" />
        <Btn name="ABOUT ME" />
        <Btn name="CONTACT" />
    </div>
  );
}

export default Navbar;