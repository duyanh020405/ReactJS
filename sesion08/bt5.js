"use strict";
// Sự Khác Biệt: Union Types cho phép một biến hoặc tham số có thể mang một trong nhiều 
//kiểu dữ liệu khác nhau.
// Ví Dụ:
// typescript
// Copy code
// Union Types: number hoặc string
let variable;
variable = 10; // Hợp lệ
variable = "Hello"; // Hợp lệ
const adminEmployee = {
    Name: "John",
    role1: "Admin",
    startDate: new Date("2022-01-01")
};
