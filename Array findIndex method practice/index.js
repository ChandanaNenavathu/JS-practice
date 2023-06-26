// function that returns odd number
function isOdd(element) {
    return element % 2 !== 0;
  }
  
  // defining an array of integers
  let numbers = [2, 8, 1, 3, 4];
  
  // returns the index of the first odd number in the array
  let firstOdd = numbers.findIndex(isOdd);
  document.getElementsByClassName("odd")[0].innerHTML =`${firstOdd}`


  // Example 1: Using findIndex() method

  // function that returns even number
function isEven(element) {
    return element % 2 == 0;
  }
  
  // defining an array of integers
  let number = [1, 45, 8, 98, 7];
  
  // returns the index of the first even number in the array
  let firstEven = number.findIndex(isEven);

  document.getElementsByClassName("num")[0].innerHTML = `${firstEven}`