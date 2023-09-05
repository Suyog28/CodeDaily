// console.log("S");
// console.log("U");
// console.log("Y");
// console.log("O");
// console.log("G");

// function myName()
// {
//     console.log("S");
// console.log("U");
// console.log("Y");
// console.log("O");
// console.log("G");

// }

// myName();


// function userLoggedIn(username){
//    return `${username} just logged In`;
// }

// console.log(userLoggedIn());


// function userLoggedIn(username){
//    return `${username} just logged In`;
// }

// console.log(userLoggedIn("Suyog"));

// function userLoggedIn(username = "sam"){
//    return `${username} just logged In`;
// }
// console.log(userLoggedIn());

function calculateCartPrice(...num1){
return num1
}

const result = calculateCartPrice(2, 2, 5, 5);
console.log(result);

let sum=0;
result.forEach(Element=>{
    sum += Element;
  
})
console.log(sum);


result.reduce((a,b)=>
 sum= a+b
)
console.log(sum);


//function with objects

const user = {
    name:"Suyog",
    Age:23
};

function userDetails(userObj){
    return `${userObj.name} is my name and Age is ${userObj.Age}`
}

// console.log(userDetails(user));
 console.log(userDetails({
    name:"Chaitali",
    Age:18
 }));


 //Function with Array

 const myArray = [200,500,600];

 function newArray (arr){
    return arr[0];
 }

 console.log(newArray(myArray));