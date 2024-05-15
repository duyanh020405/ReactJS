class Account1{
    accountNumber:number
    balance:number
    history:any[]
    constructor(accountNumber:number,balance:number,){
        this.accountNumber=accountNumber
        this.balance=balance
        this.history=[]
    }
    deposit(item:number){
        this.balance+=item
        this.history.push(new Transaction(this.history.length+1,"them",item,this.balance))
    }
    withdraw(item:number){
        if(item>this.balance){
            console.log("khong co nhieu tien vay dau");
            return
        }
        else{
            this.balance-=item
            this.history.push(new Transaction(this.history.length+1,"bot",item,this.balance))
        }
    }
    transfer(item:Account1,money:number){
        if(money>this.balance){
            console.log("khong co nhieu tien vay dau");
            return
        }
        else{
            this.balance-=money
            item.balance+=money
this.history.push(new Transaction(this.history.length+1,`-${money} -> ${item}`,money,this.balance))
        }
    }
    showHistory(){
       console.log(this.history);
       
    }
}
class Transaction{
    id:number
    type:string
    newBalance:number
    amount:number
    constructor(id:number,type:string,newBalance:number,amount:number){
        this.id=id
        this.type=type
        this.newBalance=newBalance
        this.amount=amount
    }
}