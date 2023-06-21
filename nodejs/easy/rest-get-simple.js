// Coding Challenges (Node.js)
// Node.js REST GET Simple

// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/rest-get-simple and then print to the console the hobbies property in the following format: ITEM1, ITEM2, ...

// Example Output
// running, painting

// Solution

const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
  
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
  // parse json data here...
  const jsonData = JSON.parse(data);

  // get the hobbies property
  const hobbies = jsonData.hobbies;

  //print the hobbies in the desired format
  console.log(hobbies.join(', '));
  });

}).on('error', (err) => {
  console.error('Error performing GET request:', err);
});