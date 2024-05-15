"use strict";
function xemTheNao(input) {
    switch (input) {
        case "GET":
            console.log("lay");
        case "POST":
            console.log("dang");
        case "PUT":
            console.log("dat");
        case "DELETE":
            console.log("xoa");
    }
}
console.log(xemTheNao("GET"));
console.log(xemTheNao("POST"));
console.log(xemTheNao("PUT"));
console.log(xemTheNao("POST"));
console.log(xemTheNao("DELETE"));
