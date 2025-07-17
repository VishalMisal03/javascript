var value:any="vishal";
value=100
value=['vishal'];
value=true;
value={}

var value1:unknown="vishal";
value1=100;
value1=['vishal'];
value1="vishal Misal"

if(typeof value1=='string'){
    console.log(value1.toUpperCase());
}

console.log(value);