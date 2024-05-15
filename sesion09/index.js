"use strict";
// Type casting, hoặc còn được gọi là type conversion, là quá 
// trình chuyển đổi một kiểu dữ liệu thành một kiểu dữ liệu khác. 
// Trong TypeScript và JavaScript, bạn có thể thực hiện type casting bằng 
// cách sử dụng các toán tử hoặc hàm có sẵn. Việc này thường được sử 
// dụng để thực hiện các phép toán hoặc thao tác trên các kiểu dữ liệu khác nhau.
let myVar = "123";
let myNumber = parseInt(myVar);
console.log(myNumber);
let myVar2 = "hello";
let myString = myVar;
console.log(myString.toUpperCase());
function printUserDetails(username, age) {
    console.log("Username:", username);
    console.log("Age:", age);
}
printUserDetails("john_doe", 30);
//literial file :swith case :))
// Tuple Types
let myTuple;
// Gán giá trị cho biến Tuple
myTuple = [10, "Hello", true];
// Sử dụng toán tử spread để trích xuất các giá trị
let [num, str, bool] = myTuple;
// In ra các giá trị đã trích xuất
console.log("Number:", num); // Output: Number: 10
console.log("String:", str); // Output: String: Hello
console.log("Boolean:", bool); // Output: Boolean: true
