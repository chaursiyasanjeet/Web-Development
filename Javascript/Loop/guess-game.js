let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));

}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let gues = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(gues) !== targetNum) {
    if (gues === "q") break;
    attempts++;
    if (gues > targetNum) {
        gues = prompt("Too high! Enter a new guess:");

    }
    else {
        gues = prompt("Too low! Enter a new guess:")
    }

}

if (gues === "q") {
    console.log("Ok,you quit!!")
}
else {
    console.log("Congrats you win!")
    console.log(`you took it ${attempts} guess`);
}



