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


const mySelf=`My name is ${student.name} and I am ${student.age} years old. I am from ${student.address.city}, ${student.address.state}, ${student.address.country}. My roll number is ${student.rollno}. I have the following subjects: ${student.subject.join(", ")}.`;

console.log(mySelf);