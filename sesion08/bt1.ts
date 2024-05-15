function parseInput(input: string): number | boolean | string | null | undefined {
    switch (input) {
        case "number":
            return 24; 
        case "boolean":
            return true; 
        case "string":
            return "Hi!"; 
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            throw new Error("chiu chiu");
    }
}

// Ví dụ sử dụng
console.log(parseInput("number")); 
console.log(parseInput("boolean")); 
console.log(parseInput("string")); 
console.log(parseInput("null")); 
console.log(parseInput("undefined")); 


