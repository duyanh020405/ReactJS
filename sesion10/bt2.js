"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let ListStudent = [];
let so1 = new Student(5, 1, "gg1");
let so2 = new Student(6, 2, "gg2");
let so3 = new Student(7, 3, "gg3");
ListStudent.push(so1, so2, so3);
console.log(ListStudent);
