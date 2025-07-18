type PersonT={
    name:string,
    age:number,
    isEmp:boolean
}
let PersonData:PersonT={
    name:'vishaln misal',
    age:22,
    isEmp:true
}
type PersonX=keyof PersonT;
let PersonDataX:keyof PersonT;
PersonDataX="name";
PersonDataX="age";
PersonDataX="isEmp";

let UserX:keyof typeof PersonData="name"
console.log(PersonData)

type User = { name: string; age: number }; 
type UserKeys = keyof User;