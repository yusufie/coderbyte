// coderbyte challenge: React Button Toggle

/*
We provided some simple React template code. Your goal is to modify the component so that you can properly toggle the button to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa. Make use of component state for this challenge.
*/

// React Code
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle () {
  const [toggle, setToggle] = useState(false);

  return (
    <button onClick={() => setToggle(!toggle)}>
      {toggle ? 'ON' : 'OFF'}
    </button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);