// Code Author : Jimi Keurulainen
// File Name : Bottombody.js

import React, { useRef, useEffect } from 'react';
import DOMPurify from 'dompurify';
import '../css/index.css';
import myProjects from '../text/myprojects.js';
import aboutMe from '../text/aboutme.js';

function Content(props) {
  const sanitizer = DOMPurify.sanitize;
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <article
          style={{whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{__html: sanitizer(props.text)}} 
        />
      </div>
    </div>
  )
}

function Bottombody(props) {
  const myRef = useRef(null);
  useEffect(() => {
    const { innerWidth: width } = window;
    myRef.current.scrollTo(props.state * width, 0);
  })

  return (
    <div id="Carousel" ref={myRef} >
    <div className='Scrolled'>
      <Content 
        title={"MY PROJECTS"}
        text={myProjects}
      />
      <Content 
        title={"ABOUT ME"}
        text={aboutMe}
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