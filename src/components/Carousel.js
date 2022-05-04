// Code Author : Jimi Keurulainen
// File Name : Carousel.js

import React, { useState, useEffect, useRef } from 'react';
import '../css/index.css';
import CaretR from '../Caret_R.svg';
import CaretL from '../Caret_L.svg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { 
    images[index] = r(item); 
    return images;
  });
  return images;
}


function Carousel() {
  const picArray = []
  const Carousel = useRef(null);
  const [count, setCount] = useState(0);
  //setTimeout(() => { setCount(count + 1); }, 5000)
  const {innerWidth: width } = window;
  // Import images from the image folder and map them to an object
  const images = importAll(require.context('../images', false, /(png|jpe?g|svg)$/));
  const imgLen = Object.keys(images).length - 1;

  useEffect(() => {
    if (count > imgLen) setCount(0);
    if (count < 0) setCount(imgLen);

    Carousel.current.scrollTo(count * width, 0);
  }, [count, width, imgLen]);

  for (const prop in images) {
    picArray.push(
      <div
      key={prop}
      style={{width: "100vw", position: "relative"}}>
        <img 
          src={images[prop].default} 
          className='Image' 
          alt={prop}
        />
        <img 
          className='Background' 
          src={images[prop].default} 
          alt={prop}
        />
      </div>
    )
  }

  return (
    <div ref={Carousel} id="Carousel" >
      <button onClick={() => {setCount(count - 1)}} >
        <img 
          src={CaretL} 
          width={"10px"}
          alt="Leftwards caret"
        />
      </button>
      <button onClick={() => {setCount(count + 1);}} style={{right:"0"}}>
        <img 
          src={CaretR} 
          width={"10px"}
          alt="Rigthwards caret"
        />
      </button>

      <div className='Scrolled' style={{width: `${width * picArray.length}vw`}}>
        {picArray}
      </div>
    </div>
  );
}

export default Carousel;