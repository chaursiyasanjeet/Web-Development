const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let element of numbers) {
    console.log(element * element);
}

const testScores = {
    sanjeet: 99, amit: 46, prince: 89, rajan: 49
}


//for in loop
for (let person in testScores) {
    console.log(person);//this will give you only key
    console.log(`${person}scored ${testScores[person]}`);
}

//iteratig over the objrct
Object.keys(testScores)//give key only
Object.values(testScores)//give value only
Object.entries(testScores)//give all entries

let totalScore = 0;
for (let score of Object.values(testScores)) {
    totalScore += score;

}
console.log(totalScore)



