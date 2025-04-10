/*
Arrays
Arrays are a special type of object in JavaScript that can hold multiple values. They are zero-indexed, meaning the first element is at index 0.
Declaration:
let fruits = ['apple', 'banana', 'mango'];

Methods:
length: Number of elements
push(): Add at end
pop(): Remove from end
indexOf(): Index of an element
includes(): Check existence
slice(start, end): Returns a shallow copy
splice(start, deleteCount, items...): Modify original array
shift(): Remove first item
unshift(): Add at the start
join(): Join array into string
reduce(): Reduces to a single value
Array.isArray(): Check if array

Nessesary methods ->
reverse(): Reverse array
sort(): Sort array
forEach(): Iterate over elements
map(): Create new array with results
filter(): Create new array with filtered elements
find(): Find first element that matches condition
concat(): Merge arrays

Extraaaaaaaaaaa ->
Array.from(): Convert iterable to array
Array.of(): Create array from arguments
flat(): Flatten nested arrays
flatMap(): Map and flatten
fill(): Fill array with value
findIndex(): Find index of first element that matches condition
every(): Check if all elements match condition
some(): Check if any elements match condition
reduceRight(): Reduce from right
reduce(): Reduce from left
keys(): Get keys of array
values(): Get values of array
entries(): Get entries of array
copyWithin(target, start, end): Shallow copy within array
fill(value, start, end): Fill array with value
flatMap(): Map and flatten
Array.prototype.toString(): Convert array to string
Array.prototype.toLocaleString(): Convert array to locale string
Array.prototype.splice(): Modify array
Array.prototype.slice(): Extract part of array
Array.prototype.shift(): Remove first element
Array.prototype.unshift(): Add to start
Array.prototype.concat(): Merge arrays
Array.prototype.join(): Join array into string
*/

// Example of array methods
let fruits=['apple', 'banana', 'mango', 'orange','grape','kiwi'];

// length
console.log(fruits.length); // 6

// push
fruits.push('pear');
console.log(fruits); // ['apple', 'banana', 'mango', 'orange','grape','kiwi','pear']

// pop
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'mango', 'orange','grape','kiwi']

// indexOf
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('pear')); // -1 (not found)

// includes 
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('pear')); // false

// slice
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // ['banana', 'mango', 'orange']

// splice
fruits.splice(2, 1, 'kiwi');
console.log(fruits); // ['apple', 'banana', 'kiwi', 'orange','grape','kiwi']
fruits.splice(2, 1);
console.log(fruits); // ['apple', 'banana', 'orange','grape','kiwi']

// shift
fruits.shift();
console.log(fruits); // ['banana', 'orange','grape','kiwi']

// unshift
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange','grape','kiwi']

// join
let joinedFruits = fruits.join(', ');
console.log(joinedFruits); // 'apple, banana, orange, grape, kiwi'

// reduce
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // 24

// Array.isArray
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray('apple')); // false


