class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User Login In: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
}

const tea = new Teacher("Suyog", "suog@gmail.com", 123);


tea.logMe();
console.log(tea);
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(tea instanceof User);