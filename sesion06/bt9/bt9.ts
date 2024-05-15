
let string1: string = "banana";
let string2: string = "hello world"; 

let string1_1: string[] = [...string1];
let string2_2: string[] = [...string2]; 

let loc: Set<string> = new Set(string1_1);
let uniqueCharactersArray: string[] = Array.from(loc)
let uniqueString: string = uniqueCharactersArray.join('');
console.log(uniqueString);

