// sort the city array in ascending order

let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedArray = city.sort();
document.getElementsByClassName("id1")[0].innerHTML = `${sortedArray}`;



// Example 1: Sorting the Elements of an Array

// sorting an array of strings
let names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];
// returns the sorted array
document.querySelector(".id2").innerHTML = `${names.sort()}`;
// modifies the array in place
document.querySelector(".id3").innerHTML = `${names}`;

var priceList = [1000, 50, 2, 7, 14];
document.getElementsByClassName("id4")[0].innerHTML = `${priceList.sort()}`;
// Number is converted to string and sorted
document.getElementsByClassName("id5")[0].innerHTML = `${priceList}`;



// Example 2: Sorting using Custom Function

// custom sorting an array of strings
let name = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];
function lenCompare(a,b){
    return a.length - b.length
}
//sort according to string length
name.sort(lenCompare);
document.getElementsByClassName("id6")[0].innerHTML = `${name}`;



// Example 3: Sorting Numbers Numerically

// numeric sorting
var priceList = [1000, 50, 2, 7, 14];
// sort() using function expression
// ascending order
priceList.sort(function(a,b) {
    return a-b
})
document.getElementsByClassName("id7")[0].innerHTML = `Ascending = ${priceList}`;
// sort() using arrow function expression
// descending order
priceList.sort((a,b) => b-a);
document.getElementsByClassName("id8")[0].innerHTML = `Decending = ${priceList}`;

