// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");
document.getElementsByClassName("check")[0].innerHTML = `${check}`

// Example 1: Using includes() method

let language = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = language.includes("C");
document.getElementsByClassName("check1")[0].innerHTML = `${check1}`

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");
document.getElementsByClassName("check2")[0].innerHTML = `${check2}`


// Example 2: includes() for Case-Sensitive Search
let language1 = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let Check1 = language1.includes("Python");
document.getElementsByClassName("Check1")[0].innerHTML = `${Check1}`
console.log(check1); // true

// checking whether the array contains 'python'
let Check2 = language1.includes("python");
document.getElementsByClassName("Check2")[0].innerHTML = `${Check2}`


// Example 3: includes() with two Parameters

let language2 = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let Check3 = languages.includes("Java", 2);
document.getElementsByClassName("Check3")[0].innerHTML = `${Check3}`

// the search starts from third last element 
let Check4 = languages.includes("Java", -3);
document.getElementsByClassName("Check4")[0].innerHTML = `${Check4}`
