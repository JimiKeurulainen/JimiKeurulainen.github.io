// Code Author : Jimi Keurulainen
// File Name : Carousel.js

import React, { useState, useEffect, useRef } from 'react';
import '../css/index.css';
import CaretR from '../Caret_R.svg';
import CaretL from '../Caret_L.svg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[index] = r(item); });
  return images;
}


function Carousel() {
  const picArray = []
  const Carousel = useRef(null);
  const [count, setCount] = useState(0);
  //setTimeout(() => { setCount(count + 1); }, 5000)
  const {innerWidth: width } = window;
  const images = importAll(require.context('../images', false, /(png|jpe?g|svg)$/));

  useEffect(() => {
    if (count > 10) setCount(0)
    if (count < 0) setCount(10)

    Carousel.current.scrollTo(count * width, 0);
  }, [count, width]);

  for (var i = 0; i < Object.keys(images).length; i++) {
    picArray.push(
      <div
      key={i}
      style={{width: "100vw", position: "relative"}}>
        <img className='Image' src={images[i].default} />
        <img className='Background' src={images[i].default} />
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