
//------------------------------Object Literals------------------------------

let site = {
    name : "Nenavathuchandana",
    haveAdmin : true,
};
document.getElementsByClassName("prop")[0].innerHTML = `${site}`;
document.getElementsByClassName('propValue')[0].innerHTML =`${site.name}`;
document.getElementsByClassName("add")[0].innerHTML = `${site.haveAdmin}`;
delete site.name;
//console.log("site name 12", site.name)
document.getElementsByClassName("delete")[0].innerHTML = `${site.name}`;


// let site = {  // an object
//     name: "W3Docs", // by key "name" store value "W3Docs"
//   };
//   console.log(site);

const Person = {
    firstName :'John', 
    lastName : 'Doe',
    age : 50,
    eyeColor : 'Blue',
};
document.getElementsByClassName('obj')[0].innerHTML = `${Person.firstName} is ${Person.age} years`;

const persons = {
    firstName :'Nenavathu', 
    lastName : 'Chandana',
    id : 5566
};
document.getElementsByClassName("persons")[0].innerHTML = `${persons.firstName}  ${persons.lastName}`;
document.getElementsByClassName("view")[0].innerHTML = `${persons["firstName"]} ${persons["lastName"]}`;

var emptyObject = {}; // object with no properties or methods

var person = { firstName: "John" }; // object with single property

// object with single method
var message = { 
                showMessage: function (val) { 
                            alert(val); 
                } 
            }; 

// object with properties & method
var person = { 
                firstName: "James", 
                lastName: "Bond", 
                age: 15, 
                getFullName: function () { 
                        return this.firstName + ' ' + this.lastName 
                }
            }; 

document.getElementsByClassName("Class")[0].innerHTML = `${person.firstName}`;
document.getElementsByClassName("funct")[0].innerHTML = `${person.lastName}`;
document.getElementsByClassName("Access")[0].innerHTML = `${person.getFullName()}`;

let rect = {  // create an empty object 
                width : 20,
                height : 10
            };
rect.color = {
    red: 0, 
    green: 225,
    blue :128,
};
rect.getArea = function() {
    return this.width * this.height;
}

document.getElementsByClassName('heigt')[0].innerHTML = `${rect.width}`;
document.getElementsByClassName('weight')[0].innerHTML = `${rect.height}`;
document.getElementsByClassName('red')[0].innerHTML = `${rect.color.red}`;
document.getElementsByClassName('green')[0].innerHTML = `${rect.color.green}`;
document.getElementsByClassName('blue')[0].innerHTML = `${rect.color.blue}`;
document.getElementsByClassName('getArea')[0].innerHTML = `${rect.getArea()}`;


//----------------------Object Properties-------------------------

let sum = {
    width : 60,
    height: 39 
};
document.getElementsByClassName("dotNotation")[0].innerHTML = `${sum.width}`;
document.getElementsByClassName("dotNotation")[0].innerHTML = `${sum.width}`;
document.getElementsByClassName("bracketNotation")[0].innerHTML = `${sum["height"]}`;


let shape = {
    'bounding box width' : 90,
    'bounding box height' : 10,
    side1 : 5,
    side2 : 15,
    side3 : 25,
    side4 : 7,
    side5 : 24,
    side6 : 30,
    side7 : 45,
    side8 : 367,
    side9 : 356,
    side10 : 70,
};
document.getElementsByClassName("shape")[0].innerHTML = `${shape["bounding box width"]}`;
document.getElementsByClassName("shapes")[0].innerHTML = `${shape["bounding box height"]}`;

for (let i = 1; i <= 5 ; i++) {
    let prop  = "side" + i;
    document.getElementsByClassName("properties")[0].innerHTML = `${shape[prop]}`
}



