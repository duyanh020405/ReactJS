type Check = {
    Name: string;
    age: number;
    address: {
        s1: string;
        s2: string;
    };
};

function checkData(name: string, age: number, address: {}): void {
    let count = 0;
    if (name) {
        count++;
    }
    if (age) {
        count++;
    }
    if (address) {
        count++;
    }
    if (count === 3) {
        console.log("true");
    } else {
        console.log("false");
    }
}

let show: Check = {
    Name: "duy",
    age: 5,
    address: { s1: "khu2", s2: "thanh hoa" }
};

checkData(show.Name, show.age, show.address);
