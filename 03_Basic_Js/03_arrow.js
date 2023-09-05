//arrow function & scope

// function user(){
//     const username = "Suyog"
//  function jobDetails(){
//     const jobTitle = "SDE-1"
//     console.log(username)
//  }
//  jobDetails()

// }
// console.log(jobTitle);
// user()

function one(name){
    // let name = "suyog";
    console.log(name);
}
one("suyog");

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()


function onemore(){
    let name = "Chaitali";
    console.log(this);
}

onemore();

let oneArrow = ()=>{
    return console.log(this)
}

oneArrow();

let twoArraw = ()=> ({user:"Suyog"});

