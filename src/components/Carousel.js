// Code Author : Jimi Keurulainen
// File Name : Carousel.js

import React, { useState, useEffect, useRef } from 'react';
import '../css/index.css';
import CaretR from '../Caret_R.svg'
import CaretL from '../Caret_L.svg'

function Carousel(props) {
  const picArray = []
  const Carousel = useRef(null);
  const [count, setCount] = useState(0);
  const {innerWidth: width } = window;

  useEffect(() => {
    if (count > 10) setCount(0)
    if (count < 0) setCount(10)

    Carousel.current.scrollTo(count * width, 0);
  })

  for (var i = 0; i < 11; i++) {
    picArray.push(
      <div 
      style={{
        backgroundColor: `rgb(${i*25}, 120, 120)`, 
        paddingTop: "15vh",
        width: "100vw"
      }}>
        PICTURE {i} <br />
        {count}
      </div>
    )
  }

  return (
    <div ref={Carousel} id="Carousel" >
      <button onClick={() => {setCount(count - 1)}} >
        <img src={CaretL} width={"10px"}/>
      </button>
      <button onClick={() => {setCount(count + 1);}} style={{right:"0"}}>
        <img src={CaretR} width={"10px"}/>
      </button>

      <div className='Scrolled' style={{width: `${width * picArray.length}vw`}}>
        {picArray}
      </div>
    </div>
  );
}

export default Carousel;