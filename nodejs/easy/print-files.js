// Coding Challenges (Node.js)
// Node.js Print Files

// In the JavaScript file, write a program to first create a file in the current directory with the name newfile.txt filled with any content. Then, using exec, print to the console all the files in the current directory so that they are in the following format: FILENAME, FILENAME, ...

// Example Output
// file.js, helloworld.txt, abc.txt

// Solution

const fs = require('fs');
const { exec } = require('child_process');

// create file called newfile.txt
fs.writeFile('newfile.txt', 'File content goes here', (err) => {
  if (err) throw err;

  // then print contents of directory according to instructions above
  exec('ls', (error, stdout) => {
    if (error) throw error;

    const fileNames = stdout.trim().split('\n');
    console.log(fileNames.join(', '));
  });
});