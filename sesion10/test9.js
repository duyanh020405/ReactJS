"use strict";
class Book2 {
    constructor(title, author, quantity = 1) {
        this.author = author;
        this.title = title;
        this.quantity = quantity;
    }
    xemtacgia() {
        return this.author;
    }
    xemsach() {
        return this.title;
    }
}
class Library2 {
    constructor() {
        this.List = [];
    }
    addBook(book2) {
        let found = false;
        for (let i = 0; i < this.List.length; i++) {
            if (book2.xemsach() === this.List[i].xemsach() && book2.xemtacgia() === this.List[i].xemtacgia()) {
                this.List[i].quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.List.push(book2);
        }
    }
}
const sach1 = new Book2("duy1", "nhat");
const sach2 = new Book2("duy2", "nhat");
const sach3 = new Book2("duy3", "nhat");
const sach4 = new Book2("duy3", "nhat");
const List = [];
List.push(sach1, sach2, sach3, sach4);
console.log(List);
