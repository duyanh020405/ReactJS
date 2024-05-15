"use strict";
function ketHop(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
const obj = {
    name: "duy",
    address: "thai binh"
};
const obj2 = {
    id: 8
};
console.log(ketHop(obj, obj2));
//s
