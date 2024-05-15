"use strict";
// Hàm cộng
function add(a, b) {
    if (typeof a === 'string') {
        if (!isNaN(Number(a))) {
            a = Number(a);
        }
        else {
            return "Invalid input for 'a'.";
        }
    }
    if (typeof b === 'string') {
        if (!isNaN(Number(b))) {
            b = Number(b);
        }
        else {
            return "Invalid input for 'b'.";
        }
    }
    return a + b;
}
// Hàm trừ
function subtract(a, b) {
    if (typeof a === 'string') {
        if (!isNaN(Number(a))) {
            a = Number(a);
        }
        else {
            return "Invalid input for 'a'.";
        }
    }
    if (typeof b === 'string') {
        if (!isNaN(Number(b))) {
            b = Number(b);
        }
        else {
            return "Invalid input for 'b'.";
        }
    }
    return a - b;
}
// Hàm nhân
function multiply(a, b) {
    if (typeof a === 'string') {
        if (!isNaN(Number(a))) {
            a = Number(a);
        }
        else {
            return "Invalid input for 'a'.";
        }
    }
    if (typeof b === 'string') {
        if (!isNaN(Number(b))) {
            b = Number(b);
        }
        else {
            return "Invalid input for 'b'.";
        }
    }
    return a * b;
}
// Hàm chia
function divide(a, b) {
    if (typeof a === 'string') {
        if (!isNaN(Number(a))) {
            a = Number(a);
        }
        else {
            return "Invalid input for 'a'.";
        }
    }
    if (typeof b === 'string') {
        if (!isNaN(Number(b))) {
            b = Number(b);
        }
        else {
            return "Invalid input for 'b'.";
        }
    }
    if (b === 0) {
        return "Cannot divide by zero.";
    }
    return a / b;
}
// console.log(add(5, 10));          // Kết quả: 15
// console.log(add("5", "10"));      // Kết quả: 15
// console.log(add("5", "hello"));   // Kết quả: "Invalid input for 'b'."
// console.log(subtract(10, 5));     // Kết quả: 5
// console.log(subtract("10", "5")); // Kết quả: 5
// console.log(multiply(2, 3));      // Kết quả: 6
// console.log(multiply("2", "3"));  // Kết quả: 6
// console.log(divide(10, 2));       // Kết quả: 5
// console.log(divide("10", "2"));   // Kết quả: 5
// console.log(divide(10, 0));       // Kết quả: "Cannot divide by zero."
// typeof a === 'string': Kiểm tra xem biến a có phải là một chuỗi không.
// !isNaN(Number(a)): Kiểm tra xem chuỗi a có thể chuyển đổi thành một số hợp lệ không.
// Number(a): Chuyển đổi giá trị của biến a thành một số.
// isNaN(): Kiểm tra xem giá trị truyền vào có phải là NaN hay không.
// !: Toán tử phủ định, đảo ngược giá trị của biểu thức. Do đó, !isNaN(Number(a)) sẽ trả về 
// true nếu chuỗi a có thể chuyển đổi thành một số hợp lệ 
// và false nếu không.
