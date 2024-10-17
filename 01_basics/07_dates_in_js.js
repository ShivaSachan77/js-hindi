// let myDate = new Date
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());


// let myCreatedDate = new Date(2024, 0, 12)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("10-11-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//gives time in seconds from time when js is created

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
// `${newDate.getDate()} and time`

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))







