let num1: number = 10;
let num2: number = 5;
let num3: number;
num3 = num1 + num2;
console.log("Kết quả của phép cộng:", num3);

num3 = num1 - num2;
console.log("Kết quả của phép trừ:", num3);

num3 = num1 * num2;
console.log("Kết quả của phép nhân:", num3);

num3 = num1 / num2;
console.log("Kết quả của phép chia:", num3);
num1 = "string" as unknown as number; 
num2 = true as unknown as number; 
// Phép cộng
num3 = num1 + num2;
console.log("Kết quả của phép cộng sau khi thay đổi kiểu:", num3);

// Phép trừ
num3 = num1 - num2;
console.log("Kết quả của phép trừ sau khi thay đổi kiểu:", num3);

// Phép nhân
num3 = num1 * num2;
console.log("Kết quả của phép nhân sau khi thay đổi kiểu:", num3);

// Phép chia
num3 = num1 / num2;
console.log("Kết quả của phép chia sau khi thay đổi kiểu:", num3);