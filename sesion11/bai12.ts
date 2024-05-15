class shopItem{
    id:number
    name:string
    price:number
    isAvaiable:boolean
    constructor(id:number,name:string,price:number,isAvaiable:boolean=true){
        this.id=id
        this.name=name
        this.price=price
        this.isAvaiable=isAvaiable
    }
    getInfor(){
        console.log(this.name,this.id,this.price,this.isAvaiable);
        
    }

}

class LendingItem extends shopItem{
     customerNames:any=[]
     stock:number
     constructor(id:number,name:string,price:number,isAvaiable:boolean,customerNames:any[],stock:number){
        super(id,name,price,isAvaiable)
        this.stock=stock
        this.customerNames= customerNames
     }
     lenditem(khach:string){
        if(this.stock>0){
            this.stock--
            this.customerNames.push(khach)
        }
        else if(this.stock===0){
            this.isAvaiable=false
            console.log("het hang");
            

        }
        else{
            console.log("het hang");
            
        }
     }
     returnItem(xoaKhach:string){
        for(let i = 0 ; i <this.customerNames.lenght;i++){
            if(xoaKhach===this.customerNames[i].name){
                this.stock++
                this.customerNames.delete(xoaKhach)
            }
        }
     }
}