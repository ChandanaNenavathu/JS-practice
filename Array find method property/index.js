let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
document.getElementsByClassName("even")[0].innerHTML = `${evenNumber}`;


// example 1 : Using find() method

function isEven(element) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven = randomArray.find(isEven);
  document.getElementsByClassName("FirEven")[0].innerHTML = `${firstEven}`;

// USING ARROW OPERATOR
let firstOdd = randomArray.find((element) => element % 2 == 1);
document.getElementsByClassName("firstOdd")[0].innerHTML = `${firstOdd}`;


// example 2 : find() with Object elements

const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  function isAdult(member) {
    return member.age >= 18;
  }
  document.getElementsByClassName("adult")[0].innerHTML = `${team.find(isAdult)}`;


