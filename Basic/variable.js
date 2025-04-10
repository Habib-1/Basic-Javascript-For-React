// console.log("Hello World");

// const StudentId="1234567890";
// console.log(StudentId);


// var vs let
//function scope & block scope
// functon test(){
//     if(True){
//         var x = 10;
//         let y = 20;
//     }
    
//     console.log(x); // 10
//     console.log(y); // ReferenceError: y is not defined
// }
// test();

//Hoisting Issue
// console.log(a);
// var a=10 // undefined

// console.log(b); 
// let b=20; // ReferenceError: Cannot access 'b' before initialization

//redeclartions
// var a=10;
// var a=20;
// console.log(a); // 20

// let ab=20;
// let ab=30; // SyntaxError: Identifier 'ab' has already been declared

// //global Object Property
// var a=10;
// let b=20;
// console.log(window.a); // 10
// console.log(window.b); // undefined


/* 
Let                       var
1. Block scope            1. Function scope
2. Cannot be redeclared   2. Can be redeclared  
3. Cannot be hoisted      3. Can be hoisted
4. Cannot be accessed before initialization  4. Can be accessed before initialization (undefined)
5. Cannot be used in global object  5. Can be used in global object
6. Cannot be used in for loop  6. Can be used in for loop


*/