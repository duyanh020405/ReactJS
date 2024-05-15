"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printf() {
        console.log("ten :", this.name);
        console.log("dia chi :", this.company);
        console.log("sdt :", this.phone);
    }
}
let employ = new Employee("duy anh", "thai binh", 1433423);
employ.printf();
