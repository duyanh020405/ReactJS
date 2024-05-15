abstract class Animal {
    name:string
    constructor(name:string){
        this.name= name
    }
    abstract makeNoise():void
    print(){
        console.log("name :",this.name);
        
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    makeNoise(): void {
        console.log("meo meo");
        
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    makeNoise(): void {
        console.log("gau gau");
        
    }
}
const cat:Cat = new Cat("candy")
cat.print()
cat.makeNoise()
