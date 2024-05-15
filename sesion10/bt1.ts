class Checkxe {
    name :string;
    year :number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.name=name
        this.year=year
        this.company=company

    }
}
let oto:Checkxe = new Checkxe("xe hihi",2012,"nghe an")
let xeMay:Checkxe = new Checkxe("xe hiho",2014,"binh an")
console.log(xeMay.name);
console.log(oto.name);

