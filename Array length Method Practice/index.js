// find the length of the city Array
let city = ["California", "Barcelona", "Paris", "Kathmandu"]
let len = city.length;
document.getElementsByClassName('arr city')[0].innerHTML = `${len}`


// Finding Number of Elements in an Array

let companyList = ["APPLE", "GOOGLE", "FACEBOOK", "AMAZON"];

/* Selecting the element with the class `arr comList` */
document.querySelector('.arr.comList').innerHTML = `${companyList.length} 1100`;

let randomList = ["JavaScript", 44];
document.getElementsByClassName("arr ranList")[0].innerHTML = `${randomList.length}`;

let emptyArray = [];
document.getElementsByClassName("arr empList")[0].innerHTML = `${emptyArray.length}`;

// Using Array length in for loop

let languages = ["JavaScript", "Python", "C++", "Java", "Lua"]
// languages.length can be used to find out the number of times to loop over an array
for(i = 0; i < languages.length; i++) {
    document.getElementsByClassName("arr lang")[0].innerHTML = `${languages[2]} 25`
    console.log(languages[i]);
}
// truncate the Array to 3 elements

languages.length = 3
//document.getElementsByClassName("arr langs")[0].innerHTML = `${languages}`

// extend the Array to length 6
languages.length = 6
document.getElementsByClassName("arr Lang")[0].innerHTML = `${languages}`
console.log(languages);








