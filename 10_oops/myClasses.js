// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email =email;
//         this.password = password;
//     }

//     encryptedPassword(){
//         console.log(`${this.password}abc`)
//     }
// }

// const person = new User("Suyog", "email@email.com",123);
// console.log(person);

// console.log(person.encryptedPassword());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());