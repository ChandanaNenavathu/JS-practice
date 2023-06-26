let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
document.querySelector(".prime").innerHTML = `${joinedArrays}`;


// Example 1: Using concat() method

var languages1 = ["JavaScript", "Python", "Java"];
var languages2 = ["C", "C++"];
// concatenating two arrays
var new_arr = languages1.concat(languages2);
document.querySelector(".lang").innerHTML = `${joinedArrays}`;
// concatenating a value and array
var new_arr1 = languages2.concat("Lua", languages1);
document.querySelector(".langs").innerHTML = `${new_arr1}`;

// Example 2: Concatenating nested arrays

let randomList = [1, 2, 3];
let randomNestedList = [
  [4, 5],
  [6, 7],
];

let combined = randomList.concat(randomNestedList);
document.querySelector(".combined").innerHTML = `${combined}`;

// changing the value 1 to 0
document.querySelector(".randomList").innerHTML = `${randomList}`;

// changes not reflected in concatenated array
document.querySelector(".random").innerHTML = `${combined}`;

//  modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
document.querySelector(".randomNestedList").innerHTML = `${randomNestedList}`;
