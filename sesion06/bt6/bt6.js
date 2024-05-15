"use strict";
let stringValue = "2";
let numberValue = 2;
if (stringValue === numberValue.toString()) {
    console.log("Hai biến giống nhau.");
}
else {
    console.log("Hai biến khác nhau.");
}
// Vì hai biến có cùng giá trị, dù một biến được khai báo là kiểu string ("2") 
//và một biến được khai báo là kiểu number (2), nhưng khi so sánh chúng, TypeScript 
//sẽ tự động chuyển đổi kiểu để thực hiện so sánh, nên chúng được coi là giống nhau.
