"use strict";
class Product {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    printInfo() {
        console.log("san pham:", this.id, this.name);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        console.log(`Brand: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        console.log(`Author: ${this.author}`);
    }
}
const electronic = new Electronic("Laptop", 1234, "Dell");
electronic.printInfo();
const book = new Book(5678, "The Great Gatsby", "F. Scott Fitzgerald");
book.printInfo();
