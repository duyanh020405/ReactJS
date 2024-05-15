"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    show() {
        console.log("xe :", this.name);
        console.log("nam :", this.year);
        console.log("hang xe :", this.company);
        console.log("id :", this.id);
    }
}
let car = new Vehicle("Car", 2022, "Toyota", 12);
let bike = new Vehicle("Bike", 2020, "Honda", 13);
car.show();
bike.show();
