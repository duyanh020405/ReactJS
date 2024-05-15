"use strict";
// Hàm trả về kiểu void
function logMessage(message) {
    console.log(message);
}
// Hàm trả về kiểu never
function throwError(message) {
    throw new Error(message);
}
// Sử dụng hàm trả về kiểu void
logMessage("This is a log message.");
// Sử dụng hàm trả về kiểu never
try {
    throwError("An error occurred.");
}
catch (error) {
    console.error("Caught error:", error);
}
// void vẫn có thể là undefined hoặc 
//null trong khi never không nhận bất cứ giá trị nào.
