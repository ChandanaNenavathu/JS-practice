let priceList = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList.lastIndexOf(31);
document.getElementsByClassName("price")[0].innerHTML = `${lastIndex}`;

// Example 1: Using lastIndexOf() Method

let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");
document.getElementsByClassName("lastIndex")[0].innerHTML = `${lastIndex1}`;

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");
document.getElementsByClassName("lastIndex2")[0].innerHTML = `${lastIndex2}`;

// Example 2: lastIndexOf() with two Parameters

let alphabet = ["a", "b", "c", "a", "d", "a"];
// second argument specifies the starting index
// from where the method searches the element backward
let lastIndexs = alphabet.lastIndexOf("a", 4);
document.getElementsByClassName("alpha")[0].innerHTML = `${lastIndexs}`;

