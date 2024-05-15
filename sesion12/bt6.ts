class Employeee{
    protected name:string
    protected role:string
    constructor(name:string , role:string){
        this.name=name
        this.role=role
    }
   abstract calculateSalary():number
}
class internEmployee extends Employeee{
    workHour:number
    constructor(name:string,role:string,workHour:number){
        super(name,role)
        this.workHour=workHour
    }
    calculateSalary():number{
        return 30.000 * this.workHour
    }
}
class officialEmployee extends Employeee{
    overtimeWage:number
    constructor(name:string,role:string,overtimeWage:number){
        super(name,role)
        this.overtimeWage=overtimeWage
    }
    calculateSalary(): number {
        return 20000000 + this.overtimeWage

    }
}
const intern: internEmployee = new internEmployee("John", "Intern", 80);
console.log("Intern's Salary:", intern.calculateSalary()); 

const official: officialEmployee = new officialEmployee("Alice", "Official", 5000000);
console.log("Official's Salary:", official.calculateSalary());