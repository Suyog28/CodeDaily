//Object Litrals
const user = {
    username:"Suyog",
    password:"123",
    logIn : 5,
    userMoreDetails : function (){
        console.log("user Details Successfully fetched")
        console.log(this.user);
    }
}

console.log(user.username);
console.log(user.userMoreDetails  )

// console.log(this)


//Cunstructor Function

function User(username, password, email){
    this.username = username,
    this.password = password,
    this.email = email
}

const userOne = new User("Suyog", "123", "Suyogvmuley@gmail.com");
console.log(userOne);
const userTwo = new User("Chaitali", "123", "Suyogvmuley@gmail.com");
console.log(userTwo);