//1. JavaScript to illustrate map() method
function func() {
    let arr = [14,10,11,00];
// new mapped array
let newArr = arr.map(Math.sqrt);
let answer = document.getElementsByClassName("ex1")[0].innerHTML = `${newArr}`;
  //answer.innerHTML = `${newArr}`;
// console.log(newArr);
}
func();

//-----------------------------------------------------------------------------------------------------------------------

// 2. In this example, the method map() produces an array containing numbers obtained by dividing the numbers in the original array by 2.

function mapped(){
    // original array
    let array = [2, 56, 78, 34, 65];
    // new mapped array
    let divided = array.map(value => value/2);
    let ans = document.getElementsByClassName("ex2")[0];
    ans.innerHTML = `${divided}`;
    // console.log(divided);
}
mapped();

//------------------------------------------------------------------------------------------------------------------------

// 3. How to map array values without using map method in JavaScript ?

let loop = [4, 5, 10, 3, 8, 6]
let result = [];
 //square function returns square of a number
 const square = function(num){
    return num*num
 }
 for(i = 0 ; i < loop.length ; i++){
    result.push(square(loop[i]));
    }
//  console.log(result);
 document.getElementsByClassName("ex3")[0].innerHTML = `${result}`;

//-------------------------------------------------------------------------------------------------

// 4. This example describes the Map() method to create the map object that contains the [key, value] pair to the map & displays the element that is associated with the specific key using the Map.get() method.

let myMap = new Map();
myMap.set(0, "CHANDANA NENAVATHU");
document.getElementsByClassName("ex4")[0].innerHTML =`${(myMap.get(0))}`;

//----------------------------------------------------------------------------------------------------------------

// 5. This example describes the Map() method to create the map object that contains the multiple [key, value] pair to the map & displays the element that is associated with the specific key using the Map.get() method.

let mapObj = new Map();
  // Adding [key, value] pair to the map
mapObj.set(5, 'CHANDU');
mapObj.set(7, 'JAVASCRIPT');
mapObj.set(8, 'CHANDANA');
// Displaying the elements which are associated with the keys '0', '2'
  // and '4' using Map.get() method
  document.getElementsByClassName("ex5")[0].innerHTML =`${(mapObj.get(5))}`;
  document.getElementsByClassName("ex6")[0].innerHTML =`${(mapObj.get(3))}`;
  document.getElementsByClassName("ex7")[0].innerHTML =`${(mapObj.get(8))}`;


//--------------------------------------------------------------------------------------------------------------------------

// 6 . JavaScript Map keys() Method 

let mp=new Map()
  mp.set("a",11);
  mp.set("b",2);
  mp.set("c",5);
//   console.log(mp.keys());
  document.getElementsByClassName("ex8")[0].innerHTML =`${mp.get('a')} ${mp.get('b')} ${mp.get('c')}`;

//------------------------------------------------------------------------------------------------------------------------------------

// 7. 
let arr = [1,2,3,4];
let newArr = arr.map((cats) => {
  return 'cats';
});
// newArr = ['cats', 'cats', 'cats', 'cats']
document.getElementsByClassName("ex9")[0].innerHTML = `${newArr}`;

//-------------------------------------------------------------------------------------------------------------------------------------------

// 8. 
function doubleNumbers(nums) {
    var double = nums.map(n => n * 2)
    document.getElementsByClassName("ex10")[0].innerHTML = `${double}`; 
    console.log("nums ==>",double);
}
doubleNumbers([2, 5, 100]); // [4, 10, 200]

//------------------------------------------------------------------------------------------------------------------------------------------------

// 9. Take an array of numbers and make them strings

function stringItUp(arr) {
    let str = arr.map(e => e.toString())
    console.log("stringItUp =>", str)
};

stringItUp([2, 5, 100])

//---------------------------------------------------------------------------------------------------------------------------------------------------------

// 10.  Capitalize each of an array of names

function capitalizeNames(arr5) {
    const upper = arr5.map(name => name.toUpperCase());
         console.log('caps ==>', upper)
    }
    // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
    capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])

//---------------------------------------------------------------------------------------------------------------------------------------------------

// 11. Make an array of strings of the names

function namesOnly(arr){
    return arr.map(i => i.name)
  }
  
  let res = namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]); 
  console.log(res);
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  //----------------------------------------------------------------------------------------------------------------


  // 12. Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(Sun){
    let name = Sun.map((s) => {
        if(s.age >= 50){
            return s.name + "can go to The Matrix";
        }else if(s.age) {
            return s.name + 'is under age!';
        }
    })
    return name;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

//----------------------------------------------------------------------------------------------

// 6. Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(dom) {
    var name3 = dom.map(d => d.name)
    var age3 = dom.map(d => d.age)
    document.getElementsByClassName("ar2")[0].innerHTML = `<h1> ${name3} </h1> ` ;
    document.getElementsByClassName("ar3")[0].innerHTML = `<h2> ${age3} </h2> ` ;
    
}
  readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]