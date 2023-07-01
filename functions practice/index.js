// Example 1 Write a JavaScript function to print the “Hello World” message


function displayMessage() {
    let display = document.getElementsByClassName("hello")[0];
    return display.innerHTML = "ANS : Hello World"
}
displayMessage();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example  2. Write a function that returns the square of a number

let find = document.getElementsByClassName("square")[0];
function findSquare(num) {
     let number = num*num;
     find.innerHTML = ` ANS : Squareroot of 2 is = ${number}`;
}
    findSquare(2);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
// Example 3 Write a function to convert Celsius to Fahrenheit

function calFahrenheit(cel) {
    let fahren = document.getElementsByClassName("celFahren")[0];
    let total = (cel*9/5)+32;
    fahren.innerHTML = `ANS : ${total}`
}
calFahrenheit(9)  ; 
    
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
// Example 4 Write a function to find the area of a given Rectangle

function rectangleArea(a,b){
    let rectArea = document.getElementsByClassName("rect")[0];
    let area = a*b;
    console.log(area);
     return rectArea.innerHTML =  `ANS : The area of Rectangle is ${area}`;
}
rectangleArea(10,20);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
// Example 5. Write a function to find the area and perimeter of a Circle

function circleValues(rad) {
    let circle = document.getElementsByClassName("circle")[0];
    let values = `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
    return circle.innerHTML = ` ANS : ${values}`;
}
circleValues(10);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
// Example 6. Write a function to reverse a number '321'

function reverseNum(num) {
    let allNum = document.getElementsByClassName("reverse")[0];
    let revNum = num.toString().split('').reverse().join('');
    // var revNumber = parseInt(revNum);
    // var revNumber = parseInt('6573549');
    // console.log('type', typeof(revNumber))
     return allNum.innerHTML = `ANS : ${revNum}`;
}
reverseNum(123);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example 7. 

// 