var studentData: string | number | []="vishal";

studentData=999;
studentData=[]
function fruitsData() : string | string [] | number {
    var iteam =5
    if (iteam>1){
        return['apple','banana']
    }else{
        return "apple"
    }
}
console.log(fruitsData())
function studentInfo(name:string | number | boolean) {
    return name
}
studentInfo('vishal misal');
studentInfo(999);
