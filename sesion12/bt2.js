"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfor() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfor() {
        console.log(this.name, this.id);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfor() {
        console.log(this.name, this.subject);
    }
}
const stu = new Student(1, "John Doe");
stu.displayInfor();
const teac = new Teacher("Mr. Smith", "Math");
teac.displayInfor();
