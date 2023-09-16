function multipleofFive(num){
 return num*5;
}


console.log(multipleofFive(5));
const power = multipleofFive.power = 2;
console.log(power);
console.log(multipleofFive.prototype);

function userDetails(username, score){
    this.username = username,
    this.score = score
}

userDetails.prototype.increment = function(score){
     score++;
}

userDetails.prototype.printMe = function(){
    console.log(`This is print: ${this.score}` )
}

const one = new userDetails("suyog", 25);
const two = new userDetails("Chaitali", 2);

one.increment();
one.printMe();

