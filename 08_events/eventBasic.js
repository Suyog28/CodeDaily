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

// document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "BUTTON") {
//       console.log("Clicked", event.target.textContent);
//     }
//   });

  // window.addEventListener("keydown", event => {
  //   if (event.key == "v") {
  //     document.body.style.background = "violet";
  //   }
  // });
  // window.addEventListener("keyup", event => {
  //   if (event.key == "v") {
  //     document.body.style.background = "";
  //   }
  // });


//   window.addEventListener("keydown", e=>{
// if(e.key == "a"){
//   document.body.style.backgroundColor = "yellow";
// } 
//   });

//   window.addEventListener("keyup", e=>{
//     if(e.key == "a"){
//       document.body.style.backgroundColor = "";
//     }
//   })


// document.body.addEventListener("click", (e)=>{
//   e.target.nodeName == "button";
//   console.log("Click", e.target.textContent);
// })


//Mouse clicks
// window.addEventListener("click", event => {
//   let dot = document.createElement("div");
//   dot.className = "dot";
//   dot.style.left = (event.pageX - 4) + "px";
//   dot.style.top = (event.pageY - 4) + "px";
//   document.body.appendChild(dot);
// });

//Mouse Motion
// let lastX; // Tracks the last observed mouse X position
// let bar = document.querySelector("div");
// bar.addEventListener("mousedown", event => {
//   if (event.button == 0) {
//     lastX = event.clientX;
//     window.addEventListener("mousemove", moved);
//     event.preventDefault(); // Prevent selection
//   }
// });

// function moved(event) {
//   if (event.buttons == 0) {
//     window.removeEventListener("mousemove", moved);
//   } else {
//     let dist = event.clientX - lastX;
//     let newWidth = Math.max(10, bar.offsetWidth + dist);
//     bar.style.width = newWidth + "px";
//     lastX = event.clientX;
//   }
// }

//Mouse Mover
// function update(event) {
//   for (let dot; dot = document.querySelector("dot");) {
//     dot.remove();
//   }
//   for (let i = 0; i < event.touches.length; i++) {
//     let {pageX, pageY} = event.touches[i];
//     let dot = document.createElement("dot");
//     dot.style.left = (pageX - 50) + "px";
//     dot.style.top = (pageY - 50) + "px";
//     document.body.appendChild(dot);
//   }
// }
// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);

//Scroll Event
// Create some content
// document.body.appendChild(document.createTextNode(
//   "supercalifragilisticexpialidocious ".repeat(1000)));

// let bar = document.querySelector("#progress");
// window.addEventListener("scroll", () => {
//   let max = document.body.scrollHeight - innerHeight;
//   bar.style.width = `${(pageYOffset / max) * 100}%`;
// });

//Focus Event

// let help = document.querySelector("#help");
// let fields = document.querySelectorAll("input");
// for (let field of Array.from(fields)) {
//   field.addEventListener("focus", event => {
//     let text = event.target.getAttribute("data-help");
//     help.textContent = text;
//   });
//   field.addEventListener("blur", event => {
//     help.textContent = "";
//   });
// }


// document.querySelector("#images")
// .addEventListener("click", (e)=>{
//   console.log(e.target.tagName);
//  if(e.target.tagName === "IMG") {
//   const removeIt = e.target.parentNode;
//   removeIt.remove();
//  }

// })