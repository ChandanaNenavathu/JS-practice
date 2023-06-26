let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
document.getElementsByClassName("lang")[0].innerHTML = `${index}`;

//Example 1: Using indexOf() method

var priceList = [10, 8, 2, 31, 10, 1, 65];

// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
document.getElementsByClassName("index1")[0].innerHTML = `${index1}`

var index2 = priceList.indexOf(10);
document.getElementsByClassName("index2")[0].innerHTML = `${index2}`

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
document.getElementsByClassName("index3")[0].innerHTML = `${index3}`

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
document.getElementsByClassName("index4")[0].innerHTML = `${index4}`



