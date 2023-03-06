// Letter Capitalize
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space.

// Examples
// Input: "hello world"
// Output: Hello World
// Input: "i ran there"
// Output: I Ran There

// Solution

function LetterCapitalize(str) {
    var newStr = str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    });
    return newStr;
}