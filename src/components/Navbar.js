// Code Author : Jimi Keurulainen
// File Name : Navbar.js

import React, { useState, useEffect } from 'react';
import '../css/index.css';
import CaretU from '../Caret_U.svg'

function Btn(props) {
  const [name, setName] = useState("FRONT PAGE")
  if (props.active === false) {
    return (
      <button
      type="button"
      onClick={() => {props.func[0](props.id); props.func[1](); setName("FRONT PAGE")}} 
      style={{marginTop: `${props.style}vh`}}
      >
        <div style={{flexBasis: "3vh"}}><br /></div>
        <div style={{flexBasis: "12vh"}}>
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
      style={{marginTop: `${props.style}vh`}}
      onMouseOver={() => {setName("FRONT PAGE");}}
      onMouseOut={() => {setName(props.name);}}
      >
        <div id='Indicator'>
          <img 
            style={{filter: "invert()"}} 
            src={CaretU} 
            width={"20px"}
            alt="Upwards arrow"
          />
        </div>
        <div style={{flexBasis: "12vh"}}>
          <h2>{name}</h2>
        </div>
      </button>
    )
  }
}

function Navbar(props) {
  const nameArray = ["MY PROJECTS", "ABOUT ME", "CONTACT"];
  const btnArray = [];
  const [posy, setPosy] = useState(false);
  const togglePosy = () => setPosy(value => !value);
  const { innerHeight: height} = window;
  const [margin, setMargin] = useState(0);
  const funcArray = [props.setActive, togglePosy];

  useEffect(() => {
    if (posy === false) {
      // Scroll up to the frontpage
      window.scrollTo(0, 0);
      // Update the margin
      setMargin(0);
    }
    else if (posy === true) {
      // Scroll down to the bottom div
      window.scrollBy(0, height);
      // Update the margin
      setMargin(15);
    }
  }, [posy, height]);

  // Add three "default" buttons to an array
  for (var i = 0; i < 3; i++) {
    btnArray.push(
      <Btn
        key={i}
        id={i}
        active={false}
        name={nameArray[i]}
        style={margin}
        func={funcArray}
      />
    )
  }

  if (posy === true) {
    // Replace a default button with an active button
    btnArray.splice(props.active, 1, 
      <Btn
        key={props.active}
        id={props.active}
        active={true}
        name={nameArray[props.active]}
        style={margin}
        func={togglePosy}
      />
    )
    // Replace the inactive buttons' functions,
    // Prevent inactive buttons from leading to the frontpage
    funcArray.splice(1, 1, console.log);
  }

  return (
    <div id='Navbar'>
      {btnArray}
    </div>
  );
}

export default Navbar;