// Coding Challenges (Node.js)
// Node.js JSON Cleaning

// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object according to the following rules: Remove all keys that have values of N/A, -, or empty strings. If one of these values appear in an array, remove that single item from the array. Then console log the modified object as a string.

// Example Input
// {"name":{"first":"Daniel","middle":"N/A","last":"Smith"},"age":45}

// Example Output
// {"name":{"first":"Daniel","last":"Smith"},"age":45}

// Solution

const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    // parse json data
    const jsonData = JSON.parse(data);
    
    // clean the object
    const cleanedData = cleanObject(jsonData);

    // log the modified object as a string
    console.log(JSON.stringify(cleanedData));
  });

}).on('error', (err) => {
  console.error('Error performing GET request:', err);
});

function cleanObject(obj) {
  for (let key in obj) {
    const value = obj[key];

    // remove keys with N/A, -, or empty strings
    if (value === 'N/A' || value === '-' || value === '') {
      delete obj[key];
    }
    
    // recursively clean nested objects or arrays
    else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        // remove items with N/A, -, or empty strings from arrays
        obj[key] = value.filter(item => item !== 'N/A' && item !== '-' && item !== '');
      } else {
        // clean nested objects
        obj[key] = cleanObject(value);
      }
    }
  }

  return obj;
}
