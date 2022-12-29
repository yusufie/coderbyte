
// String Challenge
/*  Have the function StringChallenge(str) take the str string parameter being passed and 
return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). 
Do not count y as a vowel for this challenge. */

// examples
// Input: "hello"
// Output: 2
// Input: "coderbyte"
// Output: 3

// solution
function StringChallenge(str) { 
    // code goes here
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) > -1) {
        count++;
      }
    } 
    return count; 
  }
