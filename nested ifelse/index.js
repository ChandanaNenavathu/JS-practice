// Example 1

// 1. check if the number if positive, negative or zero
const number = prompt("Enter a number: ");
// check if number is greater than 0 
if(number > 0 ) {
    document.getElementsByClassName("positive")[0].innerHTML = `${number}`;
}
// check if number is 0
else if (number == 0){
    document.getElementsByClassName("negative")[0].innerHTML = `${number}`;
}
// if number is neither greater than 0, nor zero
else { 
    document.getElementsByClassName("zero")[0].innerHTML = `${number}`;

}
document.getElementsByClassName("number")[0].innerHTML = `${"The if...else if...else statement is easy"}`;

//--------------------------------------------------------------------------

// Example 2

let book = "Maths";
if( book == "history") {
    document.getElementsByClassName("his")[0].innerHTML = `${"History Book"}`;
}else if ( book == "Maths") {
    document.getElementsByClassName("math")[0].innerHTML = `${"Maths Book"}`;
}else if ( book == "economics") {
    document.getElementsByClassName("eco")[0].innerHTML = `${"Economics Book"}`;
}else {
    document.getElementsByClassName("els")[0].innerHTML = `${"Unknown Book"}`;
}


//----------------------------------------------------------------------------------------


// Example 3

const age = 18;
if (age < 18) {
    document.getElementsByClassName("one")[0].innerHTML = `${"X is under 18 years old"}`;
}else if (age >= 18 && age <= 21) {
    document.getElementsByClassName("two")[0].innerHTML = `${"X is between the ages of 18 and 21."}`;
}else {
    document.getElementsByClassName("three")[0].innerHTML = `${"X is over 21 years old."}`;
}

//------------------------------------------------------------------------------------------

// Example 4

const pet = "dog";
if(pet === "lizard") {
    document.getElementsByClassName("liz")[0].innerHTML = `${"I own a lizard"}`;
}else if(pet === "dog"){
    document.getElementsByClassName("dog")[0].innerHTML = `${"I own a dog"}`;
}else if(pet === "cat"){
    document.getElementsByClassName("cat")[0].innerHTML = `${"I own a cat"}`;
}else if(pet === "snake"){
    document.getElementsByClassName("snake")[0].innerHTML = `${"I own a snake"}`;
}else if(pet === "parrot"){
    document.getElementsByClassName("par")[0].innerHTML = `${"I own a par"}`;
}else {
    document.getElementsByClassName("pet")[0].innerHTML = `${"I dont own a pet"}`;
}

//------------------------------------------------------------------------------


// Example 5

var mySal = 500;
var yourSal = 1000;
if(mySal > yourSal) {
    document.getElementsByClassName("sal")[0].innerHTML = `${"My Salary is greater than your salary"}`;
}else if(mySal < yourSal){
    document.getElementsByClassName("you")[0].innerHTML = `${"My Salary is less than your salary"}`;
}else if(mySal == yourSal){
    document.getElementsByClassName("your")[0].innerHTML = `${"My Salary is equal to your salary"}`;
}

//-------------------------------------------------------------------------------------------

// Example 6

let a = 10;
if(a > 10) {
    document.getElementsByClassName("a")[0].innerHTML = `${"a is greater than 10"}`;
}else if(a > 0 && a <= 10){
    document.getElementsByClassName("b")[0].innerHTML = `${"a is greater than 0 & less than 10"}`;
}else if(a == 0){
    document.getElementsByClassName("c")[0].innerHTML = `${"a is equal 0y"}`;
}else{
    document.getElementsByClassName("result")[0].innerHTML = `${"a is less than 0"}`;
}

//--------------------------------------------------------------------------------------------

// Example 7

let val1 = 20;
let val2 = 10;
let operation = "<";
 
if (operation == ">") {
    document.getElementsByClassName("oper")[0].innerHTML = `${"greater than"}`; 
  if (val1 > val2) {
    document.getElementsByClassName("val")[0].innerHTML = `${"Val1 > val2"}`; 
  } else {
    document.getElementsByClassName("vals")[0].innerHTML = `${"Val1 <= val1"}`; 
  }
} else if (operation == "<") {
    document.getElementsByClassName("op1")[0].innerHTML = `${"Less than"}`; 
  if (val1 < val2) {
    document.getElementsByClassName("op2")[0].innerHTML = `${"Val1 < val2"}`; 
  } else {
    document.getElementsByClassName("op3")[0].innerHTML = `${"Val1 >= val2"}`; 
  }
} else if (operation == "=") {
    document.getElementsByClassName("op4")[0].innerHTML = `${"Equal"}`; 
 
  if (val1 == val2) {
    document.getElementsByClassName("op5")[0].innerHTML = `${"Val1 = val2"}`; 
  } else {
    document.getElementsByClassName("op6")[0].innerHTML = `${"Val1 != val2"}`; 
  }
}

//----------------------------------------------------------------------------------

// Example 8


var today='Tuesday';
if(today=='Sunday'){
    document.getElementsByClassName("message")[0].innerHTML = "Today is Sunday.";
} else if(today=='Monday'){
    document.getElementsByClassName("mes")[0].innerHTML = "Today is Monday. You had a wonderful weekend.";
} else if(today=='Tuesday'){
    document.getElementsByClassName("messages")[0].innerHTML = "Today is Tuesday. Four more days for the weekend.";
} else{
    document.getElementsByClassName("mess")[0].innerHTML = "Hang tight in there. You are about to have a weekend shortly.";
}

//----------------------------------------------------------------------------------------------

// Example 9

let marks  = 86;
     if(marks >= 90)
     {
       document.getElementsByClassName("gradeA")[0].innerHTML = "('Grade : A+');.";
      }
      else if(marks >= 80)
      {
        document.getElementsByClassName("gradeB")[0].innerHTML = "('Grade : B');.";
    }
     else if(marks >= 70)
     {
        document.getElementsByClassName("gradeC")[0].innerHTML = "('Grade : C');.";
    }
     else
     {
        document.getElementsByClassName("gradeD")[0].innerHTML = "('Grade : D');.";
    }

    //----------------------------------------------------------------------

   

