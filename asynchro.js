//asynchronous program
console.log("one");
console.log("Two");

setTimeout(() => {
    console.log("Hello");
}, 4000);//time out 4s=4000msl

console.log("Three");
console.log("Four");

//call back asynchro
// const hello = () =>{
//     console.log("Hello");
// };

// setTimeout(hello,3000);