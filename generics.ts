function fruits<T>(name:T):T{
    return name
}
// function fruitsAny(name:any):any{
//     return name
// }
//     let onlyfruit=fruits("apple")
//     let onlyNum=fruits(100)
//     let onlyBool =fruits(true)
// console.log(fruits)

let onlyfruit=fruits("apple")
let onlyNum=fruits(100)
let onlyBool=fruits(true)

function Users<T>(data:T[]):T{
    return data[0]
}
let userCollection = Users([10,30,20])