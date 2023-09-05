const email = "suyog@gmail.com";

if(email){
    console.log("Valid Email Id");
}

//Falsy Value - false, 0, -0, null, NaN, BigInt 0n, undefined

//Truthy Values - "0", 'false', function(){}, " ", [], {}

//How to check array is empty or not
const emailId = [];
if(emailId.length ===0){
    console.log("Array is empty");
}


//How to check Object is empty or not

const emailObj = {
    name:"Suyog"
};

if(Object.keys(emailObj).length == 0){
    console.log("Object is empty");
}

// false == 0 => true
// false == "" ==> true
// 0 == " " ==> true

//nullish coalescing Operator(??): null or undefined

let val1;
// val1= 10 ?? null;
// val1 = 5 ?? 10;
//  val1 = 5 ?? undefined;
val1 = null ?? undefined ?? 10;
console.log(val1);

//Terniary Operator

//conditon ? true :false

const iceTeaPrice = 200;

iceTeaPrice <= 80 ? console.log("More the 80"):console.log("Not more than 80");;  