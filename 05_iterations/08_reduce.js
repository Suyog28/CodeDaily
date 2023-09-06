//Reduce Method

const numbers = [1,2,3,3,4,5] 

const newNum = numbers.reduce((a,b)=> a+b)

console.log(newNum);

const shoppingCart = [
    {
        course : "Javascript Developement",
        price: 999
    },
    {
        course : "Node Developement",
        price: 9993
    },
    {
        course : "Mobile Developement",
        price: 9999
    },
    {
        course : "Backend Developement",
        price: 99
    },
]

const totalCart = shoppingCart.reduce((a,b)=>(a+b.price),0)
console.log(totalCart);