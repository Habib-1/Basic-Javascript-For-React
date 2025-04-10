// for , while , for...in , for....of , forEach

// for loop
for(let i=0; i<5; i++){
    console.log(i);
}

// while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}

// do while loop
let k=0;
do{
    console.log(k);
    k++;
}
while(k<5);

// for...in loop
// uses if you want to iterate over the properties of an object or array with index and value
// for...in loop is used to iterate over the properties of an object
let arr = [1, 2, 3, 4, 5];
for(let i in arr){
    console.log(i); // i is the index
    console.log(arr[i]); // arr[i] is the value
}
// for...of loop
// uses if you want to iterate over the values of an array
// for...of loop is a modern way to iterate over iterable objects like arrays, strings, etc.
let arr2 = [1, 2, 3, 4, 5];
for(let i of arr2){
    console.log(i); // i is the value
}

// forEach loop
// forEach loop is a method of the Array object that executes a provided function once for each array element
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function(value, index){
    console.log(index,value); // index is the index & value is the value

});

