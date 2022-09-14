//if statement
if (1 + 1 == 2) {
    console.log("You are right")
}
let random = Math.random();
if (random < 0.5) {
    console.log("Number is less than 0.5");
    console.log(random);
}
if (random >= 0.5) {
    console.log("Number is greater than 0.5");
    console.log(random);
}

//if/else statement
const dayOfWeek = prompt("Enter a Day").toLowerCase(); //After entering a day the charcter will be lowered case so it helps to execute statement
if (dayOfWeek === "monday") {
    consoloe.log("I hate Monday")
}
else if (dayOfWeek === "saturday") {
    console.log("I love saturday")
}
else if (dayOfWeek === "friday") {
    console.log("Good but after work")
}
else {  //If above criteria is not matche then execute this statement
    console.log("Busy Day")
}

//Nested Conditional
const num = prompt("Enter a Number");
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

//switch statement
const day = 2;
switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday")
        break;
    case 3: console.log("Wednesday")
        break;
    case 4: console.log("Thursday")
        break;
    case 5: console.log("Friday")
        break;
    case 6: console.log("Saturday")
        break;
    case 7: console.log("Sunday")
        break;
    default: console.log("Invalid umber")
}