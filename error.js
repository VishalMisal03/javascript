// setTimeout(()=>{
//     console.log("Hacking wifi....please wait....")
// },1000)

// try{
//     setTimeout(()=>{
//         console.log(Ganesh)
//     },1000)
    
// }
// catch(error){
//     console.log(error)
// }

// setTimeout(()=>{
//     console.log("Fetching username and password.....plz wait....");
// },2000)

// setTimeout(()=>{
//     console.log("Hacking Ganesh Facebook id ..... pz wait");

// },3000)

// setTimeout(()=>{
//     console.log("username and password of Ganesh(+9187574644) fatched.. plz wait");
// },4000)

try{
    let age = prompt("Enter your age")
    age= Number.parseInt(age)
    if(age>150){
        throw new ReferenceError ("this is probaly not true");
    }

}catch (error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("The script is still running");