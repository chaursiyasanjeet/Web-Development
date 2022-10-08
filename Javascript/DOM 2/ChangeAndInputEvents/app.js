const input = document.querySelector("input");
const h1 = document.querySelector("h1");
/*
input.addEventListener("change", function (e) {
    console.log("HCnaged");
   
})
*/

//this will react on every input
input.addEventListener("input", function (e) {
    console.log("HCnaged");
    h1.innerText = input.value;
    console.log(e);
});