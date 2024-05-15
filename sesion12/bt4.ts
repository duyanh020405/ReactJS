class Product{
    id:number
    name:string
    constructor(name:string,id:number){
        this.id=id
        this.name=name
    }
    printInfo(){
        console.log("san pham:",this.id,this.name);
        
    }
}
class Electronic extends Product{
    brand:string
    constructor(name:string,id:number,brand:string){
        super(name,id)
        this.brand=brand
    }
    printInfo(): void {
        console.log(`Brand: ${this.brand}`);
    }
}
class Book extends Product{
    private author: string;

    constructor(name: string, id: number, author: string) {
        super(name, id);
        this.author = author;
    }

    printInfo(): void {
        console.log(`Author: ${this.author}`);
    }
}
const electronic: Electronic = new Electronic("Laptop", 1234, "Dell");
electronic.printInfo();

const book: Book = new Book( 5678,"The Great Gatsby", "F. Scott Fitzgerald");
book.printInfo();