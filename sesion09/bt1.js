"use strict";
function vanChuyen(input) {
    switch (input) {
        case 1000:
            return "Vn";
        case 2000:
            return "us";
        case 3000:
            return "uk";
    }
}
console.log(vanChuyen(1000));
console.log(vanChuyen(2000));
console.log(vanChuyen(3000));
