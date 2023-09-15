
// const eventPlan = ()=>{
//     console.log("Event Happaned")
// }
// setTimeout(eventPlan,2000)

const changeTitle = function(){
    document.querySelector("h1").innerHTML = "Best Js Series"
}

 const chageMe =  setTimeout(changeTitle,2000);

// document.querySelector("#stop").addEventListener("click", (e)=>{
//     clearTimeout(chageMe)
//     console.log("Stopped")
// })


// const randomNum = ()=>{
//     const number = Math.floor(Math.random()*100+1)
//     const newh2 = document.querySelector("h1")
//     newh2.innerText = number;
//     document.body.appendChild(newh2);
// }

// setInterval(randomNum,1000);