//for loop

// for (let i = 0; i <=10; i++) {
//     console.log(i);  
// }

// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + "=" + i*j)  
//     }
    
// }

const myArray = ["Suyog", "Chaitali", "Mrunal"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//Break and Continue

//Break - It stop the loop and exits
//Continue - It will skip one value 

for (let index = 0; index <=10; index++) {
    
    if(index == 5){
        continue;
        console.log(index)
       // break;
 
    }
    console.log(index);
    
}