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

// let class1 = {
//   std: 1, name: "suyog"
// }

// let class2 = {
//   std1: 2, name2: "Chaiali"
// }

// let res = Object.assign(class1, class2);
// let result = { ...class1, ...class2 };
// console.log(res)
// console.log(result);

// const arr = [3, 5, 6, 7, 4];

// //For off Loop
// for (let item of arr) {
//   console.log(item);
// }


// //ForEach Loop
// arr.forEach(element => {
//   console.log(element);

// });


// const joined = arr.join("/"); //Join Method
// console.log(joined);

// const statement = "this is my first msg";
// const spliting = statement.split(" ");//Split method
// console.log(spliting);

// console.log(arr.sort());
// console.log(arr.reverse());

// const num = [10, 40, 4, 50];

// console.log(num.sort((e) => {
//   return num
// }));


// function sum() {
//   let total = 0;
//   for (let value of arguments) {
//     total = total + value;
//   }
//   return total;
// }

// let resultsum = sum(2, 4, 5);

// console.log(resultsum);

// //rest operator
// function multiply(...arg) {
//   console.log(arg);
// }

// multiply(2, 3);

// //Default Parameter
// function ROI(x, y = 4, z = 3) {
//   return (x * y * z / 100)
// }

// console.log(ROI(1000,));

// //Getter and Setter concept

// const person = {
//   fName: "Suyog",
//   LName: "Muley",
//   get fullName() {
//     return (`${person.fName}${person.LName}`)
//   },
//   set fullName(value) {
//     if (typeof value !== String) {
//       throw new Error("Not a string");
//     }
//     let parts = value.split(" ")
//     this.fName = parts[0];
//     this.LName = parts[1];
//   }
// };

// // person.fullName = "Chaitali Muley";
// // console.log(`${person.fName} ${person.LName}`);


// //Error Handling
// try {
//   person.fullName = "Rahul";
// }
// catch (e) {
//   console.log(e);
// }


// //Rudese Method

// const n = [10, 30, 50, 10];

// const ans = n.reduce((a, b) => a + b);
// console.log(ans);


//Map Method

// const numbers = [2, 5, 3, 6, 73];

// const res = numbers.map((number) => number * 2);
// console.log(res);

// const res1 = numbers.map((number) => number * 3);
// console.log(res1);

// const res2 = numbers.map((number) => number.toString(2));
// console.log(res2);


// //Filter Method

// const filterRes = numbers.filter((x) => x % 2);
// console.log(filterRes);

// const filterRes1 = numbers.filter((x) => x % 2 === 0);
// console.log(filterRes1);

// const filterRes2 = numbers.filter((x) => x >= 6);
// console.log(filterRes2);

// const num = [10, 40, 4, 50];

// const r = num.sort((a, b) => a - b);
// console.log(r);


// const Employees = [
//   {
//     "userId": "rirani",
//     "jobTitleName": "Developer",
//     "firstName": "Romin",
//     "lastName": "Irani",
//     "preferredFullName": "Romin Irani",
//     "employeeCode": "E1",
//     "region": "CA",
//     "phoneNumber": "408-1234567",
//     "emailAddress": "romin.k.irani@gmail.com"
//   },
//   {
//     "userId": "nirani",
//     "jobTitleName": "Developer",
//     "firstName": "Neil",
//     "lastName": "Irani",
//     "preferredFullName": "Neil Irani",
//     "employeeCode": "E2",
//     "region": "CA",
//     "phoneNumber": "408-1111111",
//     "emailAddress": "neilrirani@gmail.com"
//   },
//   {
//     "userId": "thanks",
//     "jobTitleName": "Program Directory",
//     "firstName": "Tom",
//     "lastName": "Hanks",
//     "preferredFullName": "Tom Hanks",
//     "employeeCode": "E3",
//     "region": "CA",
//     "phoneNumber": "408-2222222",
//     "emailAddress": "tomhanks@gmail.com"
//   }
// ]

// const empRes = Employees.filter((x) => x.jobTitleName === "Developer");

// console.log(empRes);

// const empRes1 = Employees.map((x) => x.firstName + " " + x.lastName);
// console.log(empRes1);

// const empRes2 = Employees.reduce((pre, curr) => pre.toString() + curr.toString());//Example not valid
// console.log(empRes2);


// //Ternary Operator
// // let age = 34 ;
// // const result1 = age >= 18 ? "You are eligible for Vote" : "Not valid";
// // console.log(result1);

// let speed = 80;

// let limitCheck = speed >= 120 ? "Too Fast" : speed >= 90 ? "Fast" : " Ok!";

// console.log(limitCheck);

// //Spread Operator

// let rgb = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'black'];

// let joinArray = [...cmyk, ...Employees, ...rgb];

// console.log(joinArray);

// const color = {
//   radius: 10
// }

// // //Spread Operator
// const radiusColor = {
//   ...color,
//   color: "blue"
// }

// // console.log(radiusColor);

// //clone an object

// const cloneObject = { ...radiusColor };
// console.log(cloneObject);

// let count = 1;
// while (count <= 10) {
//   // console.log(count);
//   count++;
// }

// do {
//   console.log(count);
//   count = count + 2;
// } while (count <= 10);

//Secret Number Game
// generate a secret number between 1 and 10
// const MIN = 1;
// const MAX = 10;

// let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// let guesses = 0; // for storing the number of guesses
// let hint = ''; // for storing hint
// let number = 0;
// do {
//   // get input from user
//   let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

//   // get the integer
//   number = parseInt(input);

//   // increase the number of guesses
//   guesses++;

//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     hint = ', and less than ' + number;
//   } else if (number < secretNumber) {
//     hint = ', and greater than ' + number;
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);


// let products = [
//   { name: 'iPhone', price: 900 },
//   { name: 'Samsung Galaxy', price: 850 },
//   { name: 'Sony Xperia', price: 700 },
// ];

// products.sort((a, b) => a.price > b.price ? 1 : b.price > a.price ? -1 : 0);

// console.table(products);

// (function () {
//   console.log("JS LIFE")
// })();

// console.time("answer time");

// document.addEventListener("click", function () {
//   console.log("Clicked");
// })


// const element = document.querySelector("#new");
// element.addEventListener("click", function (event) {
//   console.log("Click on element" + event.target.textContent);
// })

// const newElement = document.createElement("h1");
// newElement.innerText = "New Element Created";
// element.appendChild(newElement);

// newElement.addEventListener("click", function () {
//   newElement.style.color = "red";
//   newElement.style.fontSize = "50px";
// })

// let person = {
//   name: "John Doe",
//   greet: function () {
//     return "Hi, I'm " + this.name;
//   }
// };
// console.log(person);
// console.log(person.toString());
// console.log(person.__proto__);


// let counter = {
//   count: 0,
//   next: function () {
//     return ++this.count;
//   }
// }

// const person1 = Object.values(person);
// //console.log(person1);
// const person2 = Object.entries(person);
// console.log(person2);

// // console.log(counter.next());

// // console.log(window === this);

// let widget = {
//   color: 'red',
//   height: 10,
//   width: 20
// };

// let style = {
//   color: 'Red',
//   borderStyle: 'solid'
// };

// let clonedWidget = Object.assign({}, widget, style);

// console.log(clonedWidget);

// //Factory Function

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     getFullName() {
//       return firstName + ' ' + lastName;
//     }
//   }
// }

// const person3 = createPerson("Suyog", "Muley");
// const person4 = createPerson("Chaitali", "Muley");

// console.log(person3, person4, person3.getFullName());
// const t1 = performance.now();
// let mydiv = document.createElement('div');
// for (let i = 0; i <= 100; i++) {
//   let element = document.createElement('p');
//   element.textContent = "This is new div elements" + i;
//   mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv);
// const t2 = performance.now();
// console.log(t2 - t1);
// const t3 = performance.now();
// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement('p');
//   newElement.textContent = "Second Para" + i;
//   document.body.appendChild(newElement);
// }
// const t4 = performance.now();
// console.log(t4 - t3);


//Some Array Method

// const students = [{
//   name: "Stud 1",
//   score: 78,
// }, {
//   name: "Stud 2",
//   score: 92
// }, {
//   name: "Stud 3",
//   score: 90
// },
// {
//   name: "Stud 4",
//   score: 80
// }]

// if (students.some(score => { return score.score > 90 })) {
//   console.log("Having Excellance Marks");
// } else {
//   console.log("Average Marks");
// }

// if (students.some(student => {
//   return student.score > 90
// })) {
//   console.log("There are students with exceptional score!")
// } else {
//   console.log("Unfortunately, nothing is exceptional")
// }

//Every Student pass mark above 70% with Every Array methods

// if (students.every(student => student.score > 70)) {
//   console.log("All Student pass");
// } else {
//   console.log("Some students fails");
// }


//Include Method
// const marks = [20, 49, 50, 20, 505];
// const studentRes = marks.includes(50);
// console.log(studentRes);



// async function getData() {
//   const content = await fetch("https://catfact.ninja/fact");
//   const output = await content.json();
//   console.log(output);

// }
// getData();


// async function utility() {

//   let output = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Output one");
//     }, 2000);
//   });

//   let newMosem = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("new Mosem");
//     }, 3000)
//   })

//   let res = await output;
//   let res1 = await newMosem;

//   console.log(res);
//   console.log(res1);
// }

// utility();


// let person = {
//   firstName: "Suyog",
//   lastName: "Muley",
//   middleName: "C.",
//   currentAge: 28
// }

// let { firstName, lastName, middleName = '', currentAge: age = 29 } = person;

// console.log(firstName);
// console.log(age);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// let john = new Person("john");

// console.log(john);
// console.log(john.getName())

// let app = new class {
//   constructor(name) {
//     this.name = name;
//   }
//   start() {
//     console.log(`Starting the ${this.name}...`);
//   }
// }('Awesome App')

// console.log(app.start());



//Inheritance in classes with Extends keyword

// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }

//   walk() {
//     console.log("Bird walking on " + this.legs);
//   }
// }


// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log("Bird is flying in air");
//   }
// }

// let coco = new Bird(4);
// coco.fly();

// coco.walk();

// //Constructor Function with new.Target

// function Person(name) {
//   if (!new.target) {
//     throw ("Use new key word to access");
//   }
//   this.name = name;
// }

// let person = new Person("Suyog");
// console.log(person.name);

// Person("Suyog");

// console.log(window.name);


// class Person {
//   constructor(name) {
//     this.name = name;
//     console.log(new.target.name);
//   }
// }

// class Employee extends Person {
//   constructor(name, title) {
//     super(name);
//     this.title = title;
//   }
// }

// let john = new Person('John Doe'); // Person
// let lily = new Employee('Lily Bush', 'Programmer'); // Employee


// function add(x, y) {
//   return x + y;
// }

// console.log(add(3, 5));
// console.log(add.length);
// console.log(add.prototype);

// let cat = { type: "cat", sound: "Mouw" };
// let dog = { type: "dog", sound: "bhavvvv" };

// let says = function (message) {
//   console.log(message);
//   console.log(this.type + " Says " + this.sound);
// }

// says.apply(cat, ["What does cat says?"])//Apply Method pass array like object
// says.apply(dog, ['what does cat says?'])

// //call method pass a argument 
// says.call(cat, 'What does cat says?');
// says.call(dog, 'what does dog says?');


// //Call(), Apply() and Bind()---

// //----bind() methods

// let car = {
//   speed: 10,
//   start: function () {
//     console.log("Start with " + this.speed + " km/h");
//   }
// }

// let aircraft = {
//   speed: 20,
//   fly: function () {
//     console.log("Aircraft Flying");
//   }
// }





// const AirCraftstart = car.start.bind(aircraft);//bind method called(Brarrow the start method from car obj)
// AirCraftstart();

// car.start.call(aircraft);//Call method call immediatly 


// //Effective use of Call method
// //Find a odd number in array

// function isOdd(num) {
//   return num % 2;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }
// function getOddNumbers() {
//   return Array.prototype.filter.call(arguments, isOdd);
// }

// function getEvenNumbers() {
//   return Array.prototype.filter.call(arguments, isEven);
// }

// let oddnumbers = getOddNumbers(10, 4, 2, 5, 7, 4, 1, 23);

// let evennumbers = getEvenNumbers(10, 4, 2, 5, 7, 4, 1, 23);
// console.log("Oddnumbers " + oddnumbers);
// console.log("Even Numbers " + evennumbers)


// //How to find prime numbers in given array

// let isPrime = [3, 5, 73, 29, 4, 6, 9, 10, 21, 9808];

// let result = isPrime.filter((num) => {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// })

// console.log(result);



//Closuers - Most Important Topic in JS

// function greetings(message) {
//   return function (name) {
//     return message + " " + name;
//   }
// }

// let sayhi = greetings("Hi");
// let sayhello = greetings("Hello");

// console.log(sayhi("Suyog"));
// console.log(sayhello("Muley"));


// function welcome() {

//   function hi(message) {
//     let name = "Hi Suyog";
//     console.log(name + " " + message);
//   }
//   return hi;
// }

// let res = welcome();
// console.log(res("Hellow"));


//Closers with loop

// for (let i = 0; i <= 10; i++) {
//   setTimeout(function () {
//     console.log("after " + i + "  Second " + i);
//   }, i * 1000);
// }

//IIFE-Immediatly Invoked function experession

// (function () {

// })();//Syntax

// let addition = (function (a, b) {
//   return a + b;
// })(10, 50);

// let add = ((a, b) => a + b)(10, 30);//With Arrow Function

// console.log(add);
// console.log(addition);

// //Multuple value return from function

// function greetings() {
//   let firstname = "Suyog",
//     wifename = "Chaitali";

//   return [firstname, wifename];
// }
// let greet = greetings();
// console.log(greet);


//Should Not use arrow function with Event Listeners


// const username = document.querySelector("#username");
// const greetings = document.querySelector("#greeting");

// username.addEventListener("keyup", function () {
//   greetings.textContent = "Hello  " + this.value;
// });


//Rest Operator

// function sum(...arg) {
//   let total = 0;
//   for (let num of arg) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));


// //function may pass arguments with various kinds of data types such as number, string, and boolean, and you want to calculate the total of numbers only


// function add(...arg) {
//   return arg
//     .filter(function (e) {
//       return typeof e === 'number'
//     })
//     .reduce(function (prev, curr) {
//       return prev + curr;
//     });
// }


// let res = add(10, null, "Suyog", undefined, 20);
// console.log(res);



// function filter(numbers, fn) {
//   let result = [];
//   for (let num of numbers) {
//     if (fn(num)) {
//       result.push(num);
//     }
//   }
//   return result;
// }

// const numbers = [2, 5, 3, 9, 40, 23, 450];

// let findOdd = filter(numbers, (num) => num % 2 != 0);

// console.log(findOdd);



// function download(url, callback) {
//   setTimeout(() => {
//     console.log(`Downloading ${url}`);
//     callback(url);
//   }, 1000);
// }

// function process(picture) {
//   console.log(`Process ${picture}`)
// }

// let url = "https://wwww.javascripttutorial.net/pic.jpg";

// download(url, process);


// //Promises All Method


// // const p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("The First promise has resolved");
// //     resolve(10);
// //   }, 1 * 1000);
// // });

// // const p2 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("The Second promise has resolved");
// //     resolve(20);
// //   }, 2 * 1000);
// // });

// // const p3 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("The third promise has resolved");
// //     resolve(30);
// //   }, 3 * 1000);
// // });

// // Promise.all([p1, p2, p3]).then((results) => {
// //   const total = results.reduce((a, b) => a + b);
// //   console.log(`Results:${results}`);
// //   console.log(`Total:${total}`);
// // })



// //Rejecting Promise 

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The First promise has resolved");
//     resolve(10);
//   }, 1 * 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The Second promise has failed");
//     reject('Failed');
//   }, 2 * 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has resolved");
//     resolve(30);
//   }, 3 * 1000);
// });

// Promise.all([p1, p2, p3])
//   .then(console.log)
//   .catch(console.log);



//Function Generaor -ES6 Introduces

// function* generator() {
//   console.log("Invoke 1st Element");
//   yield;
//   console.log("Invoke 2nd Element");
//   yield;
// }

// let gen = generator();

// // for (let g of gen) {
// //   console.log(g);
// // }

// console.log(gen.next());

// //Symbols

// let firstName = Symbol("FirstName");

// console.log(typeof firstName);

// const add = (a, b) => a + b;

// try {
//   let result = add(20, 30);
//   console.log(result);
// } catch (e) {
//   console.log(e);
// }

// //Export and Import Practice


// //NaN Number

// const number = "100";
// console.log(typeof number);
// const res = parseInt(number);
// console.log(typeof res);

// // let weight = parseInt('120kg');
// // console.log(weight); // 120

// // let weight = parseInt('More than 100kg');
// // console.log(weight); // 120

// let weight = parseFloat('Infinity');
// console.log(weight); // 120

// //JSON serialization
// const resource = {
//   amount: Infinity
// };
// let result = JSON.stringify(resource);

// console.log(result);

//Math methods

//Math.min()

// const numArray = [1, 2, 3, 4, 5, 58, -10];
// const res = Math.min(...numArray);
// console.log(res);
// let type;

// type = typeof 'Hi';
// console.log(type); // 'string'

// type = typeof 100;
// console.log(type); // 'number'

// type = typeof 100n;
// console.log(type); // 'bigint'

// type = typeof false;
// console.log(type); // 'boolean'

// type = typeof Symbol('morning');
// console.log(type); // 'symbol'


// type = typeof undefined;
// console.log(type); // 'undefined'


// type = typeof new Date();
// console.log(type); // 'object'


// //Swapping using Array destructuring

// let a = 10, b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// function stat(a, b) {
//   return [
//     a + b,
//     (a + b) / 2,
//     a - b
//   ]
// }

// let [sum, average, difference] = stat(20, 10);
// console.log(sum, average, difference); // 30, 15, 10

// const numArray = [2, 3, 6, 8, 9, 10, 11];

// // numArray.length = 5;
// numArray.push(100);
// console.log(numArray);

// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];


// colors.push(...cmyk);
// // for (let color of cmyk) {
// //   colors.push(color);
// // }
// // console.log(colors);
// console.log(colors);

// //Splice Method

// colors.splice(2, 3, "White");

// console.log(colors);

// let circles = [20, 10, 50];

// //Caluculate Area of circle

// let result = circles.map((redius) => {
//   return Math.floor(Math.PI * redius * redius);
// })

// console.log(result);


// let cities = [
//   { name: 'Los Angeles', population: 3792621 },
//   { name: 'New York', population: 8175133 },
//   { name: 'Chicago', population: 2695598 },
//   { name: 'Houston', population: 2099451 },
//   { name: 'Philadelphia', population: 1526006 }
// ];


// //Filter Method Find largest population more than 3 millions


// let bigCities = [];

// for (let i = 0; i < cities.length; i++) {
//   if (cities[i].population > 3000000) {
//     bigCities.push(cities[i]);
//   }
// }

// console.log(bigCities);
// //Filter Method
// let City = cities.filter((e) => e.population > 3000000);
// console.log(City);

//Reduce Methods
// const numArray = [2, 3, 6, 8, 9, 10, 11];

// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   sum += numArray[i];
// }

// console.log(sum);

// //Using reduce method

// let total = numArray.reduce((a, b) => a + b);
// console.log(total);


// //Sort Method
// let employees = [
//   { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
//   { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
//   { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
// ];

// let salary = employees.sort((a, b) => b.salary - a.salary);

// console.table(salary);

// //Sorting objects by a string property

// let names = employees.sort((a, b) => {
//   let x = a.name.toUpperCase(), y = b.name.toUpperCase();
//   return x == y ? 0 : x > y ? 1 : -1;
// })

// console.table(names);


// //Sorting objects by the date property

// let dateSort = employees.sort((a, b) => {
//   let x = new Date(a.hireDate), y = new Date(b.hireDate);
//   return x - y;
// })

// console.table(dateSort);

// //RegExp 

// let str = "Are you Ok? Yes, I'm OK";
// let result = str.match(/OK/gi);

// console.log(result);

// //BOM Methods

// let result1 = confirm('Are you sure you want to delete?');

// let message = result1 ? 'You clicked the OK button' :
//   'You clicked the Cancel button';

// alert(message);

// let lang = prompt('What is your favorite programming language?');

// let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
//   `It's ${lang}`;

// alert(feedback);


//1.Write a function that takes two numbers as arguments and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

//2.Write a function that takes a string as an argument and returns its length.
function str(word) {
  return word.length;
}
console.log(str("suyog"));

//3.Write a program that takes two numbers and displays their sum, difference, product, and quotient.

let num1 = 10;
let num2 = 20;

let add = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(add);
console.log(difference);
console.log(product);
console.log(quotient);

//4.Write a function that takes two numbers as arguments and returns the larger number.
function largerNum(a, b) {
  if (a > b) {
    console.log(`A is greater than B:${a}`);
  } else {
    console.log(`B is greater than A:${b}`);
  }
}

largerNum(111, 13);

//5.Write a program that displays a string in reverse order.

function reversString(name) {
  const res = name.split("").reverse().join("");
  return res;
}

console.log(reversString("Suyog"));

//6.Write a program that takes a number and checks whether it is positive, negative, or zero.

function number1(number) {
  if (number > 0) {
    console.log("Number is positive");
  } else if (number < 0) {
    console.log("Number is negative ");
  } else {
    console.log("Number is zero")
  }
}

number1(0);

function longString(sentence) {
  return sentence.split("").reverse().join("");
}

console.log(longString("Suyog Vijay Muley"));

//7.Write a program that takes a number and prints the multiplication table for that number.

function muplify(number) {

  for (let i = 1; i <= 10; i++) {
    let store = number * i;
    console.log(store);
  }
}

muplify(10);

//8.Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function calculateSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateSum(10));

//9.Write a program that takes a string and prints out the number of vowels in the string.

function vowelsFind(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(vowelsFind("CodeHelp"));


// function vowels(letters) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let i = 0; i < letters.length; i++) {
//     if (vowel.includes(letters[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowels("Codehelp"));

//10.Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
//For example, given the arrays[1, 2, 3, 4, 5] and[3, 4, 5, 6, 7], the function should return [3, 4, 5].
//Hint: You may need to use nested loops and conditional statements to solve this problem.

// function findCommonElement(arr1, arr2) {
//   let commonElement = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       if (!commonElement.includes(arr1[i])) {
//         commonElement.push(arr1[i]);
//       }
//     }
//   }

//   commonElement.sort((a, b) => a - b);
//   return commonElement;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 74];

// console.log(findCommonElement(arr1, arr2));