"use strict";
function so(value) {
    return typeof value === "number";
}
function isArray(value) {
    return Array.isArray(value);
}
function oject(value) {
    return typeof value === "object" && value !== null;
}
function checkHaHa(value) {
    if (so(value)) {
        console.log("số");
    }
    else if (isArray(value)) {
        console.log("mảng");
    }
    else if (oject(value)) {
        console.log("đối tượng");
    }
    else {
        console.log("khác");
    }
}
const testCases = [5, [1, 2, 3], { a: 1, b: 2 }, 'chuỗi', null];
testCases.forEach(value => {
    checkHaHa(value);
});
