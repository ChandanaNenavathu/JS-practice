let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
document.getElementsByClassName("newArr")[0].innerHTML = `${newArray}`

// Example 1 :

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
document.getElementsByClassName("NewArr")[0].innerHTML = `${new_arr}`

// slicing from the third element
let new_arr1 = languages.slice(2);
document.getElementsByClassName("NewArr1")[0].innerHTML = `${new_arr1}`

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
document.getElementsByClassName("NewArr2")[0].innerHTML = `${new_arr2}`


// Example 2

const language = ["JavaScript", "Python", "C", "C++", "Java"];
// slicing the array from start to second-to-last
let New = language.slice(0, -1);
document.getElementsByClassName("New")[0].innerHTML = `${New}`;

// slicing the array from third-to-last
let New1 = languages.slice(-3);
document.getElementsByClassName("New1")[0].innerHTML = `${New1}`;


// Example 3: JavaScript slice() with Objects as Array Elements

let human = {
    name: "David",
    age: 23,
  };
  
  let arr = [human, "Nepal", "Manager"];
  let New_arr = arr.slice();

  // original object
  document.getElementsByClassName("New2")[0].innerHTML = `${arr[0]}`;

  // making changes to the object in new array
  New_arr[0].name = "Levy";

  // changes are reflected
  document.getElementsByClassName("New3")[0].innerHTML = `${arr[0]}`;
  console.log(arr[0]); // { name: 'Levy', age: 23 }



