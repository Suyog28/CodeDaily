function randomColor(number){
    return Math.floor(Math.random()* (number+1))  
}



let intervelId;

function startColorChange(){
    if(!intervelId){
        intervelId = setInterval(colorChange,1000)
    } 
}

function stopColorChange(){
    clearInterval(intervelId);
    intervelId = null;
}


function colorChange(){
    document.body.style.backgroundColor = `rgb(${randomColor(255)},
    ${randomColor(255)},
    ${randomColor(255)})`
}


document.querySelector("#start").addEventListener("click",startColorChange);

document.querySelector("#stop").addEventListener("click", stopColorChange);


