//interface
/*
interface giống abstract class 
dùng để định nghĩa các thuộc tính và phương thức các lớp 
con kế thừa bắt buộc phải triển khai
=> có những điểm gì khác nhau so với abstract 
  - abstract thì dùng từ khóa abstract
  -interface thif sử dụng từ khóa interface

  -trong interface gồm có thuộc tính và phương thức
  -đối với phương thức thì không có phần thân tức là nó chỉ định nghĩa thôi

  - đối với interface không thể sử dụng union và interection được
  - đối với abstract không tạo được đối tượng còn interface thì cũng không!
  ==> 
    interface sinh ra để làm gì?
  - interface là 1 khuôn mẫu cho các class kể thừa phải tuân theo
  - các class khi kế thừa phải triển khai tất cár các phhuowng tức của interface (implement )

  1.class có thể triển khai nhiều interface được không
  ===> 1 class có thể triển khai nhiều interface được
  2.interface có kế thừa interface được không ?
  ===> đươc nhé !

  - Trong interface không thể đặt acess modifile được 
*/
interface Sales{
    name:string
    width:number
    sale():string

}
type A={
    name:string
    age:number
}
type B={
    class:string
}
type C=A|B
//khi su dung type co su dung ket hop duoc khong
let name1:A
name1={name:"suy",age:8}