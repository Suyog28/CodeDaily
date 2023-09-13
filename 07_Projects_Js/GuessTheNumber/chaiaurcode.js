const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let randomNumber = parseInt(Math.random()*100 +1);

const p = document.querySelector("p");

const prevGuesses = [];
const numGuess = 1;
const playNow = true;

if(playNow){
    submit.addEventListener("click", (e)=>{
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess)

}

function checkNum(guess){

}
