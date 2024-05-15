type Tron = {
    theLoai: 'tron';
    bk: number;
}

type Vuong = {
    theLoai: 'vuong';
    canh: number;
}

type All = Tron | Vuong;

function tinh1(a: All): number {
    if (a.theLoai === "vuong") {
        return a.canh * a.canh;
    } else if (a.theLoai === "tron") {
        return a.bk * a.bk * Math.PI; 
    } else {
        throw new Error("Invalid shape type");
    }
}

const circle: Tron = { theLoai: 'tron', bk: 5 };
const square: Vuong = { theLoai: 'vuong', canh: 3 };

console.log("Diện tích hình tròn:", tinh1(circle)); 
console.log("Diện tích hình vuông:", tinh1(square)); 
