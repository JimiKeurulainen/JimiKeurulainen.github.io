// Code Author : Jimi Keurulainen
// File Name : Bottombody.js

import React, { useRef, useEffect } from 'react';
import '../css/index.css';

function Content(props) {
  return (
    <div>
      <div>
        <h1 style={{marginTop: "0"}} >{props.title}</h1>
        <iframe src={props.text} />
      </div>
    </div>
  )
}

function Bottombody(props) {
  const myRef = useRef(null);
  useEffect(() => {
    const { innerHeight: height, innerWidth: width } = window;
    myRef.current.scrollTo(props.state * width, 0);
  })

  return (
    <div id="Carousel" ref={myRef} >
    <div className='Scrolled'>
      <Content 
        title={"GALLERY"}
        text={"gallery"}
      />
      <Content 
        title={"ABOUT ME"}
        text={"gallery"}
      />
      <Content 
        title={"CONTACT"}
        text={"gallery"}
      />
    </div>
    </div>
  );
}

export default Bottombody;