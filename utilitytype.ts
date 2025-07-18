// //partial type
// interface CollegeType{
//     name:string,
//     location:string,
//     students:number,
//     branch:number
// }

// let CollegeData:Partial<CollegeType>={
//     name:"jspm pune",
//     location:"pune",
//     students:600,
// }

// // console.log(CollegeData);
// function getCollegeData(data:Partial<CollegeType>){
// return data
// }
// getCollegeData({name:'jspm pune',location:'pune'})
// console.log(getCollegeData)


// //Requared method
// interface CollegeType{
//     name:string,
//     location:string,
//     students:number,
//     branch:number|undefined
// }

// function getCollegeData(data:Partial<CollegeType>){
//     return data
// }
// getCollegeData({name:'jspm pune',location:'pune'})

// function getCollegeData2(data:Required<CollegeType>){
//     return data
// }
// getCollegeData2({name:'jspm pune',location:'pune',students:30,branch:6})

// console.log(getCollegeData2)

// //readonly method
// interface CollegeType{
//     name:string,
//     location:string,
//     students:number,
//     branch:number|undefined
// }

// var CollegeData4:Readonly<CollegeType>={
//     name:'jspm pune',
//     location:'pune',
//     students:400,
//     branch:5
// }
// CollegeData4.name="iit"//readnoly



//pick method
interface CollegeType{
    name:string,
    location:string,
    students:number,
    branch:number|undefined
}
var CollegeData5:Pick<CollegeType,'name'|'location'>={
    name:'iit mumbai',
    location:'mumbai',
}
console.log(CollegeData5)