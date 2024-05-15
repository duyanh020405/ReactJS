type Admin ={
    name:string;
    test:string[];
}
type Employee  ={
    name:string;
    startDate:Date;
}
type sum =Admin & Employee
const e1:sum={
    name:'hi',
    test:['duy anh hihi'],
    startDate: new Date()
}
console.log(e1);
/*
 Sử dụng & để kết hợp 2 type vào với nhau để tạo ra 1 type mới với sự kết hợp của 2 type
 intersection type(&)
*/


//
/*
 type guards
*/
type Admin2={
    name:string;
    hihi:string[]
}
type Employee2 ={
    name:string
    stratDate:Date;
}
type Show2 = Admin2 & Employee2
function show22(emp :Show2){
    console.log("Name :",emp.name);
    if("hihi" in emp){
        console.log("hihi",emp.hihi);
        
    }
    if("stratDate" in emp){
        console.log("stratDate",emp.stratDate);
        
    }
    
}
// Ex
//giống như trên , tạo một type gộp nhưng cách thức đẻ in ra khác nhau
const employee: Show2 = {
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