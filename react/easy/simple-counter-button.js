// React Simple Counter

/*
We provided some simple React template code. Your goal is to modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. You are free to add classes and styles, but make sure you leave the element ID's as they are.
*/

// React Code
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count +1);
  }

  return (
    <div id="mainArea">
      <p>button count: <span>{count}</span></p>
      <button id="mainButton" onClick={handleClick} >Increase</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Counter />);