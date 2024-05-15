"use strict";
class Employee33 {
    constructor(name) {
        this.name = name;
    }
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
class Students extends Employee33 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getFullName() {
        return this.name, this.age;
    }
}
