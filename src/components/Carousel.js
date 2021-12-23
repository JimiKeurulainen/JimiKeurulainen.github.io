import React, { useState } from 'react';
import '../css/index.css';

function Carousel() {
  const [count, setCount] = useState(0);

  return (
    <div className="Carousel">
      You have pressed the button {count} times<br />
      <button onClick={() => setCount(count + 1)}>Piss me</button>
    </div>
  );
}

export default Carousel;