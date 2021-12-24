import React, { useState } from 'react';
import '../css/index.css';

function Btn(props) {
  const btnStyle = {
    marginTop: `${props.btnStyle}vh`,
  };
  const [color, setColor] = useState(false);
  const toggleColor = () => setColor(value => !value);

  color === true ? btnStyle.color = "blue" : btnStyle.color = "black";

  if (color === true && props.active === true) {
    return (
      <button style={btnStyle} onClick={() => {props.func(); toggleColor();}}>
        {props.name}
      </button>
    )
  }
  else if (props.active === false) {
    return (
      <button style={btnStyle} onClick={() => {props.func(); toggleColor();}}>
        {props.name}
      </button>
    )
  }
  else if (props.active === true) {
    return (
      <button style={btnStyle} onClick={() => {toggleColor();}}>
        {props.name}
      </button>
    )
  }
}

function Navbar() {
  const { innerHeight: height } = window;
  let margin = 0;
  const [pos, setPos] = useState(false);
  const togglePos = () => setPos(value => !value);

  if (pos === true) {
    margin = 15;
    window.scrollTo(0, height);
  }
  else {
    margin = 0;
    window.scrollTo(0, 0);
  }

  return (
    <div id='Navbar'>
      <Btn name="GALLERY" func={togglePos} active={pos} btnStyle={margin} />
      <Btn name="ABOUT ME" func={togglePos} active={pos} btnStyle={margin} />
      <Btn name="CONTACT" func={togglePos} active={pos} btnStyle={margin} />
    </div>
  );
}

export default Navbar;