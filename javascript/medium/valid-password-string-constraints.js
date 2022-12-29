// String Challenge

/* Have the function StringChallenge(str) take the str parameter being passed and 
determine if it passes as a valid password that follows the list of constraints:
1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters. */

/* if all the above constraints are met within the string, the your program should return the string true, 
otherwise your program should return the string false. 
For example: if str is "apple!M7" then your program should return "true". */

// Examples
// Input: "passWord123!!!!"
// Output: false
// Input: "turkey90AAA="
// Output: true

// solution 1
function StringChallenge(str) {
      // code goes here
      if (
            /[A-Z]/.test(str) &&
            /[0-9]/.test(str) &&
            /[\W_]/.test(str) &&
            !/password/i.test(str) &&
            str.length > 7 &&
            str.length < 31
      ) {
            return true;
      } else {
            return false;
      }
}

// Solution 2
function StringChallenge(str) { 

    // code goes here
    const capitalLetter = /[A-Z]/;
    const number = /\d/;
    const punctutation = /[\W_]/;
    const password = /password/;
    const length = str.length;
    if (
        capitalLetter.test(str) && 
        number.test(str) && 
        punctutation.test(str) && 
        !/password/i.test(str) && 
        length > 7 && 
        length < 31 ) {
      return true;
    } else {
      return false;
    }
  }

