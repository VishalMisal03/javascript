////typeof method

// let userData:number|string|boolean="vishal misal";
// userData=true
// if (typeof userData=="boolean"){
//     console.log("this is boolan data type");
// }else if (typeof userData=="string"){
//     console.log("This ia a string data type");
// }else{
//     console.log("this is a number");
// }

// function checkDataType(data:string|number){
//     if (typeof data=="number"){
//         console.log("this is a number");
//     }else{
//         console.log("this is a string");
//     }
// }
// checkDataType(200)

//instanceof method

class Product{

}
var p1=new Product()
class order{

}
var o1= new order();

function checkDetails(data:order|Product){
    if (data instanceof order){
        console.log("this is a order");
    }else{
        console.log("this a product")
    }
}
checkDetails(p1);


