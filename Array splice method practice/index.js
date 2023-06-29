let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
document.getElementsByClassName("removed")[0].innerHTML = `${removedElement}`;
document.getElementsByClassName("PRIME")[0].innerHTML = `${prime_numbers}`;

// Example 1: Using splice() method

let languages = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages.splice(2, 2, "C", "C++");
document.getElementsByClassName("remove")[0].innerHTML = `${removed}`;
document.getElementsByClassName("lang")[0].innerHTML = `${languages}`;

// adding elements without deleting existing elements
let removed1 = languages.splice(1, 0, "Java", "Lua");
document.getElementsByClassName("remove1")[0].innerHTML = `${removed1}`;
console.log(removed1); // []
document.getElementsByClassName("lang1")[0].innerHTML = `${languages}`;
// removing 3 elements
let removed2 = languages.splice(2, 3);
document.getElementsByClassName("remove2")[0].innerHTML = `${removed2}`;
document.getElementsByClassName("lang2")[0].innerHTML = `${languages}`;
