// Example The toString() method returns a string formed by the elements of the given array

// defining an array
let items = ["JavaScript", 1, "a", 3];
// returns a string with elements of the array separated by commas
let itemsString = items.toString();
document.getElementsByClassName("item")[0].innerHTML =`${itemsString}`;


// Example 2: Using toString() Method
let info = ["Terence", 28, "Kathmandu"];
// returns the string representation of the info array 
let info_str = info.toString();
document.getElementsByClassName("Info")[0].innerHTML =`${info_str}`;
document.getElementsByClassName("infos")[0].innerHTML =`${info}`;


// Example 2: toString() with Nested Arrays

// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();
document.getElementsByClassName("nest")[0].innerHTML =`${resultingArray}`;
