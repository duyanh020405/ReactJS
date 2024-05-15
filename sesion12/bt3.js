"use strict";
/*
Một abstract class là một lớp mà không thể tạo ra một đối tượng cụ thể từ nó.
Thay vào đó, nó được sử dụng như một bản thiết kế để tạo ra các lớp con.
Một abstract class có thể chứa phương thức trừu tượng (abstract method),
là các phương thức mà chỉ có khai báo mà không có triển khai.
Các lớp con phải triển khai (implement) các phương thức trừu tượng này.

Một class thông thường là một mô hình cụ thể có thể được sử dụng để tạo ra các đối tượng.

Khi sử dụng abstract class:

Khi bạn muốn xác định một bản thiết kế chung cho các lớp con và
không muốn tạo ra các đối tượng từ lớp đó mà chỉ từ các lớp con.
Khi có một số phương thức bạn muốn các lớp con phải triển khai,
nhưng cách triển khai có thể khác nhau cho mỗi lớp con.
Khi bạn muốn cung cấp một số chức năng chung cho các lớp con,
nhưng không muốn các lớp con kế thừa từ một lớp cụ thể khác.
*/
// Abstract class
class Shape {
}
// Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// Rectangle class
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Usage
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); // Output: Circle Area: 78.53981633974483
const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 24
