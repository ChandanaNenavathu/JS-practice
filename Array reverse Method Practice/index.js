let numbers = [1, 2, 3, 4, 5];
// reversing the numbers array
let reversedArrays = numbers.reverse();
document.querySelector(".para.revArr").innerHTML = `${reversedArrays}`;


// Example 1: Using reverse() Method

let language = ["JavaScript", "Python", "C++", "Java", "Lua"];
// reversing the order of language array
let reversedArray = language.reverse();
document.querySelector(".para.lang").innerHTML = `${reversedArray}`;
console.log("Reversed Array: ", reversedArray);
//document.getElementsByClassName("para lang")[0].innerHTML = `${reversedArray}`;

// modifies the original array
document.getElementsByClassName("para langs")[0].innerHTML = `${language}`;


//  Example 2: reverse() Method with Spread Operator

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// using spread operator to reverse the array
let reverse = [...languages].reverse();
document.getElementsByClassName(" para reverse")[0].innerHTML = `${reverse}`;
