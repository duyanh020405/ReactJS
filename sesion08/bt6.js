"use strict";
function xem(input) {
    if (typeof input === "string") {
        console.log(input);
    }
    else {
        input.forEach(element => {
            console.log(element);
        });
    }
}
xem("Hello");
xem(["a", "b", "c"]);
