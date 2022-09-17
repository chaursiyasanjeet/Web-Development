for (let i = 0; i < 6; i++) {
    console.log("Hello");
}

//decreasing the number
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

//multiplying the number
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}

//infinite loops
/*
for (let i = 20; i >= 0; i++) 
{
    console.log(i);
}*/
const animals = ["lions", "tigers", "bears", "cat", "dog"];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}

//NESTED LOOPS
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`nested loop is : ${j}`)
    }

}








