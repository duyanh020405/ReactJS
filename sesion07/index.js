"use strict";
/*
  1.aray
*/
let numbers = [1, 2, 3, 4, 5, 6];
let student = ["hoa", "lan", "hong"];
const names = [];
names.push("Dylan");
console.log(names);
// obj
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//enum - lay index thành phần của obj
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 66] = "North";
    CardinalDirections[CardinalDirections["East"] = 8] = "East";
    CardinalDirections[CardinalDirections["South"] = 9] = "South";
    CardinalDirections[CardinalDirections["West"] = 10] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
//logs 4
console.log(CardinalDirections.East);
//logs 2
//  enum2 - lay index thành phần của obj
var Role;
(function (Role) {
    Role[Role["AMIN"] = 0] = "AMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "an",
    address: "ha noi",
    role: 0
};
console.log(person);
//void - tra ve rong
function sayHelo() {
    console.log("chao anh em nhaaa");
}
sayHelo();
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 4));
// kieu unknow , tuong tu voi any nhung chặt hơn
function test1(a) {
    console.log(a.toUpperCase());
}
test1("duy");
//
function test(b) {
    console.log("111", typeof (b));
    if (typeof (b) === "string") {
        console.log(b.toUpperCase());
    }
}
test("text");
/*
6.type never
thường dung trong các vòng lặp vô tận không có điểm dừng đẻ đo giá trị

*/
function typeNever() {
    let a = 1;
    while (true) {
        console.log("gia tri cua a", ++a);
    }
}
// typeNever()
