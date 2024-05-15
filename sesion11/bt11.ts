// Định nghĩa lớp ShopItem
class ShopItem {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;

    constructor(id: number, name: string, price: number, isAvailable: boolean = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    getInfo() {
        console.log(`Item: ${this.name}, ID: ${this.id}, Price: ${this.price}, Available: ${this.isAvailable}`);
    }
}

// Định nghĩa lớp LendingItem, kế thừa từ ShopItem
class LendingItem extends ShopItem {
    customerNames: string[];
    stock: number;

    constructor(id: number, name: string, price: number, isAvailable: boolean, customerNames: string[], stock: number) {
        super(id, name, price, isAvailable);
        this.customerNames = customerNames;
        this.stock = stock;
    }

    lendItem(customer: string) {
        if (this.stock > 0) {
            this.stock--;
            this.customerNames.push(customer);
            console.log(`${customer} borrowed ${this.name}`);
        } else {
            this.isAvailable = false;
            console.log(`het hang.`);
        }
    }

    returnItem(customer: string) {
        const index = this.customerNames.indexOf(customer);
        if (index !== -1) {
            this.stock++;
            this.customerNames.splice(index, 1);
            console.log(`${customer} returned ${this.name}`);
        } else {
            console.log(`${customer} khong muon ${this.name}`);
        }
    }
}

const laptop = new ShopItem(1, "Laptop", 1000);
laptop.getInfo();

const books = new LendingItem(2, "Books", 20, true, [], 5);
books.lendItem("Alice");
books.lendItem("Bob");
books.getInfo();

books.returnItem("Alice");
books.getInfo();
console.log(books.stock);
