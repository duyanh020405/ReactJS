type So = number | number[];

function tinh(input: So): number | number[] {
    if (typeof input === "number") {
        return input * input;
    } else {
        return input.map((element: number) => element * element);
    }
}

console.log(tinh(5));
console.log(tinh([1, 2, 3])); 
