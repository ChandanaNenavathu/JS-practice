// Example 1 forEach() calls a function for each element in an array

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementsByClassName("demo")[0].innerHTML = `${text}`;
function myFunction (item, index) {
    text +=index + ":" + item + "" + "<br>"; 
    //text = text + index + ":" + item;
}

//----------------------------------------------------------------------------------------

// Example 2 > Compute the sum of the values in an array:

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunctions);
document.getElementsByClassName("first")[0].innerHTML = `${sum}`;
 function myFunctions (items) {
    sum+=items;
 }

 //--------------------------------------------------------------------------------------

 // Example 3 Multiply the value of each element with 10:

 const value = [65, 44, 12, 4];
 value.forEach(Funct);
 document.getElementsByClassName("value")[0].innerHTML = `${value}`
function Funct (val, index, arr) {
    arr[index] = val * 10;
}
//---------------------------------------------------------------------------------------

// Example 4

let students = ['John', 'Sara', 'Jack'];
students.forEach(stu);
function stu (iss, index, arr) {
    arr[index] = 'Hello ' + iss;
    document.getElementsByClassName("values")[0].innerHTML = `${students}`
}

//----------------------------------------------------------------------------------

// Example 5

const colors = ['blue', 'green', 'white'];
let answer = "";
colors.forEach(iterate)
function iterate(num, index){
    console.log(`${num} has index ${index}`);

    answer +=num + "has index" + index + "<br>";
    document.getElementsByClassName("id1")[0].innerHTML = `${answer}`
}

//---------------------------------------------------------------------------