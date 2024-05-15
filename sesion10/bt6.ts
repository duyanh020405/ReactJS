class Song{
    public readonly id:number
    name:string
    lenght:number
    constructor(id:number,name:string,length:number){
        this.name=name
        this.id=id
        this.lenght=length
    }
    public changeName(newName:string){
        this.name=newName
    }
    public changeLeght(newLenght:number){
        this.lenght= newLenght
    }
}
let nhac1:Song=new Song(1,"HIHI",2)
nhac1.changeLeght(4)
nhac1.changeName("huhu")
console.log(nhac1);


