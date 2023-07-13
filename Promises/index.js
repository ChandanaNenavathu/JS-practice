// function myDisplayer(some) {
//     document.getElementsByClassName("demo")[0].innerHTML = some;
// }
// let promise = new Promise((resolve, reject) => {
//     let x = 0;
//     if (x === 0) {
//         resolve(Ok); 
//     }else {
//         reject("Error"); 
//     }
// });
// promise.then(
//     function(value){myDisplayer(value);},
//     function(error){myDisplayer(error);}
// );

//------------------------------------

// 1

let promise = new Promise((resolve, reject) => {
    //executor(the producing code)state is pending

    // after 1 second that the job is done with result "done"
    setTimeout(() => resolve("Yes"), 1000);
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("error")), 1000);
})
promise.then(
result => alert(result),
error => alert(error)
);

// 2

let promises  = new Promise((resolve, reject) => {
    const x = "chandana";
    const y = "chandana";
    if(x === y){
        resolve();
    }else{
        reject();
    }
});
promises
.then(function(){
    console.log(`success`)
})
.catch(function(){
    console.log(`error`)
})

//-----------------------------------------

// 3. Example : Promise Resolved

let resolved = new Promise((resolve, reject) => {
    resolve("nenavathu");
});
resolved
.then(function(SuccessMessage){
    // success handler function is invoked
    console.log(SuccessMessage);
}, function(errorMessage){
    console.log(errorMessage);
});

//-------------------------------------------

// 4. Example : Promise Rejected

let rejected = new Promise((resolve, reject) => {
    reject("Promise Rejected");
});
rejected.then(function(Message){
    console.log(Message);
}, function(errorMessage){
console.log(errorMessage);
});

//----------------------------------------------

// 5. Example : Promise all()

p1 = Promise.resolve(1);
p2 = 200
p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "CHANDU");
});
Promise.all([p1, p2, p3]).then(function(values){
    document.write(values);

});

//----------------------------------------------------

// 6. Example : Here Promise.all() method resolves after 2000ms and the output is shows as an array. 
 
const tOut = (t) => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(`completed in ${t}`)
        }, t);
    })
};
tOut(1000).then(result => console.log((result+"<br>")))
// promise.all
Promise.all([tOut(1000), tOut(2000)]).then(result => console.log(result));

// 7 promise resolve() Method

let output = Promise.resolve(15050);
output.then(function(val){
    console.log(val);
});

// 8. we will be using a timer function called setTimeout() will be responsible for the execution of the values which are passed inside resolve() which is passed inside that timer function.

const timer = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([89, 45, 323])
    }, 4000);
});
timer.then(values => {
    console.log(values[1]);
});
