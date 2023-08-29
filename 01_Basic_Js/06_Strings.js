let str1 = "Suyog";
let str2 = "Muley";

let stringConcat = str1 + str2;

console.log(stringConcat);//Modern Js this is not a good way

//Better way to do it like below

console.log(`Your name is ${str1} and Your last Name is ${str2}`);

let gameChanger = `This-is-new-Object`;

let values = ["suyog", "chaitali", "Mrunal"]

console.log(gameChanger);
console.log(gameChanger.charAt(2));
console.log(gameChanger.indexOf("i"));
console.log(gameChanger.includes("is"));
console.log(gameChanger.replaceAll('-',","));
console.log(gameChanger.slice(0,5));
console.log(gameChanger.split("-",","));
console.log(gameChanger.toLowerCase());
console.log(gameChanger.toUpperCase());
console.log(gameChanger.length);
console.log(gameChanger + " Suyog");