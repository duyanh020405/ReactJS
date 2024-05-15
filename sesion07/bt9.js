"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function check(newArr) {
    let count = 0;
    arr = newArr;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % i == 0) {
            count++;
        }
    }
    if (count > 1) {
        console.log("false");
    }
    else {
        console.log("true");
    }
}
check([10, 11, 12]);
check([1, 2, 3, 5, 7]);
