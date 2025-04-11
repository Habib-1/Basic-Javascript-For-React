const arr=[ 1,2,3,4,5];
const arr1=[6,7,8,9,10];
//copying array
const arr2=[...arr];
console.log(arr2);      

//marge array
const arr3=[...arr,...arr1];
console.log(arr3);

// copyying old array and push one value
const arr4=[...arr,11];
console.log(arr4);

// copying old array and push multiple values
const arr5=[...arr,11,12,13];
console.log(arr5);