//for of Loop

//For Of LOOP on Array
const myArray = [1,2,3,3,4,5,5,56]

for (const items of myArray) {
    // console.log(items);
}


//For Of Loop on Object will not work

const greeting= "Welcome Suyog";

for (const greet of greeting) {
    // console.log(greet);   
}

//Map

const map = new Map();

map.set("Name","Suyog");
map.set("Id","11");
map.set("City","Pune");

for (const [key, values] of map) {
    console.log(`${key }:- ${values}`);
}


