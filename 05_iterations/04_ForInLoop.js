//For In Loop for Objects

const movies = {
        spicer: "Spiderman",
        ironman: "IronMan",
        superMan:"Superman"
}

for (const key in movies) {
    console.log(movies[key]);
}

const num = [1,2,3,3,3];

for (const key in num) {
   console.log(num[key]);
}