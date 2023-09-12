const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    //First Method
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

    //Second Method
    switch (e.target.id) {
        case "blue": body.style.backgroundColor = e.target.id;
            break;
    
        case "grey": body.style.backgroundColor = e.target.id;
            break;
    
        case "yellow": body.style.backgroundColor = e.target.id;
            break;
    
        case "white": body.style.backgroundColor = e.target.id;
            break;
    
        default:
            break;
    }
  });
});
