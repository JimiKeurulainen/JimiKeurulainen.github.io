// Code Author : Jimi Keurulainen
// File Name : Bottombody.js

import React, { useRef, useEffect } from 'react';
import '../css/index.css';
import aboutMe from '../text/aboutme.js';

function Content(props) {
  return (
    <div>
      <div>
        <div>
          <h1>{props.title}</h1>
        </div>
        <iframe title='textBox' src='myprojects.html' />
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
        src={aboutMe}
      />
      <Content 
        title={"CONTACT"}
        src={"gallery"}
      />
    </div>
    </div>
  );
}

export default Bottombody;