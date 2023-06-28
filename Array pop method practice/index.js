let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// remove the last element
let removedCity = cities.pop();
document.getElementsByClassName("city")[0].innerHTML =`${cities}`;
document.getElementsByClassName("City")[0].innerHTML =`${removedCity}`;


// Example: Using pop() method

let languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
let popped = languages.pop();

document.getElementsByClassName("lang")[0].innerHTML =`${languages}`;
document.getElementsByClassName("pop")[0].innerHTML =`${popped}`;

// pop returns any type of object

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -3],
  ];
document.getElementsByClassName("num")[0].innerHTML =`${numbers.pop()}`;
document.getElementsByClassName("nums")[0].innerHTML =`${numbers}`;
