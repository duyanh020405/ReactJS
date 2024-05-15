/*
  1.aray
*/
let numbers:number[]=[1,2,3,4,5,6]
let student:string[]=["hoa","lan","hong"]

const names: string[] = [];
names.push("Dylan"); 
console.log(names);
// obj
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car);
  //enum - lay index thành phần của obj

  enum CardinalDirections {
    North = 66,
    East =8,
    South,
    West
  }
  console.log(CardinalDirections.North);

  console.log(CardinalDirections.West);
     //logs 4
  console.log(CardinalDirections.East);
     //logs 2
//  enum2 - lay index thành phần của obj
enum Role{
    AMIN,
    USER
}
let person:{
    name :string,
    address:string,
    role:Role.AMIN
}={
    name :"an",
    address:"ha noi",
    role:0
}
console.log(person);

//void - tra ve rong
function sayHelo():void{
    console.log("chao anh em nhaaa");
    
}
sayHelo()
function sum(a:number,b:number):number {
    return a+b
}
console.log(sum(4,4));
// kieu unknow , tuong tu voi any nhung chặt hơn
function test1(a:any) {
    console.log(a.toUpperCase());
    

}
test1("duy")
//
function test(b:unknown) {
   console.log("111",typeof(b));
   if(typeof(b)==="string"){
    console.log(b.toUpperCase());

   }
}
test("text")
/*
6.type never
thường dung trong các vòng lặp vô tận không có điểm dừng đẻ đo giá trị

*/
function typeNever():never{
    let a:number=1
    while(true){
        console.log("gia tri cua a",++a);    
    }
}
// typeNever()
