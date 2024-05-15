class Book2 {
    private title:string
    private author:string
    private quantity:number
    constructor(title:string,author:string,quantity:number=1){
        this.author=author
        this.title=title
        this.quantity=quantity
    }
    xemtacgia(){
        return this.author  
    }
    xemsach(){
        return this.title   
    }
}
class Library2{
    private List:Book2[]
    constructor(){
        this.List=[]
    }
    addBook(book2: Book2) {
        let found = false;
        for (let i = 0; i < this.List.length; i++) {
            if (book2.xemsach() === this.List[i].xemsach() && book2.xemtacgia() === this.List[i].xemtacgia()) {
                this.List[i].quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.List.push(book2);
        }
    }
}
const sach1:Book2 = new Book2("duy1","nhat")
const sach2:Book2 = new Book2("duy2","nhat")
const sach3:Book2 = new Book2("duy3","nhat")
const sach4:Book2 = new Book2("duy3","nhat")

const List:Book2[] = []
List.push(sach1,sach2,sach3,sach4)
console.log(List);


