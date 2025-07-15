//rest / spred operator
//addition on number
function calculatecartprice(...num){
    return num.reduce((acc, num) => acc+ num,0); 
}
console.log(calculatecartprice(200,400,600,2000));


//arrow function
const functionName = (parameters) => expression; 
const add = (a,b) => a + b; 
console.log(add(5, 7)); 


//immediately invoked function expression
(function () { 
    let a,b;
    c=4+5;
console.log("addition of two numbeer",c); 
})();
