function person(username){
    this.username = username;
    console.log("Called");
}

function PersonDetails(username, email, city){
     person.call(this,username);
    this.email = email,
    this.city = city
}

const person1 = new PersonDetails("Suyog", "suyogvmuley@gmail.com","Pune");

console.log(person1)