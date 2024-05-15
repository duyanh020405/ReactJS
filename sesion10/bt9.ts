class Book {
    private id:number;
    private title: string;
    private author: string;
    private quantity: number;

    constructor( id:number,title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.id = id
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuantity(): number {
        return this.quantity;
    }
    getId(){
        return this.id
    }
    setAuthor(item:string){
        this.author=item
    }
    setTitle(item:string){
        this.title=item
    }

}

class Library {
    private inRa:Book[]
    private Listbook: Book[];

    constructor() {
        this.Listbook = [];
        this.inRa =[]
    }

    addBook(book: Book) {
        let found = false;
        for (let i = 0; i < this.Listbook.length; i++) {
            if (book.getTitle() === this.Listbook[i].getTitle()) {
                this.Listbook[i].quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            this.Listbook.push(book);
        }
    }

    show() {
        this.Listbook.forEach((book) => {
            console.log("Title: " + book.getTitle() + ", Author: " + book.getAuthor() + ", Quantity: " + book.getQuantity());
        });
    }
    changeById(id:number,NewTitle:string,NewAuthor:string){
        for (let i = 0; i < this.Listbook.length; i++) {
            if (id === this.Listbook[i].getId()) {
                this.Listbook[i].setTitle(NewTitle)
                this.Listbook[i].setAuthor(NewAuthor)
                
                
            }
        }

    }
    findBook(nameBook:string){
        for (let i = 0; i < this.Listbook.length; i++) {
            if (nameBook === this.Listbook[i].getTitle()) {
                console.log(this.Listbook[i]);
                this.inRa.push(this.Listbook[i])
                
            }
        }
    }
    raWeb(): string {
        let html = "";
        this.Listbook.forEach((book) => {
            html += `<div>Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}</div>`;
        });
        return html;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const library = new Library(); 
    library.addBook(new Book(1, "Book 1", "Author 1", 1));
    library.addBook(new Book(2, "Book 2", "Author 2", 1));
    library.addBook(new Book(2, "Book 2", "Author 2", 1));
    library.findBook("Book 1");

    library.inRa.forEach((book) => {
        console.log("Title: " + book.getTitle() + ", Author: " + book.getAuthor() + ", Quantity: " + book.getQuantity());
    });

    const showContainer = document.getElementById("show"); 
    showContainer.innerHTML = library.raWeb(); 
});

