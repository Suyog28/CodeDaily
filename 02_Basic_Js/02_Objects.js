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

//const tinderObject = new Object(); //Singleton Object

const newObj = {}; //Non-Singleton Object

newObj.id = "123abc";
newObj.name = "Sammy"

// console.log(newObj);

const user = {
    email:"Suyogvmuley@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Suyog",
            lastName:"Muley"
        }
    }
}

console.log(user.fullName.userFullName);

const UserDetails = {
    city:"Pune",
    Mobile:"3939393939",
    State:"MH"
}

const joinObject = Object.assign({}, user, UserDetails);
// console.log(joinObject);

const spredConcat = {...UserDetails,...user}
// console.log(spredConcat);

//DB Multiple Ojects

const UserDb = [
    {
        id:1,
        name:"Suyog"
    },
    {
        id:2,
        name:"Suyogv"
    },
    {
        id:3,
        name:"Suyogd"
    }
];

// console.log(Object.keys(UserDb));
// console.log(Object.values(UserDb));
// console.log(Object.entries(UserDb));

for (let items in UserDb){
    console.log(items)
}

for(let items of UserDb){
    console.log(items.name)
}