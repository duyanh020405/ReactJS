class Vehicle {
     public name: string;
    protected year: number;
    private company: string;
    readonly id:number

    constructor(name: string, year: number, company: string,id:number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id =id
    }
    public show(){
        console.log("xe :",this.name);
        console.log("nam :",this.year);
        console.log("hang xe :",this.company);
        console.log("id :",this.id);
        
    }
}


let car: Vehicle = new Vehicle("Car", 2022, "Toyota",12);
let bike: Vehicle = new Vehicle("Bike", 2020, "Honda",13);
car.show()
bike.show()

