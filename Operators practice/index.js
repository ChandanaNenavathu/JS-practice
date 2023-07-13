let x = 10;
document.getElementsByClassName("demo")[0].innerHTML =x;

let numb = 27;
numb +=76;
document.getElementsByClassName("operands")[0].innerHTML = `${numb}`;

let y = 2;
let z = x + y;
document.getElementsByClassName("Demo")[0].innerHTML = `THE SUM OF x + y IS + ${+ z}`;

let a = 5;
let b = 7;
let c = a * b;
document.getElementsByClassName("multiply")[0].innerHTML =`${c}`;

let sum = 3;
let add = (199 + 48) * sum;
document.getElementsByClassName("arithmetic")[0].innerHTML =`${add}`

let text1 = 'John';
let text2 ="Doe"
let text3 = text1 + " " + text2;
document.getElementsByClassName('string')[0].innerHTML = text3;

let senten = "What a very";
senten +="nice day";
document.getElementsByClassName("strings")[0].innerHTML = senten;

let numbers = 8 + 8;
let stg = "5" + 7
let word = "Hello" + 9;
document.getElementsByClassName("strNum")[0].innerHTML = `${numbers} <br> ${stg}, <br> ${word}`;

let no = 7;
no++;
let answer = no;
document.getElementsByClassName("increment")[0].innerHTML = `${no}`

let d = 5;
d--;
let e = d;
document.getElementsByClassName("decrement")[0].innerHTML = `${e}`

let f = 9;
let g = f ** 2;
document.getElementsByClassName("Exponent")[0].innerHTML = `${g}`
let h = 9 ;
let i = Math.pow(h,2);
document.getElementsByClassName("Exponents")[0].innerHTML = `${i}`
