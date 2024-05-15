"use strict";
let book;
function before(nameBook, price, author) {
    book = { nameBook: nameBook, price: price, author: author };
    console.log(book);
}
function after(nameBookNew, priceNew, authorNew) {
    book = { nameBook: nameBookNew, price: priceNew, author: authorNew };
    console.log(book);
}
before("Book1", 20, "Author1");
after("Book2", 25, "Author2");
