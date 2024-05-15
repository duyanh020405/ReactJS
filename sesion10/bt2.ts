class Student {
    id: number;
    age: number;
    email: string;

    constructor( id: number,age:number,email: string) {
        this.id = id;
        this.age = age;
        this.email = email
    }
}
let ListStudent:Student[]=[]
let so1:Student=new Student(5,1,"gg1")
let so2:Student=new Student(6,2,"gg2")
let so3:Student=new Student(7,3,"gg3")
ListStudent.push(so1,so2,so3)
console.log(ListStudent);
