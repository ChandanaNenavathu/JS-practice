// creating an array named alphabets with elements A,B,C
let alphabets = Array.of("A", "B", "C");

// display contents of alphabet'
document.getElementsByClassName("alpha")[0].innerHTML = `${alphabets}`;

// Example 1. 

// creating an array 1 element
let numbers = Array.of(3);
document.getElementsByClassName('numbers')[0].innerHTML =`${numbers}`

// creating an array with 3 string elements
let fruits = Array.of("Apple", "Banana", "Grapes");
document.getElementsByClassName("fruits")[0].innerHTML = `${fruits}`

// creating an array with 4 integers 
let primeNumbers = Array.of(2, 3, 5, 7);
document.getElementsByClassName("prime")[0].innerHTML = `${primeNumbers}`;

// Example 2: Array of() Method and Array Constructor

// creating an array with one element using Array.of()
let evenNumber = Array.of(2);

// displays the length of evenNumber
document.getElementsByClassName("evenLen")[0].innerHTML = `${evenNumber.length}`;

// displays content inside evenNumber
document.getElementsByClassName("even")[0].innerHTML = `${evenNumber}`;

// creating an empty array of length 2 using Array constructor
let number = Array(2);

// displays the length of 'numbers' array
document.getElementsByClassName("number")[0].innerHTML = `${numbers.length}`;

// displays the content inside 'numbers'
document.getElementsByClassName("numb")[0].innerHTML = `${number}`;

