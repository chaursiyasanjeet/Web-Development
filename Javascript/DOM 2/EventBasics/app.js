//intro to java event
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You have clicked me!!")
}

function scream() {
    console.log("AAHHHAHHHH")
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
    alert("you clicked the h1!!")
}
const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", function () {
    alert("clicked")
})

const tasButton = document.querySelector("#tas");
function twist() {
    console.log("twist")
}
function shout() {
    console.log("shout")
};

/*->only one is working
tasButton.onclick = twist;
tasButton.onclick = shout;
*/

//you can cal both the function from this method
tasButton.addEventListener("click", twist, { once: true });//this will run one time only.
tasButton.addEventListener("click", shout)
//this is better