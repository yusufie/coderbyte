// Letter Changes
/* 
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

Examples
Input: "hello*3"
Output: Ifmmp*3

Input: "fun times!"
Output: gvO Ujnft!
*/

// Solution

function LetterChanges(str) {
    var newStr = str.replace(/[a-z]/gi, function(char) {
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });
    var newStr2 = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    });
    return newStr2;
}