/* Math Challenge
Have the function MathChallenge(num1,num2) take both parameters being passed and 
return the string true if num2 is greater than num1, otherwise return the string false. 
If the parameter values are equal to each other then return the string -1. */

/* Examples
Input: 3 & num2 = 122
Output: true
Input: 67 & num2 = 67
Output: -1 */

function MathChallenge(num1,num2) {
    if (num2 > num1) {
        return true;
    } else if (num2 === num1) {
        return -1;
    } else {
        return false;
    }
    }

// keep this function call here
MathChallenge(readline());
