"use strict";
class Checkxe {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let oto = new Checkxe("xe hihi", 2012, "nghe an");
let xeMay = new Checkxe("xe hiho", 2014, "binh an");
console.log(xeMay.name);
console.log(oto.name);
