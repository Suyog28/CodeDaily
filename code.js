/* let lastName = "   sjdfjbf  ";
let firstName = "SuyogMuley";
console.log(firstName.toLowerCase(firstName)); //toLowerCase
console.log(firstName.toUpperCase(firstName)); //ToUpperCase
console.log(firstName.slice(0, 3)); //Slice
console.log(lastName.trim(lastName)); // trim

//typeof operater

//premative data types
//booleans
// string
// number
// symbol
// undefined
// null
// BigInt

let age = 22;
let name = "Suyog";
console.log(typeof age);
console.log(typeof name);

//convert number to string

console.log(typeof (age + "")); //trick

// covert string to number
let newnumer = +"22"; //Javascript trick
console.log(typeof newnumer);

//String concatination

let string1 = "Suyog";
let string2 = "Muley";
console.log(string1 + " " + string2);

let strn1 = "22";
let strn2 = 22;

 console.log(+strn1 + +strn2); 

console.log(strn1 == strn2);

console.log(`I am ${string1} from ${string2} `);

let num1 = 22;
let num2 = 23;

if (num1 === num2) {
  console.log("yes it is");
} else {
  console.log("not");
}
// Tornory operator
let num3 = 100;
let ans = num3 >= 50 ? "more than 50" : "it less than 50";

console.log(ans);
 */

const { join } = require("path");

//else if
/* 
let temp = 0;

if (temp == 0) {
  console.log("too cold");
} else if (temp <= 20) {
  console.log("warm");
} else if (temp <= 30) {
  console.log("too warm");
} else {
  console.log("too Hot");
} */

//Switch Statement
/* 
let temp = 0;

switch (temp) {
  case 0:
    console.log("too cold");
    break;
  case 20:
    console.log("warm");
    break;
  case 30:
    console.log("too warm");
    break;
  default:
    console.log("too Hot");
} */

//Print number upto 10

// let num = 0;
// while (num <= 100) {
//   console.log(num);
//   num++;
// }

//Sum of 10 natural number

/* let total = 0;
let i = 0;
while (i <= 10) {
  total = total + i;
  i++;
}
console.log(total);
console.log(`current value of i = ${i}`);

//Best way to do
let n = 10;
let ans = (n * (n + 1)) / 2;
console.log(ans);

//Odd even with while loop

let j = 22;

while (j % 0) {
  console.log("even");
}

console.log("odd");
 */

/* let fruits = [
  "Mango",
  "Banana",
  "Oranges",
  "Apple",
  "Greps",
  "Imali",
  "Pinnaple",
]; */

/* fruits.splice(2, 0, "BlueBerries", "tommato");
console.log(fruits);
fruits.splice(2, 2);
console.log(fruits); */
/* const POP = fruits.pop();//Item remove at the end of array
console.log(POP);
console.log(fruits);
const PUSH = fruits.push("Pinnaple");//Item add at the end of array
console.log(fruits); */
/* const shifts = fruits.shift(); //It will remove from start
console.log(shifts);
console.log(fruits); */

/* const unshift = fruits.unshift("Mango"); //it add at the start
console.log(unshift);
console.log(fruits); */

// console.log(array);
// console.log(array[0]);
// console.log(typeof array);

// array.push("Apple"); //It Add Item in arrat
// console.log(array);

// array.pop(); //It will remove item from end
// console.log(array);

// array.unshift("Apple"); //It will add item at start
// console.log(array);

// array.shift("Mango"); //It will remove item from front
// console.log(array);

//How to clone array methods

/* let abc = array.slice(0);

let abcd = [].concat(abc);

let abc2 = [...array];

// console.log(abcd);

//For loop in array
let array2 = [];
for (let i = 0; i < array.length; i++) {
  array2.push(array[i].toLocaleUpperCase());
}

// console.log(array2);

//While loop in array

let i = 0;
while (i < array.length) {
  array2.push(array[i].toLocaleUpperCase());
  i++;
}

// console.log(array2);

//for of loop

for (let fruit of array) {
  // console.log(fruit);
}

//for in loop

for (let index in array) {
  // console.log(array[index]);
}

//Array Destructuring

const myArray = ["Value1", "Value2", "value3", "value4"];

// let var1 = myArray[0];
// let var2 = myArray[1];

// console.log(var1);
// console.log(var2);

let [myvar1, myvar2, ...myNewArray] = myArray; //Creating new array within array
// console.log(myvar1);
// console.log(myvar2);

myvar1 = "suyog";

// console.log(myvar1);
// console.log(myNewArray);

//Javascript object

const person = {
  fistName: "suyog",
  lastName: "Muley",
  age: 28,
  "person hobbies": ["cricket", "reading"],
  email: "abc@gamil.com",
  address: {
    village: "Shindi Bk",
    District: "Amravati",
    State: "Maharashtra",
    pincode: 444808,
  },
};

person.middleName = "Vijay";

// console.log(person);

//Diff between .(dot) and []bracket notation

// console.log(person["person hobbies"]);

//How to iterate object-Two methods

//For in loop

// for (let key in person) {
// console.log(person[key]);
//   console.log(`${key} : ${person[key]}`);
// }

//Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
  key1: value1,
  key2: value2,
};

//computed properties

const obj2 = {
  [key1]: value1,
  [key2]: value2,
};

console.log(obj);
console.log(obj2);

//Spread Operation

const newArray1 = [1, 2, 3];
const newArray2 = [4, 5, 6];

const newarrayObj = [...newArray1, ...newArray2];

console.log(newarrayObj);

const newValue = [..."abc"];
console.log(newValue);

//Spread operator in Object

const fruits = {
  name1: "Apple",
  name2: "banana",
};

const eggs = {
  name3: "egg2",
  name4: "egg4",
};

const newMixture = { ...fruits, ...eggs, name5: "Mango" };

const newMixture1 = { ..."abcdefghijklnmopqrstyouwxyz" };
console.log(newMixture1);

let { name1, name2 } = fruits;

//name1 = "Mango";

console.log(name1); */

//Obejct in array Real world usefull concept

/* const users = [
  { userId: 1, userName: "Suyog", userGender: "Male" },
  { userId: 2, userName: "Sanket", userGender: "Male" },
  { userId: 3, userName: "Piyush", userGender: "Male" },
  { userId: 4, userName: "Chaitali", userGender: "Female" },
];

// for (let user of users) {
//   console.log(user.userName);
// }

//Nested Destructuring

// let [user1, user2, user3] = users;

// console.log(user1, user2, user3);

// const [{ userName }, , , { userGender }] = users;

// console.log(userName, userGender);

//Function in javascripts

function myName() {
  console.log("Hey, This is Suyog Muley");
}

myName();

function sumOftwoNum(num1, num2) {
  //console.log(2 + 4);
  //return 2 + 4;
  return num1 + num2;
}

//console.log(sumOftwoNum(10, 10));

//isEven Program

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(8));

//String First charecter find

function stringFirst(ch) {
  return ch[0];
}

console.log(stringFirst("Suyog"));

//find targeted index of array

function indexTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

let array = [2, 4, 6, 8];

console.log(indexTarget(array, 6));

//Function expression

const helloworld = function () {
  console.log("Say hello to the world");
};

helloworld();

//Arrow Function

const welcome = () => {
  console.log("Welcome to Javascript");
};

welcome();

const isEvenNumber = (number) => number % 2 === 0;

console.log(isEvenNumber(14));
 */

//Hoisting- Can not access function before intialisation

// it accesseble in function declaration
// suyog();
// function suyog() {
//   console.log("Hello Suyog");
// }

// //It is not accesseble in function exprestion and arrow function
// suyogv();
// const suyogv = function () {
//   console.log("Hello Suyog");
// };

//Param Destructing
/* 
const person = {
  firstName: "Suyog",
  lastName: "Muley",
};

function personDetails({ firstName, lastName }) {
  console.log(firstName, lastName);
}

personDetails(person);
 */

//call back function

/* function myfunction1(name) {
  console.log("Inside myfunction");
}

function myfunction2(callback) {
  callback();
}

myfunction2(myfunction1); */

//function inside function

/* function myName() {
  console.log("Suyog");
  function myLastName() {
    console.log("Muley");
  }
  myLastName();
}

myName();
 */

//Important array methods

//const numbers = [2, 4, 5, 10, 23];
/* 
function multiplytwo(number, index) {
  return `Index of ${index} is multiplied by 2 is ${number}*2`;
}
 */
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i], i);
// }

/* numbers.forEach(function (number, index) {
  console.log(`Index is ${index} number is ${number}`);
}); */

/* numbers.forEach(function (number, index) {
  console.log(`Index is ${index} number is ${number} double ${number * 2}`);
});
 */

/* const student = [
  { firstName: "Suyog", age: 24 },
  { firstName: "Chaitali", age: 21 },
  { firstName: "Garima", age: 24 },
  { firstName: "Piyush", age: 24 },
];

student.forEach(function (user) {
  console.log(user.firstName);
});

for (let user of student) {
  console.log(user.firstName);
}
 */

//Map methods
/* 
const num = [3, 5, 6, 7, 100];

const square = function (number) {
  return number * number;
};

console.log(num.map(square)); //It will always return new array
 */
/* 
const student = [
  { firstName: "Suyog", age: 24 },
  { firstName: "Chaitali", age: 24 },
  { firstName: "Garima", age: 24 },
  { firstName: "Piyush", age: 24 },
];

const newStudArray = student.map((users) => {
  return users.firstName;
});

console.log(newStudArray);


//Reduce Method
const numberArray = [1, 2, 3, 4, 5];

const sum = numberArray.reduce((previousValue, currrentValue) => {
  return previousValue + currrentValue;
});

console.log(sum);

const age = student.reduce((agePre, ageCur) => {
  return agePre + ageCur.age;
}, 0);

console.log(age); */

//Sort Methods
//If you are sorting by string it will sort with capital letter then lower letter

//
//Logic Behnid

//a b result
//87-25 =  62 it is gretar than 0 -Positive Number- Assending
//Negative number -desendning

//Dessenidng order
// const numberSort1 = numbers.sort((a, b) => b - a);
// console.log(numberSort1);

/* const products = [
  {
    productId: 1,
    productName: "Apple",
    price: 4500,
  },
  {
    productId: 2,
    productName: "MI",
    price: 400,
  },
  {
    productId: 3,
    productName: "Oppo",
    price: 45,
  },
  {
    productId: 4,
    productName: "OnePlus",
    price: 45005,
  },
];

const priceSort = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

console.log(priceSort); */

//Find Methods

/* const petNames = ["Horse", "Dog", "Catty", "Snake"];

const nameFind = petNames.find((name) => name.length >= 3);

console.log(nameFind);

const users = [
  { userId: 1, userName: "Suyog" },
  { userId: 2, userName: "Chaitali" },
  { userId: 3, userName: "Harsh" },
  { userId: 4, userName: "Salman" },
  { userId: 5, userName: "Abhitab" },
];

const userFind = users.find((user) => user.userId === 1);

console.log(userFind); */
/* 
//Every Method

const numbers = [2, 4, 6, 8, 10, 3];

const ans = numbers.every((num) => num % 2 === 0);

//Callback function --> true/false
//Every methods -->true/false

console.log(ans); */

//Ittrables
/* const firstName = "SuyogMuley";

for (let char of firstName) {
  console.log(char);
} */
/* 
//Set iterables

const numbers = new Set([1, 2, 3, 4]);
console.log(numbers);

const strings = new Set("SUyog");
console.log(strings);

const items = ["suyog", "chaitali", "Mrunal"];

numbers.add(items);
numbers.add(6);
numbers.add(5);
numbers.add(4);
numbers.add(5);
numbers.add(4);
numbers.add(63);

console.log(numbers);

let length = 0;
const uniqueArray = new Set(numbers);
console.log(uniqueArray);
for (let number of numbers) {
  length++;
  console.log(number);
}

console.log("Lenght is = " + length);
if (numbers.has(4)) {
  console.log("Yes,It has");
} else {
  console.log("Not Have");
} */

//Map iterable
// const person1 = {
//   firstName: "Suyog",
// };
// const extraInfo = new Map();
// extraInfo.set(person1, { age: 8, gender: "male" });

// console.log(person1.firstName);
// console.log(extraInfo.get(person1).gender);

/* //clone using object

const person = {
  firstName: "SUyog",
  age: 7,
};

const newPerson = { ...person };

person.lastName = "Muley";

console.log(person);
console.log(newPerson);
 */

//Opational Chaining
/* const users = {
  userName: "Suyog",
  age: 18,
  // address: { houseNumber: 1234 },
};

console.log(users?.address?.houseNumber); */

//Method

/* function extraInfo() {
  console.log(`My firstname is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "Suyog",
  age: 16,
  about: extraInfo,
};
const person2 = {
  firstName: "Chaitali",
  age: 19,
  about: extraInfo,
};
const person3 = {
  firstName: "Su",
  age: 120,
  about: extraInfo,
};
const person4 = {
  firstName: "SuyogMulye",
  age: 16,
  about: extraInfo,
};

console.log(this); //Window Object
person1.about(); */

//Call Methods

/* const user1 = {
  firstName: "Suyog",
  age: 81,
  about: function () {
    console.log(`I am ${this.firstName} and ${this.age}`);
  },
};

const user2 = {
  firstName: "Chaitali",
  age: 18,
};

user1.about.call(user2); */

/* const user1 = {
  firstName: "Suyog",
  age: 81,
  about: function (hobby, sport) {
    console.log(`I am ${this.firstName} and ${this.age}`, hobby, sport);
  },
};

const user2 = {
  firstName: "Chaitali",
  age: 18,
};

user1.about.call(user2, "cricket", "Read");
 */

//Apply Method

/* const user1 = {
  firstName: "Suyog",
  age: 81,
  about: function (hobby, sport) {
    console.log(`I am ${this.firstName} and ${this.age}`, hobby, sport);
  },
};

const user2 = {
  firstName: "Chaitali",
  age: 18,
};

user1.about.apply(user2, ["cricket", "Read"]);
 */

//Bind
/* const user1 = {
  firstName: "Suyog",
  age: 81,
  about: function (hobby, sport) {
    console.log(`I am ${this.firstName} and ${this.age}`, hobby, sport);
  },
};

const user2 = {
  firstName: "Chaitali",
  age: 18,
};

const func = user1.about.bind(user2, "cricket", "Read");
func();
 */

//Arrow Functions

/* const user1 = {
  firstName: "Suyog",
  age: 81,
  about() {
    console.log(`I am ${this.firstName} and ${this.age}`);
  },
};

//Arrow function does have this keyword, it will take from surrounding

user1.about();
 */

//create function and multiple objects

/* const user = {
  firstName: "Suyog ",
  age: 18,
  email: "suyogvmuley@gmail.com",
  address: "Abc Place",
  about: function () {
    return `${this.firstName}, ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
}; */

//Function (That function create objects)
//2.add key value pair
//3.it will return object

/* function createUser(firstName, age, email, address) {
  const user = {};
  user.firstName = firstName;
  user.age = age;
  user.email = email;
  user.address;
  user.about = function () {
    return `${this.firstName}, ${this.age}`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser("Suyog", 21, "suyog@gmail.com", "MyAddres");
const user2 = createUser("Chaitali", 23, "suyog@gmail.com", "MyAddres");
const user3 = createUser("Muley", 39, "suyog@gmail.com", "MyAddres");

console.log(user2);

const is18 = user1.is18();
console.log(is18);

console.log(user1.about()); */

/* const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2); */

//Using Object.Create method

/* const userMethod = {
  about: function () {
    return `${this.firstName}, ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
}; */

/* function createUser(firstName, age, email, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.age = age;
  user.email = email;
  user.address;

  return user;
}

const user1 = createUser("Suyog", 21, "suyog@gmail.com", "MyAddres");
const user2 = createUser("Chaitali", 23, "suyog@gmail.com", "MyAddres");
const user3 = createUser("Muley", 39, "suyog@gmail.com", "MyAddres");

/* console.log(user1.about());
console.log(user1); */

// console.log(createUser.prototype);
/* 
createUser.prototype.about = function () {
  return `${this.firstName}, ${this.age}`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

console.log(user1.about());
console.log(user1.is18());  */

//New Keyword => Create empty object this=>{} and return this and it will set prototype object

/* function CreateUser(firstName, age, email, address) {
  //const user = Object.create(createUser.prototype);
  this.firstName = firstName;
  this.age = age;
  this.email = email;
  this.address;

  return this;
}

const user1 = new CreateUser("Suyog", 21, "suyog@gmail.com", "MyAddres");
const user2 = new CreateUser("Chaitali", 23, "suyog@gmail.com", "MyAddres");
const user3 = new CreateUser("Muley", 39, "suyog@gmail.com", "MyAddres");

/* console.log(user1.about());
console.log(user1); */

// console.log(createUser.prototype);

/* CreateUser.prototype.about = function () {
  return `${this.firstName}, ${this.age}`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

console.log(user1.about());
console.log(user1.is18());

for (let key in user1) {
  console.log(key);
}  */

/* class CreateUser {
  constructor(firstName, age, email, address) {
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.address;
  }
  about() {
    return `${this.firstName}, ${this.age}`;
  }

  is18() {
    return this.age >= 18;
  }
}

const user1 = new CreateUser("Suyog", 21, "suyog@gmail.com", "MyAddres");
const user2 = new CreateUser("Chaitali", 23, "suyog@gmail.com", "MyAddres");
const user3 = new CreateUser("Muley", 39, "suyog@gmail.com", "MyAddres");

console.log(user1.about());
 */
/* 
class Animal {
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  get fullDetails() {
    return `${this.name}`;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
class Dog extends Animal {
  constructor(name, age, sound, speed) {
    super(name, age, sound);
    this.speed = speed;
  }
}
const tommy = new Animal("Tommy", 24, "baw baw");
const momy = new Dog("Momy", 12, "la la", 45);

console.log(tommy.eat());
console.log(momy.fullDetails); */

//Getter and Setter
/* class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("SUyog", "Muley", 25);
// console.log(person1.fullName);
person1.fullName = "Chaitali Lande";
console.log(person1.fullName);
 */

//Closure Excample - It will return with lexical scope values

/* function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}

const square = myFunction(4);
const ans = square(4);

console.log(ans);
 */

//Asyncronus Programing

/* console.log("Script Started");

function hello() {
  console.log("Wait Completed");
}

setTimeout(
  hello,
  () => {
    console.log("Time out has been set");
  },
  5000
);

console.log("Script Completed "); */

//SetInterval()

/* const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const randomColor = `rgb(${red}, ${green},${blue})`;
  body.style.backgroundColor = randomColor;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.backgroundColor;
});
 */

/* const bucket = ["cheaps", "cofee", "vegetable", "salt", "rice"];

const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  )
    resolve({ value: myfriedRice });
  else {
    reject("Could not do it");
  }
});

friedRice
  .then((myfriedRice) => {
    console.log("Lets eat", myfriedRice);
  })
  .catch((e) => {
    console.log("Error");
  }); */
/* function myPromise() {
  return new Promise((resolve, rejct) => {
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        rejct();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.log("Rejcted");
  });
 */

/* var cleanestCities = [
  "Cheyenne",
  "Santa Fe",
  "Tucson",
  "Great Falls",
  "Honolulu",
];
let matchFound = false;
let cityToCheck = prompt("Enter City Name:");
for (let i = 0; i <= cleanestCities.length - 1; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("This the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("Not Found");
} */
// let cityToCheck = prompt("Enter City Name:");
// for (var i = 0; i <= 4; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
// }

// function createRectangle(len, bre) {
//   return rectangle = {
//     length: len,
//     breath: bre,
//     draw: function () {
//       console.log("Draw a circle");
//     }
//   }
// }

// const newObject = createRectangle(5, 7);
// newObject.color = "yellow";
// //delete newObject.length;
// // console.log(newObject);


// const names = {
//   firstName: "Suyog",
//   lastName: "Muley",
//   age: 28
// }

//For in Loop
// for (let name in names) {
//   console.log(name, names[name]);
// }

// //For of loop applicable for irrables-Array and Map
// for (let name of Object.values(names)) {
//   console.log(name);
// }

// Object clonning- iterating, Assign, Spread

//Iterating

// let src = {
//   a: 10,
//   b: 20,
//   c: 30
// };

// let src1 = { d: 40 }
//let dst = {};
// for (let key in src) {
//   dst[key] = src[key];
// }

// let dst = Object.assign({}, src, src1); // Assign

//Spread Operator

// let dst = { ...src }
// src.a++;
// console.log(dst);


//Array Methods for Values

//adding new element

// const fruits = ["Apple", "Mango", "Greps", "Waterlemon"];

// fruits.push("12");//adding new element at last

// console.log(fruits);

// fruits.unshift("Lemon");//add element in beganning

// console.log(fruits);

// fruits.splice(2, 0, "Coconut", "Annar");//add element in middle

// console.log(fruits)

//Searching method of array
// console.log(fruits.indexOf("Mango"));
// console.log(fruits.includes("Mango"));
// console.log(fruits.indexOf("Greps", 3));



//Reference Object Searching Method
// const courses = [
//   {
//     id: 1, name: "suyog"
//   },
//   {
//     id: 2, name: "Muley"
//   }
// ]


// const result = courses.find((course) => course.name === "Muley")
// console.log(result);


// //Removing element in array

// fruits.pop();//Remove element from last
// console.log(fruits);

// fruits.shift();//remove element from begaining
// console.log(fruits);

// fruits.splice(2, 2);//remove element from middle
// console.log(fruits)

// //Emptying Array

// // fruits = [];
// //fruits.length = 0;
// fruits.splice(0, 4);
// console.log(fruits);

// //Combining and Slicing of Array

// const numbers = [2, 4, 5, 4, 67];
// const words = ["a", "b", "e"];
// const fruits = ["Apple", "Mango", "Greps", "Waterlemon"];

// // let newResult = fruits.concat(numbers, words);
// let res = fruits.slice(2, 5);

// console.log(res);

//How to combined 2 Object 

let class1 = {
  std: 1, name: "suyog"
}

let class2 = {
  std1: 2, name2: "Chaiali"
}

let res = Object.assign(class1, class2);
let result = { ...class1, ...class2 };
console.log(res)
console.log(result);

const arr = [3, 5, 6, 7, 4];

//For off Loop
for (let item of arr) {
  console.log(item);
}


//ForEach Loop
arr.forEach(element => {
  console.log(element);

});


const joined = arr.join("/"); //Join Method
console.log(joined);

const statement = "this is my first msg";
const spliting = statement.split(" ");//Split method
console.log(spliting);

console.log(arr.sort());
console.log(arr.reverse());

const num = [10, 40, 4, 50];

console.log(num.sort((e) => {
  return num
}));


function sum() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}

let resultsum = sum(2, 4, 5);

console.log(resultsum);

//rest operator
function multiply(...arg) {
  console.log(arg);
}

multiply(2, 3);

