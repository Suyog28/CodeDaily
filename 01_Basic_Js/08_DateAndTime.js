console.log(Date());

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let mynewDate = new Date(2023,0,23);
console.log(mynewDate.toDateString());

let myTimeStap = Date.now();
console.log(Math.floor(myTimeStap/1000));

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());

console.log(myDate.toLocaleString('default',{
    weekday:"long"
}));;