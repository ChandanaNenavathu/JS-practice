//  Example 1


let message = ["JavaScript", "is", "fun."];
// join all elements of array using space
let joinedMessage = message.join(" ");
document.getElementsByClassName("join mess")[0].innerHTML = `${joinedMessage}`;

// Example 2: Using join() method

let info = ["Terence", 28, "Kathmandu"];
// join() does not change the original array
document.getElementsByClassName("join info")[0].innerHTML = `${info}`;
// join() returns the string by joining with separator
//document.getElementsByClassName("join infostr")[0].innerHTML = `${info_str}`;

// empty argument = no separator
let collection = [3, ".", 1, 4, 1, 5, 9, 2];
document.getElementsByClassName("join collect")[0].innerHTML = `${collection.join("")}`;
console.log(collection.join("")); // 3.141592

let random = [44, "abc", undefined];
document.getElementsByClassName("random")[0].innerHTML = `${random.join(" and ")}`



