"use strict";
class shopItem {
    constructor(id, name, price, isAvaiable = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvaiable = isAvaiable;
    }
    getInfor() {
        console.log(this.name, this.id, this.price, this.isAvaiable);
    }
}
class LendingItem extends shopItem {
    constructor(id, name, price, isAvaiable, customerNames, stock) {
        super(id, name, price, isAvaiable);
        this.customerNames = [];
        this.stock = stock;
        this.customerNames = customerNames;
    }
    lenditem(khach) {
        if (this.stock > 0) {
            this.stock--;
            this.customerNames.push(khach);
        }
        else if (this.stock === 0) {
            this.isAvaiable = false;
            console.log("het hang");
        }
        else {
            console.log("het hang");
        }
    }
    returnItem(xoaKhach) {
        for (let i = 0; i < this.customerNames.lenght; i++) {
            if (xoaKhach === this.customerNames[i].name) {
                this.stock++;
                this.customerNames.delete(xoaKhach);
            }
        }
    }
}
