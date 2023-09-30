/* const animals = ["Dog", "Cat", "Horse", "Loin", "Tiger"];
const names = ["Salman", "Shahruk", "Karan"];

const fullname = [];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  for (let j = 0; j < names.length; j++) {
    console.log(names[i]);
    fullname.push(animals[i] + "" + names[j]);
    console.log(fullname);
  }
}
var text = 0;
var newText = text.replace(/World War II/g, "the Second World War");
console.log(newText);
 */

// var num = 1.038383883;
// var newnum = Math.floor(num);
// console.log(newnum);

/* const string = "1234";
console.log(string);
console.log(typeof string);
const newStringToNum = parseInt(string);
console.log(newStringToNum);
console.log(typeof newStringToNum);

const num = newStringToNum.toString();
console.log(num);
console.log(typeof num); */

// const newString = "suyog";

// console.log(newString);

// console.log(newString.charAt(0));
// console.log(newString.indexOf("g"));
// console.log(typeof newString);
// console.log(newString.slice(2, 5));

// const items = ["abc", "cde", "fgh"];

// const todayDate = new Date();
// console.log(todayDate);
// const stringDate = todayDate.getDay();
// console.log(stringDate);
// console.log(typeof stringDate);
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const dayName = dayNames[stringDate];
// console.log(dayName);

// console.log(todayDate.getFullYear());

// const newYearDate = new Date("October 28, 2035");

// var caluculateDate = newYearDate - todayDate;
// const diff = Math.floor(caluculateDate);
// console.log(diff);

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   var theSec = now.getSeconds();
//   alert("time: " + theHr + ":" + theMin + ":" + theSec);
// }

// tellTime();

/* var i = 0;
while (i <= 3) {
  console.log(i + " " + "Suyog Muley");
  i++;
}
 */

// function popup(message) {
//   alert(message);
// }

// function expand() {
//   alert(
//     "lorem fieldfield.The syntax is the same as for other event handlers that you've already learned to code: a"
//   );
// }

// function checktheEmail(fieldfield) {
//   if (document.getElementById(fieldfield).value === "") {
//     alert("Email Id is required");
//   }
// }

// function checktheEmail(fieldfield) {
//   var val = document.getElementById(fieldfield).value;
//   if (val === "") {
//     alert("Email Id is required");
//   }
// }
/* function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  }
}
 */

// function zipcodefill() {
//   var cityName;
//   var zipcode = document.getElementById("zipcode").value;
//   switch (zipcode) {
//     case "444808":
//       cityName = "Achalpur";
//       break;
//     case "444806":
//       cityName = "Amravati";
//       break;
//     case "411027":
//       cityName = "Pune";
//   }
//   document.getElementById("city").value = cityName;
// }

// function expandLoris() {
//   var expandText =
//     "They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//   document.getElementById("slowLoris").innerHTML = expandText;
// }

// function placeAList() {
//   var listToPlace =
//     "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//   document.getElementById("lorisList").textContent = listToPlace;
// }

// function peekAtContent() {
//   var whatsThere = document.getElementById("content").innerHTML;
// }

// function makeInvisible() {
//   document.getElementById("ugly").className = "hidden";
// }

// function bigName() {
//   document.getElementById("p1").className = "big";
// }

// var newP = document.createElement("p");
// var addP = newP.setAttribute("class", "regular");
// var newText = document.createTextNode("Hello!!");
// var element = newP.appendChild(newText);
// var newEle = document.getElementById("new");
// newEle.appendChild(element);

// var newP = document.createElement("p");
// var addP = newP.setAttribute("class", "regular");
// var newText = document.createTextNode("Hello!!");
// var element = newP.appendChild(newText);
// var newEle = document.getElementById("new");

// console.log(newP);

// var monkeyWindow = window.open();
// var windowContent =
//   "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);



// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 100;
//   console.log(x);
// }

// function b() {
//   var x = 10;
//   console.log(x);
// }

// const list = [1, 2, 3, 4, 5];

// // for (let i = 0; i < list.length; i++) {
// //   console.log(list[i]);

// // }


// list.push(6,7,8,9);
// console.log(list);

// list.pop();
// console.log(list);

// list.unshift("Abc");
// console.log(list);

// list.shift();
// console.log(list)


// const filter = list.filter((item) => item < 3);
// console.log(filter);

// const mapping = list.map()



// const list = [61, 52, 3, 34, 35];

// const newElement = [3, 45, 343, 3433];

// const newArray = list.concat(newElement);//It will give new array with both list and new element.

// console.log(newArray);


// const spreadOperator = [...list, ...newElement];

// console.log(spreadOperator);

// console.log(list.slice(2, 4));

// const age = list.every(age => (age < 18) ? false : true)

// console.log(age);

// const result = [];
// for (let i = 0; i < list.length; i++) {

//   result.push(list[i] * 2);

// }

// console.log(result);

// const res = result.map((item) => item * 2);
// console.log(res);

// const res1 = res.reduce((a, b) => a + b);
// const res2 = res.reduce((a, b) => (a > b) ? a : b);
// console.log(res1);
// console.log(res2);

// const numbers = [2, 3, 4, 56, 767]

// const practical = numbers.filter(num => num % 2 == 0).map((num) => num * 2).reduce((a, b) => a + b);

// console.log(practical);

// const sentense = ["You", "are", "a", "good", "boy"];

// const newStatement = sentense.filter((str) => str.length < 4)
//   .map((str) => str.toLocaleUpperCase())
//   .reduce((str, ele) => str + " " + ele)

// console.log(newStatement);


const singleDimention = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiDimention = [[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]];

console.log(multiDimention[2][2]);