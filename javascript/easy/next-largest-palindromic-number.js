// Searching Challenge
/* Have the function SearchingChallenge(num) take the num parameter being passed and return the next largest palindromic number. 
The input can be any positive integer. 
For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome. */

// Examples
/* 
Input: 2
Output: 3

Input: 180
Output: 181 
*/

// Solution
function SearchingChallenge(num) {
  // code goes here
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  let i = 1;
  while (!isPalindrome((num + i).toString())) {
    i++;
  }
  return num + i;
}

// keep this function call here
console.log(SearchingChallenge(readline()));

