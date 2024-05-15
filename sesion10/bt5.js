"use strict";
class Department {
    constructor(id, nameRoom, peopleName) {
        this.id = id;
        this.nameRoom = nameRoom;
        this.peopleName = peopleName;
    }
    describe() {
        console.log("id :", this.id);
        console.log("nameRoom :", this.nameRoom);
        console.log("list name :", this.peopleName);
        ;
    }
}
let nguoi1 = new Department(1, "hii1", ["duy anh", "loing", "hai",]);
nguoi1.describe();
