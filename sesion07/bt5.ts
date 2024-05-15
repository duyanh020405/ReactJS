let Any: any;
let Unknown: unknown;

// Gán giá trị cho biến any và unknown
Any = 10;
Unknown = "Hello";

// Kiểm tra kiểu dữ liệu và sử dụng biến any
console.log(typeof Any); // Kết quả: number
console.log(Any * 2); // Kết quả: 20 (không cần ép kiểu)
if (typeof Unknown === "string") {
    console.log(Unknown.toUpperCase()); // Kết quả: "HELLO" (cần ép kiểu)
} else {
    console.log("Biến không phải là chuỗi.");
}
