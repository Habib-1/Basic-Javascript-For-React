

const Students = {
    name: "John",
    age: 30,
    city: "New York",
    subjects: ["Math", "Science", "History"],
    isStudent: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }

};

// Object  to JSON
const jsonString = JSON.stringify(Students, null, 2); // pretty print with 2 spaces
console.log(jsonString);

// JSON to Object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);