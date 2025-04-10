/* 
Conditionals & Operators
Comparison Operators:
> Greater than
< Less than
>= Greater than or equal
<= Less than or equal
== Equal (value only)
!= Not equal (value only)
=== Strict equal (value and type)
!== Strict not equal (value and type)

Logical Operators:
&&: Both conditions must be true
||: At least one condition must be true

*/
//  let age = 18; 
//  let age_2 = '30';

//  if (age === age_2) {
//     console.log("Both ages are equal (Type and Value)");
//     }
// else if (age == age_2) {
//     console.log("Both ages are equal (Value only)");
// }

// else{
//     console.log("Both ages are not equal");
// }

// // Ternary Operator
// let a=10;
// let b=25;
// if (a>=10 && b<25){
//     console.log("Both conditions are true");
// }
// else{
//     console.log("Both conditions are not true");
// }
// Ternary Operator
let a=true;
let b=false;
if (a && b){
    console.log("Both conditions are true");
}
else if (a || b){
    console.log("At least one condition is true");
}
else{
    console.log("Both conditions are false");
}