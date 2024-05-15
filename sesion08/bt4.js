"use strict";
function tinh(input) {
    if (typeof input === "number") {
        return input * input;
    }
    else {
        return input.map((element) => element * element);
    }
}
console.log(tinh(5));
console.log(tinh([1, 2, 3]));
