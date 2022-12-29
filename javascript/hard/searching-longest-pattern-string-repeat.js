// Searching Challenge
/* Have the function SearchingChallenge(str) take str which will be a string and 
return the longest pattern within the string. A pattern for this challenge will be defined as: 
if at least 2 or more adjacent characters within the string repeat at least twice. 
So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. 
Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. 
If str were "123224" the output should return no null. The string may either contain all characters (a through z only), 
integers, or both. But the parameter will always be a string type. The maximum length for the string being passed in will be 20 characters. 
If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". You must always return the longest pattern possible. */

//Examples
/* 
Input: "da2kr32a2"
Output: yes a2
Input: "sskfssbbb9bbb"
Output: yes bbb 
*/

// My solution
function SearchingChallenge(str) { 
     
    let longestPattern = "";
    let pattern = "";
    let patternCount = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        pattern += str[i];
        patternCount++;
      } else {
        pattern += str[i];
        patternCount++;
        if (patternCount > 2) {
          if (pattern.length > longestPattern.length) {
            longestPattern = pattern;
          }
        }
        pattern = "";
        patternCount = 0;
      }
    }
    return longestPattern.length > 0 ? "yes " + longestPattern : "no null";
  }







