"use strict";
function checkData(name, age, address) {
    let count = 0;
    if (name) {
        count++;
    }
    if (age) {
        count++;
    }
    if (address) {
        count++;
    }
    if (count === 3) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
let show = {
    Name: "duy",
    age: 5,
    address: { s1: "khu2", s2: "thanh hoa" }
};
checkData(show.Name, show.age, show.address);
