import React, { useState, useEffect } from 'react';
import '../css/index.css';

function ActiveBtn(props) {
  return (
    <button 
    onClick={props.func}
    style={{color: "blue"}} 
    >
      {props.name} {props.temp2.toString()} <br></br>
      {props.temp1}
    </button>
  )
}

function Btn(props) {
  return (
    <button 
    onClick={() => {props.func[0](props.id); props.func[1]();}} 
    style={props.style}
    >
      {props.name} {props.temp2.toString()} <br></br>
      {props.temp1}
    </button>
  )
}

function Navbar(props) {
  const nameArray = ["GALLERY", "ABOUT ME", "CONTACT"];
  const btnArray = [];
  const { innerHeight: height, innerWidth: width } = window;
  const [posy, setPosy] = useState(false);
  const togglePosy = () => setPosy(value => !value);
  const btnStyle = {
    marginTop: "0vh",
  }
  const funcArray = [props.setState, togglePosy];

  for (var i = 0; i < 3; i++) {
    btnArray.push(
      <Btn 
        id={i}
        temp1={props.state}
        temp2={posy}
        name={nameArray[i]}
        style={btnStyle}
        func={funcArray}
      />
    )
  }

  if (posy === false) {
    window.scrollTo(0, 0);
    btnStyle.marginTop = "0vh";
  }
  else {
    window.scrollBy(0, height);
    btnStyle.marginTop = "15vh";
    funcArray.splice(1, 1, console.log);
    btnArray.splice(props.state, 1, 
      <ActiveBtn
        id={i}
        temp1={props.state}
        temp2={posy}
        name={nameArray[props.state]}
        style={btnStyle}
        func={togglePosy}
      />
    )
  }

  return (
    <div id='Navbar'>
      {btnArray}
    </div>
  );
}

export default Navbar;