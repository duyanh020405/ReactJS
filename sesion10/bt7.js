"use strict";
class Circle {
    constructor(bk) {
        this.bk = bk;
    }
    changeBK(newBK) {
        this.bk = newBK;
        console.log("new bk :", newBK);
    }
    S() {
        let s = this.bk * this.bk;
        console.log("dien tich :", s);
    }
    V() {
        let v = this.bk * this.bk * 3.14;
        console.log("chu vi :", v);
    }
}
let checkBk = new Circle(5);
checkBk.S();
checkBk.V();
checkBk.changeBK(90);
