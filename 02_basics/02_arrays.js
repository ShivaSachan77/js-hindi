const marvelH = ["thor", "ironman", "spiderman"]
const dcH = ["batman", "superman", "deathStroke"]

// dcH.push(marvelH) //pushes data in existing array
// console.log(dcH);

// const allH = marvelH.concat(dcH)// concat will return new array
// console.log(allH);

// const all_new_H = [...marvelH, ...dcH] //can use concat as well but spread operator is more preferred
// console.log(all_new_H);

//flat method will connvert all arrays inside array  into new single array
// const arr = [1,2,3,[3,4,5,6],[6,7,[2,3],88],66,55,[76,54]]
// const flatArr1 = arr.flat(Infinity)//specify the depth in parameter of flat function
// const flatArr2 = arr.flat(1)
// console.log(flatArr1);
// console.log(flatArr2);

// console.log(Array.isArray("Shiva"));//will check if coming data is array or not
// console.log(Array.from("Shiva"));//will convert data in array
// console.log(Array.from({name : "Shiva"}));//we have to specify weather we want keys as array or values

//TO CONVERT SET OF VARIABLES INTO ARRAY WE HAVE FUNCTION Array.of(var1, var2, ...so on) here var1, var2 can be variables objects etc
let sc1=10
let sc2=20
let sc3=133
console.log(Array.of(sc1, sc2, sc3));







