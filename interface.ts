interface Info{
    name:string,
    age:number,
    college:string
}
interface TeacherType extends Info {
    subject:string
}

interface AdressType extends TeacherType{
    add:string
}

var studentObj:Info= {
    name:"vishal",
    age:22,
    college:"jspm pune"
}

var teacherobj:TeacherType={
    name:"misal",
    age:45,
    college:"jspm pune",
    subject:"typescript"
}

var addresssObj :AdressType={
    name:"Ganehs",
    age:25,
    college:"modern college",
    subject:"electric",
    add:"pune"
}

console.log(studentObj);
console.log(teacherobj);
console.log(addresssObj);