let book: { nameBook: string, price: number, author: string };

function before(nameBook: string, price: number, author: string) {
    book = { nameBook: nameBook, price: price, author: author };
    console.log(book);
    
}
function after(nameBookNew: string, priceNew: number, authorNew: string) {
    book = { nameBook: nameBookNew, price: priceNew, author: authorNew };
    console.log(book);
    
}
before("Book1", 20, "Author1");
after("Book2", 25, "Author2");

