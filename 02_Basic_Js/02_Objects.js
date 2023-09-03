//JS 
//1. Objects
//2. Events

//singleton - Using constructor 
//Object.create

// ----------
//Object Literals

//Symbols

const mySym = Symbol("Key1");
const JsUser = {
    name:"Hitesh",
    "fullName":"Suyog Muley",
    [mySym]:"Key2",
    age:18,
    email:"google@gmail.com",
    city:"Jaipur",
    country:"India",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
};

console.log(JsUser.name);//First Method of Object Access

console.log(JsUser["fullName"]);//Second Mehtod

console.log(JsUser[mySym]);


//Object Value Change
JsUser.email="Suyogvmuey@gmail.com";
console.log(JsUser.email);
// Object.freeze(JsUser);
JsUser.email ="Mrunal@gmail.com";

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Object Mehtods1")
}

console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello Object Mehtods2, ${this.name}`)
}

console.log(JsUser.greetingTwo());

