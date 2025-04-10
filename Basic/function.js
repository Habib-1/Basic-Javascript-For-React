// different type of function
// 1. Function Declaration
function add(a, b) {
    return a + b;
}  

let result=add(2,3);
console.log(result);
// 2. Function Expression
const add2 = function(a, b) {
    return a + b;
}
let result2=add2(2,3);
console.log(result2);

// 3. Arrow Function
const add3 = (a, b) => {
    return a + b;
}

let result3=add3(2,3);
console.log(result3);

