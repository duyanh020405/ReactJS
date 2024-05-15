abstract class Quadrangle{
    protected width:number
    protected height:number
    constructor(height:number,width:number){
        this.height=height
        this.width=width
    }
     abstract calculatePerimeter():number
    

}
class Chuvi extends Quadrangle{
    constructor(height:number,width:number){
        super(height,width)
    }
    calculatePerimeter(): number {
        if(this.height>this.width || this.width <this.height ){
            return (this.width+this.height)*2
        }
        else{
            return (this.width)*4
        }
    }
}
class S extends Quadrangle{
    constructor(height:number,width:number){
        super(height,width)
    }
    calculatePerimeter(): number {
        if(this.height>this.width || this.width <this.height ){
            return (this.width*this.height)
        }
        else{
            return (this.width)*this.width
        }
    }
}
const checkChuvi:Chuvi = new Chuvi(2,2)
console.log("chu vi :",checkChuvi.calculatePerimeter());
