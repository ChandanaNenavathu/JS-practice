let age = 15;
if(age >= 18)
document.getElementsByClassName("ifCon")[0].innerHTML =`YOU ARE ADULT ${age}`;
if(age < 18)
document.getElementsByClassName("ifCond")[0].innerHTML =`YOU ARE NOT ADULT ${age}`;


let now = new Date();
let dayOfWeek = now.getDay();// Sunday - Saturday : 0 - 6
if(dayOfWeek = 4){
    document.getElementsByClassName("day")[0].innerHTML = `${"Have a nice week day"}`

}

// set balance and price of item

const balance = 500;
const jeans = 40;

if (jeans <= balance) {
    document.getElementsByClassName("cost")[0].innerHTML = `${"You have enough money to purchase the item!"}`
  }