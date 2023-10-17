// alert("Suyog Chaitu")

const person = ["suyog", "chaitu", "rajesh", "sagar"];

let list = [
    { text: 'bacon', cost: 12, need: true },
    { text: 'eggs', cost: 10, need: true },
    { text: 'butter', cost: 5, need: false },
    { text: 'milk', cost: 4, need: false },
    { text: 'bread', cost: 3, need: true }
];


// const listElement = document.getElementById("list");

// for (let item of list) {
//     listElement.innerHTML += `<li>${item.text}</li>`;

// }

// console.log(person.at(0))

//Entries

for (let [index, element] of list.entries()) {
    console.log(index, element);
}

// console.log(typeof person);
//Iterating

// for (let i = 0; i <= list.length - 1; i++) {
//     console.log(list[i].cost);
// }

// list.forEach(function (item) {

//     console.log(item.cost);
// }
// )


//Arrow function

//list.forEach(item => console.log(item.text))

// for (const iterator of list) {
//     console.log(iterator.text);
// }

// for (const iterator in list) {
//     console.log(iterator);
// }

//Searching

// let index = person.indexOf("sagar");
// console.log(index);
// let index1 = person.lastIndexOf("sagar");
// console.log(index1);

//Finding

// let index = person.find(item => item == "sagar");
// console.log(index);


//String Manipulation

// let husbund = "suyog"
// let spouse = "chaitu"

// console.log(husbund + " and " + spouse);
// console.log(`${husbund} and ${spouse}`);
// console.log(husbund.concat(" ", spouse));

//Splice Method

// list.splice(2, 0, "suyog");

//Slice Method

console.log(person.slice(0, 3));


//Map Method

person.map((e) => {
    console.log(e);
})




//Filter Method


//Reduce Method



//First Class Function

const greet = function (salution) {
    return function (firstname) {
        return `${salution} ${firstname}`
    }
}

const sayHello = greet("Hello");
console.log(sayHello("Suyog"));

const sayGoodbye = greet("Goodbye");
console.log(sayGoodbye("Suyog"));


//Declarative function