// var btn = document.getElementsByClassName("button-1")[0];
// var paragraphEle = document.getElementsByClassName("para")[0];
// var body = document.getElementsByTagName('body')[0];

// document.getElementsByClassName("buttonVal")[0].value = "My value";

// window.addEventListener("load", () => {
//     console.log('u bloody nonsense');
//     var para = document.createElement("p");
//     para.innerText = "This is a paragraph tag on page load";
//     paragraphEle.appendChild(para);
// });

//  The onclick Event

let btn = document.getElementsByClassName("button-1");
btn[0].addEventListener("click", clickHandler)
   function clickHandler() {
    btn[0].style.backgroundColor = 'salmon';
   }

   // button 2

   let btns = document.getElementsByClassName("button-2")[0];
   btns.addEventListener("click", function(){
       btns.style.backgroundColor = 'yellow';
      })

  // button 3

let btn1 = document.getElementsByClassName("button-3")[0];
btn1.addEventListener("click", function () {
   setTimeout(() =>{
    btn1.style.backgroundColor = "Red"
   },1000)
} )

//   button 4

let btn2 = document.getElementsByClassName("button-4")[0];
let index = 0;
const colors = ["chartreus", "red", "blue", "yellow", "orange"]
console.log('array length ==>', colors.length)
btn2.addEventListener("click", function() {
    btn2.style.backgroundColor = colors[index];
index = index >= colors.length -1 ? 0 : index +1;
});

//   // button 5

let btn3 = document.getElementsByClassName("button-5")[0];
btn3.addEventListener("click", function(){
    btn3.style.border = '5px solid black';
});

// display button 6 on click

let btn4 = document.getElementsByClassName("button-6")[0];
var myImage = document.getElementsByClassName('image')[0];

btn4.addEventListener('click', function () {  
    if (myImage.style.display === "none") {
        myImage.style.display = "block"
    } else {
        myImage.style.display = "none"
    }

})

  // button 7

let btn6 = document.getElementsByClassName("button-7")[0];
btn6.addEventListener("click", function(){
    btn6.remove();
   });

  // button 8

let btn7 = document.getElementsByClassName("button-8")[0];
btn7.addEventListener("click", function(){
    btn7.style.border = "none"
   });

