// array destructuring
const arr=[10,20];
const [a,b]=arr;
console.log(a); // 10
console.log(b); // 20

function getArr(num1,num2){
    const arr=[num1,num2];
    return arr;
}
const [x,y]=getArr(1,2);
console.log(x); // 1   
console.log(y); // 2


// object destructuring
const obj={name:'John',age:30,city:'New York'};
const {name,age}=obj;
console.log(name); // John 
console.log(age); // 30