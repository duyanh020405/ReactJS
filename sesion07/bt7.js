"use strict";
let listClassA = [];
let listClassB = [];
function showClass(id, name, classIn) {
    if (classIn === "A") {
        listClassA.push({ id, name, class: classIn });
    }
    if (classIn === "B") {
        listClassB.push({ id, name, class: classIn });
        console.log(listClassB);
    }
}
showClass(1, "duy", "A");
showClass(1, "HI", "B");
showClass(1, "HI2", "B");
