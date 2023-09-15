
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const number = document.querySelector("h1");

const startInterval = ()=>{
    const random = Math.floor(Math.random()*100+1);
    const h1New = document.createElement("h1");
    number.innerHTML = random;
    document.body.appendChild(h1New);
}

let interveltime;
function startChange(){
  if(!interveltime){
    interveltime = setInterval(startInterval,1000)
  }
}

function stopChange(){
    clearInterval(interveltime);
    interveltime = null;
}


start.addEventListener("click", startChange )

stop.addEventListener("click",stopChange)

