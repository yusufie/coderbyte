// coderbyte challenge: React List
/*
We provided some simple React template code. Your goal is to display an unordered list (UL) with list items (LI) within it. The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. The span elements should be separated by a single space.
*/

// React Code

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function DataList(props) {
    const [data, setData] = useState(props.data);
    
    return (
        <ul>
        {data.map((item, index) => (
            <li key={index}>
            <span>{item.name}</span> <span>{item.age}</span>
            </li>
        ))}
        </ul>
    );
    }

    const data = [
    { name: 'Daniel', age: 25 },
    { name: 'John', age: 24 },
    { name: 'Jen', age: 31 },

    ];

    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<DataList data={data} />);

    