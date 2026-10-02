console.log("Map");

const scores = [10, 9, 5, 8, 9, 7];

// Read data
for (const element of scores) {
    console.log("Điểm:", element);
}


// Modify data
// Cách 1 
const scoresMap = scores.map((value, index) =>{
    console.log(`${index} : ${value}`)
    return value * 2;
});

// Cách 2
// const scoresMap = scores.map((value, index) => element * 2)

Console.log("Score: ", scores)
console.log("Score map:", scoresMap);