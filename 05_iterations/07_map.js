//map 

const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = numbers.map((num)=>( num +10))

console.log(result);


const newResult = numbers.map((num)=> num * 10)

console.log(newResult);


const names = ["suyog", "Muley"];

const newName = names.map((name)=> name  + names)

console.log(newName)