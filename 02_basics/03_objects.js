//singleton: whenever object is created with the help of constructor is will be singleton
// Object.create //constructor method


//when object is declared using literals, it wont be a singleton

const mySym = Symbol("key1")
const user = {
    name: "Shiva",
    [mySym]: "mykey1",
    age: 19,
    location: "kanpur",
    email: "shi@123",
    lastLogin: ["Monday", "Tuesday"]
}
// console.log(user.email);
// console.log(user["lastLogin"]);
// console.log(user.mySym);
// console.log(typeof user.mySym);//string
// console.log(user[mySym]);//to treat symbol as a symbol we use this syntax

//can overwrite value of object
user.email = "Shiva@gmail"
// console.log(user);
// Object.freeze(user) //if you do not want anyone to change your object we use Object.freeze
user.email = "Rannvijay@gmail"
// console.log(user);

//adding a function in our object
user.greeting = function() {
    console.log("Greeting ");
    
}
user.greeting2 = function() {
    console.log(`greetings ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());


