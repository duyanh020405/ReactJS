
class Employee {
    public name:string
    protected company:string
    private phone:number
    constructor(name:string,company:string,phone:number){
        this.name=name
        this.company=company
        this.phone=phone
    }
   public printf(){
    console.log("ten :",this.name);
    console.log("dia chi :",this.company);
    console.log("sdt :",this.phone);
    
   }
}
let employ:Employee = new Employee("duy anh","thai binh",1433423)
employ.printf()