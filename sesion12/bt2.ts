abstract class Person{
    name:string
    constructor(name:string){
        this.name=name
    }
    displayInfor(){
        console.log(this.name);
        
    }
}
class Student extends Person{
    id:number
    constructor(id:number,name:string){
        super(name)
        this.id=id
    }
    displayInfor(){
        console.log(this.name,this.id);
        
    }
}
class Teacher extends Person{

    subject:string
    constructor(name:string,subject:string){
        super(name)
        this.subject=subject
    }
    displayInfor(){
        console.log(this.name,this.subject);
        
    }
}
const stu: Student = new Student(1, "John Doe");
stu.displayInfor();

const teac: Teacher = new Teacher("Mr. Smith", "Math");
teac.displayInfor(); 