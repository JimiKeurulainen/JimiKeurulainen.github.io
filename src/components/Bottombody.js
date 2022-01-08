// Code Author : Jimi Keurulainen
// File Name : Bottombody.js

import React, { useRef, useEffect } from 'react';
import '../css/index.css';

function Content(props) {
  const Frame = useRef(null);
  var source = props.src;

  return (
    <div>
      <div>
        <div>
          <div id='TxtHeader'>
            <h1>{props.title}</h1>
          </div>
          <div id='ScrollMenu'>
          </div>
        </div>
        <iframe ref={Frame} title='textBox' src={source} />
      </div>
    </div>
  )
}

function Bottombody(props) {
  const Carousel = useRef(null);
  useEffect(() => {
    const { innerWidth: width } = window;
    Carousel.current.scrollTo(props.active * width, 0);
  })

  return (
    <div id="Carousel" ref={Carousel} >
    <div className='Scrolled'>
      <Content 
        title={"MY PROJECTS"}
        src={'myprojects.html'}
      />
      <Content 
        title={"ABOUT ME"}
        src={'aboutme.html'}
      />
      <Content 
        title={"CONTACT"}
        src={'contact.html'}
      />
    </div>
    </div>
  );
}

export default Bottombody;