"use strict";
class Student242 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
    setId(newId) {
        this.id = newId;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentToRemove) {
        const index = this.students.indexOf(studentToRemove);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
        this.students.push(studentToRemove);
    }
    inRa() {
        this.students.forEach(student => {
            console.log(`ID: ${student.getID()}, Name: ${student.getName()}`);
        });
    }
    changeInf(newId, newName, find) {
        this.students.forEach((student) => {
            if (find === student) {
                student.setId(newId);
                student.setName(newName);
            }
        });
    }
}
const allStudents = [
    new Student242(1, "Alice"),
    new Student242(2, "Bob"),
    new Student242(3, "Charlie"),
    new Student242(4, "David"),
    new Student242(5, "Eve"),
    new Student242(6, "Frank")
];
const classroom1 = new Classroom();
const classroom2 = new Classroom();
for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStudents[i]);
}
for (let i = 3; i < 6; i++) {
    classroom2.addStudent(allStudents[i]);
}
console.log(classroom1.inRa());
console.log(classroom2.inRa());
