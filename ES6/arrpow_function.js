// non-parameterized function
const test = ()=> console.log("test function");
test();

//non-parameteried multi-line function
const test2 = () => {
    console.log("test2 function");
    console.log("test2 function");
}
test2();

// single parameterized function
const squre= x => x*x;
console.log(squre(4));

// multi-parameterized function
const sum = (x,y) => x+y;
console.log(sum(4,5));

// multi-parameterized function with multi-line
const sum2 = (x,y) => {
    console.log("sum2 function");
    return x+y;
}
console.log(sum2(4,5));

