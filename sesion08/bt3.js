"use strict";
function tinh1(a) {
    if (a.theLoai === "vuong") {
        return a.canh * a.canh;
    }
    else if (a.theLoai === "tron") {
        return a.bk * a.bk * Math.PI;
    }
    else {
        throw new Error("Invalid shape type");
    }
}
const circle = { theLoai: 'tron', bk: 5 };
const square = { theLoai: 'vuong', canh: 3 };
console.log("Diện tích hình tròn:", tinh1(circle));
console.log("Diện tích hình vuông:", tinh1(square));
