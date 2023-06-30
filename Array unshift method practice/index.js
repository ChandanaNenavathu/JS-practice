// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let languages = ["Java", "Python", "C"];

// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
document.getElementsByClassName("lang")[0].innerHTML = `${languages}`;

//Example: Using unshift() method

let priceList = [12, 21, 35];
let count1 = priceList.unshift(44, 10, 1.6);
document.getElementsByClassName("price")[0].innerHTML = `${priceList}`;
document.getElementsByClassName("count")[0].innerHTML = `${count1}`;
