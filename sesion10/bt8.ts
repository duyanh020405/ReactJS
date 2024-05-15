class Rectangle{
    width:number
    height:number
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public showDai(){
        console.log("chieu dai :",this.width);
        
    }
    public showRong(){
        console.log("chieu dai :",this.height);
       
        
    }
    public changeDai(newWidth:number){
        this.width=newWidth
        console.log("new chieu dai",newWidth);
        
    }
    public changeRong(newHeight:number){
        this.width=newHeight
        console.log("new chieu rong",newHeight);
        
    }
    public S(){
        console.log("dien tich :",this.width*this.height);
    }
    public V(){
        console.log("chu vi :",(this.width+this.height)*2);
    }
    
}
let check:Rectangle = new Rectangle(4,5)
check.S()
check.V()