interface Person{
    name :string,
    age :number

 }
  interface Employee22 {
    id:number
  }
   type newChange = Person & Employee22
    const nguoi:newChange={
        name:"bat man",
        age:32,
        id:1234
    }
    console.log(nguoi.name);
    console.log(nguoi.age);
    console.log(nguoi.id);
    
    

    