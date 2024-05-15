class Circle{
    bk:number
    constructor(bk:number){
        this.bk=bk
    }
    public changeBK(newBK:number){
        this.bk=newBK
        console.log("new bk :",newBK);
        
    }
    public S(){
        let s=this.bk*this.bk
        console.log("dien tich :",s);
        
    }
    public V(){
        let v=this.bk*this.bk*3.14
        console.log("chu vi :",v);
    }
}
let checkBk:Circle = new Circle(5)
checkBk.S()
checkBk.V()
checkBk.changeBK(90)