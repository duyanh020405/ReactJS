"use strict";
class Account2 {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
}
class SavingAccount extends Account2 {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited ${amount}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("khong du tien de rut");
            return;
        }
        this.balance -= amount;
        this.history.push(`Withdrawn ${amount}`);
    }
    showHistory() {
        console.log("Lich su:");
        this.history.forEach(transaction => console.log(transaction));
    }
}
class CheckingAccount extends Account2 {
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        const tong = this.overdraftLimit + this.balance;
        if (amount > tong) {
            console.log("khong du tien dau");
            return;
        }
        else if (amount > this.balance && amount < tong) {
            const chi = amount - this.balance;
            this.balance = 0;
            this.history.push(`balance = 0 , tien no trong overdraftLimit la ${chi}`);
        }
        else {
            this.balance -= amount;
            this.history.push(`withdraw : ${amount}`);
        }
    }
}
// const savingAcc = new SavingAccount(12345, 1000, [], true, 0.05);
// savingAcc.deposit(500);
// savingAcc.withdraw(200);
// savingAcc.showHistory();
class Bank {
    constructor(name, accounts) {
        this.name = name;
        this.accounts = [];
    }
    createAccount(acount) {
        this.accounts.push(acount);
    }
    showAccounts() {
        this.accounts.forEach(acount => {
            console.log(acount);
        });
    }
    banAccount(findToBan) {
        this.accounts.forEach(acount => {
            if (acount.accountNumber === findToBan) {
                acount.status = false;
            }
        });
    }
    getAccount(findToShow) {
        this.accounts.forEach(acount => {
            if (acount.accountNumber === findToShow) {
                console.log(acount);
            }
        });
    }
    withdraw(accountNumber, amount) {
        const account = this.getAccount(accountNumber);
        if (account) {
            account.withdraw(amount);
        }
        else {
            console.log("Account not found.");
        }
    }
}
// // Create accounts
// const savingAcc = new SavingAccount(12345, 1000, [], true, 0.05);
// const checkingAcc = new CheckingAccount(54321, 500, [], true, 200);
// // Create a bank
// const myBank = new Bank("My Bank", []);
// // Add accounts to the bank
// myBank.createAccount(savingAcc);
// myBank.createAccount(checkingAcc);
// // Show all accounts
// console.log("All accounts:");
// myBank.showAccounts();
// myBank.withdraw(12345, 200);
// myBank.withdraw(54321, 600); 
// console.log("Updated account information:");
// myBank.showAccounts();
