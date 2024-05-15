// Sự Khác Biệt: Union Types cho phép một biến hoặc tham số có thể mang một trong nhiều 
//kiểu dữ liệu khác nhau.
// Ví Dụ:
// typescript
// Copy code
// Union Types: number hoặc string
let variable: number | string;

variable = 10; // Hợp lệ
variable = "Hello"; // Hợp lệ
//variable = true; // Không hợp lệ, vì true không thuộc kiểu number hoặc string
// Intersection Types:
// Sự Khác Biệt: Intersection Types kết hợp các kiểu dữ liệu thành một 
//kiểu mới bằng cách giao nhau các thuộc tính và phương thức của các kiểu ban đầu.
// Ví Dụ:
// typescript
// Copy code
// Intersection Types: kết hợp 2 kiểu Admin và Employee
type Admin3 = {
    Name: string;
    role: string;
};

type Employee3 = {
    Name: string;
    startDate: Date;
};

type AdminEmployee = Admin & Employee;

const adminEmployee: AdminEmployee = {
    Name: "John",
    role1: "Admin",
    startDate: new Date("2022-01-01")
};