let stringArray = new Array();
stringArray[0] = "One";
stringArray[1] = "Two";
stringArray[2] = "Three";
stringArray[3] = "four";
document.getElementsByClassName("var strArr")[0].innerHTML = `${stringArray}`;

let numericArray = new Array(3);
numericArray[0] = 1;
numericArray[1] = 2;
numericArray[2] = 3;
document.getElementsByClassName("var numArr")[0].innerHTML = `${numericArray}`;

let mixedArray = new Array(1, "two", 3, "four");
document.getElementsByClassName("var mixArr")[0].innerHTML = `${mixedArray}`;

let StringArray = new Array ("One", "Two", "Three", "Four")
document.getElementsByClassName("var StrArr0")[0].innerHTML = `${StringArray[0]}`;
document.getElementsByClassName("var StrArr1")[0].innerHTML = `${StringArray[1]}`;
document.getElementsByClassName("var StrArr2")[0].innerHTML = `${StringArray[2]}`;
document.getElementsByClassName("var StrArr3")[0].innerHTML = `${StringArray[3]}`;

let NumericArray = new Array(1, 2, 3, 4);
document.getElementsByClassName("var NumArr0")[0].innerHTML = `${NumericArray[0]}`;
document.getElementsByClassName("var NumArr1")[0].innerHTML = `${NumericArray[1]}`;
document.getElementsByClassName("var NumArr2")[0].innerHTML = `${NumericArray[2]}`;
document.getElementsByClassName("var NumArr3")[0].innerHTML = `${NumericArray[3]}`;

let AccessArray = new Array("One", "two", "Three", "Four");
for (let i = 0; i < AccessArray.length ; i++)
{
    document.getElementsByClassName("var AccArr")[0].innerHTML = `${AccessArray[0]}`
    document.getElementsByClassName("var AccArr1")[1].innerHTML = `${AccessArray[1]}`
    document.getElementsByClassName("var AccArr2")[2].innerHTML = `${AccessArray[2]}`
    document.getElementsByClassName("var AccArr3")[3].innerHTML = `${AccessArray[3]}`
    document.getElementsByClassName("var AccArr4")[3].innerHTML = `${AccessArray[i]}`

}


