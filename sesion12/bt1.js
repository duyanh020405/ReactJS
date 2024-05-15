"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log("name :", this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("gau gau");
    }
}
const cat = new Cat("candy");
cat.print();
cat.makeNoise();
