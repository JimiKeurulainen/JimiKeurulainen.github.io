import React, { useState, useEffect } from 'react';
import '../css/index.css';

function Btn(props) {
  if (props.posy === false) {
    return (
      <button style={props.style} onClick={() => {
        props.setActive(props.id);
        props.togglePosy();
        }}>
        {props.name} {props.posy.toString()} <br></br>
        {props.active}
      </button>
    )
  }
  else if (props.posy === true && props.active == props.id) {
    return (
      <button style={props.style} onClick={() => {
        props.togglePosy();
        }}>
        {props.name} {props.posy.toString()} <br></br>
        {props.active}
      </button>
    )
  }
  else {
    return (
      <button style={props.style} onClick={() => {
        props.setActive(props.id);
        }}>
        {props.name} {props.posy.toString()} <br></br>
        {props.active}
      </button>
    )
  }
}

function Navbar() {
  const nameArray = ["GALLERY", "ABOUT ME", "CONTACT"];
  const btnArray = [];
  const { innerHeight: height, innerWidth: width } = window;
  const [posy, setPosy] = useState(false);
  const togglePosy = () => setPosy(value => !value);
  const [active, setActive] = useState(4);
  const btnStyle = {
    marginTop: "0vh",
    color: "black"
  }

  for (var i = 0; i < 3; i++) {
    btnArray.push(
      <Btn
        id={i}
        setActive={setActive}
        active={active}
        togglePosy={togglePosy}
        posy={posy}
        posx={i * width}
        name={nameArray[i]}
        style={btnStyle}
      />
    )
  }
  // 
  if (posy === true) {
    btnArray.splice(active, 1, 
      <Btn
        id={active}
        setActive={setActive}
        active={active}
        togglePosy={togglePosy}
        posy={posy}
        posx={active * width}
        name={nameArray[active]}
        style={{
          marginTop: "0vh",
          color: "blue"
        }}
      />
    );
    window.scrollBy(0, height);
    btnStyle.marginTop = "15vh";
  }
  else {
    window.scrollBy(0, -height);
  }

  return (
    <div id='Navbar'>
      {btnArray}
    </div>
  );
}

export default Navbar;