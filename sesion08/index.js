"use strict";
const e1 = {
    name: 'hi',
    test: ['duy anh hihi'],
    startDate: new Date()
};
console.log(e1);
function show22(emp) {
    console.log("Name :", emp.name);
    if ("hihi" in emp) {
        console.log("hihi", emp.hihi);
    }
    if ("stratDate" in emp) {
        console.log("stratDate", emp.stratDate);
    }
}
// Ex
//giống như trên , tạo một type gộp nhưng cách thức đẻ in ra khác nhau
const employee = {
    name: "John Doe",
    stratDate: new Date(),
    hihi: ["some", "array", "values"]
};
show22(employee);
/*
In class
union : kieu du lieu ket hop
vd let a:number|string|underfined =5;
a="hong"->dung
let numbers :(string |numbers)[]=[1,2,3,5,"6"]


let obj:[name:string,adress:string;phone:string]{
    name:"duy"
    adress:"hn"
    phone:"123434"
}
 or
 type Admin ={
    name:string;
    adress:string[];
    phone:"773456"
}
obj:Admin={
    name:"duy"
    adress:"hn"
    phone:"123434"
}
 
*/ 
