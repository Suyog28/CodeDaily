class User {
    constructor(username){
        this.username = username;
    }

    static userId(){
        console.log("1223");
    }
}

const iphone = new User("suypog");

console.log(iphone);

console.log(iphone.userId());