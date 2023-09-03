//Array

// const myArr = [1,2,3,4,5,6];
const myHeros = ["SpiderMan","Thor","SuperMan","IronMan", "Thonas"];
// const myArray2 = new Array("suyog","muleuy",1,2,3,4);
// console.log(myHeros[2]);
// console.log(myArr.length);


//Array Methods

//Push - Element push at the end of the array
// myHeros.push(7);
// myHeros.push(8);
// console.log(myHeros);


//Pop - It will remove element from end
// myHeros.pop();
// console.log(myHeros);

//unshift -- Add an element at start

// myHeros.unshift("Suyog");
// console.log(myHeros);

// //shift - It will removed from start
// myHeros.shift();
// console.log(myHeros);

// console.log(myHeros.includes("IronMan"));// Search in Array and show true or false
// console.log(myHeros.indexOf("Thonas"));//It will show index/Position


// const newArr = myHeros.join();
// console.log(newArr);
// console.log(typeof newArr);

//Slice and splice 

// console.log("A ", myHeros);

// console.log(myHeros.splice(1,3)); // It will change Original Array
// console.log(myHeros.slice(1,3));// It will not affect original Array
// console.log(myHeros);

const dc_heros = ["flash", "batman", "Antman"];


// myHeros.push(dc);
// console.log(myHeros);


//Concat
// const allHeros= myHeros.concat(dc_heros); 
// console.log(allHeros);


//Spread Operator

// const allNewHeros = [...myHeros, ...dc_heros];
// console.log(allNewHeros);

const another_Array = [1,2,3,4,[5,6,7],8,[4,5,[3,6]]];

const real_new_Array = another_Array.flat(Infinity);
// console.log(real_new_Array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

let a =100;
let b = 200;
let c=300;

console.log(Array.of(a,b,c));


