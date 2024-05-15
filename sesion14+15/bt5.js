"use strict";
class Account1 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
    deposit(item) {
        this.balance += item;
        this.history.push(new Transaction(this.history.length + 1, "them", item, this.balance));
    }
    withdraw(item) {
        if (item > this.balance) {
            console.log("khong co nhieu tien vay dau");
            return;
        }
        else {
            this.balance -= item;
            this.history.push(new Transaction(this.history.length + 1, "bot", item, this.balance));
        }
    }
    transfer(item, money) {
        if (money > this.balance) {
            console.log("khong co nhieu tien vay dau");
            return;
        }
        else {
            this.balance -= money;
            item.balance += money;
            this.history.push(new Transaction(this.history.length + 1, `-${money} -> ${item}`, money, this.balance));
        }
    }
    showHistory() {
        console.log(this.history);
    }
}
class Transaction {
    constructor(id, type, newBalance, amount) {
        this.id = id;
        this.type = type;
        this.newBalance = newBalance;
        this.amount = amount;
    }
}
