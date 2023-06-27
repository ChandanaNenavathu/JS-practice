// Example 

let numbers = [1, 2, 3, 4];

// checking whether numbers is an array or not
console.log(Array.isArray(numbers));
document.getElementsByClassName("sum")[0].innerHTML =`${Array.isArray(numbers)}`

let text = "JavaScript";

// checking whether text is an array or not
console.log(Array.isArray(text));
document.getElementsByClassName("sums")[0].innerHTML =`${Array.isArray(text)}`


// Example USING isArray() METHOD

let fruits = ["Apple", "Grapes", "Banana"];

// checking whether fruits is an array or not
console.log(Array.isArray(fruits));
document.getElementsByClassName("fruit")[0].innerHTML =`${Array.isArray(fruits)}`

let texts = "Apple";

// checking whether text is an array or not
console.log(Array.isArray(texts));
document.getElementsByClassName("fruits")[0].innerHTML =`${Array.isArray(texts)}`


// Example 3: isArray() to Check Other Data Types

// passing an empty array []

console.log(Array.isArray([])); // true 
document.getElementsByClassName("arr")[0].innerHTML =`${Array.isArray([])}`

// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true
document.getElementsByClassName("arr1")[0].innerHTML =`${Array.isArray(new Array(7))}`

// passing a boolean value
console.log(Array.isArray(true)); // false
document.getElementsByClassName("arr2")[0].innerHTML =`${Array.isArray(true)}`

// passing undefined
console.log(Array.isArray(undefined)); // false
document.getElementsByClassName("arr3")[0].innerHTML =`${Array.isArray(undefined)}`


// not passing any argument in isArray()
console.log(Array.isArray()); // false 
document.getElementsByClassName("arr4")[0].innerHTML =`${Array.isArray()}`

