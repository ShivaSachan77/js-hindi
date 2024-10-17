//arrays 
const myArr = [1,2,3,4,5] //decleration01
//arrays in js are resizable
//has zero base indexing
//in js, array copy operation will create shallow copy of array
//shallow copies: is a copy who share the same reference as those of the source object from which the copy was made
//deep copy: is a copy of an object whose reference do not share the same reference
//arrays in js can be a mix of data structures i.e can be string, nums,arrays, objects etc
const arr = new Array(1,2,33,4) //decleration02
// console.log(arr[3]);

//Arrays methods
// arr.push(6)
// arr.push(8)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(0)//will insert at the starting of array
//unshift will shift all the present value in array and then add the given val at starting index which increases timeComplexity
// console.log(arr);
// arr.shift()//willremove from the starting of array
// console.log(arr);

//questionable methods in js
// console.log(arr.includes(33));
// console.log(arr.indexOf(33));

// const newArr = arr.join();
//join() will join the prev array and return string
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice
// console.log("A ", myArr);
const mynA1 = myArr.slice(1,3)//dont alter the original array, prints new array with sliced elements, exclude upperlimit
console.log(mynA1);
console.log(myArr);

const mynA2 = myArr.splice(1,3) //manipulate the original array, cuts off specified  portion of array and prints it, includes upper limit
console.log(mynA2);
console.log(myArr);




