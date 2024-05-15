function so(value: any): boolean {
    return typeof value === "number";
}

function isArray(value: any) {
    return Array.isArray(value);
}

function oject(value: any): boolean {
    return typeof value === "object" && value !== null;
}

function checkHaHa(value: any) {
    if (so(value)) {
        console.log("số");
    } else if (isArray(value)) {
        console.log("mảng");
    } else if (oject(value)) {
        console.log("đối tượng");
    } else {
        console.log("khác");
    }
}

const testCases: any[] = [5, [1, 2, 3], { a: 1, b: 2 }, 'chuỗi', null];

testCases.forEach(value => {
    checkHaHa(value);
});
