/* 
 Data Types
String:
length, includes(), indexOf(), toUpperCase(), toLowerCase(), substring(), concat()
Strings are immutable.


Number:
Integer and float

Convert string to number: Number(), parseInt(), parseFloat()

Check integer: Number.isInteger()
Check float: Number.isFloat()
Check NaN: Number.isNaN()
NaN: Not a Number


Boolean:
true, false


Falsy values: "", 0, null, undefined, NaN, false


Truthy: everything else

null vs undefined:
null: assigned absence of value
undefined: variable declared but not assigned




*/

// String
let str = "I Love Bangladesh";
console.log(str.length); // 20
console.log(str.includes("Bangladesh")); // true
console.log(str.indexOf("Bangladesh")); // 7
console.log(str.toUpperCase()); // I LOVE BANGLADESH
console.log(str.toLowerCase()); // i love bangladesh
console.log(str.substring(2, 6)); // Lov
let str2 = "That's my country ";
console.log(str.concat(" "+str2)); // I Love Bangladesh That's my country(concatenation)

// String to Number
let str3 = "1234"
let num = Number(str3);
console.log(num); // 1234
console.log(typeof num); // number

let str4 = "1234.56"
let num2 = parseFloat(str4);
console.log(num2); // 1234.56

let str5 = "1234.56"
let num3 = parseInt(str5);
console.log(num3); // 1234
console.log(Number.isInteger(num3)); // true
