// Code Author : Jimi Keurulainen
// File Name : Navbar.js

import React, { useState, useRef } from 'react';
import '../css/index.css';
import CaretU from '../Caret_U.svg'

function Btn(props) {
  const [name, setName] = useState("FRONT PAGE")
  if (props.active === false) {
    return (
      <button
      type="button"
      onClick={() => {props.func[0](props.id); props.func[1](); setName("FRONT PAGE");}} 
      style={props.style}
      >
        <div style={{flexGrow: "1"}}><br /></div>
        <div style={{flexGrow: "3"}}>
          <h2>{props.name}</h2>
        </div>
      </button>
    ) 
  }
  else if (props.active === true) {
    return (
      <button
      type="button"
      onClick={props.func}
      style={props.style}
      onMouseOver={() => {setName("FRONT PAGE");}}
      onMouseOut={() => {setName(props.name);}}
      >
        <div id='Indicator'>
          <img style={{filter: "invert()"}} src={CaretU} width={"10px"} />
        </div>
        <div style={{
          flexGrow: "3",
        }}>
          <h2>{name}</h2>
        </div>
      </button>
    )
  }
}

function Navbar(props) {
  const nameArray = ["GALLERY", "ABOUT ME", "CONTACT"];
  const btnArray = [];
  const { innerHeight: height} = window;
  const [posy, setPosy] = useState(false);
  const togglePosy = () => setPosy(value => !value);
  const btnStyle = {
    marginTop: "0vh"
  }
  const funcArray = [props.setState, togglePosy];

  // Add three "default" buttons to an array
  for (var i = 0; i < 3; i++) {
    btnArray.push(
      <Btn
        active={false}
        id={i}
        name={nameArray[i]}
        style={btnStyle}
        func={funcArray}
      />
    )
  }
  if (posy === false) {
    // Scroll up to the frontpage
    window.scrollTo(0, 0);
    btnStyle.marginTop = "0vh";
  }
  else {
    // Scroll down to the bottom div
    window.scrollBy(0, height);
    // Replace the inactive buttons' functions,
    // Prevent inactive buttons from leading to the frontpage
    funcArray.splice(1, 1, console.log);
    // Replace a default button with an active button
    btnArray.splice(props.state, 1, 
      <Btn
        active={true}
        id={i}
        name={nameArray[props.state]}
        style={btnStyle}
        func={togglePosy}
      />
    )
    btnStyle.marginTop = "15vh";
  }

  return (
    <div id='Navbar'>
      {btnArray}
    </div>
  );
}

export default Navbar;