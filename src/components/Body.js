// Code Author : Jimi Keurulainen
// File Name : Body.js

import React, { useState, useEffect } from 'react';
import '../css/index.css';
import Navbar from './Navbar';
import Bottombody from './Bottombody';

function Body(props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(active);
  })

  return (
    <div className="Body">
      {props.children}
      <Navbar active={active} setActive={setActive} />
      <Bottombody active={active} />
    </div>
  );
}

export default Body;