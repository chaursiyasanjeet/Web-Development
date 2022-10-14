const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

//function for generating random color
const makeRandomColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return newColor = `rgb(${r},${g},${b})`;
}