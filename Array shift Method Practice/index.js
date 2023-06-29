let languages = ["English", "Java", "Python", "JavaScript"];

// removes the first element of the array
let first = languages.shift()
document.getElementsByClassName("first")[0].innerHTML = `${first}`;
document.getElementsByClassName("lang")[0].innerHTML = `${languages}`;

// Example: Using shift() method

let software = ["JavaScript", "Python", "Java", "C++", "Lua"];
var shifted = software.shift();
document.getElementsByClassName("sft")[0].innerHTML = `${software}`;
document.getElementsByClassName("shift")[0].innerHTML = `${shifted}`;


// shift returns any type of object
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -3],
];
document.getElementsByClassName("num")[0].innerHTML = `${numbers.shift()}`;
document.getElementsByClassName("nums")[0].innerHTML = `${numbers}`;