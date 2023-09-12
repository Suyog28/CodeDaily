const form =  document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    console.log(height);
    
    const weight = parseInt(document.querySelector("#weight").value);
    console.log(weight);

    const results = document.querySelector("#results");

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML =  `Please enter valid Number: ${height}`;
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML =  `Please enter valid Number: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi)
        results.innerHTML = `<spam>${bmi}</spam>`
        if(bmi <= 18.6){
            results.innerText = `Under Weight :${bmi}`;
        }else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerText = `Normal Weight :${bmi}`;
        } else {
            results.innerText = `Over Weight :${bmi}`;
        }
    }
     
   
  
})