// Coderbyte: Hard
// Combinatorics Challenge

/* Have the function CombinatoricsChallenge(num) read num which will be a positive integer and 
determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. 
For example, in the image below you can see that on the first iteration there is only a single dot, 
on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots. */

/* Your program should return the number of dots that exist in the whole pentagon on the Nth iteration. */

// Examples
/* 
Input: 2
Output: 6

Input: 5
Output: 51 
*/

// My solution:
function CombinatoricsChallenge(num) {
      // code goes here
  let dots = 1;
  for (let i = 1; i <= num; i++) {
    dots += 5 * (i - 1);
  }
  return dots;
}

// keep this function call here
CombinatoricsChallenge(readline());

