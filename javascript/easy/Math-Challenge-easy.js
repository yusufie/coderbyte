// Math Challenge
/* 
Have the function MathChallenge(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. 
If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.
 */

// Examples
// Input: 4
// Output: true
// Input: 124
// Output: false

function MathChallenge(num) {
    if (num === 1) {
        return true;
    } else if (num < 1) {
        return false;
    } else {
        return MathChallenge(num / 2);
    }
}