"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    showDai() {
        console.log("chieu dai :", this.width);
    }
    showRong() {
        console.log("chieu dai :", this.height);
    }
    changeDai(newWidth) {
        this.width = newWidth;
        console.log("new chieu dai", newWidth);
    }
    changeRong(newHeight) {
        this.width = newHeight;
        console.log("new chieu rong", newHeight);
    }
    S() {
        console.log("dien tich :", this.width * this.height);
    }
    V() {
        console.log("chu vi :", (this.width + this.height) * 2);
    }
}
let check = new Rectangle(4, 5);
check.S();
check.V();
