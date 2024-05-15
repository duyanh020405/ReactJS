"use strict";
class Song {
    constructor(id, name, length) {
        this.name = name;
        this.id = id;
        this.lenght = length;
    }
    changeName(newName) {
        this.name = newName;
    }
    changeLeght(newLenght) {
        this.lenght = newLenght;
    }
}
let nhac1 = new Song(1, "HIHI", 2);
nhac1.changeLeght(4);
nhac1.changeName("huhu");
console.log(nhac1);
