
//First Example
const promisesOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promised Called");
        resolve();
    },1000)
})

promisesOne.then(
    console.log("Promise Consumed")
)


//Second Example
new Promise((resolve, reject)=>{
    setTimeout(()=>{
console.log("Promise Called from second Example");
resolve();
    },1000)
}).then(
    console.log("Second Promise COnsumed")
)

//Third Example with agruments

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third Promise Called");
        resolve({username:"Suyog", password:"12334"});
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

//Forth Promise Example with Then, Catch and finally

const fourthPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            console.log("Fourth Promise Called");
           resolve({username:"SuyogMuley", password:"CHaitu123"});
        } else {
            reject('ERROR:Something Went Wrong')
        }

    },1000)
})

fourthPromise
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{console.log("The promise is either resolved or rejected")})

//Fifth Promise consume using async method

const fivePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log("Five Promise Called");
           resolve({username:"Chaitali Muley", password:"CHaitu123"});
        } else {
            reject('ERROR:Something Went Wrong')
        }

    },1000)
})

async function consumedPromise(){
    try {
        const response = await fivePromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromise();


//Fetch Called using async

// (async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// })();

//Immidiatly Invoke Function

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
})


