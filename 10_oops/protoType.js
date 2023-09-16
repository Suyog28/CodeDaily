const herosArray = ["Superman","Thor"];

const Hero = {
    spiderman : "fly",
    thor :"Hammer",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.HeroOne =  function(){
console.log("This is HeroOne Object");
}

Array.prototype.HeroTwo = function(){
    console.log("This is two")
}


Hero.HeroOne();
herosArray.HeroTwo();


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()