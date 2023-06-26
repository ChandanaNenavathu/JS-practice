// Example 1 The fill() method returns an array by filling all elements with a specified value

// defining an array 
let fruits = ['Apple', 'Banana', 'Grape'];
fruits.fill("cherry");
document.querySelector(".cls.fru").innerHTML = `${fruits}`;


// Example 2: Using fill() Method

let prices = [651, 41, 4, 3, 6];
// filling every element of the array with '5'
new_prices = prices.fill(5);
document.querySelector(".cls.price").innerHTML = `${prices}`;
document.querySelector(".cls.prices").innerHTML = `${new_prices}`;;


// Example 3: fill() Method with Three Arguments

// array definition
let language =["JavaScript", "Python", "C", "C++"];
//replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3)
//printing the original ARRAY
document.querySelector(".cls.lang").innerHTML = `${language}`;


// Example 4: fill() Method with Invalid Indexes

let rank = [8, 9, 3, 7];
// on passing negative index, counting starts from back
rank.fill(15, -2);
//prints the modified 'rank' array
document.querySelector(".cls.rank").innerHTML = `${rank}`;
// passing invalid index result in no change
rank.fill(15, 7, 8);
document.querySelector(".cls.rank").innerHTML = `${rank}`;
document.querySelector(".cls.ranks").innerHTML = `${rank}`;
// passing invalid indexes
rank.fill(15, NaN, NaN);
document.querySelector(".cls.Ranks").innerHTML = `${rank}`;

        


