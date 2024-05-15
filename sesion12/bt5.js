"use strict";
class Quadrangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
class Chuvi extends Quadrangle {
    constructor(height, width) {
        super(height, width);
    }
    calculatePerimeter() {
        if (this.height > this.width || this.width < this.height) {
            return (this.width + this.height) * 2;
        }
        else {
            return (this.width) * 4;
        }
    }
}
class S extends Quadrangle {
    constructor(height, width) {
        super(height, width);
    }
    calculatePerimeter() {
        if (this.height > this.width || this.width < this.height) {
            return (this.width * this.height);
        }
        else {
            return (this.width) * this.width;
        }
    }
}
const checkChuvi = new Chuvi(2, 2);
console.log("chu vi :", checkChuvi.calculatePerimeter());
