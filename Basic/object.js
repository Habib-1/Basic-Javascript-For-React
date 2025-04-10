// Object in JavaScript
// Object is a collection of key-value pairs
// Object is a non-primitive data type
// Object is a reference type
// Object is a mutable data type
// Object is a complex data type
// Object is a collection of properties
// Object can contains other objects, arrays, functions, etc.

let student={
    name:"John",
    age:20,
    rollno:101,
    subject:["math","english","science"],
    address:{
        city:"New York",
        state:"NY",
        country:"USA"
    },
}
// access object properties
//Type one-> access directly using dot notation
console.log(student.name); // John
console.log(student.age); // 20
console.log(student.subject); // ["math","english","science"]

//Type two-> access using bracket notation
console.log(student["name"]); // John
console.log(student["age"]); // 20
console.log(student["subject"]); // ["math","english","science"]

//Type three-> access using variable
let key="name";
console.log(student[key]); // John

