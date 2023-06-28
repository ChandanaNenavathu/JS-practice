// Example 1 The push() method adds zero or more elements to the end of the array.

let city = ["New York", "Madrid", "Kathmandu"];

// add "London" to the array
city.push("London");
document.getElementsByClassName("city")[0].innerHTML = `${city}`

// Example: Using push() method

let languages = ["JavaScript", "Python", "Java", "Lua"];

let count = languages.push("C++");
document.getElementsByClassName("count")[0].innerHTML = `${count}`

var priceList = [12, 21, 35];

var count1 = priceList.push(44, 10, 1.6);
document.getElementsByClassName("priceList")[0].innerHTML = `${priceList}`
document.getElementsByClassName("count1")[0].innerHTML = `${count1}`

