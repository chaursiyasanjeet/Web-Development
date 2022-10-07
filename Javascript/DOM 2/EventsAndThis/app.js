const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return color = `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll("button");
const h1 = document.querySelectorAll("h1");
/*
for (let button of buttons) {
    button.addEventListener("click", function () {
        button.style.backgroundColor = randomColor();

        //change the text color
        button.style.color = randomColor();

    })
}

const h1 = document.querySelectorAll("h1");
for (let bg of h1) {
    bg.addEventListener("click", function () {
        bg.style.backgroundColor = randomColor();

        //change the text color
        bg.style.color = randomColor();
    })
}
*/



for (let button of buttons) {
    button.addEventListener("click", colorize)
}

for (let bg of h1) {
    bg.addEventListener("click", colorize)
}

//this is a better wya to do 
function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}


