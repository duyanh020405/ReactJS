"use strict";
let string1 = "banana";
let string2 = "hello world";
let string1_1 = [...string1];
let string2_2 = [...string2];
let loc = new Set(string1_1);
let uniqueCharactersArray = Array.from(loc);
let uniqueString = uniqueCharactersArray.join('');
console.log(uniqueString);
