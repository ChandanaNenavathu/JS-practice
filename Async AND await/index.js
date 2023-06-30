// Example 1: In this example, we will see the basic use of async in Javascript.

const getData = async () => {
    let data = "Hello World";
    return data;
};
getData().then(data => console.log(data));

//2 This example shows the basic use of the await keyword in Javascript.
const getData2 = async () => {
    let y = await "Await Keyword";
    console.log(y)
};
console.log(1);
getData2();
console.log(2);

// 3

let asynchronous = () => {
    let FirstPromise = new Promise((resolve, reject) => resolve("First Promise"));
    let SecondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second Promise");
        }, 1000)
    });
let combinedPromise = Promise.all([FirstPromise, SecondPromise]);
return combinedPromise;
};
let display = async() => {
    let data = await asynchronous();
    console.log(data);
}
display();