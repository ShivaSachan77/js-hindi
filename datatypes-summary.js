//Primitives
//7 types: Number, String, null, undefined(variable is declared but value is not assigned), symbol(to make variable unique), Boolean, BigInt
// const score = 100
// console.log(score);

// const logged = false
// const temp = null
// let userEmail;
// console.table([logged, temp, userEmail])

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 9989898989898989899999n
// console.log(bigNumber);
// console.log(typeof bigNumber);



// Refernce type: (nonPrimitive)

//Array, Objects, functions
// const heros = ["Shikha", 90, "Shiktiman"]
// let obj = {name: "Shiva",
//     age: 23,
//     RollNo: 222
// }
// console.log(obj);
// console.log(heros);

// const myFunction = function(){
//     console.log("Hello world");
    
// }
// console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++++++++++++++++++=
// Stack (primitive) whenever stack memory is used we get the copy of variable, Heap (Non primitive)when heap memory is used we get
// reference of original value
let myName = "rannvijaySachan"
let anotherName = "shivasachan"
anotherName = "SHADOW"
console.log(anotherName);//copy of original value  was given to anotherName 
console.log(myName);//original value remains untacked

let userOne = {
    name: "Shiva",
    email: "shiva@gmail.com"
}
//non primitive will be in heap
let userTwo = userOne

console.log(userTwo);
userTwo.email = "rannvijay@gmail.com"
console.log(userOne);
console.log(userTwo);


