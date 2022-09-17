let count = 0;
while (count < 10) {
    console.log(count);
    count++;
    console.log(count);

}

const year = "right";
let guess = prompt("Enter the current year");
while (guess !== year) {
    guess = prompt("Try again !!")
}
console.log("Yeah you got it!!!");