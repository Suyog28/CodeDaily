// const btn = document.querySelector("button")
// console.log(btn);

// function randomRGB(number){
//     return Math.floor(Math.random() * (number+1));
// }

// btn.addEventListener("mouseover", ()=>{
//     const RGB = `rgb(${randomRGB(255)}, ${randomRGB(255)}, ${randomRGB(255)})`;

// document.body.style.backgroundColor = RGB;
// btn.addEventListener("click", ()=>{
//     const RGB = `rgb(${randomRGB(255)}, ${randomRGB(255)}, ${randomRGB(255)})`;

// document.body.style.backgroundColor = RGB;
// })

// const p = document.querySelector("p");

// p.addEventListener("mouseover",()=>{
// p.style.fontSize = "200px";
// })

//RemoveEvenLister

const btn = document.querySelector("button");

// function click(){
//     console.log("clicked")
//     btn.removeEventListener("click", click)
// }

// btn.addEventListener("click", click)

document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
  });

