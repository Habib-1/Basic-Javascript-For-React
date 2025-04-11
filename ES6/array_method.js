// map,forEach,filtert,find, 

const products=[
    {Name:'Iphone',Price:1000,Category:'Electronics',color:'red'},
    {Name:'Macbook',Price:2000,Category:'Electronics',color:'black'},
    {Name:'Ipad',Price:500,Category:'Electronics',color:'blue'},
    {Name:'Samsung',Price:800,Category:'Electronics',color:'black'},
    {Name:'Dell',Price:1200,Category:'Electronics',color:'red'},
]

// 1. map ,Return a new array
const productName=products.map(product =>product.Name);
console.log(productName);
const productPrice=products.map(product =>product.Price);
console.log(productPrice);

// 2. forEach, does not return a new array
// it just iterate over the array
products.forEach(product =>console.log(product.Name));

products.forEach(product => {
    console.log(product.Name);
    console.log(product.Price);
    console.log(product.Category);

});

// 3. filter, Return a new array
const filterRed=products.filter(product =>product.color==='red');
console.log(filterRed);
const filterBlack=products.filter(product =>product.color==='black');
console.log(filterBlack);

// 4. find, Return the first element that matches the condition
const findRed=products.find(product =>product.color==='red');
console.log(findRed);

// 5.copy products array and add a new product
const newProduct={Name:'Iphone 14',Price:1200,Category:'Electronics',color:'red'};
const newProducts=[...products,newProduct];
console.log(newProducts);

// 6. remove one product from the array
const removeProduct=newProducts.filter(product =>product.Name!=='Iphone 14');
console.log(removeProduct);