import React, { useState } from 'react';
import '../css/index.css';
import Navbar from './Navbar';
import Bottombody from './Bottombody';

function Body(props) {
  const [active, setActive] = useState(3);

  return (
    <div className="Body">
      {props.children}
      <Navbar state={active} setState={setActive} />
      <Bottombody state={active} />
    </div>
  );
}

export default Body;