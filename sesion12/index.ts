abstract class Employee33{
    name:string
    constructor(name:string){
        this.name=name
    }
     abstract getFullName():any;
     // doi voi phuong thuc abstract khong co body , chi co ten ,du lieu tra ve
        
}
// cach khoi tao doi tuong abtraction
// them tu khoa abtraction
// intance
// let emp1 = new Employee33("hihi")
// emp1 duoc goi la 1 intance cua class Employee33
// abtraction khong cho phep khoi tao doi tuong(intance)
/*
tao 1 class con ke thua
*/
class Students extends Employee33{
    private age:number
    constructor(name:string,age:number){
        super(name)
        this.age=age
    }
    getFullName():any {
        return this.name,this.age
    }
}