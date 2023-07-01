
// Example 1

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = " ";
for (let i = 0; i < cars.length; i++) {
    // text +=cars[i] + "<br>";
    text = text+cars[i] + '<br>';
}
document.getElementsByClassName("demo")[0].innerHTML = `${text}`;

//--------------------------------------------------------------------------------------

// Example 2 Display a Text Five Times

const n = 5;
var texts = '';
for(let i = 1; i <=n; i++){
   texts += 'i lve js' + '<br>';
}
document.getElementsByClassName("num")[0].innerHTML = `${texts}`;

//--------------------------------------------------------------------------------------

// Example 3 Display Numbers from 1 to 5

const a = 8;
let num = "";
for(let i = 1; i <=a ; i++){
    num+=i + "<br>";
}
document.getElementsByClassName("nums")[0].innerHTML = `${num}`;

//--------------------------------------------------------------------------------------

// Example 4 Display Sum of n Natural Numbers

let sum = 0;
const b = 10;
for(let i =1; i <=b ; i++){
    sum +=1;
}
//console.log('sum:', sum);
document.getElementsByClassName("natural")[0].innerHTML = `${sum}`;

//---------------------------------------------------------------------------------------

//Example 5 

let A = 10;
var B = " ";
for (let i = 2; i <= A; i+=2) {
   B += i + '<br>';
}
document.getElementsByClassName("display")[0].innerHTML = `${B}`;

//-----------------------------------------------------------------------------------------

// Practice Nested Loop frm https://www.youtube.com/watch?v=5FwBd2eZcNM

// 1. 

for(i= 0 ; i < 5; i++){
   // console.log(`The current value of i :${i}`);
    for (let j = 0; j < 5; j++ ){
        //console.log(`j : ${j}`)
    }
}

// 2.

for( i = 0 ; i < 11; i++){
    for( let j = 0; j < 11; j++){
        //console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 3. 

const storeInventory =[["Item : Computer", "Price: $1500", "Inventory: 25"], ["Item: Speaker", "Price: $50", "Inventory: 100"],["Item:Moniters", "Price :$200", "Inventory :27"], ["Item: HeadPhones", "Price: $400", "Inventory: 7"], ["Item: Printers", "Price:$100", "Inventory: 90"], ["Item:USB Cable ", "Price:$9", "Inventory:500"],["Item: Routers", "Price:$350", "Inventory:23"],["Item:Wireless Keyboard", "Price: $20", "Inventory:55"],["Item: Fans", "Price:$35", "Inventory:6"]];

for(let i = 0 ; i < storeInventory.length; i++){
    if (i>0){
        //console.log("storeInventory =>",storeInventory)
    }
    for(let j =0 ; j < storeInventory[i].length; j++){
        //console.log(storeInventory[i][j])
    }
    
}

// 4

for (let i = 1; i <= 2; i++){
    for(let j = 1; j <= 3 ; j++){
        console.log(`${"hello"}`);

    }
}


