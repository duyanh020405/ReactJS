"use strict";
class Employeee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
class internEmployee extends Employeee {
    constructor(name, role, workHour) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30.000 * this.workHour;
    }
}
class officialEmployee extends Employeee {
    constructor(name, role, overtimeWage) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
const intern = new internEmployee("John", "Intern", 80);
console.log("Intern's Salary:", intern.calculateSalary());
const official = new officialEmployee("Alice", "Official", 5000000);
console.log("Official's Salary:", official.calculateSalary());
